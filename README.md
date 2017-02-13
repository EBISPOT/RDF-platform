# EBI-Boilerplate-Jekyll
Get up and running with EBI-themed Jekyll fast (rolled with gh-pages in mind, clone/fork suggested)

<a href="http://ebiwd.github.io/EBI-Boilerplate-Jekyll">View the demo</a>

## How to use this
This Jekyll template was designed in mind with GitHub pages, you'll certainly be able to use it to start a traditional Jekyll project, but the information below is specifically tailored with GitHub in mind.

1. Getting started
  * Clone this repo
  * Ensure you are working in the `gh-pages` branch

2. Basic setup
  * Edit _config.yml and set your GitHub URL and project name

3. Add content
  * Create new posts in _posts
  * Create new pages by adding them to the root folder, see sample_page_1.html

## Configuring your domain name
Full documentation is [available here](https://help.github.com/articles/quick-start-setting-up-a-custom-domain/).

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

  
