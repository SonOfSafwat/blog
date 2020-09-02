---
template: post
title: How I created my personal blog with Gatsby, Netlify-CMS, and Github Pages
slug: create-personal-blog
draft: false
date: 2020-08-20T11:12:02.424Z
description: How I created my personal blog with Gatsby, Netlify-CMS, and Github Pages
category: Quests
tags:
  - Gatsby
  - Netlify
  - Github
  - Netlify-CMS
---
For the longest time I wanted to start a side project. I had troubles finding a project idea that could make that bulb light up. 

I've always loved helping out people and sharing my knowledge and a few months back I took a personality assessment which confirmed my suspicions about me being a [Maven](https://en.wikipedia.org/wiki/Maven). I was chatting with my friend [Chris Eyre](https://twitter.com/chriseyre2000) and he suggested creating a blog; Hence, here we are. 

After going through twitter, articles on [Dev](https://dev.to/) I decided to build my blog using Gatsby and Netlify-CMS. 

First step I headed out to Gatsby website trying to read a little about the framework where I found their [starter templates](https://www.gatsbyjs.com/starters/?v=2), I went through the templates shown and decided to use *gatsby-starter-lumen*, it is ranked third on Gatsby template list with more than 1300+ stars; *at the time of writing this article.*

Now that I've downloaded the template, it was time to start playing around and see its capabilities, and to be honest it was simple to understand, highly configurable. I began with changing the colors a little bit which was a breeze. One major thing I liked was the fact they had a `config.js` file where you could just specify your information and it would be reflected directly to the site. Now it's time to hit `gatsby develop` and see the result and as expected everything was reflected and working as expected. 

Next step I had to do was to familiarize myself with Netlify-CMS, In order to login I had to do some extra steps: 

1. Edit `config.yml` which can be found under *./static/admin/* and add this line `local_backend: true` 
2. Start an auth server which you can start directly using the command `npx netlify-cms-proxy-server`
3. Head to *http://localhost:8000/admin* and start adding/editing your posts and pages.

Moving to the interesting part, deployment and publishing. I decided to deploy and host my blog to Github using Github Pages; you can host your blog anywhere you'd like and one convenient option is netlify.com, they provide convenience and ease of use especially if you're using Netlify-CMS. 

In order to deploy to Github, I had to implement a few changes to the template: 

First update `config.yml` to use Github as authentication provider instead of Netlify, you can do that by using the following lines of code

```yaml
backend:
  name: github
  repo: <<GITHUB_USERNAME/REPO_NAME>>
  api_root: https://api.github.com
  site_domain: <<SITE_DOMAIN>>
  base_url: https://api.netlify.com
  auth_endpoint: auth
```

Second step was to update `package.json` with my information instead of the creators' information. 

Third item was deployment, the template uses `gh-pages` library to deploy releases. by default `gh-pages` creates a new branch with the same nameand push the site to it, if you wish to change that you can use this simple script, it replaces the default branch name with `release` instead of `gh-pages`.

```javascript
const ghpages = require('gh-pages');
// replace with your repo url
ghpages.publish(
	'public',
	{
		branch: 'release',
		repo: 'https://github.com/SonOfSafwat/blog.git',
	},
	() => {
		console.log('Deploy Complete!');
	}
);
```

Now that everything is ready, time to go live. Head over to your repo on Github and from settings under Github Pages option you can choose which branch you wish to publish; I used `release` branch. And voila, my blog is live. 

If you wish to checkout the source code for the blog you can find it [Here](https://github.com/SonOfSafwat/blog). 

If you have any questions or in need of any help please don't hesitate to reach out

* [Twitter](https://twitter.com/sonofsafwat)
* [Instagram](https://www.instagram.com/sonofsafwat/)
* [Linkedin](https://www.linkedin.com/in/abdelrhmansafwat/)
* [Email](mailto:abdelrhman.safwat@gmail.com)