# Changelog

All notable changes to this project will be documented in this file.

## [1.3.0] - 2026-11-13
### Added
- Added `audit-logger.js` with automatic sensitive data redaction (`password`, `token`, `secret`) for structured server logs.
- Added `payload-scanner.js` to detect SQL Injection patterns and prevent Directory/Path Traversal attacks.
- Expanded automated test suite to cover payload scanning and audit logging.

## [1.2.0] - 2026-11-12
### Added
- Added `http-headers.js` module for automated CSP, HSTS, and security header generation.
- Added password strength auditing utility (`checkPasswordStrength`).
- Added TypeScript definitions (`index.d.ts`) for IDE autocompletion.

## [1.1.0] - 2026-10-28
### Added
- Added in-memory `RateLimiter` class and IPv4 validation helper (`rate-limiter.js`).
- Configured GitHub Actions CI pipeline across Node 18.x and 20.x.

## [1.0.0] - 2026-10-10
### Added
- Initial release with XSS input sanitization, email validation, and token generation (`security-helper.js`).
