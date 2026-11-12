/**
 * HTTP Security Headers Generator & Password Auditor
 */

function getSecurityHeaders(options = {}) {
    const strictTransport = options.hsts !== false
        ? 'max-age=31536000; includeSubDomains; preload'
        : 'max-age=0';

    return {
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': options.frameOptions || 'SAMEORIGIN',
        'X-XSS-Protection': '1; mode=block',
        'Strict-Transport-Security': strictTransport,
        'Referrer-Policy': 'strict-origin-when-cross-origin',
        'Content-Security-Policy': options.csp || "default-src 'self'; script-src 'self'; object-src 'none';"
    };
}

function checkPasswordStrength(password) {
    if (typeof password !== 'string') return { score: 0, strong: false };
    let score = 0;
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (/[A-Z]/.test(password)) score += 1;
    if (/[0-9]/.test(password)) score += 1;
    if (/[^A-Za-z0-9]/.test(password)) score += 1;

    return {
        score,
        strong: score >= 4
    };
}

module.exports = {
    getSecurityHeaders,
    checkPasswordStrength
};
