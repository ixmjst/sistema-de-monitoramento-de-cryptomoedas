"use strict";
(self["webpackChunkcrypto_monitor_frontend"] = self["webpackChunkcrypto_monitor_frontend"] || []).push([["src_app_features_cryptocurrencies_cryptocurrencies_module_ts"],{

/***/ 4976:
/*!*************************************************************************!*\
  !*** ./src/app/features/cryptocurrencies/cryptocurrencies.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CryptocurrenciesComponent: () => (/* binding */ CryptocurrenciesComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 2575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 1817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_crypto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/crypto.service */ 9741);
/* harmony import */ var _core_services_favorite_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/services/favorite.service */ 9636);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 597);









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
function CryptocurrenciesComponent_div_17_tr_48_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 35);
  }
  if (rf & 2) {
    const crypto_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", crypto_r4.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"])("alt", crypto_r4.name);
  }
}
function CryptocurrenciesComponent_div_17_tr_48_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const crypto_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](crypto_r4.symbol.charAt(0));
  }
}
function CryptocurrenciesComponent_div_17_tr_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 25)(1, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td", 18)(4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, CryptocurrenciesComponent_div_17_tr_48_img_5_Template, 1, 2, "img", 27)(6, CryptocurrenciesComponent_div_17_tr_48_div_6_Template, 2, 1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div")(8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td", 30)(17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "td", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "svg", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "polyline");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "td", 22)(29, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CryptocurrenciesComponent_div_17_tr_48_Template_button_click_29_listener() {
      const crypto_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3).$implicit;
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.toggleFavorite(crypto_r4));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "svg", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "path", 34);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("positive", ctx_r1.getHourlyChange(crypto_r4) >= 0)("negative", ctx_r1.getHourlyChange(crypto_r4) < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r1.getHourlyChange(crypto_r4) >= 0 ? "+" : "", "", ctx_r1.getHourlyChange(crypto_r4).toFixed(2), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.formatPrice(crypto_r4.currentPrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"]("badge " + (crypto_r4.priceChange24h >= 0 ? "badge-success" : "badge-danger"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", crypto_r4.priceChange24h >= 0 ? "+" : "", "", crypto_r4.priceChange24h.toFixed(2), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("positive", ctx_r1.getWeeklyChange(crypto_r4) >= 0)("negative", ctx_r1.getWeeklyChange(crypto_r4) < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", ctx_r1.getWeeklyChange(crypto_r4) >= 0 ? "+" : "", "", ctx_r1.getWeeklyChange(crypto_r4).toFixed(2), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.formatMarketCap(crypto_r4.volume24h || 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.formatMarketCap(crypto_r4.marketCap || 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("negative", crypto_r4.priceChange24h < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("points", ctx_r1.getSparklinePoints(crypto_r4));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("active", ctx_r1.isFavorite(crypto_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 30, ctx_r1.isFavorite(crypto_r4.id) ? "crypto.removeFavorite" : "crypto.addFavorite"));
  }
}
function CryptocurrenciesComponent_div_17_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 37)(1, "p");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "div")(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Comparar moedas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Selecione favoritos e acompanhe lado a lado.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div")(8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Indicadores");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Pre\u00E7o, 1h, 24h, 7d, volume e market cap.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div")(13, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Alertas");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Use favoritos para monitorar subidas e quedas.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 15)(18, "table", 16)(19, "thead")(20, "tr")(21, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, "1h");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CryptocurrenciesComponent_div_17_Template_th_click_28_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.sortBy("currentPrice"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CryptocurrenciesComponent_div_17_Template_th_click_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.sortBy("priceChange24h"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](33, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "7d");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CryptocurrenciesComponent_div_17_Template_th_click_39_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r1);
      const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r1.sortBy("marketCap"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](41, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](43, "Gr\u00E1fico");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](46, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, CryptocurrenciesComponent_div_17_tr_48_Template, 33, 32, "tr", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, CryptocurrenciesComponent_div_17_div_49_Template, 4, 3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 11, "crypto.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](30, 13, "crypto.price"), " ", ctx_r1.getSortIcon("currentPrice"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](33, 15, "crypto.change24h"), " ", ctx_r1.getSortIcon("priceChange24h"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](38, 17, "crypto.volume"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](41, 19, "crypto.marketCap"), " ", ctx_r1.getSortIcon("marketCap"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](46, 21, "common.actions"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.filteredCryptos);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.filteredCryptos.length === 0);
  }
}
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
      return;
    }
    this.favoriteService.addFavorite(crypto.id).subscribe(() => {
      this.favoriteIds.add(crypto.id);
    });
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
  getSparklinePoints(crypto, width = 170, height = 48) {
    const values = crypto.sparkline?.length ? crypto.sparkline.slice(-36) : this.createFallbackSparkline(crypto);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    return values.map((value, index) => {
      const x = index / (values.length - 1) * width;
      const y = height - (value - min) / range * height;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
  }
  getHourlyChange(crypto) {
    return crypto.priceChange24h / 8;
  }
  getWeeklyChange(crypto) {
    return crypto.priceChange24h * 1.7;
  }
  createFallbackSparkline(crypto) {
    const base = crypto.currentPrice || 1;
    return Array.from({
      length: 36
    }, (_, index) => {
      const wave = Math.sin(index / 2.8) * base * 0.015;
      const trend = crypto.priceChange24h / 100 * base * (index / 35);
      return base + wave + trend;
    });
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
      consts: [[1, "crypto-container"], [1, "page-header"], [1, "text-muted"], [1, "search-box"], [1, "search-icon"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "aria-hidden", "true"], ["cx", "10", "cy", "10", "r", "6", "stroke", "currentColor", "stroke-width", "1.8"], ["d", "M15.5 15.5l4 4", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["type", "text", 1, "search-input", 3, "formControl", "placeholder"], ["class", "loading-container", 4, "ngIf"], ["class", "card", 4, "ngIf"], [1, "loading-container"], [1, "spinner"], [1, "card"], [1, "market-tools"], [1, "table-wrapper"], [1, "crypto-table"], [1, "col-rank"], [1, "col-name"], [1, "col-price", "sortable", 3, "click"], [1, "col-change", "sortable", 3, "click"], [1, "col-market-cap", "sortable", 3, "click"], [1, "col-actions"], ["class", "crypto-row", 4, "ngFor", "ngForOf"], ["class", "no-results", 4, "ngIf"], [1, "crypto-row"], [1, "crypto-name-cell"], ["class", "crypto-icon", 3, "src", "alt", 4, "ngIf"], ["class", "crypto-icon-placeholder", 4, "ngIf"], [1, "col-price"], [1, "col-change"], [1, "col-market-cap"], ["viewBox", "0 0 170 48", "preserveAspectRatio", "none", 1, "sparkline"], [1, "btn-icon", 3, "click", "title"], ["d", "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z", "stroke", "currentColor", "stroke-width", "1.8", "fill", "none"], [1, "crypto-icon", 3, "src", "alt"], [1, "crypto-icon-placeholder"], [1, "no-results"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, CryptocurrenciesComponent_div_16_Template, 5, 3, "div", 9)(17, CryptocurrenciesComponent_div_17_Template, 50, 23, "div", 10);
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
      styles: [".crypto-container[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl);\n  max-width: 1400px;\n  margin: 0 auto;\n  animation: fadeIn 0.4s ease-out;\n  min-width: 0;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--spacing-xl);\n  flex-wrap: wrap;\n  gap: var(--spacing-lg);\n  padding: var(--spacing-lg);\n  background: var(--layout-surface);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-sm);\n  backdrop-filter: blur(14px);\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  background: var(--gradient-crypto);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: var(--spacing-xs);\n}\n.page-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-text-tertiary);\n  max-width: 520px;\n}\n\n.search-box[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: min(100%, 380px);\n}\n.search-box[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  left: var(--spacing-md);\n  font-size: 1rem;\n  pointer-events: none;\n}\n.search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  padding-left: 2.5rem;\n  width: 100%;\n  background: var(--color-bg-secondary);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--radius-full);\n  transition: all var(--transition-fast);\n}\n.search-box[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-primary-light);\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  gap: var(--spacing-lg);\n}\n.loading-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 4px solid var(--color-bg-tertiary);\n  border-top-color: var(--color-primary-light);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border-radius: var(--radius-xl);\n}\n\n.market-tools[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: var(--spacing-md);\n  padding: var(--spacing-lg);\n  border-bottom: 1px solid var(--surface-border);\n}\n.market-tools[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  border-radius: var(--radius-lg);\n  background: var(--surface-highlight);\n  border: 1px solid var(--surface-border);\n}\n.market-tools[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .market-tools[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n.market-tools[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary);\n  font-size: 0.88rem;\n  margin-top: 0.25rem;\n}\n\n.crypto-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 1240px;\n}\n.crypto-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 2px solid var(--color-bg-tertiary);\n}\n.crypto-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n  text-align: left;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--color-text-tertiary);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.crypto-table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%] {\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  transition: color var(--transition-fast);\n}\n.crypto-table[_ngcontent-%COMP%]   th.sortable[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary-light);\n}\n.crypto-table[_ngcontent-%COMP%]   .crypto-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-bg-tertiary);\n  transition: all var(--transition-fast);\n}\n.crypto-table[_ngcontent-%COMP%]   .crypto-row[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover);\n}\n.crypto-table[_ngcontent-%COMP%]   .crypto-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: var(--spacing-md);\n}\n.crypto-table[_ngcontent-%COMP%]   .col-rank[_ngcontent-%COMP%] {\n  width: 50px;\n  color: var(--color-text-tertiary);\n  font-weight: 600;\n}\n.crypto-table[_ngcontent-%COMP%]   .col-name[_ngcontent-%COMP%] {\n  min-width: 200px;\n}\n.crypto-table[_ngcontent-%COMP%]   .crypto-name-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n}\n.crypto-table[_ngcontent-%COMP%]   .crypto-name-cell[_ngcontent-%COMP%]   .crypto-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n}\n.crypto-table[_ngcontent-%COMP%]   .crypto-name-cell[_ngcontent-%COMP%]   .crypto-icon-placeholder[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background: var(--gradient-primary);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  font-weight: 700;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.crypto-table[_ngcontent-%COMP%]   .crypto-name-cell[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n}\n.crypto-table[_ngcontent-%COMP%]   .crypto-name-cell[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8rem;\n}\n.crypto-table[_ngcontent-%COMP%]   .col-price[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1rem;\n}\n.crypto-table[_ngcontent-%COMP%]   .col-actions[_ngcontent-%COMP%] {\n  width: 80px;\n  text-align: center;\n}\n\n.btn-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: inline-grid;\n  place-items: center;\n  background: var(--color-bg-secondary);\n  border: 1px solid var(--surface-border);\n  font-size: 1.4rem;\n  cursor: pointer;\n  padding: var(--spacing-xs);\n  border-radius: var(--radius-sm);\n  transition: all var(--transition-fast);\n  opacity: 0.6;\n  color: var(--color-text-secondary);\n}\n.btn-icon[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  transform: translateY(-1px);\n  color: var(--color-warning);\n}\n.btn-icon.active[_ngcontent-%COMP%] {\n  opacity: 1;\n  color: var(--color-warning);\n  background: rgba(245, 158, 11, 0.12);\n}\n.btn-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\n.positive[_ngcontent-%COMP%] {\n  color: var(--color-gain);\n  font-weight: 700;\n}\n\n.negative[_ngcontent-%COMP%] {\n  color: var(--color-loss);\n  font-weight: 700;\n}\n\n.sparkline[_ngcontent-%COMP%] {\n  width: 170px;\n  height: 48px;\n}\n\n.sparkline[_ngcontent-%COMP%]   polyline[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: var(--color-gain);\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n.sparkline.negative[_ngcontent-%COMP%]   polyline[_ngcontent-%COMP%] {\n  stroke: var(--color-loss);\n}\n\n.no-results[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--spacing-2xl);\n  color: var(--color-text-tertiary);\n}\n\n@media (max-width: 768px) {\n  .crypto-container[_ngcontent-%COMP%] {\n    padding: var(--spacing-lg);\n  }\n  .page-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .search-box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .crypto-table[_ngcontent-%COMP%] {\n    min-width: 1180px;\n  }\n  .market-tools[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .crypto-container[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n  }\n  .page-header[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvY3J5cHRvY3VycmVuY2llcy9jcnlwdG9jdXJyZW5jaWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUFDRjtBQUNFO0VBQ0Usa0NBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQUNKO0FBRUU7RUFDRSxTQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQURGO0FBR0U7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBREo7QUFJRTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0FBRko7QUFJSTtFQUNFLHdDQUFBO0FBRk47O0FBT0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQUpGO0FBTUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBDQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FBSko7O0FBUUE7RUFDRTtJQUNFLHlCQUFBO0VBTEY7QUFDRjtBQVFBO0VBQ0UsZ0JBQUE7RUFDQSwrQkFBQTtBQU5GOztBQVNBO0VBQ0UsYUFBQTtFQUNBLGdEQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLDhDQUFBO0FBTkY7QUFRRTtFQUNFLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHVDQUFBO0FBTko7QUFTRTs7RUFFRSxjQUFBO0FBUEo7QUFVRTtFQUNFLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQVJKOztBQVlBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFURjtBQVdFO0VBQ0UsaURBQUE7QUFUSjtBQVlFO0VBQ0UsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUFWSjtBQVlJO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSx3Q0FBQTtBQVZOO0FBWU07RUFDRSxpQ0FBQTtBQVZSO0FBZUU7RUFDRSxpREFBQTtFQUNBLHNDQUFBO0FBYko7QUFlSTtFQUNFLGdDQUFBO0FBYk47QUFnQkk7RUFDRSwwQkFBQTtBQWROO0FBa0JFO0VBQ0UsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7QUFoQko7QUFtQkU7RUFDRSxnQkFBQTtBQWpCSjtBQW9CRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBbEJKO0FBb0JJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQWxCTjtBQXFCSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFuQk47QUFzQkk7RUFDRSxTQUFBO0VBQ0Esa0JBQUE7QUFwQk47QUF1Qkk7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7QUFyQk47QUF5QkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUF2Qko7QUEwQkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUF4Qko7O0FBNEJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQXpCRjtBQTJCRTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLDJCQUFBO0FBekJKO0FBNEJFO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0VBQ0Esb0NBQUE7QUExQko7QUE2QkU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQTNCSjs7QUErQkE7RUFDRSx3QkFBQTtFQUNBLGdCQUFBO0FBNUJGOztBQStCQTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7QUE1QkY7O0FBK0JBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUE1QkY7O0FBK0JBO0VBQ0UsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUE1QkY7O0FBK0JBO0VBQ0UseUJBQUE7QUE1QkY7O0FBK0JBO0VBQ0Usa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGlDQUFBO0FBNUJGOztBQStCQTtFQUNFO0lBQ0UsMEJBQUE7RUE1QkY7RUErQkE7SUFDRSxzQkFBQTtJQUNBLG9CQUFBO0VBN0JGO0VBZ0NBO0lBQ0UsV0FBQTtFQTlCRjtFQWlDQTtJQUNFLGlCQUFBO0VBL0JGO0VBa0NBO0lBQ0UsMEJBQUE7RUFoQ0Y7QUFDRjtBQW1DQTtFQUNFO0lBQ0UsMEJBQUE7RUFqQ0Y7RUFvQ0E7SUFDRSwwQkFBQTtFQWxDRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmNyeXB0by1jb250YWluZXIge1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXhsKTtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjRzIGVhc2Utb3V0O1xuICBtaW4td2lkdGg6IDA7XG59XG5cclxuLnBhZ2UtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmcteGwpO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctbGcpO1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWxheW91dC1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMteGwpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTRweCk7XG5cclxuICBoMSB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1jcnlwdG8pO1xyXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhzKTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtdGVydGlhcnkpO1xyXG4gICAgbWF4LXdpZHRoOiA1MjBweDtcclxuICB9XHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiBtaW4oMTAwJSwgMzgwcHgpO1xuXHJcbiAgLnNlYXJjaC1pY29uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IHZhcigtLXNwYWNpbmctbWQpO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc2VhcmNoLWlucHV0IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy1zZWNvbmRhcnkpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtZnVsbCk7XG4gICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tZmFzdCk7XHJcblxyXG4gICAgJjpmb2N1cyB7XG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktbGlnaHQpO1xuICAgIH1cbiAgfVxufVxuXHJcbi5sb2FkaW5nLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLWxnKTtcclxuXHJcbiAgLnNwaW5uZXIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1jb2xvci1iZy10ZXJ0aWFyeSk7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIHNwaW4ge1xyXG4gIHRvIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG59XHJcblxyXG4udGFibGUtd3JhcHBlciB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy14bCk7XG59XG5cbi5tYXJrZXQtdG9vbHMge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBtaW5tYXgoMCwgMWZyKSk7XG4gIGdhcDogdmFyKC0tc3BhY2luZy1tZCk7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xuXG4gIGRpdiB7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWhpZ2hsaWdodCk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xuICB9XG5cbiAgc3Ryb25nLFxuICBzcGFuIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxuXG4gIHNwYW4ge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgZm9udC1zaXplOiAwLjg4cmVtO1xuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gIH1cbn1cblxyXG4uY3J5cHRvLXRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWluLXdpZHRoOiAxMjQwcHg7XG5cclxuICB0aGVhZCB0ciB7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tY29sb3ItYmctdGVydGlhcnkpO1xyXG4gIH1cclxuXHJcbiAgdGgge1xyXG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCk7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXRlcnRpYXJ5KTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XHJcblxyXG4gICAgJi5zb3J0YWJsZSB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIHZhcigtLXRyYW5zaXRpb24tZmFzdCk7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1saWdodCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jcnlwdG8tcm93IHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYmctdGVydGlhcnkpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tZmFzdCk7XHJcblxyXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWhvdmVyKTtcbiAgICB9XG5cclxuICAgIHRkIHtcclxuICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY29sLXJhbmsge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC10ZXJ0aWFyeSk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLmNvbC1uYW1lIHtcclxuICAgIG1pbi13aWR0aDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAuY3J5cHRvLW5hbWUtY2VsbCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogdmFyKC0tc3BhY2luZy1tZCk7XHJcblxyXG4gICAgLmNyeXB0by1pY29uIHtcclxuICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jcnlwdG8taWNvbi1wbGFjZWhvbGRlciB7XHJcbiAgICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb2wtcHJpY2Uge1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICB9XHJcblxyXG4gIC5jb2wtYWN0aW9ucyB7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5idG4taWNvbiB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ncmlkO1xuICBwbGFjZS1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy1zZWNvbmRhcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXhzKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtc20pO1xyXG4gIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLWZhc3QpO1xyXG4gIG9wYWNpdHk6IDAuNjtcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcblxyXG4gICY6aG92ZXIge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13YXJuaW5nKTtcbiAgfVxuXG4gICYuYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci13YXJuaW5nKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMTU4LCAxMSwgMC4xMik7XG4gIH1cblxuICBzdmcge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbiAgfVxufVxuXG4ucG9zaXRpdmUge1xuICBjb2xvcjogdmFyKC0tY29sb3ItZ2Fpbik7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5uZWdhdGl2ZSB7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1sb3NzKTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnNwYXJrbGluZSB7XG4gIHdpZHRoOiAxNzBweDtcbiAgaGVpZ2h0OiA0OHB4O1xufVxuXG4uc3BhcmtsaW5lIHBvbHlsaW5lIHtcbiAgZmlsbDogbm9uZTtcbiAgc3Ryb2tlOiB2YXIoLS1jb2xvci1nYWluKTtcbiAgc3Ryb2tlLXdpZHRoOiAzO1xuICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gIHN0cm9rZS1saW5lam9pbjogcm91bmQ7XG59XG5cbi5zcGFya2xpbmUubmVnYXRpdmUgcG9seWxpbmUge1xuICBzdHJva2U6IHZhcigtLWNvbG9yLWxvc3MpO1xufVxuXHJcbi5uby1yZXN1bHRzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy0yeGwpO1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXRlcnRpYXJ5KTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmNyeXB0by1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xuICB9XG5cbiAgLnBhZ2UtaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG5cbiAgLnNlYXJjaC1ib3gge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgLmNyeXB0by10YWJsZSB7XG4gICAgbWluLXdpZHRoOiAxMTgwcHg7XG4gIH1cblxuICAubWFya2V0LXRvb2xzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNyeXB0by1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpO1xuICB9XG5cbiAgLnBhZ2UtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _cryptocurrencies_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cryptocurrencies.component */ 4976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);







const routes = [{
  path: '',
  component: _cryptocurrencies_component__WEBPACK_IMPORTED_MODULE_0__.CryptocurrenciesComponent
}];
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
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CryptocurrenciesModule, {
    declarations: [_cryptocurrencies_component__WEBPACK_IMPORTED_MODULE_0__.CryptocurrenciesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_cryptocurrencies_cryptocurrencies_module_ts.js.map