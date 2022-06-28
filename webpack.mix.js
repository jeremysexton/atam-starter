// BROWSER SYNC SETUP
const domain = 'DOMAIN-NAME.test'; // <= EDIT THIS
const homedir = require('os').homedir();
// LARAVEL MIX
const mix = require("laravel-mix");

// The mix script:
mix.browserSync({
      proxy: 'https://' + domain,
      host: domain,
      open: 'external',
      https: {
        key: homedir + '/.config/valet/Certificates/' + domain + '.key',
        cert: homedir + '/.config/valet/Certificates/' + domain + '.crt',
      },
			files: [
				{
					match: [
						'./public/**/*.html',
						'./src/css/*.css',
						'./src/js/*.js'
					],
					fn: function(event, file) {
						this.reload()
					}
				}
			]
  })


mix.js("src/js/app.js", "public/js");
mix.postCss("src/css/app.css", "public/css", [
	require("tailwindcss")
]);

mix.disableSuccessNotifications();
