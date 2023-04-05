# Project Background

This project was generated using ChatGPT 4 by giving some basic specifications, asking for the directions, implementing the directions, then responding with any issues until something workable was created. See the full [Transcript](transcript.mht) for the exact exchange.

## Notable observations
1. A prior exercise revealed that it was not aware of the latest OpenAPI specs, so I fed in the current specifications in order for it to understand how to implement it. This worked perfectly.
2. By asking it if there were any details I might have left out, it prompted back with suggestions. This was helpful, though it did forget to implement one of it's suggestions (a loading indicator)
3. Some basic details were left out (such as installing axios and configuring the proxy).
4. When it came time to instruct on the angular app itself, it pointed me to a gist that only resulted in a 404. I am not sure if it was referencing a real gist that existed at some point, or if it got lost and made the link up because that is what is commonly used at that point.
5. It handled some UI styling with little to no direction, such as using an appropriate icon for the send button and even formatting the conversation in a text message like format.
6. When iterating on the design or fixing a bug, it would lose track of things like variable names or even start to use functions that were not previously created (such as a scroll function at one point).

## High Level Conclusions
1. GPT4 is surprisingly helpful with brainstorming functionality and UX.
2. Longer exchanges seem to start to lose accurate context.
3. Overall, the coding abilities are similar to a Junior or highly distracted developer.
4. In the end, it achieved the task with some iteration and troubleshooting very similar to the way a human developer would work.