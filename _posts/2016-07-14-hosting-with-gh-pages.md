---
layout: post
title: "Hosting with GitHub pages"
date: 2016-07-14
---

Want to host with www.yourdomainname.com? Here's what you'll need to do.

<p class="small">Full documentation is <a href="https://help.github.com/articles/quick-start-setting-up-a-custom-domain/">available here</a>.</p>

1. Configure the gh-pages branch
  * Create a `CNAME` file
  * Add `yourdomainname.com` to that file
   
2. Configrue your domain name's DNS
  * Add a CNAME for www to point to `yourusername.github.io`
  * If you want to point the root domainname.com to gh-pages, set the `A` record to `192.30.252.153`
  * You can also set a second `A` recored to `192.30.252.154`
  * When you're done it should look like:
  
   | Record   | Type        | Value  |
   | ---      | ---         | ---    |
   | @        | A           | 192.30.252.153  |
   | @        | A           | 192.30.252.154  |
   | WWW      | CNAME       | your_github_username.github.io  |

  
