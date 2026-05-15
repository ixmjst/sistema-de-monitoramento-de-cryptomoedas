"use strict";
(self["webpackChunkcrypto_monitor_frontend"] = self["webpackChunkcrypto_monitor_frontend"] || []).push([[76],{

/***/ 9636:
/*!***************************************************!*\
  !*** ./src/app/core/services/favorite.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FavoriteService: () => (/* binding */ FavoriteService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 1985);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 1626);



let FavoriteService = /*#__PURE__*/(() => {
  class FavoriteService {
    constructor(http) {
      this.http = http;
      this.apiUrl = 'http://localhost:8000/api/v1/favorites';
    }
    getFavorites() {
      return this.http.get(this.apiUrl);
    }
    addFavorite(cryptoId) {
      return this.http.post(this.apiUrl, {
        cryptoId
      });
    }
    removeFavorite(cryptoId) {
      return this.http.delete(`${this.apiUrl}/${cryptoId}`);
    }
    isFavorite(cryptoId) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
        this.getFavorites().subscribe(favorites => {
          const isFav = favorites.some(fav => fav.cryptoId === cryptoId);
          observer.next(isFav);
          observer.complete();
        }, error => observer.error(error));
      });
    }
    static {
      this.ɵfac = function FavoriteService_Factory(t) {
        return new (t || FavoriteService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };
    }
    static {
      this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: FavoriteService,
        factory: FavoriteService.ɵfac,
        providedIn: 'root'
      });
    }
  }
  return FavoriteService;
})();

/***/ })

}]);