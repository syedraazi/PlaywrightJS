let config = {};
config.browser = "Chrome";
config.timeout = 3000;
config.timeout = 5000; // latest
console.log(config);
// delete the key - browser
delete config.browser;
console.log(config);