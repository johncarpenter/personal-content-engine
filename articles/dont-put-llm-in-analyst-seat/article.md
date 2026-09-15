The obvious move, when you decide your dashboards aren't enough, is to point a language model at the warehouse and let it write the SQL. Pose the question in English, the model generates the query, runs it, returns the number. Every BI vendor shipped a version of this in 2024. It's the most natural extrapolation of what we already had: a tool for asking the data questions, except now the asking is in English. The model is the analyst.

Don't do that. Or — be very careful when you do, because it has a specific and dangerous failure mode that's worth understanding before you build anything on top of it.

This is the second piece in a short series. The [first one](#) argued that dashboards are structurally over-applied — they answer the *what* and the *how* of your data, but not the *why*, and most teams have been forcing *why* questions through tooling built for *what* questions. The fix is what I called an **understanding layer**: a second pipeline that runs alongside the dashboard pipeline and terminates in an explanation rather than a chart. This piece is about the wrong way to build one — and the architectural pattern that actually works.

## The text-to-SQL temptation

The default agentic-analytics move in 2024 was to let an LLM write SQL on the fly against your warehouse. Out of the box, accuracy on real schemas sits somewhere in the 70–85% range — which already means roughly one in five answers is wrong, in a domain where wrong-and-plausible is the worst possible failure mode.

Models invent tables and columns that don't exist. They invent join conditions. They quietly drop a `WHERE` clause and tell you the "regional" number that turns out to be the global one. The errors do not look like errors. They look like answers. You get a number, the SQL ran without error, and the model's natural-language framing of the result sounds completely reasonable. The wrongness is buried two layers down and there is nothing in the output that flags it.

But the part most pieces miss — and the part that turned me from "be careful with text-to-SQL" to "use it only as scaffolding" — is that **production SQL has logic built into it that text-to-SQL cannot see.** `CASCADE` on a delete. Triggers that maintain a derived column. Stored procedures that wrap a multi-step write. Indexed views that materialize a denormalized query. These are invisible to a model that's been handed a schema and asked to generate a query. The model writes its query and has no idea that a trigger downstream is mutating three other tables in ways that change what the answer was supposed to mean. Your database has been encoding business logic at the engine level for thirty years. Text-to-SQL throws all of it away.

The honest assessment isn't that the next model will be better. The honest assessment is that this is the wrong shape for the model to be doing. We've put it in the seat where calculation, integrity, and reproducibility are the entire job — and those are the three things language models are structurally bad at.

## LLMs at the edges, deterministic tools in the middle

Here's the architectural principle I want to plant, because the rest of this piece — and the rest of this series — is an instance of it.

LLMs belong in two places in a data architecture, and neither of them is "the analyst." They sit at the **edges**: at the top, as an **orchestrator** that reads a business question and decides which deterministic tools to run, and at the bottom, as a **synthesizer** that takes the tools' structured findings and translates them into language a human can act on. Between those edges sit the tools themselves — vector search, a knowledge graph, a statistical decomposition, a dbt model — and they are *deterministic*, *auditable*, and *reproducible*. The same inputs give the same outputs. They don't hallucinate. They don't smooth over their uncertainty. They produce numbers, distances, paths, residuals — the structured stuff the orchestrator routed for and the synthesizer will turn into a sentence.

And then there's the third place LLMs sit, which is the part the industry has been quiet about: **they build the tools.** Not at runtime — at design time. The reason a knowledge graph over an unstructured corpus is now a practical thing rather than a six-figure consulting engagement is that an LLM extracted the entities and relationships. The reason a statistical lens can be wrapped in a natural-language interface is that an LLM wrote the analysis code — the Python that calls STL, the dbt model that materializes the metric — once, and now it runs deterministically on a schedule. **LLMs are the builders. Agents are the users. Deterministic tools sit in between, and they are the load-bearing wall.**

If that sounds like a small distinction, it isn't. "LLM as the analyst" is fragile: every answer is a fresh generation, every answer might be wrong, and the wrongness will be confident and plausible. "LLM as the builder" is robust: the tool was generated once, reviewed once, tested once, and from then on it computes. The mistake is using the model where it's weakest — calculation, integrity, reproducibility — when you could use it where it's strongest: writing the tool that does those things, and translating their outputs into language for a human to act on.

This is why text-to-SQL at runtime is the wrong shape and an LLM-generated dbt model you review once and ship is the right shape. Same model. Same SQL. Completely different reliability profile. One is generated fresh on every query and might be wrong every time; the other is generated once, tested, version-controlled, and runs deterministically forever after. *Generation-time-versus-query-time* is the architectural distinction that does most of the work in this pattern, and it's the one most agentic-analytics products get wrong.

## The two-agent architecture

What this looks like in practice is two agents at the edges and a set of deterministic tools in between.

At the top, an **Orchestrator** receives the business question, parses intent, and routes. It decides which tools are worth firing for a given question — sometimes one, often several in parallel. *"Why did Southwest sales drop?"* might fan out to a vector lens (surface the relevant store notes), a graph lens (trace the regional supplier chain), and a stats lens (check whether the dip is a residual anomaly or just seasonality). *"What's our lunch occasion penetration?"* might be just vectors and stats. The orchestrator's job is to know which.

At the bottom, a **Synthesizer** takes whatever the tools returned and composes the answer — grounding it in the tool outputs, flagging the uncertainty, naming the conclusion in language a stakeholder can act on. This is the LLM doing the one job it's structurally good at: translating structured findings into language.

In between, the tools are **MCP servers** — each one exposes its operations to the orchestrator. Add a new source of structure and you write a new MCP server; you don't rewire the agents. This is genuinely where the industry has converged, and it's why the two-agent architecture is now configurable rather than bespoke.

Be honest about the failure modes, because the two-agent design introduces some that single-tool stacks don't have. The orchestrator can route badly — fan out to tools that won't help, miss tools that would. The synthesizer can over-confidently merge contradictory tool outputs and produce a single neat sentence that papers over a real disagreement. (This is the most insidious one — a confident, polished paragraph hiding the fact that the stats tool and the vector tool told different stories.) Three stores (vector + graph + metrics) introduce consistency cost. Latency compounds when a question fans out. Cost scales with how hard you lean on the synthesizer.

None of this is a reason not to build it. It's a reason to build it deliberately, smallest-thing-first. I started with one Postgres instance and a single agent doing both jobs before any of it earned the right to become three production stores and two agents.

## The semantic layer matters more, not less

There's a counterintuitive consequence of this pattern that I want to name explicitly, because it surprised me and reframes how the whole thing lands.

The text-to-SQL accuracy I quoted earlier — 70–85% out of the box — climbs toward 100% when you point the same generation system at a well-modeled semantic layer. The orchestrator routes against your definitions. The synthesizer grounds against them. If "revenue" means three different things in three different tools, the answer is broken at the architecture level and no amount of prompt engineering will save you.

So the understanding layer doesn't kill the warehouse and it doesn't make your data modeling obsolete. It depends on that work *more* than the dashboard ever did. A dashboard could paper over a sloppy semantic model because a human was interpreting the output and would catch the obvious nonsense. An agent won't.

There's a line I keep coming back to from one of the better data writers: *agents reveal that BI was never about dashboards.* It was about dimensional modeling, clean metrics, and governance — the unglamorous foundation. The charts were the visible 10%. The agents are the next 10%. The 80% underneath both is the same as it always was, and it matters more now, not less.

This is also why I don't buy the "death of BI" headlines. Generative AI isn't replacing business intelligence; it's raising the floor under all of it. What's dying isn't BI. It's the *default* that every data question terminates in a chart — and the parallel default that the way to replace that chart is to put an LLM where the analyst used to sit.

## What it does to your job

The role shift this implies is real, and worth naming plainly. Less hand-built SQL, less chart-assembly, fewer dashboards built for questions that were always going to be ambiguous. More semantic modeling, more context engineering, more time spent curating and evaluating what the synthesizer produces, more time spent reviewing the LLM-generated tools that run deterministically on a schedule. The role drifts toward something the job market has already started calling the AI analytics engineer — less "build the report," more "build and validate the system that builds the answer."

If your identity as an analyst is bound up in writing the SQL, that's a hard shift. **If it's bound up in *knowing which question matters*, this is the best your job has ever been**, because that's the scarce thing now and the tooling finally agrees.

The mechanical layer — the SQL, the dbt models, the chart configs — is automatable. That work isn't going away, exactly, but it stops being where the value lives. The *thinking* layer is what's left: deciding what to ask, deciding what counts as an answer, deciding when the synthesizer's confident paragraph deserves to be challenged, deciding what data is even worth feeding the tools. None of that automates. All of it gets more important.

## What's next

This piece argued for an architectural shape — LLMs at the edges, deterministic tools in the middle, LLMs as the builders of those tools — without saying much about what the tools actually are.

The [next piece](#) walks through that: three lenses for analysis (vector search, knowledge graphs, statistical decomposition) plus the translator role at the bottom, with the beer brand from the first piece as the worked example. If the architecture in this piece is the wiring diagram, the next piece is the equipment that hangs off it.

For now, the takeaway is the principle. LLMs at the edges. Deterministic tools in the middle. The model builds the tools — once, reviewed, shipped — but it doesn't *be* the tools, and it absolutely doesn't be the analyst.
