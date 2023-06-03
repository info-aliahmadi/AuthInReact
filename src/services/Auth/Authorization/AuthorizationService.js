import axios from "axios";
import LocalStorageService from "utils/LocalStorageService";
import { APP_CONFIG } from "utils/appConfig";

export default class AuthorizationService {
  storageService;
  constructor() {
    this.storageService = new LocalStorageService(
      APP_CONFIG.AUTHORIZATION_STORAGE_NAME
    );
  }

  isAuthorized = async (permissionName) => {
    debugger
    var permissions = this.storageService.getUserPermissions();

    return permissions.find(x=> x.name === permissionName) == null? false: true;

  };

  getUserPermissions = async () => {
    var permissions = this.storageService.getItem();
    if (permissions == null) {
      axios
        .get(APP_CONFIG.API_BASEPATH + "/Auth/GetPermissionsOfCurrentUser")
        .then((response) => {
          this.storageService.AddItem(response.data);
          return JSON.parse(response.data);
        })
        .catch((error) => {
          return error.message;
        });
    } else {
      return permissions;
    }
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
