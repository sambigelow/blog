---
layout: base-layout.njk
title: Hello, World!
date: 2021-07-15
tags: ['post']
---

# Hello, World!

<!-- Excerpt Start -->

Welcome to my blog! I'm still figuring out what this will be, but this post will
have some thoughts on what I'd like to include in the future on this site. I'm
hoping to use this blog to
[learn in public](https://www.swyx.io/learn-in-public/). I'm not totally sure
what I'll be "learning in public" about here _yet_, but I have a few ideas.

<!-- Excerpt End -->

## Series Ideas

### The Web From First Principles

One thought I've had for a series is "The Web From First Principles". I'm not
quite sure what counts as a first principle here yet. The obvious answer is
HTML, CSS and JavaScript.

However, I feel like I could go a bit deeper - what about a rendering engine as
a first principle? I have no idea how to do it, but it'd be really cool to build
even just an absolute minimal browser that could take a subset of HTML (like
heading and paragraph tags only) and render them into a readable page. Then
maybe I could worry about handling a subset of CSS, and even a subset of
javascript.

Another possibility for a deeper "First Principle" is writing an HTTP server
without any libraries. I know so little about this side, but that's the point!
How do I connect some client to some other machine somewhere and make them
interact? Again, I'm just interested in building an extremely small subset of
features here, just enough to understand how it works.

These are some pretty big chunks of things to go through and I'm not quite sure
how much I'd be biting off by starting these projects - but I'm sure I'd learn a
ton.

### An HTML Deep Dive

I feel like I could do a whole post on just HTML inputs (without styling). When
should you use what element? `<input type=??>` is a beast of it's own. There is
so much to delve into there. And with each type, comes a separate series of
attributes to consider, e.g. step for type of number. What can you do with a
`<select>` element? What about the radio element? When should you wrap form
inputs with the label and when should they be separate? The trick here is to
make it different than just reading MDN or the HTML spec or whatever. It may or
may not be interesting.

What are some lesser known tags that provide good semantic value? What would an
HTML "Kitchen Sink" look like that actually had every single tag on it?

### How I Built This

This idea is probably the best place to start. How did I build this blog? First,
what platform am I using and why? How did I choose eleventy? What else did I
consider? Then I'd like to go into how I designed it and how I styled it. I
haven't really done any of the styling yet. I pretty much just determined I'm
going to use eleventy. So it would probably make a better site if I spent the
time to write down what I was doing and why. I might as well publish it, right?
