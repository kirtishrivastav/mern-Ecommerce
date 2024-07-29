const checkoutNodeJssdk = require('@paypal/checkout-server-sdk');

let clientId = "your-client-id";
let clientSecret = "your-client-secret";

const environment = new checkoutNodeJssdk.core.SandboxEnvironment(clientId, clientSecret);
const client = new checkoutNodeJssdk.core.PayPalHttpClient(environment);

module.exports = { client };
