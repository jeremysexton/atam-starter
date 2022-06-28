# ATAM Stack Starter Kit
This is a setup for very simple apps using Alpine for Javascript, TailwindCSS for the css, and then whatever APIs as you go usually with Cloudflare Workers to keep prying eyes away from our secrets.

## Requirements
1. Node
2. Laravel Valet

## Why would you do this?
Well, I'm just used to Valet. Then Mix seemed really easy to get my head around. Love working with Alpine and Tailwind, so it just made sense to smash it all together to build tiny little hobby things.

## Setup
Put this into a folder. Register that folder with Laravel Valet using whatever name you want. Run `valet secure` to give that bad boy a SSL cert. This will allow Browsersync to easily sync the site and not throw any nasty security errors.

Update the domain name in `webpack.mix.js`, otherwise it's not going to work. Also, if you're on an older (or newer) version of MacOS, you may need to adjust the location of the SSL certificate files.

The `package.json` could be updated as well, if you care.

Run `npm install`.

Get to work!

## SRC Folder
This folder contains all JS and CSS. When `watch` or `dev` are run, they will compile to respective paths in `/public`.

## Public Folder
This contains all of the files that are actually served for the app. All HTML is in here and should work both with Tailwind *and* with Browsersync, so that any additions to the HTML will trigger a reload on save.
