const { validateSecureEmail, sanitizeInput, generateSecureToken } = require('./security-helper');

function runTests() {
    console.log("Running tests...");
    const emailTest = validateSecureEmail("test@test.com") === true;
    const sanitizeTest = sanitizeInput("<script>") === "&lt;script&gt;";
    const tokenTest = generateSecureToken(16).length === 16;

    if (emailTest && sanitizeTest && tokenTest) {
        console.log("SUCCESS");
    } else {
        process.exit(1);
    }
}
runTests();
