// export const isDevelopment =
//   !process.env.NODE_ENV || process.env.NODE_ENV === "development";

export const APP_CONFIG = {
  API_BASEPATH: "https://localhost:7134", // isDevelopment ? "https://localhost:7134/": "https://website.com", // application api basepath
  FRONT_PATH: "http://localhost:3000",
  DASHBOARD_PATH: "http://localhost:3000/admin",
  LOGIN_PATH: "http://localhost:3000/login",

  AUTHENTICATION_DEFAULT_STORAGE: "cookie",
  AUTHENTICATION_STORAGE_NAME: "HydraAuthenticationStorage",
  AUTHORIZATION_STORAGE_NAME: "HydraAuthorizationStorage",
};
