export function validateSecureEmail(email: string): boolean;
export function sanitizeInput(input: string): string;
export function generateSecureToken(length?: number): string;

export class RateLimiter {
    constructor(windowMs?: number, maxRequests?: number);
    isAllowed(clientIp: string): boolean;
    resetClient(clientIp: string): void;
}

export function isValidIPv4(ip: string): boolean;

export interface SecurityHeadersOptions {
    hsts?: boolean;
    frameOptions?: 'DENY' | 'SAMEORIGIN';
    csp?: string;
}

export function getSecurityHeaders(options?: SecurityHeadersOptions): Record<string, string>;
export function checkPasswordStrength(password: string): { score: number; strong: boolean };
