/**
 * Structured Audit Logger with Sensitive Data Masking
 */

const SENSITIVE_KEYS = ['password', 'token', 'secret', 'authorization', 'creditCard', 'cvv'];

function maskSensitiveData(data) {
    if (!data || typeof data !== 'object') return data;
    
    const masked = Array.isArray(data) ? [...data] : { ...data };
    
    for (const key of Object.keys(masked)) {
        if (SENSITIVE_KEYS.some(k => key.toLowerCase().includes(k.toLowerCase()))) {
            masked[key] = '***REDACTED***';
        } else if (typeof masked[key] === 'object' && masked[key] !== null) {
            masked[key] = maskSensitiveData(masked[key]);
        }
    }
    return masked;
}

function createAuditEntry(event, metadata = {}, level = 'INFO') {
    return JSON.stringify({
        timestamp: new Date().toISOString(),
        level: level.toUpperCase(),
        event,
        metadata: maskSensitiveData(metadata)
    });
}

module.exports = {
    maskSensitiveData,
    createAuditEntry
};
