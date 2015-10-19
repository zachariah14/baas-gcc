//HOW TO RUN IT
/*From one terminal run:
* webdriver-manager start
* From another terminal window run:
* protractor _my_scenario_.js
* */

exports.config = {
	allScriptsTimeout: 11000,

	specs: [
		'*.js'
	],

	capabilities: {
		'browserName': 'chrome'
	},

	baseUrl: 'http://localhost:8080/#/',

	framework: 'jasmine2',

	jasmineNodeOpts: {
		defaultTimeoutInterval: 30000
	},

	seleniumAddress: 'http://localhost:4444/wd/hub'
};