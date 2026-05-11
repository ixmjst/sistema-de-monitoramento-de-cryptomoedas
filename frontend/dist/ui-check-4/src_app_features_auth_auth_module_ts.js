"use strict";
(self["webpackChunkcrypto_monitor_frontend"] = self["webpackChunkcrypto_monitor_frontend"] || []).push([["src_app_features_auth_auth_module_ts"],{

/***/ 663:
/*!**********************************************!*\
  !*** ./src/app/features/auth/auth.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 461);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register/register.component */ 3165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);








const routes = [{
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}, {
  path: 'register',
  component: _register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent
}, {
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
}];
class AuthModule {
  static {
    this.ɵfac = function AuthModule_Factory(t) {
      return new (t || AuthModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AuthModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AuthModule, {
    declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, _register_register_component__WEBPACK_IMPORTED_MODULE_1__.RegisterComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
  });
})();

/***/ }),

/***/ 461:
/*!********************************************************!*\
  !*** ./src/app/features/auth/login/login.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 597);







function LoginComponent_span_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "auth.emailRequired"));
  }
}
function LoginComponent_span_28_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "auth.emailInvalid"));
  }
}
function LoginComponent_span_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_span_28_span_1_Template, 3, 3, "span", 22)(2, LoginComponent_span_28_span_2_Template, 3, 3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.email == null ? null : ctx_r0.email.errors == null ? null : ctx_r0.email.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.email == null ? null : ctx_r0.email.errors == null ? null : ctx_r0.email.errors["email"]);
  }
}
function LoginComponent_span_35_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "auth.passwordRequired"));
  }
}
function LoginComponent_span_35_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "auth.passwordMin"));
  }
}
function LoginComponent_span_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, LoginComponent_span_35_span_1_Template, 3, 3, "span", 22)(2, LoginComponent_span_35_span_2_Template, 3, 3, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.password == null ? null : ctx_r0.password.errors == null ? null : ctx_r0.password.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.password == null ? null : ctx_r0.password.errors == null ? null : ctx_r0.password.errors["minlength"]);
  }
}
function LoginComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
  }
}
function LoginComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "auth.login"));
  }
}
function LoginComponent_span_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "common.loading"));
  }
}
class LoginComponent {
  constructor(fb, authService, router, route, location) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.route = route;
    this.location = location;
    this.loading = false;
    this.error = '';
    this.returnUrl = '/dashboard';
  }
  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
  }
  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.error = '';
    const {
      email,
      password
    } = this.loginForm.value;
    this.authService.login(email, password).subscribe({
      next: _response => {
        this.loading = false;
        this.router.navigate([this.returnUrl]);
      },
      error: err => {
        this.error = err.error?.message || 'Login failed. Please check your credentials.';
        this.loading = false;
      }
    });
  }
  goBack() {
    this.location.back();
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 47,
      vars: 38,
      consts: [[1, "auth-container"], [1, "auth-card"], ["type", "button", 1, "btn", "btn-secondary", "btn-sm", "back-button", 3, "click"], [1, "auth-header"], [1, "auth-brand"], ["aria-hidden", "true", 1, "brand-mark"], ["viewBox", "0 0 24 24", "fill", "none"], ["cx", "12", "cy", "12", "r", "8.2", "stroke", "currentColor", "stroke-width", "1.7"], ["d", "M7 14.5l3-3 2.4 2.2 4.6-5.1", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M16.4 8.6H17v4", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "brand-copy"], [1, "brand-label"], [1, "auth-description"], [1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", 3, "placeholder"], ["class", "error-message", 4, "ngIf"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", 3, "placeholder"], ["class", "error-alert", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 3, "disabled"], [4, "ngIf"], [1, "auth-footer"], ["routerLink", "/auth/register"], [1, "error-message"], [1, "error-alert"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_2_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "svg", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "circle", 7)(10, "path", 8)(11, "path", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10)(13, "span", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "CryptoMonitor");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "form", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_21_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14)(23, "label", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](25, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](27, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, LoginComponent_span_28_Template, 3, 2, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 14)(30, "label", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](32, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](34, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](35, LoginComponent_span_35_Template, 3, 2, "span", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, LoginComponent_div_36_Template, 2, 1, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, LoginComponent_span_38_Template, 3, 3, "span", 22)(39, LoginComponent_span_39_Template, 3, 3, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 23)(41, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "a", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](46, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 20, "common.back"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 22, "auth.login"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 24, "auth.loginDescription"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](25, 26, "auth.email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("error", (ctx.email == null ? null : ctx.email.invalid) && (ctx.email == null ? null : ctx.email.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](27, 28, "auth.emailPlaceholder"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.email == null ? null : ctx.email.invalid) && (ctx.email == null ? null : ctx.email.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](32, 30, "auth.password"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("error", (ctx.password == null ? null : ctx.password.invalid) && (ctx.password == null ? null : ctx.password.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](34, 32, "auth.passwordPlaceholder"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.password == null ? null : ctx.password.invalid) && (ctx.password == null ? null : ctx.password.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading || ctx.loginForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 34, "auth.noAccount"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](46, 36, "auth.register"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
      styles: [".auth-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  padding: var(--spacing-lg);\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  background: var(--layout-surface);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--radius-xl);\n  padding: var(--spacing-2xl);\n  box-shadow: var(--shadow-lg);\n  width: 100%;\n  max-width: 520px;\n  animation: slideInUp 0.4s ease-out;\n}\n\n.auth-header[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-xl);\n}\n\n.back-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.45rem;\n  margin-bottom: var(--spacing-lg);\n  border-radius: var(--radius-lg);\n  padding: 0.8rem 1rem;\n  color: var(--color-primary-light);\n  border: 1px solid var(--surface-border);\n  background: var(--surface-hover);\n  transition: all var(--transition-fast);\n}\n\n.back-button[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg-hover);\n  color: var(--color-primary);\n}\n\n.auth-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-lg);\n  margin-bottom: var(--spacing-md);\n}\n\n.brand-mark[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  border-radius: var(--radius-lg);\n  display: grid;\n  place-items: center;\n  background: rgba(79, 70, 229, 0.1);\n  color: var(--color-primary);\n}\n\n.brand-mark[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n\n.brand-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n\n.brand-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  color: var(--color-primary-light);\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2.4rem;\n  line-height: 1.05;\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n.auth-description[_ngcontent-%COMP%] {\n  color: var(--color-text-tertiary);\n  font-size: 1rem;\n  line-height: 1.7;\n  max-width: 34rem;\n}\n\n.auth-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n}\n.auth-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: var(--spacing-sm);\n  color: var(--color-text-secondary);\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n.auth-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: var(--spacing-md);\n  background: var(--color-bg-secondary);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--radius-md);\n  color: var(--color-text-primary);\n  font-size: 1rem;\n  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);\n}\n.auth-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-primary-light);\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.14);\n}\n.auth-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%] {\n  border-color: var(--color-error);\n}\n.auth-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-tertiary);\n}\n.auth-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--color-error);\n  font-size: 0.85rem;\n  margin-top: var(--spacing-xs);\n}\n.auth-form[_ngcontent-%COMP%]   .error-alert[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.08);\n  border: 1px solid rgba(220, 38, 38, 0.18);\n  color: var(--color-error);\n  padding: var(--spacing-md);\n  border-radius: var(--radius-md);\n  margin-bottom: var(--spacing-lg);\n  font-size: 0.95rem;\n}\n.auth-form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: var(--spacing-md);\n}\n\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: var(--spacing-xl);\n  padding-top: var(--spacing-lg);\n  border-top: 1px solid var(--surface-border);\n}\n.auth-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary);\n  margin: 0;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary-light);\n  font-weight: 700;\n  margin-left: var(--spacing-xs);\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n  text-decoration: none;\n}\n\n@media (max-width: 580px) {\n  .auth-card[_ngcontent-%COMP%] {\n    padding: var(--spacing-xl);\n  }\n  .auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .auth-brand[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUNBQUE7RUFDQSx1Q0FBQTtFQUNBLGdDQUFBO0VBQ0Esc0NBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLFNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUNBQUE7RUFDQSw2QkFBQTtFQUNBLG9DQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFHRTtFQUNFLGdDQUFBO0FBQUo7QUFFSTtFQUNFLGNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFOO0FBR0k7RUFDRSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxrRkFBQTtBQUROO0FBR007RUFDRSx3Q0FBQTtFQUNBLDZDQUFBO0FBRFI7QUFJTTtFQUNFLGdDQUFBO0FBRlI7QUFLTTtFQUNFLGlDQUFBO0FBSFI7QUFPSTtFQUNFLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7QUFMTjtBQVNFO0VBQ0UsbUNBQUE7RUFDQSx5Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7QUFQSjtBQVVFO0VBQ0UsV0FBQTtFQUNBLDZCQUFBO0FBUko7O0FBWUE7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQ0FBQTtBQVRGO0FBV0U7RUFDRSxrQ0FBQTtFQUNBLFNBQUE7QUFUSjtBQVlFO0VBQ0UsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0FBVko7QUFZSTtFQUNFLDJCQUFBO0VBQ0EscUJBQUE7QUFWTjs7QUFlQTtFQUNFO0lBQ0UsMEJBQUE7RUFaRjtFQWVBO0lBQ0UsZUFBQTtFQWJGO0VBZ0JBO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtFQWRGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aC1jb250YWluZXIge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcclxufVxyXG5cclxuLmF1dGgtY2FyZCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tbGF5b3V0LXN1cmZhY2UpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMteGwpO1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLTJ4bCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNTIwcHg7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZUluVXAgMC40cyBlYXNlLW91dDtcclxufVxyXG5cclxuLmF1dGgtaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhsKTtcclxufVxyXG5cclxuLmJhY2stYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMC40NXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLWxnKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xyXG4gIHBhZGRpbmc6IDAuOHJlbSAxcmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtaG92ZXIpO1xuICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KTtcclxufVxyXG5cclxuLmJhY2stYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy1ob3Zlcik7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxufVxyXG5cclxuLmF1dGgtYnJhbmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctbGcpO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbWQpO1xyXG59XHJcblxyXG4uYnJhbmQtbWFyayB7XHJcbiAgd2lkdGg6IDU4cHg7XHJcbiAgaGVpZ2h0OiA1OHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDc5LCA3MCwgMjI5LCAwLjEpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XHJcblxyXG4uYnJhbmQtbWFyayBzdmcge1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxufVxyXG5cclxuLmJyYW5kLWNvcHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuMzVyZW07XHJcbn1cclxuXHJcbi5icmFuZC1sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1saWdodCk7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xMmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5hdXRoLWhlYWRlciBoMSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjA1O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG59XHJcblxyXG4uYXV0aC1kZXNjcmlwdGlvbiB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtdGVydGlhcnkpO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS43O1xyXG4gIG1heC13aWR0aDogMzRyZW07XHJcbn1cclxuXHJcbi5hdXRoLWZvcm0ge1xyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbGcpO1xyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctc20pO1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KSwgYm94LXNoYWRvdyB2YXIoLS10cmFuc2l0aW9uLWZhc3QpO1xyXG5cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoNzksIDcwLCAyMjksIDAuMTQpO1xuICAgICAgfVxyXG5cclxuICAgICAgJi5lcnJvciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1lcnJvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC10ZXJ0aWFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItZXJyb3IpO1xyXG4gICAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICAgIG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmcteHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmVycm9yLWFsZXJ0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjIwLCAzOCwgMzgsIDAuMDgpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjIwLCAzOCwgMzgsIDAuMTgpO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1lcnJvcik7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLWxnKTtcclxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICB9XHJcblxyXG4gIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2luZy1tZCk7XHJcbiAgfVxyXG59XHJcblxyXG4uYXV0aC1mb290ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjaW5nLXhsKTtcclxuICBwYWRkaW5nLXRvcDogdmFyKC0tc3BhY2luZy1sZyk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcblxyXG4gIHAge1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktbGlnaHQpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1zcGFjaW5nLXhzKTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLmF1dGgtY2FyZCB7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy14bCk7XG4gIH1cblxuICAuYXV0aC1oZWFkZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuXG4gIC5hdXRoLWJyYW5kIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3165:
/*!**************************************************************!*\
  !*** ./src/app/features/auth/register/register.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 597);







function RegisterComponent_span_25_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "auth.nameRequired"));
  }
}
function RegisterComponent_span_25_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "auth.nameMin"));
  }
}
function RegisterComponent_span_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_span_25_span_1_Template, 3, 3, "span", 25)(2, RegisterComponent_span_25_span_2_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.name == null ? null : ctx_r0.name.errors == null ? null : ctx_r0.name.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.name == null ? null : ctx_r0.name.errors == null ? null : ctx_r0.name.errors["minlength"]);
  }
}
function RegisterComponent_span_32_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "auth.emailRequired"));
  }
}
function RegisterComponent_span_32_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "auth.emailInvalid"));
  }
}
function RegisterComponent_span_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_span_32_span_1_Template, 3, 3, "span", 25)(2, RegisterComponent_span_32_span_2_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.email == null ? null : ctx_r0.email.errors == null ? null : ctx_r0.email.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.email == null ? null : ctx_r0.email.errors == null ? null : ctx_r0.email.errors["email"]);
  }
}
function RegisterComponent_span_39_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "auth.passwordRequired"));
  }
}
function RegisterComponent_span_39_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "auth.passwordMin"));
  }
}
function RegisterComponent_span_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_span_39_span_1_Template, 3, 3, "span", 25)(2, RegisterComponent_span_39_span_2_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.password == null ? null : ctx_r0.password.errors == null ? null : ctx_r0.password.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.password == null ? null : ctx_r0.password.errors == null ? null : ctx_r0.password.errors["minlength"]);
  }
}
function RegisterComponent_span_46_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "auth.confirmRequired"));
  }
}
function RegisterComponent_span_46_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "auth.passwordMismatch"));
  }
}
function RegisterComponent_span_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RegisterComponent_span_46_span_1_Template, 3, 3, "span", 25)(2, RegisterComponent_span_46_span_2_Template, 3, 3, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.confirmPassword == null ? null : ctx_r0.confirmPassword.errors == null ? null : ctx_r0.confirmPassword.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.confirmPassword == null ? null : ctx_r0.confirmPassword.errors == null ? null : ctx_r0.confirmPassword.errors["passwordMismatch"]);
  }
}
function RegisterComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.error, " ");
  }
}
function RegisterComponent_span_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "auth.register"));
  }
}
function RegisterComponent_span_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, "common.loading"));
  }
}
class RegisterComponent {
  constructor(fb, authService, router) {
    this.fb = fb;
    this.authService = authService;
    this.router = router;
    this.loading = false;
    this.error = '';
  }
  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(3)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
      confirmPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }
  passwordMatchValidator(form) {
    const password = form.get('password');
    const confirmPassword = form.get('confirmPassword');
    if (password && confirmPassword && password.value !== confirmPassword.value) {
      confirmPassword.setErrors({
        passwordMismatch: true
      });
      return {
        passwordMismatch: true
      };
    }
    return null;
  }
  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.error = '';
    const {
      name,
      email,
      password
    } = this.registerForm.value;
    this.authService.register({
      name,
      email,
      password
    }).subscribe({
      next: _response => {
        this.router.navigate(['/dashboard']);
      },
      error: err => {
        this.error = err.error?.message || 'Registration failed. Please try again.';
        this.loading = false;
      }
    });
  }
  get name() {
    return this.registerForm.get('name');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
  static {
    this.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 58,
      vars: 53,
      consts: [[1, "auth-container"], [1, "auth-card"], [1, "auth-header"], [1, "auth-brand"], ["aria-hidden", "true", 1, "brand-mark"], ["viewBox", "0 0 24 24", "fill", "none"], ["cx", "12", "cy", "12", "r", "8.2", "stroke", "currentColor", "stroke-width", "1.7"], ["d", "M7 14.5l3-3 2.4 2.2 4.6-5.1", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M16.4 8.6H17v4", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "brand-copy"], [1, "brand-label"], [1, "auth-description"], [1, "auth-form", 3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "name"], ["id", "name", "type", "text", "formControlName", "name", 3, "placeholder"], ["class", "error-message", 4, "ngIf"], ["for", "email"], ["id", "email", "type", "email", "formControlName", "email", 3, "placeholder"], ["for", "password"], ["id", "password", "type", "password", "formControlName", "password", 3, "placeholder"], ["for", "confirmPassword"], ["id", "confirmPassword", "type", "password", "formControlName", "confirmPassword", 3, "placeholder"], ["class", "error-alert", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "btn-lg", 3, "disabled"], [4, "ngIf"], [1, "auth-footer"], ["routerLink", "/auth/login"], [1, "error-message"], [1, "error-alert"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "svg", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "circle", 6)(7, "path", 7)(8, "path", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 9)(10, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "CryptoMonitor");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](14, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](17, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "form", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_18_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 13)(20, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](24, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, RegisterComponent_span_25_Template, 3, 2, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 13)(27, "label", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](29, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](31, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, RegisterComponent_span_32_Template, 3, 2, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 13)(34, "label", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](36, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](38, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, RegisterComponent_span_39_Template, 3, 2, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 13)(41, "label", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](43, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](45, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, RegisterComponent_span_46_Template, 3, 2, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, RegisterComponent_div_47_Template, 2, 1, "div", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "button", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, RegisterComponent_span_49_Template, 3, 3, "span", 25)(50, RegisterComponent_span_50_Template, 3, 3, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 26)(52, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](54, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "a", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](57, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](14, 29, "auth.register"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](17, 31, "auth.registerDescription"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.registerForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](22, 33, "auth.name"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("error", (ctx.name == null ? null : ctx.name.invalid) && (ctx.name == null ? null : ctx.name.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](24, 35, "auth.namePlaceholder"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.name == null ? null : ctx.name.invalid) && (ctx.name == null ? null : ctx.name.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](29, 37, "auth.email"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("error", (ctx.email == null ? null : ctx.email.invalid) && (ctx.email == null ? null : ctx.email.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](31, 39, "auth.emailPlaceholder"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.email == null ? null : ctx.email.invalid) && (ctx.email == null ? null : ctx.email.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](36, 41, "auth.password"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("error", (ctx.password == null ? null : ctx.password.invalid) && (ctx.password == null ? null : ctx.password.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](38, 43, "auth.passwordPlaceholder"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.password == null ? null : ctx.password.invalid) && (ctx.password == null ? null : ctx.password.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](43, 45, "auth.confirmPassword"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("error", (ctx.confirmPassword == null ? null : ctx.confirmPassword.invalid) && (ctx.confirmPassword == null ? null : ctx.confirmPassword.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](45, 47, "auth.confirmPasswordPlaceholder"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (ctx.confirmPassword == null ? null : ctx.confirmPassword.invalid) && (ctx.confirmPassword == null ? null : ctx.confirmPassword.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.error);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.loading || ctx.registerForm.invalid);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](54, 49, "auth.hasAccount"), " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](57, 51, "auth.login"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe],
      styles: [".auth-container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: transparent;\n  padding: var(--spacing-lg);\n}\n\n.auth-card[_ngcontent-%COMP%] {\n  background: var(--layout-surface);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--radius-xl);\n  padding: var(--spacing-2xl);\n  box-shadow: var(--shadow-lg);\n  width: 100%;\n  max-width: 520px;\n  animation: slideInUp 0.4s ease-out;\n}\n\n.auth-header[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-xl);\n}\n\n.auth-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-lg);\n  margin-bottom: var(--spacing-md);\n}\n\n.brand-mark[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  border-radius: var(--radius-lg);\n  display: grid;\n  place-items: center;\n  background: rgba(79, 70, 229, 0.1);\n  color: var(--color-primary);\n}\n\n.brand-mark[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n\n.brand-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n\n.brand-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  color: var(--color-primary-light);\n  font-size: 0.8rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n\n.auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 2.4rem;\n  line-height: 1.05;\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n\n.auth-description[_ngcontent-%COMP%] {\n  color: var(--color-text-tertiary);\n  font-size: 1rem;\n  line-height: 1.7;\n  max-width: 34rem;\n}\n\n.auth-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-lg);\n}\n.auth-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: var(--spacing-sm);\n  color: var(--color-text-secondary);\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n.auth-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: var(--spacing-md);\n  background: var(--color-bg-secondary);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--radius-md);\n  color: var(--color-text-primary);\n  font-size: 1rem;\n  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);\n}\n.auth-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-primary-light);\n  box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.14);\n}\n.auth-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input.error[_ngcontent-%COMP%] {\n  border-color: var(--color-error);\n}\n.auth-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-tertiary);\n}\n.auth-form[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--color-error);\n  font-size: 0.85rem;\n  margin-top: var(--spacing-xs);\n}\n.auth-form[_ngcontent-%COMP%]   .error-alert[_ngcontent-%COMP%] {\n  background: rgba(220, 38, 38, 0.08);\n  border: 1px solid rgba(220, 38, 38, 0.18);\n  color: var(--color-error);\n  padding: var(--spacing-md);\n  border-radius: var(--radius-md);\n  margin-bottom: var(--spacing-lg);\n  font-size: 0.95rem;\n}\n.auth-form[_ngcontent-%COMP%]   button[type=submit][_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: var(--spacing-md);\n}\n\n.auth-footer[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: var(--spacing-xl);\n  padding-top: var(--spacing-lg);\n  border-top: 1px solid var(--surface-border);\n}\n.auth-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary);\n  margin: 0;\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-primary-light);\n  font-weight: 700;\n  margin-left: var(--spacing-xs);\n}\n.auth-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary);\n  text-decoration: none;\n}\n\n@media (max-width: 580px) {\n  .auth-card[_ngcontent-%COMP%] {\n    padding: var(--spacing-xl);\n  }\n  .auth-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n  .auth-brand[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvYXV0aC9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBR0U7RUFDRSxnQ0FBQTtBQUFKO0FBRUk7RUFDRSxjQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFBTjtBQUdJO0VBQ0UsV0FBQTtFQUNBLDBCQUFBO0VBQ0EscUNBQUE7RUFDQSx1Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0Esa0ZBQUE7QUFETjtBQUdNO0VBQ0Usd0NBQUE7RUFDQSw2Q0FBQTtBQURSO0FBSU07RUFDRSxnQ0FBQTtBQUZSO0FBS007RUFDRSxpQ0FBQTtBQUhSO0FBT0k7RUFDRSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0FBTE47QUFTRTtFQUNFLG1DQUFBO0VBQ0EseUNBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBUEo7QUFVRTtFQUNFLFdBQUE7RUFDQSw2QkFBQTtBQVJKOztBQVlBO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0VBQ0EsMkNBQUE7QUFURjtBQVdFO0VBQ0Usa0NBQUE7RUFDQSxTQUFBO0FBVEo7QUFZRTtFQUNFLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtBQVZKO0FBWUk7RUFDRSwyQkFBQTtFQUNBLHFCQUFBO0FBVk47O0FBZUE7RUFDRTtJQUNFLDBCQUFBO0VBWkY7RUFlQTtJQUNFLGVBQUE7RUFiRjtFQWdCQTtJQUNFLHNCQUFBO0lBQ0EsdUJBQUE7RUFkRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgtY29udGFpbmVyIHtcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcclxufVxyXG5cclxuLmF1dGgtY2FyZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWxheW91dC1zdXJmYWNlKTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMteGwpO1xuICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLTJ4bCk7XG4gIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNTIwcHg7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZUluVXAgMC40cyBlYXNlLW91dDtcclxufVxyXG5cclxuLmF1dGgtaGVhZGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhsKTtcclxufVxyXG5cclxuLmF1dGgtYnJhbmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IHZhcigtLXNwYWNpbmctbGcpO1xyXG4gIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbWQpO1xyXG59XHJcblxyXG4uYnJhbmQtbWFyayB7XHJcbiAgd2lkdGg6IDU4cHg7XHJcbiAgaGVpZ2h0OiA1OHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDc5LCA3MCwgMjI5LCAwLjEpO1xuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG59XHJcblxyXG4uYnJhbmQtbWFyayBzdmcge1xyXG4gIHdpZHRoOiAzMnB4O1xyXG4gIGhlaWdodDogMzJweDtcclxufVxyXG5cclxuLmJyYW5kLWNvcHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuMzVyZW07XHJcbn1cclxuXHJcbi5icmFuZC1sYWJlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1saWdodCk7XHJcbiAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xMmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5hdXRoLWhlYWRlciBoMSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAyLjRyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjA1O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG59XHJcblxyXG4uYXV0aC1kZXNjcmlwdGlvbiB7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtdGVydGlhcnkpO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBsaW5lLWhlaWdodDogMS43O1xyXG4gIG1heC13aWR0aDogMzRyZW07XHJcbn1cclxuXHJcbi5hdXRoLWZvcm0ge1xyXG4gIC5mb3JtLWdyb3VwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctbGcpO1xyXG5cclxuICAgIGxhYmVsIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctc20pO1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDAuOTVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1tZCk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbWQpO1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KSwgYm94LXNoYWRvdyB2YXIoLS10cmFuc2l0aW9uLWZhc3QpO1xyXG5cclxuICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoNzksIDcwLCAyMjksIDAuMTQpO1xuICAgICAgfVxyXG5cclxuICAgICAgJi5lcnJvciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1lcnJvcik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC10ZXJ0aWFyeSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3ItZXJyb3IpO1xyXG4gICAgICBmb250LXNpemU6IDAuODVyZW07XHJcbiAgICAgIG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmcteHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmVycm9yLWFsZXJ0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjIwLCAzOCwgMzgsIDAuMDgpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjIwLCAzOCwgMzgsIDAuMTgpO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1lcnJvcik7XHJcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1tZCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLWxnKTtcclxuICAgIGZvbnQtc2l6ZTogMC45NXJlbTtcclxuICB9XHJcblxyXG4gIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2luZy1tZCk7XHJcbiAgfVxyXG59XHJcblxyXG4uYXV0aC1mb290ZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiB2YXIoLS1zcGFjaW5nLXhsKTtcclxuICBwYWRkaW5nLXRvcDogdmFyKC0tc3BhY2luZy1sZyk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcblxyXG4gIHAge1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIGEge1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktbGlnaHQpO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1zcGFjaW5nLXhzKTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTgwcHgpIHtcbiAgLmF1dGgtY2FyZCB7XG4gICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy14bCk7XG4gIH1cblxuICAuYXV0aC1oZWFkZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgfVxuXG4gIC5hdXRoLWJyYW5kIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_features_auth_auth_module_ts.js.map