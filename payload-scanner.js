/**
 * Request Payload Scanner for SQLi and Path Traversal Detection
 */

function hasSqlInjectionRisk(input) {
    if (typeof input !== 'string') return false;
    const sqliPattern = /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER|EXEC)\b|\b(OR|AND)\b\s+['"]?\d+['"]?\s*=\s*['"]?\d+['"]?|--|\/\*)/i;
    return sqliPattern.test(input);
}

function isSafeFilePath(filePath) {
    if (typeof filePath !== 'string' || filePath.length === 0) return false;
    // Blochează încercările de a accesa directoare părinte (../ sau ..\) sau null bytes
    const traversalPattern = /(\.\.(\/|\\))|\0/;
    return !traversalPattern.test(filePath);
}

module.exports = {
    hasSqlInjectionRisk,
    isSafeFilePath
};
