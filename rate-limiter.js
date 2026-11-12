/**
 * In-Memory Rate Limiter & IP Validator for Web Platforms
 */

class RateLimiter {
    constructor(windowMs = 60000, maxRequests = 100) {
        this.windowMs = windowMs;
        this.maxRequests = maxRequests;
        this.clients = new Map();
    }

    isAllowed(clientIp) {
        const now = Date.now();
        const clientData = this.clients.get(clientIp) || { count: 0, resetTime: now + this.windowMs };

        if (now > clientData.resetTime) {
            clientData.count = 1;
            clientData.resetTime = now + this.windowMs;
            this.clients.set(clientIp, clientData);
            return true;
        }

        if (clientData.count < this.maxRequests) {
            clientData.count += 1;
            this.clients.set(clientIp, clientData);
            return true;
        }

        return false;
    }

    resetClient(clientIp) {
        this.clients.delete(clientIp);
    }
}

function isValidIPv4(ip) {
    if (typeof ip !== 'string') return false;
    const parts = ip.split('.');
    if (parts.length !== 4) return false;
    return parts.every(part => {
        const num = Number(part);
        return num >= 0 && num <= 255 && String(num) === part;
    });
}

module.exports = {
    RateLimiter,
    isValidIPv4
};
