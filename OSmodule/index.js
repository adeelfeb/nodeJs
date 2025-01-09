const os = require("os");

/**
 * Example 1: Get OS Platform
 */
console.log("Platform:", os.platform());

/**
 * Example 2: Get OS CPU Architecture
 */
console.log("CPU Architecture:", os.arch());

/**
 * Example 3: Get Free Memory
 */
console.log("Free Memory:", os.freemem());

/**
 * Example 4: Get Total Memory
 */
console.log("Total Memory:", os.totalmem());

/**
 * Example 5: Get System Uptime
 */
console.log("System Uptime (seconds):", os.uptime());

/**
 * Example 6: Get User Info
 */
console.log("User Info:", os.userInfo());

/**
 * Example 7: Get Hostname
 */
console.log("Hostname:", os.hostname());

/**
 * Example 8: Get Network Interfaces
 */
console.log("Network Interfaces:", os.networkInterfaces());

/**
 * Example 9: Get CPUs Information
 */
console.log("CPU Information:", os.cpus(), os.cpus().length);

/**
 * Example 10: Get Home Directory
 */
console.log("Home Directory:", os.homedir());

/**
 * Example 11: Get Temporary Directory
 */
console.log("Temporary Directory:", os.tmpdir());
