/**
 * Production Web Utilities & Security Helpers
 * Used across client platforms and critical infrastructure.
 * Author: Open Source Contributor
 */

// Validează integritatea și formatul unui email înainte de procesare
function validateSecureEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Curăță input-urile pentru prevenirea atacurilor de tip XSS
function sanitizeInput(input) {
    if (typeof input !== 'string') return '';
    return input
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// Generează un hash scurt pentru sesiuni sau loguri sigure
function generateSecureToken(length = 32) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < length; i++) {
        token += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return token;
}

module.exports = {
    validateSecureEmail,
    sanitizeInput,
    generateSecureToken
};
