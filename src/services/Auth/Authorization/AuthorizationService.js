import axios from "axios";
import LocalStorageService from "utils/LocalStorageService";
import { APP_CONFIG } from "utils/appConfig";
import { setAuthenticationHeader } from "utils/axiosHeaders";
import AuthenticationService from "../Authentication/AuthenticationService";

export default class AuthorizationService {
  storageService;
  constructor() {
    this.storageService = new LocalStorageService(
      APP_CONFIG.AUTHORIZATION_STORAGE_NAME
    );
    setAuthenticationHeader(new AuthenticationService().getJwt());
  }

  isAuthorized = async (permission) => {
    return new Promise((resolve, reject) => {
      this.getUserPermissions().then((permissions) => {
        let result = permissions?.findIndex(function (element) {
          return element.name === permission;
        });
        resolve(result >= 0 ? true : false);
      });
    });
  };

  getUserPermissions = async () => {
    return new Promise((resolve, reject) => {
    var permissions = this.storageService.getItem();
    if (permissions == null) {
      axios
        .get(APP_CONFIG.API_BASEPATH + "/Auth/GetPermissionsOfCurrentUser")
        .then((response) => {
          this.storageService.AddItem(response.data);
          resolve(JSON.parse(response.data));
        })
        .catch((error) => {
          reject(error.message);
        });
    } else {
      resolve(permissions);
    }
  })
  };

  refreshUserPermissions = async () => {
    axios
      .get(APP_CONFIG.API_BASEPATH + "/Auth/GetPermissionsOfCurrentUser")
      .then((response) => {
        this.storageService.AddItem(response.data);
        this.redirectToDashboard();
      })
      .catch((error) => {
        return error.message;
      });
  };
}
