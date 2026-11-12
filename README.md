# Production Web Utilities & Security Toolkit 🛡️

[![CI Status](https://github.com/Bogwhite499/web-utilities/actions/workflows/test.yml/badge.svg)](https://github.com/Bogwhite499/web-utilities/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D%2018.0.0-brightgreen)](https://nodejs.org/)

A robust, enterprise-ready collection of utility scripts, validation functions, and security helpers designed to ensure high performance, strict input sanitization, and secure operations across mission-critical web platforms.

## 🚀 Key Features
* **Advanced Sanitization:** Comprehensive protection against XSS and injection vulnerabilities.
* **Rigorous Validation:** Strict regex and type-checking for data integrity.
* **Cryptographic Token Generation:** Secure pseudo-random token generation for session and audit tracking.
* **CI/CD Integrated:** Automated testing pipeline running on every commit.

## 📦 Installation & Usage
Import the required modules directly into your backend environment:

```javascript
const { validateSecureEmail, sanitizeInput } = require('./security-helper');

const userEmail = "admin@octbe.com";
if (validateSecureEmail(userEmail)) {
    console.log("Email format is valid and secure.");
}
