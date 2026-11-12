const { sanitizeInput } = require('../security-helper');
console.log("Sanitized:", sanitizeInput("<test>"));
