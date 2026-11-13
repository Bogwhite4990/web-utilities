/**
 * Main Entry Point for Production Web Utilities
 */
const securityHelper = require('./security-helper');
const rateLimiter = require('./rate-limiter');
const httpHeaders = require('./http-headers');
const auditLogger = require('./audit-logger');
const payloadScanner = require('./payload-scanner');

module.exports = {
    ...securityHelper,
    ...rateLimiter,
    ...httpHeaders,
    ...auditLogger,
    ...payloadScanner
};
