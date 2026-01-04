export default {
  APP_NAME: "Taxido",  // Change per client
  APP_LOGO: require("../assets/images/logo.png"),
  BASE_URL: "https://your-backend.com/api/",
  COLORS: {
    primary: "#FF5A5F",
    secondary: "#00AEEF",
    background: "#FFFFFF",
    text: "#000000",
    // Add all colors from your styles
  },
  CURRENCY: {
    symbol: "$",
    code: "USD",
    position: "left",
  },
  DEFAULT_LANGUAGE: "en",
  SUPPORT_RTL: false,
  GOOGLE_MAPS_API_KEY: "YOUR_KEY",
  FEATURES: {
    wallet: true,
    referral: true,
    rideLater: true,
    // Add all features
  },
  PAYMENT_GATEWAYS: {
    stripe: true,
    // etc.
  },
  SUPPORT_PHONE: "+1-234-567-890",
  SUPPORT_EMAIL: "support@yourapp.com",
};