/**
 * Comprehensive Test Suite for Production Web Utilities
 */
const {
    validateSecureEmail,
    sanitizeInput,
    generateSecureToken,
    RateLimiter,
    isValidIPv4,
    getSecurityHeaders,
    checkPasswordStrength
} = require('./index');

function assert(condition, message) {
    if (!condition) {
        console.error(`❌ FAILED: ${message}`);
        process.exit(1);
    }
    console.log(`✅ PASSED: ${message}`);
}

function runTests() {
    console.log("🚀 Starting test suite for Production Web Utilities...\n");

    // 1. Email validation
    assert(validateSecureEmail("contact@octbe.com") === true, "Valid email check");
    assert(validateSecureEmail("invalid-email@") === false, "Invalid email rejection");

    // 2. XSS Sanitization
    const dirty = "<script>alert('xss')</script>";
    const clean = "&lt;script&gt;alert(&#039;xss&#039;)&lt;/script&gt;";
    assert(sanitizeInput(dirty) === clean, "XSS payload sanitization");

    // 3. Token generation
    const token = generateSecureToken(32);
    assert(token.length === 32, "Cryptographic token length verification");

    // 4. Rate Limiter
    const limiter = new RateLimiter(60000, 2);
    assert(limiter.isAllowed("192.168.1.1") === true, "RateLimiter allows first request");
    assert(limiter.isAllowed("192.168.1.1") === true, "RateLimiter allows second request");
    assert(limiter.isAllowed("192.168.1.1") === false, "RateLimiter blocks third request over limit");

    // 5. IPv4 validation
    assert(isValidIPv4("192.168.0.1") === true, "Valid IPv4 recognition");
    assert(isValidIPv4("999.999.999.999") === false, "Invalid IPv4 rejection");

    // 6. Security Headers & Password Strength
    const headers = getSecurityHeaders();
    assert(headers['X-Content-Type-Options'] === 'nosniff', "HTTP security headers generation");
    assert(checkPasswordStrength("Str0ng!Pass#2026").strong === true, "Strong password validation");
    assert(checkPasswordStrength("12345").strong === false, "Weak password rejection");

    console.log("\n🎉 ALL TESTS PASSED SUCCESSFULLY!");
}

runTests();
