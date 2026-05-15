"use strict";
(self["webpackChunkcrypto_monitor_frontend"] = self["webpackChunkcrypto_monitor_frontend"] || []).push([["src_app_features_history_history_module_ts"],{

/***/ 7826:
/*!*******************************************************!*\
  !*** ./src/app/features/history/history.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoryComponent: () => (/* binding */ HistoryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 597);




function HistoryComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, "common.loading"));
  }
}
function HistoryComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "history.emptyTitle"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "history.emptyText"));
  }
}
function HistoryComponent_div_10_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "history.oldValue"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", item_r1.oldValue, "");
  }
}
function HistoryComponent_div_10_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "history.newValue"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", item_r1.newValue, "");
  }
}
function HistoryComponent_div_10_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "history.quantity"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.quantity);
  }
}
function HistoryComponent_div_10_div_1_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "history.price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("$", item_r1.price, "");
  }
}
function HistoryComponent_div_10_div_1_p_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.description);
  }
}
function HistoryComponent_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div")(7, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, HistoryComponent_div_10_div_1_div_15_Template, 6, 4, "div", 18)(16, HistoryComponent_div_10_div_1_div_16_Template, 6, 4, "div", 18)(17, HistoryComponent_div_10_div_1_div_17_Template, 6, 4, "div", 18)(18, HistoryComponent_div_10_div_1_div_18_Template, 6, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HistoryComponent_div_10_div_1_p_19_Template, 2, 1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.getActionIcon(item_r1.action));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, item_r1.action));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((item_r1.cryptocurrency == null ? null : item_r1.cryptocurrency.name) || "Unknown");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.formatDate(item_r1.createdAt || item_r1.created_at));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.oldValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.newValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.quantity);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.description);
  }
}
function HistoryComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HistoryComponent_div_10_div_1_Template, 20, 11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.history);
  }
}
class HistoryComponent {
  constructor(http) {
    this.http = http;
    this.history = [];
    this.loading = true;
    this.apiUrl = 'http://localhost:8000/api/v1/history';
  }
  ngOnInit() {
    this.loadHistory();
  }
  loadHistory() {
    this.loading = true;
    this.http.get(this.apiUrl).subscribe({
      next: response => {
        this.history = response.data || [];
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  formatDate(dateString) {
    return new Date(dateString).toLocaleString();
  }
  getActionIcon(action) {
    const icons = {
      'buy': '💰',
      'sell': '💸',
      'favorite': '⭐',
      'view': '👁️',
      'price_alert': '🔔'
    };
    return icons[action] || '📝';
  }
  static {
    this.ɵfac = function HistoryComponent_Factory(t) {
      return new (t || HistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HistoryComponent,
      selectors: [["app-history"]],
      decls: 11,
      vars: 9,
      consts: [[1, "history-container"], [1, "page-header"], [1, "text-muted"], ["class", "loading-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "history-timeline", 4, "ngIf"], [1, "loading-container"], [1, "spinner"], [1, "empty-state"], [1, "history-timeline"], ["class", "history-item", 4, "ngFor", "ngForOf"], [1, "history-item"], [1, "history-card", "card"], [1, "history-header"], [1, "action-info"], [1, "action-icon"], [1, "timestamp"], [1, "history-details"], ["class", "detail-item", 4, "ngIf"], ["class", "description", 4, "ngIf"], [1, "detail-item"], [1, "value"], [1, "description"]],
      template: function HistoryComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HistoryComponent_div_8_Template, 5, 3, "div", 3)(9, HistoryComponent_div_9_Template, 7, 6, "div", 4)(10, HistoryComponent_div_10_Template, 2, 1, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, "nav.history"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 7, "history.subtitle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.history.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.history.length > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.TitleCasePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe],
      styles: [".history-container[_ngcontent-%COMP%] {\n  padding: var(--spacing-xl);\n  max-width: 1400px;\n  margin: 0 auto;\n  animation: fadeIn 0.4s ease-out;\n}\n\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-xl);\n  padding: var(--spacing-lg);\n  background: var(--layout-surface);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-sm);\n  backdrop-filter: blur(14px);\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  background: var(--gradient-crypto);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: var(--spacing-sm);\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 400px;\n  gap: var(--spacing-lg);\n}\n.loading-container[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 4px solid var(--color-bg-tertiary);\n  border-top-color: var(--color-primary-light);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: var(--spacing-2xl);\n  background: var(--layout-surface);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--radius-xl);\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  margin-bottom: var(--spacing-lg);\n  filter: grayscale(1);\n  opacity: 0.5;\n}\n\n.history-timeline[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: var(--spacing-xl);\n}\n.history-timeline[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 2px;\n  background: linear-gradient(180deg, var(--color-primary-light), transparent);\n}\n\n.history-item[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: var(--spacing-xl);\n}\n.history-item[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: calc(-1 * var(--spacing-xl) - 6px);\n  top: 8px;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: var(--color-primary-light);\n  border: 3px solid var(--color-bg-primary);\n  box-shadow: 0 0 0 2px var(--color-primary-light);\n}\n.history-item[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%] {\n  transition: all var(--transition-base);\n}\n.history-item[_ngcontent-%COMP%]   .history-card[_ngcontent-%COMP%]:hover {\n  transform: translateX(4px);\n}\n.history-item[_ngcontent-%COMP%]   .history-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: var(--spacing-md);\n}\n.history-item[_ngcontent-%COMP%]   .history-header[_ngcontent-%COMP%]   .action-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n}\n.history-item[_ngcontent-%COMP%]   .history-header[_ngcontent-%COMP%]   .action-info[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.history-item[_ngcontent-%COMP%]   .history-header[_ngcontent-%COMP%]   .action-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n}\n.history-item[_ngcontent-%COMP%]   .history-header[_ngcontent-%COMP%]   .timestamp[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--color-text-tertiary);\n  white-space: nowrap;\n}\n.history-item[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: var(--spacing-md);\n}\n.history-item[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  color: var(--color-text-tertiary);\n  margin-bottom: var(--spacing-xs);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.history-item[_ngcontent-%COMP%]   .history-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n.history-item[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-top: var(--spacing-md);\n  padding-top: var(--spacing-md);\n  border-top: 1px solid var(--color-bg-tertiary);\n  font-size: 0.9rem;\n  font-style: italic;\n}\n\n@media (max-width: 768px) {\n  .history-container[_ngcontent-%COMP%] {\n    padding: var(--spacing-lg);\n  }\n  .history-timeline[_ngcontent-%COMP%] {\n    padding-left: var(--spacing-lg);\n  }\n  .history-item[_ngcontent-%COMP%]::before {\n    left: calc(-1 * var(--spacing-lg) - 6px);\n  }\n  .history-item[_ngcontent-%COMP%]   .history-header[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: var(--spacing-sm);\n  }\n}\n@media (max-width: 480px) {\n  .history-container[_ngcontent-%COMP%] {\n    padding: var(--spacing-md);\n  }\n  .history-timeline[_ngcontent-%COMP%] {\n    padding-left: var(--spacing-md);\n  }\n  .history-item[_ngcontent-%COMP%]::before {\n    left: calc(-1 * var(--spacing-md) - 6px);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvaGlzdG9yeS9oaXN0b3J5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7QUFDRjtBQUNFO0VBQ0Usa0NBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7QUFBRjtBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQUFKOztBQUlBO0VBQ0U7SUFBSyx5QkFBQTtFQUFMO0FBQ0Y7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7QUFBRjtBQUVFO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0FBQUo7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLCtCQUFBO0FBREY7QUFHRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSw0RUFBQTtBQURKOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtBQUZGO0FBSUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx3Q0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSx5Q0FBQTtFQUNBLGdEQUFBO0FBRko7QUFLRTtFQUNFLHNDQUFBO0FBSEo7QUFLSTtFQUNFLDBCQUFBO0FBSE47QUFPRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7QUFMSjtBQU9JO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFMTjtBQU9NO0VBQ0UsaUJBQUE7QUFMUjtBQVFNO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUFOUjtBQVVJO0VBQ0Usa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FBUk47QUFZRTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLHNCQUFBO0FBVko7QUFhTTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FBWFI7QUFjTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFaUjtBQWlCRTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSw4Q0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFmSjs7QUFtQkE7RUFDRTtJQUNFLDBCQUFBO0VBaEJGO0VBbUJBO0lBQ0UsK0JBQUE7RUFqQkY7RUFvQkE7SUFDRSx3Q0FBQTtFQWxCRjtFQXFCQTtJQUNFLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSxzQkFBQTtFQW5CRjtBQUNGO0FBc0JBO0VBQ0U7SUFDRSwwQkFBQTtFQXBCRjtFQXVCQTtJQUNFLCtCQUFBO0VBckJGO0VBd0JBO0lBQ0Usd0NBQUE7RUF0QkY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5oaXN0b3J5LWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2luZy14bCk7XHJcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgYW5pbWF0aW9uOiBmYWRlSW4gMC40cyBlYXNlLW91dDtcclxufVxyXG5cclxuLnBhZ2UtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy14bCk7XG4gIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1sYXlvdXQtc3VyZmFjZSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcbiAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE0cHgpO1xuXHJcbiAgaDEge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtY3J5cHRvKTtcclxuICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1zbSk7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9hZGluZy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIGdhcDogdmFyKC0tc3BhY2luZy1sZyk7XHJcblxyXG4gIC5zcGlubmVyIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgdmFyKC0tY29sb3ItYmctdGVydGlhcnkpO1xyXG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1saWdodCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGluIHtcclxuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxufVxyXG5cclxuLmVtcHR5LXN0YXRlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLTJ4bCk7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxheW91dC1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMteGwpO1xuXHJcbiAgLmVtcHR5LWljb24ge1xyXG4gICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1sZyk7XHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxKTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcbn1cclxuXHJcbi5oaXN0b3J5LXRpbWVsaW5lIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjaW5nLXhsKTtcclxuXHJcbiAgJjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tY29sb3ItcHJpbWFyeS1saWdodCksIHRyYW5zcGFyZW50KTtcbiAgfVxufVxuXHJcbi5oaXN0b3J5LWl0ZW0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhsKTtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogY2FsYygtMSAqIHZhcigtLXNwYWNpbmcteGwpIC0gNnB4KTtcclxuICAgIHRvcDogOHB4O1xyXG4gICAgd2lkdGg6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeS1saWdodCk7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tY29sb3ItYmctcHJpbWFyeSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHZhcigtLWNvbG9yLXByaW1hcnktbGlnaHQpO1xuICB9XHJcblxyXG4gIC5oaXN0b3J5LWNhcmQge1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg0cHgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmhpc3RvcnktaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbWQpO1xyXG5cclxuICAgIC5hY3Rpb24taW5mbyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogdmFyKC0tc3BhY2luZy1tZCk7XHJcblxyXG4gICAgICAuYWN0aW9uLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50aW1lc3RhbXAge1xuICAgICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtdGVydGlhcnkpO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG4gIH1cclxuXHJcbiAgLmhpc3RvcnktZGV0YWlscyB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XHJcbiAgICBnYXA6IHZhcigtLXNwYWNpbmctbWQpO1xyXG5cclxuICAgIC5kZXRhaWwtaXRlbSB7XHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtdGVydGlhcnkpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhzKTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcbiAgICAgIH1cblxyXG4gICAgICAudmFsdWUge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGVzY3JpcHRpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2luZy1tZCk7XHJcbiAgICBwYWRkaW5nLXRvcDogdmFyKC0tc3BhY2luZy1tZCk7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItYmctdGVydGlhcnkpO1xyXG4gICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmhpc3RvcnktY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcbiAgfVxuXHJcbiAgLmhpc3RvcnktdGltZWxpbmUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjaW5nLWxnKTtcclxuICB9XHJcblxyXG4gIC5oaXN0b3J5LWl0ZW06OmJlZm9yZSB7XG4gICAgbGVmdDogY2FsYygtMSAqIHZhcigtLXNwYWNpbmctbGcpIC0gNnB4KTtcbiAgfVxuXG4gIC5oaXN0b3J5LWl0ZW0gLmhpc3RvcnktaGVhZGVyIHtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5oaXN0b3J5LWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCk7XG4gIH1cblxuICAuaGlzdG9yeS10aW1lbGluZSB7XG4gICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjaW5nLW1kKTtcbiAgfVxuXG4gIC5oaXN0b3J5LWl0ZW06OmJlZm9yZSB7XG4gICAgbGVmdDogY2FsYygtMSAqIHZhcigtLXNwYWNpbmctbWQpIC0gNnB4KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 6309:
/*!****************************************************!*\
  !*** ./src/app/features/history/history.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HistoryModule: () => (/* binding */ HistoryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _history_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history.component */ 7826);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);






const routes = [{
  path: '',
  component: _history_component__WEBPACK_IMPORTED_MODULE_0__.HistoryComponent
}];
class HistoryModule {
  static {
    this.ɵfac = function HistoryModule_Factory(t) {
      return new (t || HistoryModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: HistoryModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HistoryModule, {
    declarations: [_history_component__WEBPACK_IMPORTED_MODULE_0__.HistoryComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_features_history_history_module_ts.js.map