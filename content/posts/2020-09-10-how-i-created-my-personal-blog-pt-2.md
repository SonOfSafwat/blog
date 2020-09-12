---
template: post
title: How I created my personal blog Pt. 2
slug: create-blog-2
draft: false
date: 2020-09-10T07:44:03.110Z
description: Describing how to move away from Netlify build
category: Side Quests
tags:
  - gatsby
  - netlify-cms
  - netlify
  - github
---
In part [one](https://abdelrhmansafwat.com/posts/create-blog) I covered the process I followed to create and publish this blog. One major confusion for me was the whole gatsby-github-netlifyCMS-netlify interactions, which caused me a few issues and unexpected behaviors. 
Maybe you faced a few of those issues:

* Anytime I do change to my posts/pages they are reflected to the published version of my blog
* You Can't login to admin UI of the CMS
* You login to the CMS but none of your articles are there
* You add a post and/or page but it's not shown on the published sites
* You found draft posts published all of a sudden

Or maybe you asked yourself one of those questions:

* Do I need to use Netlify with Netlify-CMS?
* Can I use different branches or even different repos for source code and publication? 
* Can I use GitHub actions as CI/CD?

If you did, I hope this post can help to answer some of those questions or assist you in finding solutions to your issues. 

#### Anytime I do change to my posts/pages they are reflected to the published version of my blog.

One major cause of confusion is that if you have a published version of the blog and attempt to access CMS admin UI from localhost you will end up updating your published blog not your local dev branch, To avoid this issue and to clear confusion always remember to add `local_backend: true` in your `config.yml`, now anytime you access and update the CMS UI from localhost changes will only be reflected locally not on the published version.

#### You Can't login to admin UI of the CMS

One thing that I saw faced a lot of people was correctly integrating Netlify-CMS authentication with Github. You need to create an account on [app.netlify.com](app.netlify.com), link your Github repo to Netlify; make sure to disable builds if you don't wish to use Netlify as a build server; then move to Site Settings under access control install a provider using a generated Github client id/secret. 

```yaml
backend:
  name: github
  repo: <<OWNER>>/<<REPO>>
  api_root: https://api.github.com
  site_domain: <<HOSTNAME>>
  base_url: https://api.netlify.com
  auth_endpoint: auth
```

Using this configuration you can login to the blog admin UI using Github authentication without the need for Netlify.