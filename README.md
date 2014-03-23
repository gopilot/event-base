event-base
==========

The ever-evolving base for Pilot event sites.

Use this as the repository to clone and modify for indvidual Pilot events. 

Dev notes
=========
Pull, npm install, run a dev server and you should be good to go. I use python -m SimpleHTTPServer in the out/ directory to serve the files locally. 

`gulp watch` will watch changes to the stylus, html, and yaml files and regenerate the site.    
`gulp deploy` will push the contents of out/ to remote/gh-pages (remote url as specified in `gulpfile.js`)

When developing, attempt to make as many items as makes reasonable sense configurable in the yaml file. Likewise, in the stylus file, make the site as configurable as reasonably attainable through variables. All colors, font sizes, etc should be declared at the top of the file. 

To set up deployments, run `git subtree push --prefix out origin gh-pages` when first cloning the repo
