---
template: post
title: Creating my first presentation using RevealJS
slug: using-reveal-js
draft: false
date: 2020-09-14T08:04:09.597Z
description: Notes and lessons learned from creating my first presentation with RevealJS
category: Today I learned
tags:
  - revealjs
  - talk
  - presentations
---
A while ago I was asked to give a presentation to my teammates at work on React. I've always been fascinated by the way most people give presentations at talks which made me research how to do them. The absolute winner was [RevealJS](https://revealjs.com/). 

A couple of things made me put my mind to it

1. The documentation covered all features and aspects 
2. The framework itself contained multiple comprehensive examples covering all use cases which provided an excellent starting point.

As mentioned in the documentation the best way to install and use the framework is by cloning the repo using this command 
`$ git clone https://github.com/hakimel/reveal.js.git`
The nice thing about cloning the whole repo is that you get a complete examples folders showcasing the features and a demo presentation which I considered RevealJS Holy Grail, I would lie if I didn't say that my whole presentation styles is copied from the demo presentation. 
RevealJS uses [gulp](https://gulpjs.com/) for building and developing.
One hidden feature I stumbled upon while going through the gulpfile was a task called `package` where you can build and package your presentation and voila it's ready for publishing. sadly when I tried it out, it didn't work as expected so I had to make a few changes. The thing is it captures all the framework files and your index.html; which contains your presentation; and creates a packaged zip file ready for publishing. If you try the published version you will find out it's broken and that's because all the references inside your index.html don't point to the correct locations. Hence, you're left with one of 2 options, either to update all css and js references in the published index, or modify the package task to add files with the correct folder structure.