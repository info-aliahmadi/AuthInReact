export const isDevelopment =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";

export const APP_CONFIG = {
  API_BASEPATH: isDevelopment
    ? "https://localhost:7134/"
    : "https://website.com", // application api basepath

    DASHBOARD_PATH: this.API_BASEPATH + "/admin",
    LOGIN_PATH: this.API_BASEPATH + "/login",

    AUTHENTICATION_STORAGE_NAME: "HydraAuthenticationStorage",
    AUTHORIZATION_STORAGE_NAME: "HydraAuthorizationStorage",
};
 