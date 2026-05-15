"use strict";
(self["webpackChunkcrypto_monitor_frontend"] = self["webpackChunkcrypto_monitor_frontend"] || []).push([["src_app_features_dashboard_dashboard_module_ts"],{

/***/ 1626:
/*!***********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_crypto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/crypto.service */ 9741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 597);







function DashboardComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 33);
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
function DashboardComponent_div_98_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 81)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const crypto_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](crypto_r1.symbol.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r1.getPriceChangeClass(crypto_r1.priceChange24h));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", crypto_r1.priceChange24h >= 0 ? "+" : "", "", crypto_r1.priceChange24h.toFixed(2), "% ");
  }
}
function DashboardComponent_div_98_div_82_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 88);
  }
  if (rf & 2) {
    const crypto_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", crypto_r3.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", crypto_r3.name);
  }
}
function DashboardComponent_div_98_div_82_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const crypto_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](crypto_r3.symbol.charAt(0));
  }
}
function DashboardComponent_div_98_div_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 82)(1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DashboardComponent_div_98_div_82_img_2_Template, 1, 2, "img", 84)(3, DashboardComponent_div_98_div_82_div_3_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 86)(10, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const crypto_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", crypto_r3.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !crypto_r3.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](crypto_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](crypto_r3.symbol.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.formatPrice(crypto_r3.currentPrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("change " + ctx_r1.getPriceChangeClass(crypto_r3.priceChange24h));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", crypto_r3.priceChange24h >= 0 ? "+" : "", "", crypto_r3.priceChange24h.toFixed(2), "% ");
  }
}
function DashboardComponent_div_98_div_93_img_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 88);
  }
  if (rf & 2) {
    const crypto_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", crypto_r4.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", crypto_r4.name);
  }
}
function DashboardComponent_div_98_div_93_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const crypto_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](crypto_r4.symbol.charAt(0));
  }
}
function DashboardComponent_div_98_div_93_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 82)(1, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DashboardComponent_div_98_div_93_img_2_Template, 1, 2, "img", 84)(3, DashboardComponent_div_98_div_93_div_3_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div")(5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 86)(10, "p", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const crypto_r4 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", crypto_r4.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !crypto_r4.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](crypto_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](crypto_r4.symbol.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.formatPrice(crypto_r4.currentPrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("change " + ctx_r1.getPriceChangeClass(crypto_r4.priceChange24h));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", crypto_r4.priceChange24h >= 0 ? "+" : "", "", crypto_r4.priceChange24h.toFixed(2), "% ");
  }
}
function DashboardComponent_div_98_div_115_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 88);
  }
  if (rf & 2) {
    const crypto_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", crypto_r5.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", crypto_r5.name);
  }
}
function DashboardComponent_div_98_div_115_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const crypto_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](crypto_r5.symbol.charAt(0));
  }
}
function DashboardComponent_div_98_div_115_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 90)(1, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DashboardComponent_div_98_div_115_img_4_Template, 1, 2, "img", 84)(5, DashboardComponent_div_98_div_115_div_5_Template, 2, 1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div")(7, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 77)(14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "svg", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "polyline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const crypto_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", crypto_r5.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !crypto_r5.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](crypto_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](crypto_r5.symbol.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.formatPrice(crypto_r5.currentPrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("badge " + (crypto_r5.priceChange24h >= 0 ? "badge-success" : "badge-danger"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", crypto_r5.priceChange24h >= 0 ? "+" : "", "", crypto_r5.priceChange24h.toFixed(2), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.formatMarketCap(crypto_r5.marketCap || 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("negative", crypto_r5.priceChange24h < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("points", ctx_r1.getSparklinePoints(crypto_r5));
  }
}
function DashboardComponent_div_98_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34)(1, "section", 35)(2, "article", 36)(3, "div", 37)(4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Portfolio");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Gerir");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "strong", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "span", 41)(14, "span", 42)(15, "span", 43)(16, "span", 44)(17, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "article", 46)(19, "div", 37)(20, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Alertas de subida/queda");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, DashboardComponent_div_98_div_24_Template, 5, 5, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "article", 49)(26, "div", 37)(27, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Not\u00EDcias e tend\u00EAncias");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p")(30, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Mercado atento:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " volume e volatilidade seguem altos nas principais moedas.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p")(34, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Tend\u00EAncia:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 50)(38, "div", 51)(39, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "svg", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "circle", 54)(42, "path", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 56)(44, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](48, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 51)(50, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "svg", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "path", 57)(53, "path", 58)(54, "path", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 56)(56, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](60, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 51)(62, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "svg", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "path", 60)(65, "path", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 56)(67, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "Cryptocurrencies");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 62)(72, "div", 63)(73, "div", 64)(74, "h2")(75, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "svg", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](77, "path", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](79, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 67)(81, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](82, DashboardComponent_div_98_div_82_Template, 14, 9, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "div", 63)(84, "div", 64)(85, "h2")(86, "span", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "svg", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "path", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](90, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 67)(92, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, DashboardComponent_div_98_div_93_Template, 14, 9, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 71)(95, "div", 64)(96, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "Compara\u00E7\u00E3o, gr\u00E1ficos e indicadores");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Ver tudo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 67)(101, "div", 72)(102, "div", 73)(103, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "24h Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "Market Cap");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "7 dias");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](115, DashboardComponent_div_98_div_115_Template, 21, 14, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.formatPrice(ctx_r1.portfolioValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("+", ctx_r1.portfolioChange, "% nas \u00FAltimas 24h");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.activeAlerts);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.topGainers.slice(0, 3));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx_r1.getTrendLabel(ctx_r1.getTopTrendChange()), " em ", ctx_r1.getTopTrendName(), ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.formatMarketCap(ctx_r1.totalMarketCap));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](48, 16, "dashboard.marketCap"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.formatMarketCap(ctx_r1.totalVolume24h));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](60, 18, "dashboard.volume24h"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.recentCryptos.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](79, 20, "dashboard.topGainers"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.topGainers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](90, 22, "dashboard.topLosers"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.topLosers);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.recentCryptos);
  }
}
class DashboardComponent {
  constructor(cryptoService) {
    this.cryptoService = cryptoService;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    this.loading = true;
    this.topGainers = [];
    this.topLosers = [];
    this.recentCryptos = [];
    this.totalMarketCap = 0;
    this.totalVolume24h = 0;
    this.portfolioValue = 12840.72;
    this.portfolioChange = 4.8;
    this.activeAlerts = 6;
    this.marketDominance = 'BTC 58.2% / ETH 9.9%';
  }
  ngOnInit() {
    this.loadDashboardData();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadDashboardData() {
    this.loading = true;
    this.cryptoService.getCryptocurrencies(1, 50).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.takeUntil)(this.destroy$)).subscribe({
      next: cryptos => {
        this.recentCryptos = cryptos.slice(0, 10);
        this.topGainers = [...cryptos].sort((a, b) => b.priceChange24h - a.priceChange24h).slice(0, 5);
        this.topLosers = [...cryptos].sort((a, b) => a.priceChange24h - b.priceChange24h).slice(0, 5);
        this.totalMarketCap = cryptos.reduce((sum, c) => sum + (c.marketCap || 0), 0);
        this.totalVolume24h = cryptos.reduce((sum, c) => sum + (c.volume24h || 0), 0);
        this.loading = false;
      },
      error: err => {
        console.error('Error loading dashboard data:', err);
        this.loading = false;
      }
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
  formatMarketCap(value) {
    if (value >= 1e12) return `$${(value / 1e12).toFixed(2)}T`;
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    return `$${value.toFixed(2)}`;
  }
  getPriceChangeClass(change) {
    return change >= 0 ? 'positive' : 'negative';
  }
  getSparklinePoints(crypto, width = 150, height = 52) {
    const values = crypto.sparkline?.length ? crypto.sparkline.slice(-32) : this.createFallbackSparkline(crypto);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    return values.map((value, index) => {
      const x = index / (values.length - 1) * width;
      const y = height - (value - min) / range * height;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
  }
  getTrendLabel(change) {
    if (change >= 5) return 'Forte alta';
    if (change >= 0) return 'Alta moderada';
    if (change <= -5) return 'Queda forte';
    return 'Atenção';
  }
  getTopTrendChange() {
    return this.topGainers.length ? this.topGainers[0].priceChange24h : 0;
  }
  getTopTrendName() {
    return this.topGainers.length ? this.topGainers[0].name : 'ativos líderes';
  }
  createFallbackSparkline(crypto) {
    const base = crypto.currentPrice || 1;
    return Array.from({
      length: 32
    }, (_, index) => {
      const wave = Math.sin(index / 3) * base * 0.018;
      const trend = crypto.priceChange24h / 100 * base * (index / 31);
      return base + wave + trend;
    });
  }
  static {
    this.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_crypto_service__WEBPACK_IMPORTED_MODULE_0__.CryptoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 99,
      vars: 24,
      consts: [[1, "dashboard-container"], [1, "dashboard-header"], [1, "eyebrow"], [1, "text-muted"], [1, "dashboard-header-actions"], ["routerLink", "/cryptocurrencies", 1, "btn", "btn-secondary", "btn-sm"], ["routerLink", "/favorites", 1, "btn", "btn-secondary", "btn-sm"], [1, "market-strip"], [1, "feature-grid"], [1, "feature-card"], [1, "feature-card-icon"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4 16h16", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["d", "M6 12h3", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["d", "M6 8h1.5", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["d", "M10 18V8", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["d", "M14 18V10", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["d", "M18 18V12", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["routerLink", "/cryptocurrencies", 1, "feature-link"], ["cx", "11", "cy", "11", "r", "5", "stroke", "currentColor", "stroke-width", "1.8"], ["d", "M16.5 16.5l4 4", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["d", "M8 8h4", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["d", "M8 11h4", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["d", "M6 4h12v16l-6-4-6 4V4Z", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linejoin", "round"], ["d", "M9.5 10.5l1.5 1.75 2.5-1.5", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["routerLink", "/favorites", 1, "feature-link"], ["d", "M6 5h12v14H6z", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linejoin", "round"], ["d", "M9 9h6", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["d", "M9 13h6", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["routerLink", "/export", 1, "feature-link"], ["class", "loading-container", 4, "ngIf"], ["class", "dashboard-content", 4, "ngIf"], [1, "loading-container"], [1, "spinner"], [1, "dashboard-content"], [1, "workspace-grid"], [1, "portfolio-card"], [1, "card-header", "compact"], [1, "portfolio-value"], [1, "portfolio-change", "positive"], [1, "portfolio-bars"], [2, "--bar", "68%"], [2, "--bar", "48%"], [2, "--bar", "82%"], [2, "--bar", "36%"], [2, "--bar", "58%"], [1, "alerts-card"], [1, "badge", "badge-warning"], ["class", "alert-row", 4, "ngFor", "ngForOf"], [1, "news-card"], [1, "stats-grid"], [1, "stat-card"], [1, "stat-icon"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", "aria-hidden", "true"], ["cx", "12", "cy", "12", "r", "8", "stroke", "currentColor", "stroke-width", "1.8"], ["d", "M8 12h3l2 3", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "stat-content"], ["d", "M6 18V10", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["d", "M12 18V6", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["d", "M18 18V14", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["d", "M12 3a4 4 0 1 1 0 8a4 4 0 0 1 0-8Z", "stroke", "currentColor", "stroke-width", "1.8"], ["d", "M12 15a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z", "stroke", "currentColor", "stroke-width", "1.8"], [1, "gainers-losers-grid"], [1, "card"], [1, "card-header"], [1, "card-title-icon"], ["d", "M5 15l4-4 4 4 6-6", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "card-body"], [1, "crypto-list"], ["class", "crypto-item", 4, "ngFor", "ngForOf"], ["d", "M19 9l-4 4-4-4-6 6", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "card", "analysis-card"], [1, "crypto-table"], [1, "table-header"], [1, "col-rank"], [1, "col-name"], [1, "col-price"], [1, "col-change"], [1, "col-market-cap"], [1, "col-chart"], ["class", "table-row", 4, "ngFor", "ngForOf"], [1, "alert-row"], [1, "crypto-item"], [1, "crypto-info"], ["class", "crypto-icon", 3, "src", "alt", 4, "ngIf"], ["class", "crypto-icon-placeholder", 4, "ngIf"], [1, "crypto-price"], [1, "price"], [1, "crypto-icon", 3, "src", "alt"], [1, "crypto-icon-placeholder"], [1, "table-row"], ["viewBox", "0 0 150 52", "preserveAspectRatio", "none", 1, "sparkline"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div")(3, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Vis\u00E3o completa das criptomoedas, posi\u00E7\u00F5es guardadas e desempenho do mercado.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4)(12, "a", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "section", 7)(19, "div")(20, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div")(26, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](28, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div")(32, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Domin\u00E2ncia");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "div")(37, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Alertas ativos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "section", 8)(42, "article", 9)(43, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "svg", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "path", 12)(46, "path", 13)(47, "path", 14)(48, "path", 15)(49, "path", 16)(50, "path", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div")(52, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Visualiza\u00E7\u00E3o de pre\u00E7os");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Acompanhe cota\u00E7\u00F5es em tempo real e compare os principais ativos de forma clara.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Ver pre\u00E7os");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "article", 9)(59, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "svg", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "circle", 19)(62, "path", 20)(63, "path", 21)(64, "path", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div")(66, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Pesquisa de moedas");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Filtre por nome e s\u00EDmbolo para encontrar qualquer cripto rapidamente.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "a", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Buscar agora");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "article", 9)(73, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "svg", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](75, "path", 23)(76, "path", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div")(78, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Favoritos e hist\u00F3rico");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "Mantenha suas moedas preferidas e visualize movimentos anteriores do mercado.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "a", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Acessar favoritos");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "article", 9)(85, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "svg", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "path", 26)(88, "path", 27)(89, "path", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div")(91, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Exporta\u00E7\u00E3o CSV/PDF");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](93, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](94, "Baixe relat\u00F3rios pr\u00E1ticos com seus dados de criptomoedas e hist\u00F3rico.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "a", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Exportar dados");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](97, DashboardComponent_div_97_Template, 5, 3, "div", 30)(98, DashboardComponent_div_98_Template, 116, 24, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 12, "dashboard.eyebrow"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 14, "dashboard.title"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 16, "dashboard.explore"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 18, "nav.favorites"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 20, "dashboard.marketCap"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.formatMarketCap(ctx.totalMarketCap));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](28, 22, "dashboard.volume24h"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.formatMarketCap(ctx.totalVolume24h));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.marketDominance);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.activeAlerts);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe],
      styles: [".dashboard-container[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl);\n  max-width: 1400px;\n  margin: 0 auto;\n  animation: fadeIn 0.4s ease-out;\n  min-width: 0;\n}\n\n.dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--spacing-xl);\n  margin-bottom: var(--spacing-lg);\n}\n\n.dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2.6rem;\n  line-height: 1.05;\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n.dashboard-header[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: var(--color-primary-light);\n  font-size: 0.85rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  margin-bottom: 0.75rem;\n}\n\n.dashboard-header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n\n.market-strip[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: var(--spacing-md);\n  margin-bottom: var(--spacing-lg);\n}\n\n.market-strip[_ngcontent-%COMP%]   div[_ngcontent-%COMP%], .portfolio-card[_ngcontent-%COMP%], .alerts-card[_ngcontent-%COMP%], .news-card[_ngcontent-%COMP%] {\n  background: var(--layout-surface);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-sm);\n}\n\n.market-strip[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: var(--spacing-md) var(--spacing-lg);\n}\n\n.market-strip[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--color-text-tertiary);\n  font-size: 0.82rem;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\n.market-strip[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.35rem;\n  font-size: 1.1rem;\n}\n\n.feature-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: var(--spacing-lg);\n  margin-bottom: var(--spacing-xl);\n}\n\n.feature-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: var(--spacing-md);\n  background: var(--layout-surface);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--radius-xl);\n  padding: var(--spacing-xl);\n  box-shadow: var(--shadow-sm);\n  min-height: 220px;\n  transition: transform var(--transition-fast), box-shadow var(--transition-fast), border-color var(--transition-fast);\n  backdrop-filter: blur(14px);\n}\n\n.feature-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--shadow-md);\n  border-color: rgba(79, 70, 229, 0.24);\n}\n\n.feature-card-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  display: grid;\n  place-items: center;\n  border-radius: var(--radius-lg);\n  background: rgba(79, 70, 229, 0.1);\n  color: var(--color-primary);\n}\n\n.feature-card-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.feature-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n}\n\n.feature-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  padding: var(--spacing-sm) var(--spacing-md);\n  border-radius: var(--radius-lg);\n  color: var(--color-primary-light);\n  background: rgba(79, 70, 229, 0.1);\n  text-decoration: none;\n  width: -moz-fit-content;\n  width: fit-content;\n  transition: background var(--transition-fast), transform var(--transition-fast);\n}\n\n.feature-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-light);\n  color: var(--color-bg-primary);\n  transform: translateY(-1px);\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 320px;\n  gap: var(--spacing-lg);\n}\n\n.loading-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 4px solid var(--color-bg-tertiary);\n  border-top-color: var(--color-primary-light);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: var(--spacing-lg);\n  margin-bottom: var(--spacing-xl);\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: var(--layout-surface);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--radius-xl);\n  padding: var(--spacing-xl);\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-lg);\n  box-shadow: var(--shadow-md);\n  transition: transform var(--transition-base), box-shadow var(--transition-base);\n  backdrop-filter: blur(14px);\n}\n\n.workspace-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.1fr 1fr 1.2fr;\n  gap: var(--spacing-lg);\n  margin-bottom: var(--spacing-xl);\n}\n\n.portfolio-card[_ngcontent-%COMP%], .alerts-card[_ngcontent-%COMP%], .news-card[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg);\n}\n\n.card-header.compact[_ngcontent-%COMP%] {\n  padding: 0 0 var(--spacing-md);\n}\n\n.portfolio-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 2rem;\n  line-height: 1.1;\n}\n\n.portfolio-change[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-top: 0.5rem;\n  font-weight: 700;\n}\n\n.portfolio-bars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  gap: 0.5rem;\n  height: 82px;\n  margin-top: var(--spacing-lg);\n}\n\n.portfolio-bars[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n  height: var(--bar);\n  border-radius: var(--radius-sm) var(--radius-sm) 0 0;\n  background: var(--gradient-primary);\n}\n\n.alert-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid var(--surface-border);\n}\n\n.alert-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n\n.news-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.85rem;\n}\n\n.news-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--shadow-lg);\n}\n\n.stat-icon[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 18px;\n  display: grid;\n  place-items: center;\n  background: rgba(245, 158, 11, 0.14);\n  color: var(--color-accent);\n}\n\n.stat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n\n.stat-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.9rem;\n  margin: 0 0 var(--spacing-xs) 0;\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n.stat-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-text-tertiary);\n  font-size: 0.95rem;\n  margin: 0;\n}\n\n.gainers-losers-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));\n  gap: var(--spacing-lg);\n  margin-bottom: var(--spacing-xl);\n}\n\n.card[_ngcontent-%COMP%] {\n  background: var(--layout-surface);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-md);\n  overflow: hidden;\n  backdrop-filter: blur(14px);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--spacing-md);\n  padding: var(--spacing-lg);\n  border-bottom: 1px solid var(--surface-border);\n}\n\n.card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin: 0;\n  font-size: 1.15rem;\n}\n\n.card-title-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-lg);\n  background: rgba(79, 70, 229, 0.1);\n  align-items: center;\n  justify-content: center;\n}\n\n.card-title-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg);\n}\n\n.crypto-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacing-md);\n}\n\n.crypto-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: var(--spacing-md);\n  background: var(--color-bg-secondary);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--radius-md);\n  transition: transform var(--transition-fast), background var(--transition-fast);\n}\n\n.crypto-item[_ngcontent-%COMP%]:hover {\n  transform: translateX(3px);\n  background: var(--color-bg-hover);\n}\n\n.crypto-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n}\n\n.crypto-icon[_ngcontent-%COMP%], .crypto-icon-placeholder[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n}\n\n.crypto-icon-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--gradient-primary);\n  color: white;\n  font-weight: 700;\n  font-size: 1.05rem;\n}\n\n.crypto-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n\n.crypto-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: var(--color-text-secondary);\n}\n\n.crypto-price[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.crypto-price[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1.1rem;\n  margin: 0 0 var(--spacing-xs) 0;\n}\n\n.change.positive[_ngcontent-%COMP%] {\n  color: var(--color-gain);\n}\n\n.change.negative[_ngcontent-%COMP%] {\n  color: var(--color-loss);\n}\n\n.crypto-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%], .crypto-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 50px 2fr 1.1fr 1.1fr 1.3fr 1.2fr;\n  gap: var(--spacing-md);\n  align-items: center;\n  padding: var(--spacing-md);\n  min-width: 780px;\n}\n\n.sparkline[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 52px;\n}\n\n.sparkline[_ngcontent-%COMP%]   polyline[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: var(--color-gain);\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n.sparkline.negative[_ngcontent-%COMP%]   polyline[_ngcontent-%COMP%] {\n  stroke: var(--color-loss);\n}\n\n.crypto-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text-tertiary);\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  border-bottom: 2px solid var(--surface-border);\n}\n\n.crypto-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--surface-border);\n  transition: background var(--transition-fast);\n}\n\n.crypto-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg-tertiary);\n}\n\n.crypto-table[_ngcontent-%COMP%]   .col-name[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n}\n\n.crypto-table[_ngcontent-%COMP%]   .col-name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n}\n\n.crypto-table[_ngcontent-%COMP%]   .col-name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8rem;\n  color: var(--color-text-secondary);\n}\n\n.crypto-table[_ngcontent-%COMP%]   .col-price[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n\n@media (max-width: 768px) {\n  .dashboard-container[_ngcontent-%COMP%] {\n    padding: var(--spacing-lg);\n  }\n  .dashboard-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .dashboard-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.1rem;\n  }\n  .gainers-losers-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .market-strip[_ngcontent-%COMP%], .workspace-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .crypto-table[_ngcontent-%COMP%] {\n    overflow-x: auto;\n    padding-bottom: var(--spacing-sm);\n  }\n  .crypto-table[_ngcontent-%COMP%]   .table-header[_ngcontent-%COMP%], .crypto-table[_ngcontent-%COMP%]   .table-row[_ngcontent-%COMP%] {\n    grid-template-columns: 40px 1.5fr 1fr 1fr 1fr 1fr;\n    font-size: 0.85rem;\n  }\n}\n@media (max-width: 480px) {\n  .dashboard-container[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n  }\n  .stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .market-strip[_ngcontent-%COMP%], .workspace-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .stat-card[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    padding: var(--spacing-lg);\n  }\n  .crypto-item[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    gap: var(--spacing-md);\n  }\n  .crypto-price[_ngcontent-%COMP%] {\n    min-width: 100px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxnREFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTs7OztFQUlFLGlDQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw0Q0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUNBQUE7RUFDQSx1Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0hBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkJBQUE7RUFDQSw0QkFB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QUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0NBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0FBQUY7O0FBR0E7RUFDRTtJQUNFLDBCQUFBO0VBQUY7RUFHQTtJQUNFLHNCQUFBO0lBQ0Esb0JBQUE7RUFERjtFQUlBO0lBQ0UsaUJBQUE7RUFGRjtFQUtBO0lBQ0UsMEJBQUE7RUFIRjtFQU1BOztJQUVFLDhCQUFBO0VBSkY7RUFPQTtJQUNFLGdCQUFBO0lBQ0EsaUNBQUE7RUFMRjtFQVFBOztJQUVFLGlEQUFBO0lBQ0Esa0JBQUE7RUFORjtBQUNGO0FBVUE7RUFDRTtJQUNFLDBCQUFBO0VBUkY7RUFXQTtJQUNFLDBCQUFBO0VBVEY7RUFZQTs7SUFFRSwwQkFBQTtFQVZGO0VBYUE7SUFDRSx1QkFBQTtJQUNBLDBCQUFBO0VBWEY7RUFjQTtJQUNFLHVCQUFBO0lBQ0Esc0JBQUE7RUFaRjtFQWVBO0lBQ0UsZ0JBQUE7RUFiRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmRhc2hib2FyZC1jb250YWluZXIge1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXhsKTtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBhbmltYXRpb246IGZhZGVJbiAwLjRzIGVhc2Utb3V0O1xuICBtaW4td2lkdGg6IDA7XG59XG5cclxuLmRhc2hib2FyZC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLXhsKTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLWxnKTtcclxufVxyXG5cclxuLmRhc2hib2FyZC1oZWFkZXIgaDEge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMi42cmVtO1xuICBsaW5lLWhlaWdodDogMS4wNTtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxufVxyXG5cclxuLmRhc2hib2FyZC1oZWFkZXIgLmV5ZWJyb3cge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1saWdodCk7XHJcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xNGVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcbn1cclxuXHJcbi5kYXNoYm9hcmQtaGVhZGVyLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDAuNzVyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLm1hcmtldC1zdHJpcCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTtcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1kKTtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1sZyk7XG59XG5cbi5tYXJrZXQtc3RyaXAgZGl2LFxuLnBvcnRmb2xpby1jYXJkLFxuLmFsZXJ0cy1jYXJkLFxuLm5ld3MtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxheW91dC1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMteGwpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xufVxuXG4ubWFya2V0LXN0cmlwIGRpdiB7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpIHZhcigtLXNwYWNpbmctbGcpO1xufVxuXG4ubWFya2V0LXN0cmlwIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtdGVydGlhcnkpO1xuICBmb250LXNpemU6IDAuODJyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tYXJrZXQtc3RyaXAgc3Ryb25nIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi10b3A6IDAuMzVyZW07XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuXHJcbi5mZWF0dXJlLWdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMjBweCwgMWZyKSk7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLWxnKTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhsKTtcclxufVxyXG5cclxuLmZlYXR1cmUtY2FyZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1sYXlvdXQtc3VyZmFjZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXhsKTtcclxuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xuICBtaW4taGVpZ2h0OiAyMjBweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLXRyYW5zaXRpb24tZmFzdCksIGJveC1zaGFkb3cgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KSwgYm9yZGVyLWNvbG9yIHZhcigtLXRyYW5zaXRpb24tZmFzdCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNHB4KTtcbn1cblxyXG4uZmVhdHVyZS1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpO1xuICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xuICBib3JkZXItY29sb3I6IHJnYmEoNzksIDcwLCAyMjksIDAuMjQpO1xufVxuXHJcbi5mZWF0dXJlLWNhcmQtaWNvbiB7XHJcbiAgd2lkdGg6IDQ4cHg7XHJcbiAgaGVpZ2h0OiA0OHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDc5LCA3MCwgMjI5LCAwLjEpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XHJcblxyXG4uZmVhdHVyZS1jYXJkLWljb24gc3ZnIHtcclxuICB3aWR0aDogMjRweDtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbn1cclxuXHJcbi5mZWF0dXJlLWNhcmQgaDMge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEuMDVyZW07XHJcbn1cclxuXHJcbi5mZWF0dXJlLWxpbmsge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSkgdmFyKC0tc3BhY2luZy1tZCk7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1saWdodCk7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg3OSwgNzAsIDIyOSwgMC4xKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIHZhcigtLXRyYW5zaXRpb24tZmFzdCksIHRyYW5zZm9ybSB2YXIoLS10cmFuc2l0aW9uLWZhc3QpO1xyXG59XHJcblxyXG4uZmVhdHVyZS1saW5rOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItYmctcHJpbWFyeSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG59XHJcblxyXG4ubG9hZGluZy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDMyMHB4O1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy1sZyk7XHJcbn1cclxuXHJcbi5sb2FkaW5nLWNvbnRhaW5lciAuc3Bpbm5lciB7XG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXI6IDRweCBzb2xpZCB2YXIoLS1jb2xvci1iZy10ZXJ0aWFyeSk7XHJcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1saWdodCk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICB9XHJcbn1cclxuXHJcbi5zdGF0cy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjYwcHgsIDFmcikpO1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy1sZyk7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy14bCk7XHJcbn1cclxuXHJcbi5zdGF0LWNhcmQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1sYXlvdXQtc3VyZmFjZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy14bCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy1sZyk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gdmFyKC0tdHJhbnNpdGlvbi1iYXNlKSwgYm94LXNoYWRvdyB2YXIoLS10cmFuc2l0aW9uLWJhc2UpO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTRweCk7XG59XG5cbi53b3Jrc3BhY2UtZ3JpZCB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMS4xZnIgMWZyIDEuMmZyO1xuICBnYXA6IHZhcigtLXNwYWNpbmctbGcpO1xuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhsKTtcbn1cblxuLnBvcnRmb2xpby1jYXJkLFxuLmFsZXJ0cy1jYXJkLFxuLm5ld3MtY2FyZCB7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xufVxuXG4uY2FyZC1oZWFkZXIuY29tcGFjdCB7XG4gIHBhZGRpbmc6IDAgMCB2YXIoLS1zcGFjaW5nLW1kKTtcbn1cblxuLnBvcnRmb2xpby12YWx1ZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjE7XG59XG5cbi5wb3J0Zm9saW8tY2hhbmdlIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLnBvcnRmb2xpby1iYXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBnYXA6IDAuNXJlbTtcbiAgaGVpZ2h0OiA4MnB4O1xuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjaW5nLWxnKTtcbn1cblxuLnBvcnRmb2xpby1iYXJzIHNwYW4ge1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IHZhcigtLWJhcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1zbSkgdmFyKC0tcmFkaXVzLXNtKSAwIDA7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xufVxuXG4uYWxlcnQtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nOiAwLjc1cmVtIDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG59XG5cbi5hbGVydC1yb3c6bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IDA7XG59XG5cbi5uZXdzLWNhcmQgcCB7XG4gIG1hcmdpbjogMCAwIDAuODVyZW07XG59XG5cbi5uZXdzLWNhcmQgcDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxyXG4uc3RhdC1jYXJkOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7XHJcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcclxufVxyXG5cclxuLnN0YXQtaWNvbiB7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCAxNTgsIDExLCAwLjE0KTtcbiAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XG59XHJcblxyXG4uc3RhdC1pY29uIHN2ZyB7XHJcbiAgd2lkdGg6IDMycHg7XHJcbiAgaGVpZ2h0OiAzMnB4O1xyXG59XHJcblxyXG4uc3RhdC1jb250ZW50IGgzIHtcclxuICBmb250LXNpemU6IDEuOXJlbTtcclxuICBtYXJnaW46IDAgMCB2YXIoLS1zcGFjaW5nLXhzKSAwO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbn1cclxuXHJcbi5zdGF0LWNvbnRlbnQgcCB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtdGVydGlhcnkpO1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5nYWluZXJzLWxvc2Vycy1ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDIwcHgsIDFmcikpO1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy1sZyk7XHJcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy14bCk7XHJcbn1cclxuXHJcbi5jYXJkIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbGF5b3V0LXN1cmZhY2UpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy14bCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNHB4KTtcbn1cblxyXG4uY2FyZC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xufVxyXG5cclxuLmNhcmQtaGVhZGVyIGgyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjc1cmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEuMTVyZW07XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxlLWljb24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHdpZHRoOiAzNHB4O1xyXG4gIGhlaWdodDogMzRweDtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDc5LCA3MCwgMjI5LCAwLjEpO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZS1pY29uIHN2ZyB7XHJcbiAgd2lkdGg6IDE4cHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcclxufVxyXG5cclxuLmNyeXB0by1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxufVxyXG5cclxuLmNyeXB0by1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy1zZWNvbmRhcnkpO1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLXRyYW5zaXRpb24tZmFzdCksIGJhY2tncm91bmQgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KTtcclxufVxyXG5cclxuLmNyeXB0by1pdGVtOmhvdmVyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoM3B4KTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy1ob3Zlcik7XHJcbn1cclxuXHJcbi5jcnlwdG8taW5mbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy1tZCk7XHJcbn1cclxuXHJcbi5jcnlwdG8taWNvbixcclxuLmNyeXB0by1pY29uLXBsYWNlaG9sZGVyIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY3J5cHRvLWljb24tcGxhY2Vob2xkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDEuMDVyZW07XHJcbn1cclxuXHJcbi5jcnlwdG8taW5mbyBoNCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmNyeXB0by1pbmZvIHAge1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcclxufVxyXG5cclxuLmNyeXB0by1wcmljZSB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5jcnlwdG8tcHJpY2UgLnByaWNlIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIG1hcmdpbjogMCAwIHZhcigtLXNwYWNpbmcteHMpIDA7XHJcbn1cclxuXHJcbi5jaGFuZ2UucG9zaXRpdmUge1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1nYWluKTtcclxufVxyXG5cclxuLmNoYW5nZS5uZWdhdGl2ZSB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLWxvc3MpO1xyXG59XHJcblxyXG4uY3J5cHRvLXRhYmxlIC50YWJsZS1oZWFkZXIsXG4uY3J5cHRvLXRhYmxlIC50YWJsZS1yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwcHggMmZyIDEuMWZyIDEuMWZyIDEuM2ZyIDEuMmZyO1xuICBnYXA6IHZhcigtLXNwYWNpbmctbWQpO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCk7XG4gIG1pbi13aWR0aDogNzgwcHg7XG59XG5cbi5zcGFya2xpbmUge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogNTJweDtcbn1cblxuLnNwYXJrbGluZSBwb2x5bGluZSB7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogdmFyKC0tY29sb3ItZ2Fpbik7XG4gIHN0cm9rZS13aWR0aDogMztcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xufVxuXG4uc3BhcmtsaW5lLm5lZ2F0aXZlIHBvbHlsaW5lIHtcbiAgc3Ryb2tlOiB2YXIoLS1jb2xvci1sb3NzKTtcbn1cblxyXG4uY3J5cHRvLXRhYmxlIC50YWJsZS1oZWFkZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtdGVydGlhcnkpO1xyXG4gIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG59XHJcblxyXG4uY3J5cHRvLXRhYmxlIC50YWJsZS1yb3cge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KTtcbn1cblxyXG4uY3J5cHRvLXRhYmxlIC50YWJsZS1yb3c6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXRlcnRpYXJ5KTtcclxufVxyXG5cclxuLmNyeXB0by10YWJsZSAuY29sLW5hbWUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctbWQpO1xyXG59XHJcblxyXG4uY3J5cHRvLXRhYmxlIC5jb2wtbmFtZSBoNCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMC45NXJlbTtcclxufVxyXG5cclxuLmNyeXB0by10YWJsZSAuY29sLW5hbWUgcCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XHJcbn1cclxuXHJcbi5jcnlwdG8tdGFibGUgLmNvbC1wcmljZSB7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5kYXNoYm9hcmQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcbiAgfVxuXG4gIC5kYXNoYm9hcmQtaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB9XG5cbiAgLmRhc2hib2FyZC1oZWFkZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMi4xcmVtO1xuICB9XG5cbiAgLmdhaW5lcnMtbG9zZXJzLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLm1hcmtldC1zdHJpcCxcbiAgLndvcmtzcGFjZS1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIH1cblxuICAuY3J5cHRvLXRhYmxlIHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiB2YXIoLS1zcGFjaW5nLXNtKTtcbiAgfVxuXG4gIC5jcnlwdG8tdGFibGUgLnRhYmxlLWhlYWRlcixcbiAgLmNyeXB0by10YWJsZSAudGFibGUtcm93IHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQwcHggMS41ZnIgMWZyIDFmciAxZnIgMWZyO1xuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcbiAgfVxuXG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuZGFzaGJvYXJkLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCk7XG4gIH1cblxuICAuc3RhdHMtZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cblxuICAubWFya2V0LXN0cmlwLFxuICAud29ya3NwYWNlLWdyaWQge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG5cbiAgLnN0YXQtY2FyZCB7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1sZyk7XG4gIH1cblxuICAuY3J5cHRvLWl0ZW0ge1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogdmFyKC0tc3BhY2luZy1tZCk7XG4gIH1cblxuICAuY3J5cHRvLXByaWNlIHtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2125:
/*!********************************************************!*\
  !*** ./src/app/features/dashboard/dashboard.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardModule: () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 1626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);






const routes = [{
  path: '',
  component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
}];
class DashboardModule {
  static {
    this.ɵfac = function DashboardModule_Factory(t) {
      return new (t || DashboardModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DashboardModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_dashboard_dashboard_module_ts.js.map