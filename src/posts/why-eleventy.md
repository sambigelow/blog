---
title: Why Eleventy?
date: 2021-07-17T07:00:00-4:00
tags: ['post', 'meta']
---

<!-- Excerpt Start -->

After wasting too much time analyzing a bunch of blog building frameworks and
tools, I'm finally moving forward with Eleventy.

<!-- Excerpt End -->

## What does this need to achieve?

To be honest, not much at all! The site is a blog. There isn't too much that it
needs to do. At some point, maybe I'd add a comment section or some sort of
ecommerce if I'm doing really well. But for now, it's just a simple series of
documents and links. And as it turns out, HTML and CSS are pretty great for
that!

## So why not skip the build process entirely?

There are a handful of reasons. I don't want to have to rewrite the document
head every time and then copy and paste it everywhere if I need to change
something. I need some sort of template system.

On top of that, I don't really want to write the blog posts in HTML. I'd rather
write them in markdown.

## Using something built on a frontend framework

I'm a huge fan of what frontend frameworks are doing for the web. They are
making it easier for developers to create interactive, delightful experiences
for the visitors to those websites. They allow creating full applications within
a browser and it's really awesome!

On top of that, that's mostly what I've used. So I thought about just using
[Gatsby](gatsbyjs.com) or [Next](nextjs.org) to build this blog since I'm
already super familiar with React and I like thinking in Components the way that
React (And all other modern frontend frameworks) allow you to. Using these
frameworks also makes it really easy to do things like page transitions since,
once it is loaded, the browser location is managed via JavaScript. I can use the
framework to manage clicking on links more, I can do more preloading, etc.

I also heavily considered [Vue](vuejs.org) and either [Gridsome](gridsome.org)
or [Nuxt](nuxtjs.org). I'm starting work on a project in Vue and I haven't
worked with it much lately

These frameworks (on top of frameworks) are really great. They make this stuff
fast and easy. They do a lot of the work for you to make a performant website.
They are also fun to use for someone like me who likes frontend frameworks.

### So why not use one?

I decided to avoid these though because I don't think I need all of that stuff.
I want to get far away from all of the magic they provide. I wanted to get my
hands dirty touching the HTML and CSS. I just want to make this thing as simply
as possible.

I also like the idea of using a site with zero js. I don't think I'll go as far
as [Heydon Pickering](heydonworks.com) and require you to disable JavaScript -
but I like the point he is making!

## So why Eleventy and not <span style="font-weight: 300">_\*fill in the blank\*_</span>?

The most common ones I'd think to fill in the blank with are Hugo and Jekyll.
And to be frank, I never even really looked at Jekyll. I don't know that much
about it. I do know it's built in Ruby. I also hear
[Dave Rupert](daverupert.com) talk about [Eleventy](11ty.dev) all the time on
[shoptalk show](shoptalkshow.com) and I basically just took his word for it. He
recently switched from Jekyll to Eleventy. Also Eleventy is in the javascript
ecosystem which is where I feel at home (even if I'm not sending it over the
wire)

As for not using Hugo, I have a few more reasons there. I really felt like you
were supposed to use a pre built theme with Hugo. I know they allow building
your own theme, but with Eleventy, there is none of that. I'm just writing CSS
and I like that. It's a lot simpler. Hugo also doesn't allow your choice of
templating language like Eleventy

I've been listening to [shop talk show](https://shoptalkshow.com/) a lot lately
and I keep hearing Dave Rupert talk about [Eleventy](11ty.dev). Chris Coyier
keeps gushing about [Astro](astro.build) too, and I did look into that a bit but
it's in a really early beta. I think if it was a bit further along, that's the
route I would go. However, it was interesting to note that in
[Fred K. Schott's astro release video](https://www.youtube.com/watch?v=mgkwZqVkrwo),
he actually mentioned how he used Eleventy for
[snowpack's website](https://www.snowpack.dev/) because he just wanted something
super simple. And that is part of what I'm going for.

## Eleventy For The Win!

It is just so close to plain HTML and CSS - but it removes the need to repeat
myself by using tools with really small surface areas (i.e. minimal templating
languages, and markdown). I can now use a template language to have base
layouts. I can have partials to avoid rewriting certain chunks of HTML, and I
can use frontmatter to create metadata for the blog posts. It also gives me a
really nice dev server. It feels like the perfect way to just build something as
simply as possible.

So here we are, I've built an extremely simple blog at this point with Eleventy.
Hopefully soon it will look better. I took a screenshot and saved it to this
site. When the site doesn't look exactly the same as the screenshot - I'll add
the image here so people can see how simple the site was to start.
