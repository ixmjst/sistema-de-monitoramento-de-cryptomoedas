"use strict";
(self["webpackChunkcrypto_monitor_frontend"] = self["webpackChunkcrypto_monitor_frontend"] || []).push([["src_app_features_favorites_favorites_module_ts"],{

/***/ 5054:
/*!***********************************************************!*\
  !*** ./src/app/features/favorites/favorites.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FavoritesComponent: () => (/* binding */ FavoritesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_favorite_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/favorite.service */ 9636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 597);







function FavoritesComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 1, "common.loading"));
  }
}
function FavoritesComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "favorites.emptyTitle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](6, 5, "favorites.emptyText"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 7, "nav.cryptocurrencies"));
  }
}
function FavoritesComponent_div_10_div_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 28);
  }
  if (rf & 2) {
    const fav_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", fav_r2.cryptocurrency == null ? null : fav_r2.cryptocurrency.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", fav_r2.cryptocurrency == null ? null : fav_r2.cryptocurrency.name);
  }
}
function FavoritesComponent_div_10_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fav_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", (fav_r2.cryptocurrency == null ? null : fav_r2.cryptocurrency.symbol == null ? null : fav_r2.cryptocurrency.symbol.charAt(0)) || "?", " ");
  }
}
function FavoritesComponent_div_10_div_1_p_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const fav_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fav_r2.notes);
  }
}
function FavoritesComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, FavoritesComponent_div_10_div_1_img_3_Template, 1, 2, "img", 15)(4, FavoritesComponent_div_10_div_1_div_4_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div")(6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FavoritesComponent_div_10_div_1_Template_button_click_10_listener() {
      const fav_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.removeFavorite(fav_r2.cryptoId || fav_r2.crypto_id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "svg", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "path", 19)(14, "path", 20)(15, "path", 21)(16, "path", 22)(17, "path", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 24)(19, "div", 25)(20, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, FavoritesComponent_div_10_div_1_p_24_Template, 2, 1, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const fav_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", fav_r2.cryptocurrency == null ? null : fav_r2.cryptocurrency.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !(fav_r2.cryptocurrency == null ? null : fav_r2.cryptocurrency.imageUrl));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((fav_r2.cryptocurrency == null ? null : fav_r2.cryptocurrency.name) || "Unknown");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](fav_r2.cryptocurrency == null ? null : fav_r2.cryptocurrency.symbol == null ? null : fav_r2.cryptocurrency.symbol.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 11, "crypto.removeFavorite"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.formatPrice((fav_r2.cryptocurrency == null ? null : fav_r2.cryptocurrency.currentPrice) || 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("change " + (((fav_r2.cryptocurrency == null ? null : fav_r2.cryptocurrency.priceChange24h) || 0) >= 0 ? "positive" : "negative"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ((fav_r2.cryptocurrency == null ? null : fav_r2.cryptocurrency.priceChange24h) || 0) >= 0 ? "+" : "", " ", ((fav_r2.cryptocurrency == null ? null : fav_r2.cryptocurrency.priceChange24h) || 0).toFixed(2), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", fav_r2.notes);
  }
}
function FavoritesComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, FavoritesComponent_div_10_div_1_Template, 25, 13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.favorites);
  }
}
class FavoritesComponent {
  constructor(favoriteService) {
    this.favoriteService = favoriteService;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.favorites = [];
    this.loading = true;
  }
  ngOnInit() {
    this.loadFavorites();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadFavorites() {
    this.loading = true;
    this.favoriteService.getFavorites().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe({
      next: favorites => {
        this.favorites = favorites;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  removeFavorite(cryptoId) {
    this.favoriteService.removeFavorite(cryptoId).subscribe(() => {
      this.favorites = this.favorites.filter(f => (f.cryptoId || f.crypto_id) !== cryptoId);
    });
  }
  formatPrice(price) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 6
    }).format(price);
  }
  static {
    this.ɵfac = function FavoritesComponent_Factory(t) {
      return new (t || FavoritesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_favorite_service__WEBPACK_IMPORTED_MODULE_0__.FavoriteService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: FavoritesComponent,
      selectors: [["app-favorites"]],
      decls: 11,
      vars: 9,
      consts: [[1, "favorites-container"], [1, "page-header"], [1, "text-muted"], ["class", "loading-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "favorites-grid", 4, "ngIf"], [1, "loading-container"], [1, "spinner"], [1, "empty-state"], ["routerLink", "/cryptocurrencies"], [1, "favorites-grid"], ["class", "favorite-card card", 4, "ngFor", "ngForOf"], [1, "favorite-card", "card"], [1, "card-header"], [1, "crypto-info"], ["class", "crypto-icon", 3, "src", "alt", 4, "ngIf"], ["class", "crypto-icon-placeholder", 4, "ngIf"], [1, "btn-icon", 3, "click", "title"], ["viewBox", "0 0 24 24", "fill", "none", "aria-hidden", "true"], ["d", "M8 7h8", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["d", "M10 11v6", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["d", "M14 11v6", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["d", "M5 7h14l-1.5 12.5a1 1 0 0 1-1 0.9H7.5a1 1 0 0 1-1-0.9L5 7Z", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linejoin", "round"], ["d", "M9 7V5.5a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5V7", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], [1, "card-body"], [1, "price-info"], [1, "price"], ["class", "notes text-muted", 4, "ngIf"], [1, "crypto-icon", 3, "src", "alt"], [1, "crypto-icon-placeholder"], [1, "notes", "text-muted"]],
      template: function FavoritesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, FavoritesComponent_div_8_Template, 5, 3, "div", 3)(9, FavoritesComponent_div_9_Template, 10, 9, "div", 4)(10, FavoritesComponent_div_10_Template, 2, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 5, "nav.favorites"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 7, "favorites.subtitle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.favorites.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.favorites.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: [".favorites-container[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl);\n  max-width: 1400px;\n  margin: 0 auto;\n  animation: fadeIn 0.4s ease-out;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-xl);\n  padding: var(--spacing-lg);\n  background: var(--layout-surface);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-sm);\n  backdrop-filter: blur(14px);\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  background: var(--gradient-crypto);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: var(--spacing-xs);\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-text-tertiary);\n  max-width: 560px;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  gap: var(--spacing-lg);\n}\n.loading-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 4px solid var(--color-bg-tertiary);\n  border-top-color: var(--color-primary-light);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--spacing-2xl);\n  background: var(--layout-surface);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-sm);\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  margin-bottom: var(--spacing-lg);\n  filter: grayscale(1);\n  opacity: 0.5;\n}\n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-md);\n}\n.empty-state[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary-light);\n  font-weight: 600;\n}\n\n.favorites-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: var(--spacing-lg);\n}\n\n.favorite-card[_ngcontent-%COMP%] {\n  min-height: 210px;\n}\n.favorite-card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--spacing-md);\n  padding-bottom: var(--spacing-md);\n  border-bottom: 1px solid var(--surface-border);\n}\n.favorite-card[_ngcontent-%COMP%]   .crypto-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n}\n.favorite-card[_ngcontent-%COMP%]   .crypto-info[_ngcontent-%COMP%]   .crypto-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n}\n.favorite-card[_ngcontent-%COMP%]   .crypto-info[_ngcontent-%COMP%]   .crypto-icon-placeholder[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 700;\n  font-size: 1.2rem;\n}\n.favorite-card[_ngcontent-%COMP%]   .crypto-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.1rem;\n}\n.favorite-card[_ngcontent-%COMP%]   .crypto-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n}\n.favorite-card[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: inline-grid;\n  place-items: center;\n  background: var(--color-bg-secondary);\n  border: 1px solid var(--surface-border);\n  font-size: 1.2rem;\n  cursor: pointer;\n  padding: var(--spacing-xs);\n  border-radius: var(--radius-sm);\n  transition: all var(--transition-fast);\n  opacity: 0.5;\n  color: var(--color-text-secondary);\n}\n.favorite-card[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transform: translateY(-1px);\n  color: var(--color-error);\n  background: rgba(255, 107, 107, 0.1);\n}\n.favorite-card[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.favorite-card[_ngcontent-%COMP%]   .price-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.favorite-card[_ngcontent-%COMP%]   .price-info[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n  font-weight: 700;\n}\n.favorite-card[_ngcontent-%COMP%]   .price-info[_ngcontent-%COMP%]   .change[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n}\n.favorite-card[_ngcontent-%COMP%]   .price-info[_ngcontent-%COMP%]   .change.positive[_ngcontent-%COMP%] {\n  color: var(--color-gain);\n}\n.favorite-card[_ngcontent-%COMP%]   .price-info[_ngcontent-%COMP%]   .change.negative[_ngcontent-%COMP%] {\n  color: var(--color-loss);\n}\n.favorite-card[_ngcontent-%COMP%]   .notes[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n  font-size: 0.9rem;\n  font-style: italic;\n}\n\n@media (max-width: 480px) {\n  .favorites-container[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n  }\n  .favorites-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZmF2b3JpdGVzL2Zhdm9yaXRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsMEJBQUE7RUFDQSxpQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0FBQ0Y7QUFDRTtFQUNFLGtDQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUFDSjtBQUVFO0VBQ0UsU0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0FBREY7QUFHRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7QUFESjs7QUFLQTtFQUNFO0lBQ0UseUJBQUE7RUFGRjtBQUNGO0FBS0E7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUNBQUE7RUFDQSx1Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7QUFIRjtBQUtFO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBSEo7QUFNRTtFQUNFLGdDQUFBO0FBSko7QUFPRTtFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFTQTtFQUNFLGFBQUE7RUFDQSw0REFBQTtFQUNBLHNCQUFBO0FBTkY7O0FBU0E7RUFDRSxpQkFBQTtBQU5GO0FBUUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdDQUFBO0VBQ0EsaUNBQUE7RUFDQSw4Q0FBQTtBQU5KO0FBU0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQVBKO0FBU0k7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBUE47QUFVSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFSTjtBQVdJO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0FBVE47QUFZSTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtBQVZOO0FBY0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0FBWko7QUFjSTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0NBQUE7QUFaTjtBQWVJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFiTjtBQWlCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBZko7QUFpQkk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBZk47QUFrQkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFoQk47QUFrQk07RUFDRSx3QkFBQTtBQWhCUjtBQW1CTTtFQUNFLHdCQUFBO0FBakJSO0FBc0JFO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBcEJKOztBQXdCQTtFQUNFO0lBQ0UsMEJBQUE7RUFyQkY7RUF3QkE7SUFDRSwwQkFBQTtFQXRCRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmZhdm9yaXRlcy1jb250YWluZXIge1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXhsKTtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjRzIGVhc2Utb3V0O1xufVxuXHJcbi5wYWdlLWhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy14bCk7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tbGF5b3V0LXN1cmZhY2UpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy14bCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNHB4KTtcblxyXG4gIGgxIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LWNyeXB0byk7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmcteHMpO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC10ZXJ0aWFyeSk7XHJcbiAgICBtYXgtd2lkdGg6IDU2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmxvYWRpbmctY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctbGcpO1xyXG5cclxuICAuc3Bpbm5lciB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLWNvbG9yLWJnLXRlcnRpYXJ5KTtcclxuICAgIGJvcmRlci10b3AtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktbGlnaHQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi5lbXB0eS1zdGF0ZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy0yeGwpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1sYXlvdXQtc3VyZmFjZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcblxyXG4gIC5lbXB0eS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbGcpO1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMSk7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgfVxyXG5cclxuICBoMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktbGlnaHQpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB9XHJcbn1cclxuXHJcbi5mYXZvcml0ZXMtZ3JpZCB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyODBweCwgMWZyKSk7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLWxnKTtcclxufVxyXG5cclxuLmZhdm9yaXRlLWNhcmQge1xuICBtaW4taGVpZ2h0OiAyMTBweDtcblxuICAuY2FyZC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1tZCk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogdmFyKC0tc3BhY2luZy1tZCk7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xuICB9XHJcblxyXG4gIC5jcnlwdG8taW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogdmFyKC0tc3BhY2luZy1tZCk7XHJcblxyXG4gICAgLmNyeXB0by1pY29uIHtcclxuICAgICAgd2lkdGg6IDQ0cHg7XHJcbiAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jcnlwdG8taWNvbi1wbGFjZWhvbGRlciB7XHJcbiAgICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIGgzIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYnRuLWljb24ge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy14cyk7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tZmFzdCk7XHJcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcblxuICAgICY6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1lcnJvcik7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTA3LCAxMDcsIDAuMSk7XG4gICAgfVxuXG4gICAgc3ZnIHtcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgIH1cbiAgfVxuXHJcbiAgLnByaWNlLWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgLnByaWNlIHtcclxuICAgICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoYW5nZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuXHJcbiAgICAgICYucG9zaXRpdmUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1nYWluKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJi5uZWdhdGl2ZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWxvc3MpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubm90ZXMge1xyXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2luZy1tZCk7XHJcbiAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuZmF2b3JpdGVzLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCk7XG4gIH1cblxyXG4gIC5mYXZvcml0ZXMtZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6305:
/*!********************************************************!*\
  !*** ./src/app/features/favorites/favorites.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FavoritesModule: () => (/* binding */ FavoritesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _favorites_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites.component */ 5054);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);






const routes = [{
  path: '',
  component: _favorites_component__WEBPACK_IMPORTED_MODULE_0__.FavoritesComponent
}];
class FavoritesModule {
  static {
    this.ɵfac = function FavoritesModule_Factory(t) {
      return new (t || FavoritesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: FavoritesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FavoritesModule, {
    declarations: [_favorites_component__WEBPACK_IMPORTED_MODULE_0__.FavoritesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_favorites_favorites_module_ts.js.map