---
path: "/blog/cannibalize"
date: "2020-11-04"
date_string: "November 4th, 2020"
title: "Cannibalizing my projects"
category: ""
---

When I was an intern at Facebook, I asked Mark Zuckerberg a question during one of the weekly Q&As. I asked him about how to know whether one should continue a project even when it looks like a failure, or give up. He told a story about Facebook's early acquisition offer from Yahoo, and how he decided to refuse despite everyone around him saying he should sell. He told me that a good rule of thumb would be to ship something, anything, before calling it a failure.

I left that meeting wondering how I could ship something that wasn't even half done. An app that lacked payments integration, or account verification, or half of the features? But I found a solution that's worked pretty well for shipping projects no matter how far along they are: cannibalizing them.

To cannibalize a machine means to "use (a machine) as a source of spare parts for another, similar machine." The first time I did this, it was by accident. I was a freshman at BYU building a real time strategy game for the browser during a hackathon. It was an insanely overambitious project and I didn't get hardly any of it to work. How could I ship this project? Was it a failure because it was too ambitious and even an MVP version would take months to build?

No. The way to ship this project was to cannibalize it. During the hackathon I ended up building the architecture so that two browser clients could talk to each other in realtime. That architecture was actually really useful and generalizable, so I decided to strip down the project and take out the architecture component, and turn it into its own library, that I shipped, called 'corridors'. I wrote some documentation and published this library on npm as a fast, easy, socket.io based game room management library. It actually got a few downloads and some traction! I did end up shipping my game project, just as something else.

Another recent example: when I build apps, I'll periodically stop, fork the repository, strip it down to some component, and save it as a template. Later on, when I'm working on some new project, I have a selection of templates that I built myself, that I can compose into the new project at a much faster pace. This piecewise cannibalization of my projects has basically given me a new, valuable toolbelt that helps me ship bigger, better things even faster.

So my personal opinion is that all projects can be shipped in some form or another - it might just not be the original vision of the project, but that doesn't mean it won't be extremely useful or successful down the line.

Thanks for reading :)
