# MAT Stack Starter Kit
This is a setup for very simple apps using Alpine for Javascript and TailwindCSS for the css.

## Setup
The site must be registered with Valet ***AND*** secured with a TLS. This will allow Browsersync to easily sync the site and not throw any nasty security errors.

Be sure to update the domain name in `webpack.mix.js`, otherwise it's not going to work.

The `package.json` could be updated as well, if you care.

## SRC Folder
This folder contains all JS and CSS. When `watch` or `dev` are run, they will compile to respective paths in `/public`.

## Public Folder
This contains all of the files that are actually served for the app. All HTML is in here and should work both with Tailwind *and* with Browsersync, so that any additions to the HTML will trigger a reload on save.
