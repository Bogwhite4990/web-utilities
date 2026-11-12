/**
 * Simple test suite for production web utilities.
 */
const { validateSecureEmail, sanitizeInput, generateSecureToken } = require('./utils');

function runTests() {
    console.log("Running tests for Web Utilities...");

    // Test email validation
    const emailTest1 = validateSecureEmail("contact@octbe.com") === true;
    const emailTest2 = validateSecureEmail("invalid-email") === false;
    
    // Test sanitization
    const sanitizeTest = sanitizeInput("<script>alert('xss')</script>") === "&lt;script&gt;alert(&#039;xss&#039;)&lt;/script&gt;";

    // Test token generation
    const token = generateSecureToken(16);
    const tokenTest = token.length === 16;

    if (emailTest1 && emailTest2 && sanitizeTest && tokenTest) {
        console.log("SUCCESS: All tests passed successfully!");
    } else {
        console.error("FAILURE: Some tests failed.");
        process.exit(1);
    }
}

runTests();
