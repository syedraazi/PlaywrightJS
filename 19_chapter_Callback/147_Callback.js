function runTest(testName, callback) {
    console.log(`Running: ${testName}`);
    callback(testName);
}

function reportResult(testName) {
    console.log(`${testName} completed.`);
}

runTest("Login test", reportResult);
