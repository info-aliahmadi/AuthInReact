

export default class CacheService {
    cacheName;
    constructor(cacheName) {
      this.cacheName = cacheName;
    }
    AddItem(value) {
      caches.open(this.cacheName).then((cache) => {
        cache.put(this.cacheName, value);
      });
    }
    getItem() {
      caches.open(this.cacheName).then((cache) => {
        cache.match(this.cacheName).then((value) => {
          return value;
        });
      });
    }
    deleteItem() {
      caches.open(this.cacheName).then((cache) => {
        cache.delete(this.cacheName);
      });
    }
  }