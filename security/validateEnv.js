const minSecretLength = 5;
export function validateSecret(secret) {
    const typedSecret = validateType(secret);
    validateLength(typedSecret);
    return typedSecret;
}
function validateType(secret) {
    if (!secret) {
        throw new Error("Secret: not properly set up ");
    }
    return secret;
}
function validateLength(secret) {
    if (secret && secret.length < minSecretLength) {
        throw new Error(`Secret: incorrect length (min length:
${minSecretLength})`);
    }
}
//# sourceMappingURL=validateEnv.js.map