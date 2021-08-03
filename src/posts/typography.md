---
title: 'Typography'
date: 2021-08-01
tags: ['post', 'meta']
---

> [Paragraphs are] still the best thing about the web - being able to access
> paragraphs full of information like this - well written paragraphs which
> inspire and incite.
>
> \- Heydon Pickering in ["Effortless Style"](https://vimeo.com/101718785).

This is an **amazing** talk for those who have not seen it. This is just one
small quote from it, but it hits on the importance of what we are doing on the
web. He is bringing back the focus to what the web is really about, and that is
the distribution of information. You can add a whole bunch of other stuff to it,
but it's still all about sharing information.

## Starting With Type

So since the content is the most important thing, I would find one of the next
most important things is to start with making that content as legible readable
as possible. After ensuring it is legible, I can start adding some personality
to it - but also not forgetting to maintain legibility.

### Font Size

I am setting the font size on the `html` element to `100%`. This is because I
believe it is necessary for accessibility. I remember reading this in a handful
of places but I am having trouble coming up with the sources now. I will place
them here once I find them.

The base font size will be `16px` because that is what user agents style it to
(unless that user added something specific - which is the point).

The font-size of the headers is based on the
[modular scale from "Every Layout"](https://every-layout.dev/rudiments/modular-scale/)

#### Responsive Typography

Since the modular scale is all based on the ratio defined as a css custom
property, it is super easy to then make the text responsive because I can just
use media queries and change the ratio variable. Everything then adjusts
accordingly.

```css
:root {
  --ratio: 1.15;
  --scale-root: 1rem;

  --scale-up-1: calc(var(--scale-root) * var(--ratio));
  --scale-up-2: calc(var(--scale-up-1) * var(--ratio));
  --scale-up-3: calc(var(--scale-up-2) * var(--ratio));
  --scale-up-4: calc(var(--scale-up-3) * var(--ratio));
  --scale-up-5: calc(var(--scale-up-4) * var(--ratio));
}

h1 {
  font-size: var(--scale-up-5);
}

@media screen and (min-width: 500px) {
  --ratio: 1.25;
}
```

Changing the ratio at a larger screen size pushees up the font-size for all the
headers as long as all of them used the custom properties from the scale.

### Font Family

I didn't do too much work here yet. For now, I just chose two font families from
Google Fonts based on a font pairing from [fontpair.co](fontpair.co). I chose
Work Sans and Bitter.

As a later "todo", I still need to subset these fonts. Right now, I'm pulling in
a whole bunch of font stuff that I don't need.

### Other Considerations

Here are some things I'd still like to think about but have not yet.

- Links
- Links within headers
- Ink and Surface colors
- Unordered and Ordered Lists
- Syntax highlighting for code

I also want to add a little styling to the headers

I think a lot of this stuff will be easier once I have a bit of a color palette
to work with.
