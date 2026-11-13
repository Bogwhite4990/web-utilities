const { validateSecureEmail, sanitizeInput, generateSecureToken } = require('./security-helper');
const { maskSensitiveData, createAuditEntry } = require('./audit-logger');
const { hasSqlInjectionRisk, isSafeFilePath } = require('./payload-scanner');

function runTests() {
    console.log("Running test suite v1.3.0...");

    // Teste de bază
    const emailTest = validateSecureEmail("test@octbe.com") === true;
    const sanitizeTest = sanitizeInput("<script>") === "&lt;script&gt;";
    const tokenTest = generateSecureToken(16).length === 16;

    // Teste Audit Logger
    const masked = maskSensitiveData({ user: "admin", password: "secretPassword123" });
    const maskTest = masked.password === "***REDACTED***" && masked.user === "admin";
    const logEntry = JSON.parse(createAuditEntry("USER_LOGIN", { token: "xyz987" }));
    const logTest = logEntry.event === "USER_LOGIN" && logEntry.metadata.token === "***REDACTED***";

    // Teste Payload Scanner
    const sqliTest1 = hasSqlInjectionRisk("1' OR '1'='1") === true;
    const sqliTest2 = hasSqlInjectionRisk("normal_username") === false;
    const pathTest1 = isSafeFilePath("../../etc/passwd") === false;
    const pathTest2 = isSafeFilePath("uploads/avatar.png") === true;

    if (emailTest && sanitizeTest && tokenTest && maskTest && logTest && sqliTest1 && sqliTest2 && pathTest1 && pathTest2) {
        console.log("SUCCESS: All v1.3.0 tests passed!");
    } else {
        console.error("FAILURE: Tests failed.");
        process.exit(1);
    }
}

runTests();
