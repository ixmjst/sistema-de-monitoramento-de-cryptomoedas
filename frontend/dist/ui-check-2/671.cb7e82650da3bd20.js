"use strict";
(self["webpackChunkcrypto_monitor_frontend"] = self["webpackChunkcrypto_monitor_frontend"] || []).push([[671],{

/***/ 4976:
/*!*************************************************************************!*\
  !*** ./src/app/features/cryptocurrencies/cryptocurrencies.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CryptocurrenciesComponent: () => (/* binding */ CryptocurrenciesComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 8530);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 152);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 3294);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6977);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7705);
/* harmony import */ var _core_services_crypto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/crypto.service */ 9741);
/* harmony import */ var _core_services_favorite_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/favorite.service */ 9636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 1780);









function CryptocurrenciesComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 1, "common.loading"));
  }
}
function CryptocurrenciesComponent_div_17_tr_23_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 33);
  }
  if (rf & 2) {
    const crypto_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", crypto_r4.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", crypto_r4.name);
  }
}
function CryptocurrenciesComponent_div_17_tr_23_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const crypto_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](crypto_r4.symbol.charAt(0));
  }
}
function CryptocurrenciesComponent_div_17_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 24)(1, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 17)(4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CryptocurrenciesComponent_div_17_tr_23_img_5_Template, 1, 2, "img", 26)(6, CryptocurrenciesComponent_div_17_tr_23_div_6_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div")(8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td", 29)(15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "td", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td", 21)(20, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CryptocurrenciesComponent_div_17_tr_23_Template_button_click_20_listener() {
      const crypto_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleFavorite(crypto_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "svg", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const crypto_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", crypto_r4.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !crypto_r4.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](crypto_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](crypto_r4.symbol.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.formatPrice(crypto_r4.currentPrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("badge " + (crypto_r4.priceChange24h >= 0 ? "badge-success" : "badge-danger"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", crypto_r4.priceChange24h >= 0 ? "+" : "", "", crypto_r4.priceChange24h.toFixed(2), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.formatMarketCap(crypto_r4.marketCap || 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r1.isFavorite(crypto_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 14, ctx_r1.isFavorite(crypto_r4.id) ? "crypto.removeFavorite" : "crypto.addFavorite"));
  }
}
function CryptocurrenciesComponent_div_17_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 35)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, "common.noData"));
  }
}
function CryptocurrenciesComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "table", 15)(3, "thead")(4, "tr")(5, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CryptocurrenciesComponent_div_17_Template_th_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.sortBy("currentPrice"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CryptocurrenciesComponent_div_17_Template_th_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.sortBy("priceChange24h"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CryptocurrenciesComponent_div_17_Template_th_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.sortBy("marketCap"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](23, CryptocurrenciesComponent_div_17_tr_23_Template, 24, 16, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](24, CryptocurrenciesComponent_div_17_div_24_Template, 4, 3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 10, "crypto.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 12, "crypto.price"), " ", ctx_r1.getSortIcon("currentPrice"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 14, "crypto.change24h"), " ", ctx_r1.getSortIcon("priceChange24h"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 16, "crypto.marketCap"), " ", ctx_r1.getSortIcon("marketCap"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 18, "common.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.filteredCryptos);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.filteredCryptos.length === 0);
  }
}
let CryptocurrenciesComponent = /*#__PURE__*/(() => {
  class CryptocurrenciesComponent {
    constructor(cryptoService, favoriteService) {
      this.cryptoService = cryptoService;
      this.favoriteService = favoriteService;
      this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
      this.cryptos = [];
      this.filteredCryptos = [];
      this.loading = true;
      this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('');
      this.currentPage = 1;
      this.pageSize = 20;
      this.totalItems = 0;
      this.sortField = 'marketCap';
      this.sortDirection = 'desc';
      this.favoriteIds = new Set();
    }
    ngOnInit() {
      this.loadCryptos();
      this.loadFavorites();
      this.searchControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(query => {
        this.filterCryptos(query || '');
      });
    }
    ngOnDestroy() {
      this.destroy$.next();
      this.destroy$.complete();
    }
    loadCryptos() {
      this.loading = true;
      this.cryptoService.getCryptocurrencies(this.currentPage, this.pageSize).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
        next: cryptos => {
          this.cryptos = cryptos;
          this.filteredCryptos = cryptos;
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        }
      });
    }
    loadFavorites() {
      this.favoriteService.getFavorites().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe({
        next: favorites => {
          this.favoriteIds = new Set(favorites.map(f => f.cryptoId || f.crypto_id));
        }
      });
    }
    filterCryptos(query) {
      if (!query.trim()) {
        this.filteredCryptos = this.cryptos;
        return;
      }
      const q = query.toLowerCase();
      this.filteredCryptos = this.cryptos.filter(c => c.name.toLowerCase().includes(q) || c.symbol.toLowerCase().includes(q));
    }
    sortBy(field) {
      if (this.sortField === field) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      } else {
        this.sortField = field;
        this.sortDirection = 'desc';
      }
      this.filteredCryptos = [...this.filteredCryptos].sort((a, b) => {
        const aVal = a[field] || 0;
        const bVal = b[field] || 0;
        return this.sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      });
    }
    toggleFavorite(crypto) {
      if (this.favoriteIds.has(crypto.id)) {
        this.favoriteService.removeFavorite(crypto.id).subscribe(() => {
          this.favoriteIds.delete(crypto.id);
        });
      } else {
        this.favoriteService.addFavorite(crypto.id).subscribe(() => {
          this.favoriteIds.add(crypto.id);
        });
      }
    }
    isFavorite(cryptoId) {
      return this.favoriteIds.has(cryptoId);
    }
    formatPrice(price) {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 6
      }).format(price);
    }
    formatMarketCap(value) {
      if (!value) return 'N/A';
      if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
      if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
      if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
      return `$${value.toFixed(2)}`;
    }
    getSortIcon(field) {
      if (this.sortField !== field) return '↕';
      return this.sortDirection === 'asc' ? '↑' : '↓';
    }
    static {
      this.ɵfac = function CryptocurrenciesComponent_Factory(t) {
        return new (t || CryptocurrenciesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_crypto_service__WEBPACK_IMPORTED_MODULE_0__.CryptoService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_core_services_favorite_service__WEBPACK_IMPORTED_MODULE_1__.FavoriteService));
      };
    }
    static {
      this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: CryptocurrenciesComponent,
        selectors: [["app-cryptocurrencies"]],
        decls: 18,
        vars: 12,
        consts: [[1, "crypto-container"], [1, "page-header"], [1, "text-muted"], [1, "search-box"], [1, "search-icon"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "aria-hidden", "true"], ["cx", "10", "cy", "10", "r", "6", "stroke", "currentColor", "stroke-width", "1.8"], ["d", "M15.5 15.5l4 4", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["type", "text", 1, "search-input", 3, "formControl", "placeholder"], ["class", "loading-container", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "loading-container"], [1, "spinner"], [1, "card"], [1, "table-wrapper"], [1, "crypto-table"], [1, "col-rank"], [1, "col-name"], [1, "col-price", "sortable", 3, "click"], [1, "col-change", "sortable", 3, "click"], [1, "col-market-cap", "sortable", 3, "click"], [1, "col-actions"], ["class", "crypto-row", 4, "ngFor", "ngForOf"], ["class", "no-results", 4, "ngIf"], [1, "crypto-row"], [1, "crypto-name-cell"], ["class", "crypto-icon", 3, "src", "alt", 4, "ngIf"], ["class", "crypto-icon-placeholder", 4, "ngIf"], [1, "col-price"], [1, "col-change"], [1, "col-market-cap"], [1, "btn-icon", 3, "click", "title"], ["d", "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z", "stroke", "currentColor", "stroke-width", "1.8", "fill", "none"], [1, "crypto-icon", 3, "src", "alt"], [1, "crypto-icon-placeholder"], [1, "no-results"]],
        template: function CryptocurrenciesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 3)(10, "span", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "svg", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "circle", 6)(13, "path", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CryptocurrenciesComponent_div_16_Template, 5, 3, "div", 9)(17, CryptocurrenciesComponent_div_17_Template, 25, 20, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 6, "nav.cryptocurrencies"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 8, "crypto.titleText"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formControl", ctx.searchControl)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 10, "overview.searchPlaceholder"));
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
          }
        },
        dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
        styles: [".crypto-container[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl);\n  max-width: 1400px;\n  margin: 0 auto;\n  animation: fadeIn 0.4s ease-out;\n  min-width: 0;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--spacing-xl);\n  flex-wrap: wrap;\n  gap: var(--spacing-lg);\n  padding: var(--spacing-lg);\n  background: var(--layout-surface);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-sm);\n  backdrop-filter: blur(14px);\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  background: var(--gradient-crypto);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: var(--spacing-xs);\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-text-tertiary);\n  max-width: 520px;\n}\n\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: min(100%, 380px);\n}\n.search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: var(--spacing-md);\n  font-size: 1rem;\n  pointer-events: none;\n}\n.search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 2.5rem;\n  width: 100%;\n  background: var(--color-bg-secondary);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--radius-full);\n  transition: all var(--transition-fast);\n}\n.search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-primary-light);\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  gap: var(--spacing-lg);\n}\n.loading-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 4px solid var(--color-bg-tertiary);\n  border-top-color: var(--color-primary-light);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: var(--radius-xl);\n}\n\n.crypto-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 860px;\n}\n.crypto-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--color-bg-tertiary);\n}\n.crypto-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  text-align: left;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--color-text-tertiary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.crypto-table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  transition: color var(--transition-fast);\n}\n.crypto-table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary-light);\n}\n.crypto-table[_ngcontent-%COMP%]   .crypto-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-bg-tertiary);\n  transition: all var(--transition-fast);\n}\n.crypto-table[_ngcontent-%COMP%]   .crypto-row[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover);\n}\n.crypto-table[_ngcontent-%COMP%]   .crypto-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n}\n.crypto-table[_ngcontent-%COMP%]   .col-rank[_ngcontent-%COMP%] {\n  width: 50px;\n  color: var(--color-text-tertiary);\n  font-weight: 600;\n}\n.crypto-table[_ngcontent-%COMP%]   .col-name[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n.crypto-table[_ngcontent-%COMP%]   .crypto-name-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n}\n.crypto-table[_ngcontent-%COMP%]   .crypto-name-cell[_ngcontent-%COMP%]   .crypto-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n}\n.crypto-table[_ngcontent-%COMP%]   .crypto-name-cell[_ngcontent-%COMP%]   .crypto-icon-placeholder[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 700;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.crypto-table[_ngcontent-%COMP%]   .crypto-name-cell[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n}\n.crypto-table[_ngcontent-%COMP%]   .crypto-name-cell[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8rem;\n}\n.crypto-table[_ngcontent-%COMP%]   .col-price[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1rem;\n}\n.crypto-table[_ngcontent-%COMP%]   .col-actions[_ngcontent-%COMP%] {\n  width: 80px;\n  text-align: center;\n}\n\n.btn-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: inline-grid;\n  place-items: center;\n  background: var(--color-bg-secondary);\n  border: 1px solid var(--surface-border);\n  font-size: 1.4rem;\n  cursor: pointer;\n  padding: var(--spacing-xs);\n  border-radius: var(--radius-sm);\n  transition: all var(--transition-fast);\n  opacity: 0.6;\n  color: var(--color-text-secondary);\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transform: translateY(-1px);\n  color: var(--color-warning);\n}\n.btn-icon.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  color: var(--color-warning);\n  background: rgba(245, 158, 11, 0.12);\n}\n.btn-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\n.no-results[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--spacing-2xl);\n  color: var(--color-text-tertiary);\n}\n\n@media (max-width: 768px) {\n  .crypto-container[_ngcontent-%COMP%] {\n    padding: var(--spacing-lg);\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .search-box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .crypto-table[_ngcontent-%COMP%] {\n    min-width: 760px;\n  }\n}\n@media (max-width: 480px) {\n  .crypto-container[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n  }\n  .page-header[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n  }\n}"]
      });
    }
  }
  return CryptocurrenciesComponent;
})();

/***/ }),

/***/ 6671:
/*!**********************************************************************!*\
  !*** ./src/app/features/cryptocurrencies/cryptocurrencies.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CryptocurrenciesModule: () => (/* binding */ CryptocurrenciesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 177);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 9417);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 1780);
/* harmony import */ var _cryptocurrencies_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cryptocurrencies.component */ 4976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7705);







const routes = [{
  path: '',
  component: _cryptocurrencies_component__WEBPACK_IMPORTED_MODULE_0__.CryptocurrenciesComponent
}];
let CryptocurrenciesModule = /*#__PURE__*/(() => {
  class CryptocurrenciesModule {
    static {
      this.ɵfac = function CryptocurrenciesModule_Factory(t) {
        return new (t || CryptocurrenciesModule)();
      };
    }
    static {
      this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: CryptocurrenciesModule
      });
    }
    static {
      this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)]
      });
    }
  }
  return CryptocurrenciesModule;
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CryptocurrenciesModule, {
    declarations: [_cryptocurrencies_component__WEBPACK_IMPORTED_MODULE_0__.CryptocurrenciesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ })

}]);