APP NAME: Podcast Manager
DOMAIN: Video-based podcasts
Description: A Netflix-style app where you can centralize different podcast episodes organized by category.
Features:

List podcasts in category sections

[Health, fitness, mindset, comedy]

Filter episodes by podcast name

How:
Feature:

List podcast episodes in category sections

How I’ll implement it:

I’ll return a REST API (JSON) with the podcast name, image, episode name, link, and category
[
{
    podcastname: "flow",
    episode: "Cbum - Flow #319",
    videoId: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    category: ["health", "sports", "bodybuilding"]
},
{
    podcastname: "flow",
    episode: "Rubens Barrichello - Flow #339",
    videoId: "4KDGTdiOV4I",
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    category: ["sports", "racing"]
},
]


