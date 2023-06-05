import axios from "axios";
import CookieService from "utils/CookieService";
import LocalStorageService from "utils/LocalStorageService";
import { APP_CONFIG } from "utils/appConfig";
import { setAuthenticationHeader } from "utils/axiosHeaders";

export default class AuthenticationService {
  storageService;
  constructor() {
    this.storageService =
      APP_CONFIG.AUTHENTICATION_DEFAULT_STORAGE === "cookie"
        ? new CookieService(APP_CONFIG.AUTHENTICATION_STORAGE_NAME)
        : new LocalStorageService(APP_CONFIG.AUTHENTICATION_STORAGE_NAME);
  }

  login = async (userName, password, rememberMe) => {
    axios
      .get(APP_CONFIG.API_BASEPATH + "/Auth/Login", {
        params: {
          userName: userName,
          password: password,
          rememberMe: rememberMe,
        },
      })
      .then((response) => {
        setAuthenticationHeader(response.data);
        var jwt = this.parseJwt(response.data);
        var expireDate = new Date(jwt.exp * 1000).toUTCString();
        this.storageService.AddItem(response.data, expireDate);
        this.redirectToDashboard();
      })
      .catch((error) => {
        return error.message;
      });
  };
  getUser = async () => {
    return this.parseJwt(
      this.storageService.getItem(APP_CONFIG.AUTHENTICATION_STORAGE_NAME)
    );
  };
  
  getJwt = (token) => {
    return this.storageService.getItem(APP_CONFIG.AUTHENTICATION_STORAGE_NAME)
  };

  parseJwt = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  };


  redirectToLogin = () => {
    window.location.replace(APP_CONFIG.LOGIN_PATH);
  };

  redirectToDashboard = () => {
    window.location.replace(APP_CONFIG.DASHBOARD_PATH);
  };

  isAuthenticated =async () => {
    var token = this.storageService.getItem(
      APP_CONFIG.AUTHENTICATION_STORAGE_NAME
    );
    if (token == null) {
      // var isRefreshedToken = this.refreshToken();
      // if (isRefreshedToken) {
      //   return true;
      // }
      return false;
    }
    const { exp } = this.parseJwt(token);
    const expired = Date.now() >= exp * 1000;
    return !expired;
  };

  refreshToken = () => {
    axios
      .get(APP_CONFIG.API_BASEPATH + "/Auth/RefreshToken")
      .then((response) => {
        setAuthenticationHeader(response.data);
        this.storageService.deleteItem();
        this.storageService.AddItem(response.data);
        return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  };

  logout = () => {
    axios.get(APP_CONFIG.API_BASEPATH + "/Auth/SignOut");
    this.storageService.deleteItem();
  };
}
