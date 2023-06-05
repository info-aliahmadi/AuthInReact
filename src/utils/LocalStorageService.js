export default class LocalStorageService {
  
  localStorageName;
  constructor(localStorageName) {
    this.localStorageName = localStorageName;
  }
  AddItem(value, expireDate) {
    localStorage.setItem(this.localStorageName, JSON.stringify(value));
  }
  getItem() {
    return JSON.parse(localStorage.getItem(this.localStorageName));
  }
  deleteItem() {
    localStorage.removeItem(this.localStorageName);
  }
}
