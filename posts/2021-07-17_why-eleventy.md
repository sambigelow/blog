---
layout: base-layout.njk
title: Why Eleventy?
date: 2021-07-17T07:00:00-4:00
tags: ['post', 'blog']
---

<!-- Excerpt Start -->

As I'm writing this, I've just made the "final" decision to use Eleventy to
build this. Choosing the platform has been a bit of a time sink, but I'm happy
I'm finally moving forward with Eleventy.

<!-- Excerpt End -->

At first, I wanted to use something Vue based since I'll be starting a new job
in less than and I'll be working on a Vue based project and I haven't been
working in Vue very much lately. So I tried nuxt, gridsome, vuepress and
vitepress. They are all really cool platforms, but they all just felt like
overkill for such a simple website. Do I really need much more than HTML and
CSS?

So, why not just write HTML and CSS directly? I definitely kept considering
this. The problem is essentially that I want a template language. Writing plain
HTML would require rewriting the head tags on each page. It would require
copying and pasting the header components over and over again. If there is a way
to do this in plain HTML, then I don't know it and I couldn't find it.

I've been listening to [shop talk show](https://shoptalkshow.com/) a lot lately
and I keep hearing Dave Rupert talk about [Eleventy](11ty.dev). Chris Coyier
keeps gushing about [Astro](astro.build) too, and I did look into that a bit but
it's in a really early beta. I watched
[Fred K. Schott's astro release video](https://www.youtube.com/watch?v=mgkwZqVkrwo)
and in it, he actually mentioned how he used Eleventy for
[snowpack's website](https://www.snowpack.dev/) because he just wanted something
super simple.

It is so close to plain HTML and CSS - but it comes with a lot of niceties at
build time. I can now use a template language to have base layouts. I can have
partials to avoid rewriting certain chunks of HTML, and I can use frontmatter to
create metadata for the blog posts. It also gives me a really nice dev server.
It feels like the perfect way to just build something as simply as possible.

So here we are, I've built an extremely simple blog at this point with Eleventy.
Hopefully soon it will look better. I took a screenshot and saved it to this
site. When the site doesn't look exactly the same as the screenshot - I'll add
the image here so people can see how simple the site was to start.
