"use strict";
(self["webpackChunkcrypto_monitor_frontend"] = self["webpackChunkcrypto_monitor_frontend"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/layout/layout.component */ 7487);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/auth.guard */ 1620);
/* harmony import */ var _guards_admin_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guards/admin.guard */ 9153);
/* harmony import */ var _features_overview_overview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/overview/overview.component */ 9650);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);







const routes = [{
  path: '',
  component: _features_overview_overview_component__WEBPACK_IMPORTED_MODULE_3__.OverviewComponent,
  pathMatch: 'full'
}, {
  path: 'auth',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/auth/auth.module */ 663)).then(m => m.AuthModule)
}, {
  path: '',
  component: _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
  canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_1__.AuthGuard],
  children: [{
    path: 'dashboard',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/dashboard/dashboard.module */ 2125)).then(m => m.DashboardModule)
  }, {
    path: 'cryptocurrencies',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_cryptocurrencies_cryptocurrencies_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/cryptocurrencies/cryptocurrencies.module */ 6671)).then(m => m.CryptocurrenciesModule)
  }, {
    path: 'favorites',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_favorites_favorites_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./features/favorites/favorites.module */ 6305)).then(m => m.FavoritesModule)
  }, {
    path: 'history',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_history_history_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/history/history.module */ 6309)).then(m => m.HistoryModule)
  }, {
    path: 'export',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_export_export_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/export/export.module */ 7435)).then(m => m.ExportModule)
  }, {
    path: 'admin',
    canActivate: [_guards_admin_guard__WEBPACK_IMPORTED_MODULE_2__.AdminGuard],
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_features_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./features/admin/admin.module */ 6269)).then(m => m.AdminModule)
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }]
}, {
  path: '**',
  redirectTo: ''
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/services/theme.service */ 4081);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);






function AppComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class AppComponent {
  constructor(themeService, translateService, router) {
    this.themeService = themeService;
    this.translateService = translateService;
    this.router = router;
    this.title = 'Sistema de Monitoramento de Criptomoedas';
    this.routeLoading = false;
  }
  ngOnInit() {
    this.initializeApp();
    this.router.events.subscribe(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationStart) {
        this.routeLoading = true;
      }
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationCancel || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationError) {
        setTimeout(() => {
          this.routeLoading = false;
        }, 180);
      }
    });
  }
  ngOnDestroy() {
    // Cleanup se necessário
  }
  initializeApp() {
    // Inicializar tema
    const savedTheme = localStorage.getItem('theme') || 'dark';
    this.themeService.setTheme(savedTheme);
    // Inicializar idioma
    const savedLanguage = localStorage.getItem('language') || 'pt';
    this.translateService.setDefaultLang(savedLanguage);
    this.translateService.use(savedLanguage);
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 2,
      vars: 1,
      consts: [["class", "route-loader", "aria-live", "polite", "aria-label", "Carregando p\u00E1gina", 4, "ngIf"], ["aria-live", "polite", "aria-label", "Carregando p\u00E1gina", 1, "route-loader"], [1, "route-loader-ring"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_1_Template, 2, 0, "div", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.routeLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n\n.route-loader[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: var(--z-modal);\n  display: grid;\n  place-items: center;\n  background: rgba(14, 23, 38, 0.18);\n  backdrop-filter: blur(2px);\n  pointer-events: none;\n}\n\n.route-loader-ring[_ngcontent-%COMP%] {\n  width: 58px;\n  height: 58px;\n  border-radius: 50%;\n  border: 5px solid rgba(255, 255, 255, 0.45);\n  border-top-color: var(--color-primary);\n  border-right-color: var(--color-primary-light);\n  animation: _ngcontent-%COMP%_routeSpin 0.75s linear infinite;\n  box-shadow: var(--shadow-lg);\n}\n\n@keyframes _ngcontent-%COMP%_routeSpin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsOENBQUE7RUFDQSwwQ0FBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSTtJQUNJLHlCQUFBO0VBQ047QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5yb3V0ZS1sb2FkZXIge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBpbnNldDogMDtcbiAgICB6LWluZGV4OiB2YXIoLS16LW1vZGFsKTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogcmdiYSgxNCwgMjMsIDM4LCAwLjE4KTtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnJvdXRlLWxvYWRlci1yaW5nIHtcbiAgICB3aWR0aDogNThweDtcbiAgICBoZWlnaHQ6IDU4cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40NSk7XG4gICAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcbiAgICBhbmltYXRpb246IHJvdXRlU3BpbiAwLjc1cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LWxnKTtcbn1cblxuQGtleWZyYW1lcyByb3V0ZVNwaW4ge1xuICAgIHRvIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   HttpLoaderFactory: () => (/* binding */ HttpLoaderFactory)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/http-loader */ 5101);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/layout/layout.component */ 7487);
/* harmony import */ var _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/components/navbar/navbar.component */ 3083);
/* harmony import */ var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/sidebar/sidebar.component */ 1417);
/* harmony import */ var _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/footer/footer.component */ 1765);
/* harmony import */ var _shared_components_theme_switch_theme_switch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/theme-switch/theme-switch.component */ 1467);
/* harmony import */ var _shared_components_language_switch_language_switch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/components/language-switch/language-switch.component */ 5093);
/* harmony import */ var _features_overview_overview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./features/overview/overview.component */ 9650);
/* harmony import */ var _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interceptors/auth.interceptor */ 472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7580);


















function HttpLoaderFactory(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_10__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HTTP_INTERCEPTORS,
        useClass: _interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_9__.AuthInterceptor,
        multi: true
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule.forRoot({
        defaultLanguage: 'pt',
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient]
        }
      })]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _shared_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent, _shared_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__.NavbarComponent, _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__.SidebarComponent, _shared_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__.FooterComponent, _shared_components_theme_switch_theme_switch_component__WEBPACK_IMPORTED_MODULE_6__.ThemeSwitchComponent, _shared_components_language_switch_language_switch_component__WEBPACK_IMPORTED_MODULE_7__.LanguageSwitchComponent, _features_overview_overview_component__WEBPACK_IMPORTED_MODULE_8__.OverviewComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslateModule]
  });
})();

/***/ }),

/***/ 8010:
/*!***********************************************!*\
  !*** ./src/app/core/services/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 6443);




class AuthService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'http://localhost:8000/api/v1/auth';
    this.userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.getUserFromStorage());
    this.user$ = this.userSubject.asObservable();
  }
  getUserFromStorage() {
    try {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    } catch {
      return null;
    }
  }
  login(email, password) {
    return this.http.post(`${this.apiUrl}/login`, {
      email: email.trim().toLowerCase(),
      password
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(data => this.setSession(data)));
  }
  register(user) {
    return this.http.post(`${this.apiUrl}/register`, {
      ...user,
      email: user.email.trim().toLowerCase()
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(response => response.data), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(data => this.setSession(data)));
  }
  setSession(response) {
    localStorage.setItem('token', response.token);
    localStorage.setItem('user', JSON.stringify(response.user));
    this.userSubject.next(response.user);
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.userSubject.next(null);
  }
  getCurrentUser() {
    return this.userSubject.value;
  }
  getToken() {
    return localStorage.getItem('token');
  }
  isAuthenticated() {
    return !!this.getToken();
  }
  isAdmin() {
    return this.getCurrentUser()?.role === 'admin';
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9741:
/*!*************************************************!*\
  !*** ./src/app/core/services/crypto.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CryptoService: () => (/* binding */ CryptoService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);




class CryptoService {
  constructor(http) {
    this.http = http;
    this.apiUrl = 'http://localhost:8000/api/v1/cryptocurrencies';
    this.coingeckoUrl = 'https://api.coingecko.com/api/v3';
    this.coingeckoKey = 'CG-VN764t2tMqBMwXKXdS9QjP3j';
    this.cryptosSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([]);
    this.cryptos$ = this.cryptosSubject.asObservable();
    this.cache = new Map();
    this.cacheTimes = new Map();
    this.cacheDuration = 5 * 60 * 1000;
  }
  getCryptocurrencies(page = 1, limit = 50) {
    const cacheKey = `cryptos_${page}_${limit}`;
    const now = Date.now();
    const lastFetch = this.cacheTimes.get(cacheKey) || 0;
    if (this.cache.has(cacheKey) && now - lastFetch < this.cacheDuration) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(this.cache.get(cacheKey));
    }
    const params = {
      vs_currency: 'usd',
      order: 'market_cap_desc',
      per_page: limit.toString(),
      page: page.toString(),
      sparkline: 'true',
      locale: 'en',
      x_cg_demo_api_key: this.coingeckoKey
    };
    return this.http.get(`${this.coingeckoUrl}/coins/markets`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => this.normalizeList(Array.isArray(response) ? response : [])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(cryptos => {
      this.cache.set(cacheKey, cryptos);
      this.cacheTimes.set(cacheKey, now);
      this.cryptosSubject.next(cryptos);
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(err => {
      console.error('Error fetching cryptocurrencies from CoinGecko:', err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([]);
    }));
  }
  searchCryptocurrencies(query) {
    if (!query.trim()) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([]);
    }
    const params = {
      query: query.trim(),
      x_cg_demo_api_key: this.coingeckoKey
    };
    return this.http.get(`${this.coingeckoUrl}/search`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      if (!response?.coins) {
        return [];
      }
      return this.normalizeList(response.coins.map(coin => ({
        id: coin.id,
        symbol: coin.symbol,
        name: coin.name,
        image_url: coin.thumb,
        current_price: 0,
        market_cap: 0,
        market_cap_rank: coin.market_cap_rank ?? 0,
        price_change_24h: 0,
        price_change_percentage_24h: 0,
        total_volume: 0
      })));
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([])));
  }
  getCryptoDetails(id) {
    const params = {
      localization: 'false',
      sparkline: 'false',
      x_cg_demo_api_key: this.coingeckoKey
    };
    return this.http.get(`${this.coingeckoUrl}/coins/${id}`, {
      params
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response ? this.normalize(response) : null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null)));
  }
  clearCache() {
    this.cache.clear();
    this.cacheTimes.clear();
  }
  // Normaliza campos snake_case do banco para camelCase
  normalize(c) {
    return {
      id: String(c.id ?? c.code ?? ''),
      code: c.code,
      name: c.name ?? 'Unknown',
      symbol: c.symbol ?? '',
      currentPrice: parseFloat(c.current_price ?? c.currentPrice ?? 0),
      priceChange24h: parseFloat(c.price_change_24h ?? c.priceChange24h ?? 0),
      imageUrl: c.image_url ?? c.imageUrl ?? c.image ?? '',
      marketCap: parseFloat(c.market_cap ?? c.marketCap ?? 0),
      marketCapRank: parseInt(c.market_cap_rank ?? c.marketCapRank ?? 0),
      volume24h: parseFloat(c.total_volume ?? c.volume_24h ?? c.volume24h ?? 0),
      sparkline: c.sparkline_in_7d?.price ?? c.sparkline ?? []
    };
  }
  normalizeList(items) {
    return items.map(c => this.normalize(c));
  }
  static {
    this.ɵfac = function CryptoService_Factory(t) {
      return new (t || CryptoService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: CryptoService,
      factory: CryptoService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4081:
/*!************************************************!*\
  !*** ./src/app/core/services/theme.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeService: () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class ThemeService {
  constructor() {
    this.currentThemeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject('dark');
    this.currentTheme$ = this.currentThemeSubject.asObservable();
    this.initializeTheme();
  }
  initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    this.setTheme(savedTheme);
  }
  setTheme(theme) {
    this.currentThemeSubject.next(theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }
  getCurrentTheme() {
    return this.currentThemeSubject.value;
  }
  toggleTheme() {
    const currentTheme = this.getCurrentTheme();
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }
  static {
    this.ɵfac = function ThemeService_Factory(t) {
      return new (t || ThemeService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ThemeService,
      factory: ThemeService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 9650:
/*!*********************************************************!*\
  !*** ./src/app/features/overview/overview.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OverviewComponent: () => (/* binding */ OverviewComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 819);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 2575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1817);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 3900);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_crypto_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/services/crypto.service */ 9741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _shared_components_theme_switch_theme_switch_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/theme-switch/theme-switch.component */ 1467);
/* harmony import */ var _shared_components_language_switch_language_switch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/language-switch/language-switch.component */ 5093);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 597);











function OverviewComponent_div_131_tr_22_img_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "img", 40);
  }
  if (rf & 2) {
    const crypto_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("src", crypto_r1.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"])("alt", crypto_r1.name);
  }
}
function OverviewComponent_div_131_tr_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td")(4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, OverviewComponent_div_131_tr_22_img_5_Template, 1, 2, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 38)(7, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "svg", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "polyline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const crypto_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r2 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", crypto_r1.imageUrl);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](crypto_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](crypto_r1.symbol.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.formatPrice(crypto_r1.currentPrice));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("positive", crypto_r1.priceChange24h >= 0)("negative", crypto_r1.priceChange24h < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", crypto_r1.priceChange24h >= 0 ? "+" : "", "", crypto_r1.priceChange24h.toFixed(2), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.formatMarketCap(crypto_r1.marketCap || 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("negative", crypto_r1.priceChange24h < 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("points", ctx_r2.getSparklinePoints(crypto_r1));
  }
}
function OverviewComponent_div_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 33)(1, "div", 34)(2, "table")(3, "thead")(4, "tr")(5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Gr\u00E1fico 7d");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, OverviewComponent_div_131_tr_22_Template, 20, 15, "tr", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 5, "crypto.name"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 7, "crypto.price"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 9, "crypto.change24h"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 11, "crypto.marketCap"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.filteredCryptos);
  }
}
function OverviewComponent_div_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 1, "overview.loading"));
  }
}
class OverviewComponent {
  constructor(cryptoService) {
    this.cryptoService = cryptoService;
    this.cryptos = [];
    this.filteredCryptos = [];
    this.topGainers = [];
    this.topLosers = [];
    this.loading = true;
    this.totalMarketCap = 0;
    this.totalVolume24h = 0;
    this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('');
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
  }
  ngOnInit() {
    this.loadOverview();
    this.searchControl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe(query => {
      this.filterCryptos(query || '');
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadOverview() {
    this.loading = true;
    this.cryptoService.getCryptocurrencies(1, 60).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.takeUntil)(this.destroy$)).subscribe({
      next: cryptos => {
        this.cryptos = cryptos;
        this.filteredCryptos = cryptos;
        this.topGainers = [...cryptos].sort((a, b) => b.priceChange24h - a.priceChange24h).slice(0, 5);
        this.topLosers = [...cryptos].sort((a, b) => a.priceChange24h - b.priceChange24h).slice(0, 5);
        this.totalMarketCap = cryptos.reduce((sum, c) => sum + (c.marketCap || 0), 0);
        this.totalVolume24h = cryptos.reduce((sum, c) => sum + (c.volume24h || 0), 0);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
  filterCryptos(query) {
    const normalized = query.trim().toLowerCase();
    if (!normalized) {
      this.filteredCryptos = this.cryptos;
      return;
    }
    this.filteredCryptos = this.cryptos.filter(crypto => crypto.name.toLowerCase().includes(normalized) || crypto.symbol.toLowerCase().includes(normalized));
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
  getPriceChangeClass(change) {
    return change >= 0 ? 'positive' : 'negative';
  }
  getSparklinePoints(crypto, width = 150, height = 44) {
    const values = crypto.sparkline?.length ? crypto.sparkline.slice(-30) : this.createFallbackSparkline(crypto);
    const min = Math.min(...values);
    const max = Math.max(...values);
    const range = max - min || 1;
    return values.map((value, index) => {
      const x = index / (values.length - 1) * width;
      const y = height - (value - min) / range * height;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    }).join(' ');
  }
  createFallbackSparkline(crypto) {
    const base = crypto.currentPrice || 1;
    return Array.from({
      length: 30
    }, (_, index) => {
      const wave = Math.sin(index / 2.5) * base * 0.014;
      const trend = crypto.priceChange24h / 100 * base * (index / 29);
      return base + wave + trend;
    });
  }
  static {
    this.ɵfac = function OverviewComponent_Factory(t) {
      return new (t || OverviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_crypto_service__WEBPACK_IMPORTED_MODULE_0__.CryptoService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: OverviewComponent,
      selectors: [["app-overview"]],
      decls: 133,
      vars: 84,
      consts: [[1, "overview-page"], [1, "overview-topbar"], ["routerLink", "/", 1, "overview-brand"], ["aria-hidden", "true", 1, "brand-icon"], ["viewBox", "0 0 24 24", "fill", "none"], ["cx", "12", "cy", "12", "r", "8.2", "stroke", "currentColor", "stroke-width", "1.7"], ["d", "M7 14.5l3-3 2.4 2.2 4.6-5.1", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M16.4 8.6H17v4", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9.3 7.4h2.2c1 0 1.7.6 1.7 1.5s-.7 1.5-1.7 1.5H9.3V7.4Z", "stroke", "currentColor", "stroke-width", "1.35", "stroke-linejoin", "round"], [1, "overview-controls"], [1, "hero"], [1, "hero-copy"], [1, "eyebrow"], [1, "hero-triggers"], [1, "hero-actions"], ["routerLink", "/auth/login", 1, "btn", "btn-primary"], ["routerLink", "/auth/register", 1, "btn", "btn-secondary"], [1, "hero-panel"], [1, "panel-kicker"], [1, "panel-list"], ["routerLink", "/auth/register", 1, "panel-cta"], [1, "metrics-section"], [1, "metric-card"], [1, "insights-section"], [1, "insights-intro"], [1, "insights-grid"], [1, "insight-card"], [1, "market-table-section"], [1, "market-table-header"], [1, "search-box"], ["type", "text", 3, "formControl", "placeholder"], ["class", "table-card", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], [1, "table-card"], [1, "table-wrapper"], [4, "ngFor", "ngForOf"], [1, "crypto-cell"], [3, "src", "alt", 4, "ngIf"], [1, "crypto-text"], ["viewBox", "0 0 150 44", "preserveAspectRatio", "none", 1, "sparkline"], [3, "src", "alt"], [1, "loading-container"], [1, "spinner"]],
      template: function OverviewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "header", 1)(2, "a", 2)(3, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "svg", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "circle", 5)(6, "path", 6)(7, "path", 7)(8, "path", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "CryptoMonitor");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "app-theme-switch")(13, "app-language-switch");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "section", 10)(15, "div", 11)(16, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "CryptoMonitor");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](23, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 13)(25, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](33, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 14)(35, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](39);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](40, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "aside", 17)(42, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](44, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](47, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](50, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 19)(52, "div")(53, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](57, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div")(59, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62, "Volume 24h");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "a", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](65, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "section", 21)(67, "div", 22)(68, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Total Market Cap");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 22)(73, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](74, "Volume 24h");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](76);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 22)(78, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](80, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 22)(84, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](86, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](88);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "section", 23)(90, "div", 24)(91, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](93, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](95);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](96, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 25)(98, "div", 26)(99, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](101, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](104, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 26)(106, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](108, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](111, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 26)(113, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](114);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](115, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](117);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](118, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "section", 27)(120, "div", 28)(121, "div")(122, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](124, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](126);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](127, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](129, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](130, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](131, OverviewComponent_div_131_Template, 23, 13, "div", 31)(132, OverviewComponent_div_132_Template, 5, 3, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 34, "overview.heroTitle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](23, 36, "overview.heroText"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](27, 38, "overview.triggerFavorites"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](30, 40, "overview.triggerHistory"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](33, 42, "overview.triggerReports"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](37, 44, "overview.login"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](40, 46, "overview.register"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](44, 48, "overview.panelKicker"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](47, 50, "overview.panelTitle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](50, 52, "overview.panelText"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.topGainers.length || 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](57, 54, "overview.topGainers"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.formatMarketCap(ctx.totalVolume24h));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](65, 56, "overview.panelCta"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.formatMarketCap(ctx.totalMarketCap));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.formatMarketCap(ctx.totalVolume24h));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](80, 58, "overview.topGainers"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.topGainers.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](86, 60, "overview.topLosers"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.topLosers.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](93, 62, "overview.insightsTitle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](96, 64, "overview.insightsText"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](101, 66, "overview.monitoring"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](104, 68, "overview.monitoringText"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](108, 70, "overview.smartSearch"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](111, 72, "overview.smartSearchText"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](115, 74, "overview.professionalUi"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](118, 76, "overview.professionalUiText"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](124, 78, "overview.marketTitle"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](127, 80, "overview.marketText"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formControl", ctx.searchControl)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](130, 82, "overview.searchPlaceholder"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlDirective, _shared_components_theme_switch_theme_switch_component__WEBPACK_IMPORTED_MODULE_1__.ThemeSwitchComponent, _shared_components_language_switch_language_switch_component__WEBPACK_IMPORTED_MODULE_2__.LanguageSwitchComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
      styles: [".overview-page[_ngcontent-%COMP%] {\n  max-width: 1320px;\n  margin: 0 auto;\n  padding: 1.25rem 1.5rem 3rem;\n  color: var(--color-text-primary);\n  min-width: 0;\n}\n\n.overview-topbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n\n.overview-brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.7rem;\n  color: var(--color-text-primary);\n  font-weight: 800;\n}\n\n.brand-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  display: grid;\n  place-items: center;\n  border-radius: var(--radius-lg);\n  background: var(--gradient-primary);\n  color: white;\n  box-shadow: var(--shadow-md);\n}\n\n.brand-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n\n.overview-controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n}\n\n.hero[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.4fr) minmax(320px, 0.6fr);\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n\n.hero-copy[_ngcontent-%COMP%], .hero-panel[_ngcontent-%COMP%], .metric-card[_ngcontent-%COMP%], .insight-card[_ngcontent-%COMP%], .market-table-header[_ngcontent-%COMP%], .table-card[_ngcontent-%COMP%] {\n  background: var(--layout-surface);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-md);\n}\n\n.hero-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: clamp(1.5rem, 4vw, 3rem);\n  background: linear-gradient(135deg, rgba(79, 70, 229, 0.12), rgba(6, 182, 212, 0.1)), var(--layout-surface);\n}\n\n.eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  width: -moz-fit-content;\n  width: fit-content;\n  padding: 0.55rem 0.95rem;\n  border-radius: var(--radius-full);\n  background: rgba(79, 70, 229, 0.1);\n  color: var(--color-primary);\n  font-size: 0.82rem;\n  font-weight: 800;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  margin-bottom: 1.2rem;\n}\n\n.hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0;\n  font-size: clamp(2.2rem, 5vw, 4.2rem);\n  line-height: 1.02;\n}\n\n.hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 660px;\n  margin: 1.2rem 0 0;\n  color: var(--color-text-secondary);\n  font-size: 1.02rem;\n  line-height: 1.7;\n}\n\n.hero-triggers[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n  margin-top: 1.35rem;\n}\n\n.hero-triggers[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.6rem 0.85rem;\n  border-radius: var(--radius-full);\n  background: var(--layout-surface);\n  border: 1px solid var(--surface-border);\n  color: var(--color-text-secondary);\n  font-size: 0.9rem;\n  font-weight: 700;\n}\n\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-top: 2rem;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background: var(--layout-surface);\n  border-color: var(--surface-border);\n  color: var(--color-text-primary);\n}\n\n.hero-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 1.25rem;\n  padding: 1.5rem;\n}\n\n.panel-kicker[_ngcontent-%COMP%] {\n  color: var(--color-accent);\n  font-size: 0.8rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n}\n\n.hero-panel[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.65rem;\n}\n\n.hero-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.panel-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.75rem;\n}\n\n.panel-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: var(--radius-lg);\n  background: var(--surface-highlight);\n  border: 1px solid var(--surface-border);\n}\n\n.panel-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], .panel-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.panel-list[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n\n.panel-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-text-tertiary);\n  font-size: 0.88rem;\n}\n\n.panel-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 2.75rem;\n  padding: 0.7rem 1rem;\n  border-radius: var(--radius-lg);\n  background: var(--color-bg-tertiary);\n  color: var(--color-primary);\n  font-weight: 800;\n}\n\n.metrics-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n\n.metric-card[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n}\n\n.metric-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .crypto-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--color-text-secondary);\n}\n\n.metric-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 0.5rem;\n  font-size: 1.5rem;\n}\n\n.insights-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.insights-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .market-table-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1.75rem;\n}\n\n.insights-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .market-table-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-text-secondary);\n}\n\n.insights-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n  margin-top: 1.25rem;\n}\n\n.insight-card[_ngcontent-%COMP%] {\n  padding: 1.35rem;\n  transition: transform var(--transition-fast), border-color var(--transition-fast), box-shadow var(--transition-fast);\n}\n\n.insight-card[_ngcontent-%COMP%]:hover, .metric-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: rgba(79, 70, 229, 0.24);\n  box-shadow: var(--shadow-lg);\n}\n\n.insight-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.7rem;\n}\n\n.insight-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-text-secondary);\n  line-height: 1.7;\n}\n\n.market-table-section[_ngcontent-%COMP%] {\n  padding: 1rem 0;\n}\n\n.market-table-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  padding: 1.25rem;\n}\n\n.search-box[_ngcontent-%COMP%] {\n  width: min(100%, 320px);\n}\n\n.search-box[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.9rem 1rem;\n  border-radius: var(--radius-lg);\n  border: 1px solid var(--surface-border);\n  background: var(--color-bg-secondary);\n  color: var(--color-text-primary);\n}\n\n.table-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.table-wrapper[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 900px;\n  border-collapse: collapse;\n}\n\nthead[_ngcontent-%COMP%] {\n  background: var(--surface-highlight);\n}\n\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  padding: 1rem 1.2rem;\n  text-align: left;\n  color: var(--color-text-primary);\n}\n\nth[_ngcontent-%COMP%] {\n  color: var(--color-text-tertiary);\n  font-weight: 800;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n}\n\ntr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--surface-border);\n}\n\ntbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover);\n}\n\n.crypto-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.95rem;\n}\n\n.crypto-cell[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 50%;\n  object-fit: cover;\n  background: var(--surface-border);\n}\n\n.crypto-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n}\n\ntd.positive[_ngcontent-%COMP%] {\n  color: var(--color-gain);\n}\n\ntd.negative[_ngcontent-%COMP%] {\n  color: var(--color-error);\n}\n\n.sparkline[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 44px;\n}\n\n.sparkline[_ngcontent-%COMP%]   polyline[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: var(--color-gain);\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n\n.sparkline.negative[_ngcontent-%COMP%]   polyline[_ngcontent-%COMP%] {\n  stroke: var(--color-error);\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 1rem;\n  min-height: 180px;\n}\n\n.spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 6px solid var(--color-bg-tertiary);\n  border-top-color: var(--color-primary);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 1120px) {\n  .hero[_ngcontent-%COMP%], .metrics-section[_ngcontent-%COMP%], .insights-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 760px) {\n  .overview-page[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .overview-topbar[_ngcontent-%COMP%], .market-table-header[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .overview-controls[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n  .hero[_ngcontent-%COMP%], .metrics-section[_ngcontent-%COMP%], .insights-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .hero-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], .search-box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZmVhdHVyZXMvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDREQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7Ozs7OztFQU1JLGlDQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQkFBQTtFQUNBLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlDQUFBO0VBQ0EsMkdBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLHVDQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUNBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksU0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7QUFDSjs7QUFFQTs7RUFFSSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0NBQUE7RUFDQSwyQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsZ0RBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0FBQ0o7O0FBRUE7O0VBRUksY0FBQTtFQUNBLGtDQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTs7RUFFSSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7O0VBRUksU0FBQTtFQUNBLGtDQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsZ0RBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0Esb0hBQUE7QUFDSjs7QUFFQTs7RUFFSSwyQkFBQTtFQUNBLHFDQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxTQUFBO0VBQ0Esa0NBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUNBQUE7RUFDQSxxQ0FBQTtFQUNBLGdDQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtBQUNKOztBQUVBOztFQUVJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFFQTtFQUNJLDhDQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQ0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtBQUNKOztBQUVBO0VBQ0k7SUFDSSx5QkFBQTtFQUNOO0FBQ0Y7QUFFQTtFQUNJOzs7SUFHSSxnREFBQTtFQUFOO0FBQ0Y7QUFHQTtFQUNJO0lBQ0ksYUFBQTtFQUROO0VBSUU7O0lBRUksb0JBQUE7SUFDQSxzQkFBQTtFQUZOO0VBS0U7SUFDSSwyQkFBQTtFQUhOO0VBTUU7OztJQUdJLDBCQUFBO0VBSk47RUFPRTs7SUFFSSxXQUFBO0VBTE47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVydmlldy1wYWdlIHtcbiAgICBtYXgtd2lkdGg6IDEzMjBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAxLjI1cmVtIDEuNXJlbSAzcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xuICAgIG1pbi13aWR0aDogMDtcbn1cblxuLm92ZXJ2aWV3LXRvcGJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBnYXA6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbn1cblxuLm92ZXJ2aWV3LWJyYW5kIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC43cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5icmFuZC1pY29uIHtcbiAgICB3aWR0aDogNDJweDtcbiAgICBoZWlnaHQ6IDQycHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZ3JhZGllbnQtcHJpbWFyeSk7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG59XG5cbi5icmFuZC1pY29uIHN2ZyB7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xufVxuXG4ub3ZlcnZpZXctY29udHJvbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDAuNjVyZW07XG59XG5cbi5oZXJvIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDEuNGZyKSBtaW5tYXgoMzIwcHgsIDAuNmZyKTtcbiAgICBnYXA6IDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuLmhlcm8tY29weSxcbi5oZXJvLXBhbmVsLFxuLm1ldHJpYy1jYXJkLFxuLmluc2lnaHQtY2FyZCxcbi5tYXJrZXQtdGFibGUtaGVhZGVyLFxuLnRhYmxlLWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxheW91dC1zdXJmYWNlKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbWQpO1xufVxuXG4uaGVyby1jb3B5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogY2xhbXAoMS41cmVtLCA0dncsIDNyZW0pO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNzksIDcwLCAyMjksIDAuMTIpLCByZ2JhKDYsIDE4MiwgMjEyLCAwLjEpKSwgdmFyKC0tbGF5b3V0LXN1cmZhY2UpO1xufVxuXG4uZXllYnJvdyB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgcGFkZGluZzogMC41NXJlbSAwLjk1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDc5LCA3MCwgMjI5LCAwLjEpO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICBmb250LXNpemU6IDAuODJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wOGVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xufVxuXG4uaGVyby1jb3B5IGgxIHtcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IGNsYW1wKDIuMnJlbSwgNXZ3LCA0LjJyZW0pO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjAyO1xufVxuXG4uaGVyby1jb3B5IHAge1xuICAgIG1heC13aWR0aDogNjYwcHg7XG4gICAgbWFyZ2luOiAxLjJyZW0gMCAwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgZm9udC1zaXplOiAxLjAycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG59XG5cbi5oZXJvLXRyaWdnZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBnYXA6IDAuNjVyZW07XG4gICAgbWFyZ2luLXRvcDogMS4zNXJlbTtcbn1cblxuLmhlcm8tdHJpZ2dlcnMgc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjZyZW0gMC44NXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtZnVsbCk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGF5b3V0LXN1cmZhY2UpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5oZXJvLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGdhcDogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xufVxuXG4uYnRuLXByaW1hcnkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYWRpZW50LXByaW1hcnkpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxheW91dC1zdXJmYWNlKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcbn1cblxuLmhlcm8tcGFuZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiAxLjI1cmVtO1xuICAgIHBhZGRpbmc6IDEuNXJlbTtcbn1cblxuLnBhbmVsLWtpY2tlciB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWFjY2VudCk7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG59XG5cbi5oZXJvLXBhbmVsIGgyIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjY1cmVtO1xufVxuXG4uaGVyby1wYW5lbCBwIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5wYW5lbC1saXN0IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMC43NXJlbTtcbn1cblxuLnBhbmVsLWxpc3QgZGl2IHtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1oaWdobGlnaHQpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbn1cblxuLnBhbmVsLWxpc3Qgc3Ryb25nLFxuLnBhbmVsLWxpc3Qgc3BhbiB7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wYW5lbC1saXN0IHN0cm9uZyB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4ucGFuZWwtbGlzdCBzcGFuIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC10ZXJ0aWFyeSk7XG4gICAgZm9udC1zaXplOiAwLjg4cmVtO1xufVxuXG4ucGFuZWwtY3RhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1pbi1oZWlnaHQ6IDIuNzVyZW07XG4gICAgcGFkZGluZzogMC43cmVtIDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy10ZXJ0aWFyeSk7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5tZXRyaWNzLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpO1xuICAgIGdhcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG4ubWV0cmljLWNhcmQge1xuICAgIHBhZGRpbmc6IDEuMjVyZW07XG59XG5cbi5tZXRyaWMtY2FyZCBzcGFuLFxuLmNyeXB0by10ZXh0IHNwYW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG59XG5cbi5tZXRyaWMtY2FyZCBzdHJvbmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmluc2lnaHRzLXNlY3Rpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59XG5cbi5pbnNpZ2h0cy1pbnRybyBoMixcbi5tYXJrZXQtdGFibGUtaGVhZGVyIGgyIHtcbiAgICBtYXJnaW46IDAgMCAwLjM1cmVtO1xuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbn1cblxuLmluc2lnaHRzLWludHJvIHAsXG4ubWFya2V0LXRhYmxlLWhlYWRlciBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtc2Vjb25kYXJ5KTtcbn1cblxuLmluc2lnaHRzLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDAsIDFmcikpO1xuICAgIGdhcDogMXJlbTtcbiAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xufVxuXG4uaW5zaWdodC1jYXJkIHtcbiAgICBwYWRkaW5nOiAxLjM1cmVtO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSB2YXIoLS10cmFuc2l0aW9uLWZhc3QpLCBib3JkZXItY29sb3IgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KSwgYm94LXNoYWRvdyB2YXIoLS10cmFuc2l0aW9uLWZhc3QpO1xufVxuXG4uaW5zaWdodC1jYXJkOmhvdmVyLFxuLm1ldHJpYy1jYXJkOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDc5LCA3MCwgMjI5LCAwLjI0KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xufVxuXG4uaW5zaWdodC1jYXJkIGgzIHtcbiAgICBtYXJnaW46IDAgMCAwLjdyZW07XG59XG5cbi5pbnNpZ2h0LWNhcmQgcCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgbGluZS1oZWlnaHQ6IDEuNztcbn1cblxuLm1hcmtldC10YWJsZS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAxcmVtIDA7XG59XG5cbi5tYXJrZXQtdGFibGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIHBhZGRpbmc6IDEuMjVyZW07XG59XG5cbi5zZWFyY2gtYm94IHtcbiAgICB3aWR0aDogbWluKDEwMCUsIDMyMHB4KTtcbn1cblxuLnNlYXJjaC1ib3ggaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAuOXJlbSAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJnLXNlY29uZGFyeSk7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XG59XG5cbi50YWJsZS1jYXJkIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGFibGUtd3JhcHBlciB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbn1cblxudGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogOTAwcHg7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbn1cblxudGhlYWQge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtaGlnaGxpZ2h0KTtcbn1cblxudGgsXG50ZCB7XG4gICAgcGFkZGluZzogMXJlbSAxLjJyZW07XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcbn1cblxudGgge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXRlcnRpYXJ5KTtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbnRyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xufVxuXG50Ym9keSB0cjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ob3Zlcik7XG59XG5cbi5jcnlwdG8tY2VsbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC45NXJlbTtcbn1cblxuLmNyeXB0by1jZWxsIGltZyB7XG4gICAgd2lkdGg6IDQycHg7XG4gICAgaGVpZ2h0OiA0MnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG59XG5cbi5jcnlwdG8tdGV4dCBzdHJvbmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG50ZC5wb3NpdGl2ZSB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWdhaW4pO1xufVxuXG50ZC5uZWdhdGl2ZSB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWVycm9yKTtcbn1cblxuLnNwYXJrbGluZSB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogNDRweDtcbn1cblxuLnNwYXJrbGluZSBwb2x5bGluZSB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6IHZhcigtLWNvbG9yLWdhaW4pO1xuICAgIHN0cm9rZS13aWR0aDogMztcbiAgICBzdHJva2UtbGluZWNhcDogcm91bmQ7XG4gICAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbn1cblxuLnNwYXJrbGluZS5uZWdhdGl2ZSBwb2x5bGluZSB7XG4gICAgc3Ryb2tlOiB2YXIoLS1jb2xvci1lcnJvcik7XG59XG5cbi5sb2FkaW5nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxcmVtO1xuICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xufVxuXG4uc3Bpbm5lciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlcjogNnB4IHNvbGlkIHZhcigtLWNvbG9yLWJnLXRlcnRpYXJ5KTtcbiAgICBib3JkZXItdG9wLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogMTEyMHB4KSB7XG4gICAgLmhlcm8sXG4gICAgLm1ldHJpY3Mtc2VjdGlvbixcbiAgICAuaW5zaWdodHMtZ3JpZCB7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xuICAgIC5vdmVydmlldy1wYWdlIHtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICB9XG5cbiAgICAub3ZlcnZpZXctdG9wYmFyLFxuICAgIC5tYXJrZXQtdGFibGUtaGVhZGVyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgLm92ZXJ2aWV3LWNvbnRyb2xzIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgIC5oZXJvLFxuICAgIC5tZXRyaWNzLXNlY3Rpb24sXG4gICAgLmluc2lnaHRzLWdyaWQge1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgICB9XG5cbiAgICAuaGVyby1hY3Rpb25zIC5idG4sXG4gICAgLnNlYXJjaC1ib3gge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 9153:
/*!***************************************!*\
  !*** ./src/app/guards/admin.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminGuard: () => (/* binding */ AdminGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);




class AdminGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    return this.authService.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(user => {
      if (user?.role === 'admin') {
        return true;
      }
      this.router.navigate(['/dashboard']);
      return false;
    }));
  }
  static {
    this.ɵfac = function AdminGuard_Factory(t) {
      return new (t || AdminGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AdminGuard,
      factory: AdminGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1620:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthGuard: () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);




class AuthGuard {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
  }
  canActivate(route, state) {
    return this.authService.user$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(user => {
      if (user) {
        return true;
      }
      this.router.navigate(['/auth/login'], {
        queryParams: {
          returnUrl: state.url
        }
      });
      return false;
    }));
  }
  static {
    this.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 472:
/*!**************************************************!*\
  !*** ./src/app/interceptors/auth.interceptor.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);




class AuthInterceptor {
  constructor(router) {
    this.router = router;
  }
  intercept(request, next) {
    const token = localStorage.getItem('token');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(error => {
      if (error.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigate(['/auth/login']);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error);
    }));
  }
  static {
    this.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 1765:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 597);



function FooterComponent_ng_container_14_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function FooterComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FooterComponent_ng_container_14_span_4_Template, 2, 0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const link_r1 = ctx.$implicit;
    const last_r2 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", link_r1.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 3, link_r1.labelKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !last_r2);
  }
}
class FooterComponent {
  constructor() {
    this.currentYear = new Date().getFullYear();
    this.footerLinks = [{
      labelKey: 'footer.about',
      url: '#'
    }, {
      labelKey: 'footer.privacy',
      url: '#'
    }, {
      labelKey: 'footer.terms',
      url: '#'
    }, {
      labelKey: 'footer.contact',
      url: '#'
    }];
  }
  static {
    this.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 31,
      vars: 14,
      consts: [[1, "footer"], [1, "footer-container"], [1, "footer-main"], [1, "footer-brand"], [1, "footer-actions"], [1, "footer-links"], [4, "ngFor", "ngForOf"], [1, "social-links"], ["href", "#", "title", "Twitter", 1, "social-link"], ["href", "#", "title", "LinkedIn", 1, "social-link"], ["href", "#", "title", "GitHub", 1, "social-link"], ["href", "#", "title", "Discord", 1, "social-link"], [1, "footer-bottom"], [1, "footer-credit"], [3, "href"], ["class", "link-separator", 4, "ngIf"], [1, "link-separator"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "CryptoMonitor");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4)(10, "div", 5)(11, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FooterComponent_ng_container_14_Template, 5, 5, "ng-container", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7)(16, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\uD835\uDD4F");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "in");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "gh");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "dc");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12)(25, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](30, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 6, "footer.description"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 8, "footer.links"));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.footerLinks);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u00A9 ", ctx.currentYear, " CryptoMonitor. ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 10, "footer.copyright"), ".");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](30, 12, "footer.developedBy"));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe],
      styles: [".footer[_ngcontent-%COMP%] {\n  background: var(--layout-surface);\n  border: 1px solid var(--surface-border);\n  backdrop-filter: blur(18px);\n  box-shadow: var(--shadow-lg);\n  border-radius: var(--radius-xl);\n  padding: var(--spacing-lg);\n  margin: 0;\n}\n.footer[_ngcontent-%COMP%]   .footer-container[_ngcontent-%COMP%] {\n  max-width: 1360px;\n  margin: 0 auto;\n  padding: 0 var(--spacing-md);\n}\n.footer[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: var(--spacing-md);\n  flex-wrap: wrap;\n  padding: var(--spacing-sm) 0;\n}\n.footer[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%] {\n  min-width: 220px;\n  max-width: 420px;\n}\n.footer[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: var(--color-primary-light);\n  margin-bottom: var(--spacing-xs);\n  font-size: 0.95rem;\n}\n.footer[_ngcontent-%COMP%]   .footer-brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary);\n  font-size: 0.85rem;\n  margin: 0;\n  line-height: 1.5;\n}\n.footer[_ngcontent-%COMP%]   .footer-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--spacing-sm);\n  align-items: center;\n  min-width: 240px;\n}\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: var(--spacing-xs);\n  color: var(--color-text-secondary);\n  font-size: 0.8rem;\n}\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--color-text-tertiary);\n}\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-text-secondary);\n  text-decoration: none;\n  transition: color var(--transition-fast);\n}\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary-light);\n}\n.footer[_ngcontent-%COMP%]   .footer-links[_ngcontent-%COMP%]   .link-separator[_ngcontent-%COMP%] {\n  color: var(--color-text-tertiary);\n  margin: 0 0.25rem;\n}\n.footer[_ngcontent-%COMP%]   .social-links[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-xs);\n}\n.footer[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: var(--color-bg-tertiary);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--radius-full);\n  color: var(--color-text-primary);\n  font-size: 0.85rem;\n  text-decoration: none;\n  transition: all var(--transition-fast);\n}\n.footer[_ngcontent-%COMP%]   .social-link[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary);\n  color: white;\n  transform: translateY(-1px);\n}\n.footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--color-bg-tertiary);\n  padding-top: var(--spacing-xs);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: var(--spacing-xs);\n  flex-wrap: wrap;\n}\n.footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: var(--color-text-tertiary);\n  font-size: 0.78rem;\n  margin: 0;\n}\n.footer[_ngcontent-%COMP%]   .footer-bottom[_ngcontent-%COMP%]   p.footer-credit[_ngcontent-%COMP%] {\n  margin-top: 0.2rem;\n}\n@media (max-width: 768px) {\n  .footer[_ngcontent-%COMP%]   .footer-main[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: var(--spacing-sm);\n  }\n  .footer[_ngcontent-%COMP%]   .footer-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0VBQ0EsdUNBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSwwQkFBQTtFQUNBLFNBQUE7QUFDSjtBQUNJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0VBQ0EsNEJBQUE7QUFDUjtBQUVJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtBQUFSO0FBR0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBRFI7QUFHUTtFQUNJLGlDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQURaO0FBSVE7RUFDSSxrQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBRlo7QUFNSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBSlI7QUFPSTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUJBQUE7QUFMUjtBQU9RO0VBQ0ksZ0JBQUE7RUFDQSxpQ0FBQTtBQUxaO0FBUVE7RUFDSSxrQ0FBQTtFQUNBLHFCQUFBO0VBQ0Esd0NBQUE7QUFOWjtBQVNRO0VBQ0ksaUNBQUE7QUFQWjtBQVVRO0VBQ0ksaUNBQUE7RUFDQSxpQkFBQTtBQVJaO0FBWUk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUFWUjtBQWFJO0VBQ0ksb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQ0FBQTtBQVhSO0FBY0k7RUFDSSxnQ0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQVpSO0FBZUk7RUFDSSw4Q0FBQTtFQUNBLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFiUjtBQWVRO0VBQ0ksaUNBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUFiWjtBQWVZO0VBQ0ksa0JBQUE7QUFiaEI7QUFrQkk7RUFDSTtJQUNJLHNCQUFBO0lBQ0Esc0JBQUE7RUFoQlY7RUFtQk07SUFDSSxXQUFBO0VBakJWO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWxheW91dC1zdXJmYWNlKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcclxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxOHB4KTtcclxuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1sZyk7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcclxuICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xyXG4gICAgbWFyZ2luOiAwO1xyXG5cclxuICAgIC5mb290ZXItY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDEzNjBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBwYWRkaW5nOiAwIHZhcigtLXNwYWNpbmctbWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItbWFpbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSkgMDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyLWJyYW5kIHtcclxuICAgICAgICBtaW4td2lkdGg6IDIyMHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogNDIwcHg7XHJcblxyXG4gICAgICAgIGg0IHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktbGlnaHQpO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zcGFjaW5nLXhzKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyLWFjdGlvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtaW4td2lkdGg6IDI0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItbGlua3Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiB2YXIoLS1zcGFjaW5nLXhzKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG5cclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtdGVydGlhcnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1saWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGluay1zZXBhcmF0b3Ige1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC10ZXJ0aWFyeSk7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwLjI1cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc29jaWFsLWxpbmtzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGdhcDogdmFyKC0tc3BhY2luZy14cyk7XHJcbiAgICB9XHJcblxyXG4gICAgLnNvY2lhbC1saW5rIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICAgIGhlaWdodDogMzJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy10ZXJ0aWFyeSk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tZmFzdCk7XHJcbiAgICB9XHJcblxyXG4gICAgLnNvY2lhbC1saW5rOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItYm90dG9tIHtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItYmctdGVydGlhcnkpO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiB2YXIoLS1zcGFjaW5nLXhzKTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGdhcDogdmFyKC0tc3BhY2luZy14cyk7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtdGVydGlhcnkpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzhyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgICAgICYuZm9vdGVyLWNyZWRpdCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgLmZvb3Rlci1tYWluIHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZ2FwOiB2YXIoLS1zcGFjaW5nLXNtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mb290ZXItYWN0aW9ucyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5093:
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/language-switch/language-switch.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageSwitchComponent: () => (/* binding */ LanguageSwitchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 597);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



const _c0 = a0 => ({
  active: a0
});
function LanguageSwitchComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguageSwitchComponent_button_1_Template_button_click_0_listener() {
      const lang_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r2.changeLanguage(lang_r2.code));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const lang_r2 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r2.currentLanguage === lang_r2.code))("title", lang_r2.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r2.code.toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r2.label);
  }
}
class LanguageSwitchComponent {
  constructor(translateService) {
    this.translateService = translateService;
    this.currentLanguage = 'pt';
    this.languages = [{
      code: 'pt',
      label: 'Português'
    }, {
      code: 'en',
      label: 'English'
    }];
    this.currentLanguage = localStorage.getItem('language') || 'pt';
  }
  changeLanguage(lang) {
    this.currentLanguage = lang;
    this.translateService.use(lang);
    localStorage.setItem('language', lang);
  }
  static {
    this.ɵfac = function LanguageSwitchComponent_Factory(t) {
      return new (t || LanguageSwitchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LanguageSwitchComponent,
      selectors: [["app-language-switch"]],
      decls: 2,
      vars: 1,
      consts: [[1, "language-switch"], ["class", "lang-btn", 3, "ngClass", "title", "click", 4, "ngFor", "ngForOf"], [1, "lang-btn", 3, "click", "ngClass", "title"], [1, "lang-code"], [1, "lang-label"]],
      template: function LanguageSwitchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LanguageSwitchComponent_button_1_Template, 5, 6, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.languages);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf],
      styles: [".language-switch[_ngcontent-%COMP%] {\n  display: flex;\n  gap: var(--spacing-xs);\n  background: var(--color-bg-tertiary);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--radius-full);\n  padding: var(--spacing-xs);\n}\n.language-switch[_ngcontent-%COMP%]   .lang-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: var(--spacing-sm) var(--spacing-md);\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: var(--color-text-secondary);\n  border-radius: var(--radius-full);\n  transition: all var(--transition-fast);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n.language-switch[_ngcontent-%COMP%]   .lang-btn[_ngcontent-%COMP%]   .lang-code[_ngcontent-%COMP%] {\n  font-weight: 800;\n}\n.language-switch[_ngcontent-%COMP%]   .lang-btn[_ngcontent-%COMP%]   .lang-label[_ngcontent-%COMP%] {\n  font-size: 0.76rem;\n}\n.language-switch[_ngcontent-%COMP%]   .lang-btn.active[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: white;\n  box-shadow: var(--shadow-sm);\n}\n.language-switch[_ngcontent-%COMP%]   .lang-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  color: var(--color-primary-light);\n}\n\n@media (max-width: 980px) {\n  .language-switch[_ngcontent-%COMP%]   .lang-btn[_ngcontent-%COMP%] {\n    width: 2rem;\n    height: 2rem;\n    padding: 0;\n    justify-content: center;\n  }\n  .language-switch[_ngcontent-%COMP%]   .lang-label[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGFuZ3VhZ2Utc3dpdGNoL2xhbmd1YWdlLXN3aXRjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQ0FBQTtFQUNBLDBCQUFBO0FBQ0o7QUFDSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esc0NBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNSO0FBQ1E7RUFDSSxnQkFBQTtBQUNaO0FBRVE7RUFDSSxrQkFBQTtBQUFaO0FBR1E7RUFDSSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtBQURaO0FBSVE7RUFDSSxpQ0FBQTtBQUZaOztBQU9BO0VBQ0k7SUFDSSxXQUFBO0lBQ0EsWUFBQTtJQUNBLFVBQUE7SUFDQSx1QkFBQTtFQUpOO0VBT0U7SUFDSSxhQUFBO0VBTE47QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5ndWFnZS1zd2l0Y2gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiB2YXIoLS1zcGFjaW5nLXhzKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy10ZXJ0aWFyeSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcbiAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXhzKTtcblxyXG4gICAgLmxhbmctYnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogdmFyKC0tc3BhY2luZy1zbSkgdmFyKC0tc3BhY2luZy1tZCk7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tZmFzdCk7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDAuMzVyZW07XG5cbiAgICAgICAgLmxhbmctY29kZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxhbmctbGFiZWwge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc2cmVtO1xuICAgICAgICB9XG5cclxuICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1zbSk7XG4gICAgICAgIH1cblxyXG4gICAgICAgICY6aG92ZXI6bm90KC5hY3RpdmUpIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk4MHB4KSB7XG4gICAgLmxhbmd1YWdlLXN3aXRjaCAubGFuZy1idG4ge1xuICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAubGFuZ3VhZ2Utc3dpdGNoIC5sYW5nLWxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 7487:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/layout/layout.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutComponent: () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.component */ 3083);
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar/sidebar.component */ 1417);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ 1765);






class LayoutComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.sidebarOpen = false;
    this.showFooter = false;
  }
  onMainScroll(event) {
    const target = event.target;
    this.showFooter = target.scrollTop > 140;
  }
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  closeSidebar() {
    this.sidebarOpen = false;
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
  static {
    this.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["app-layout"]],
      decls: 7,
      vars: 3,
      consts: [[1, "layout"], [3, "onMenuClick"], [1, "layout-container"], [3, "onClose", "open"], [1, "layout-main", 3, "scroll"]],
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "app-navbar", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onMenuClick", function LayoutComponent_Template_app_navbar_onMenuClick_1_listener() {
            return ctx.toggleSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2)(3, "app-sidebar", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onClose", function LayoutComponent_Template_app_sidebar_onClose_3_listener() {
            return ctx.closeSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "main", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("scroll", function LayoutComponent_Template_main_scroll_4_listener($event) {
            return ctx.onMainScroll($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("open", ctx.sidebarOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("visible", ctx.showFooter);
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__.NavbarComponent, _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__.SidebarComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent],
      styles: [".layout[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: var(--page-background);\n  overflow: hidden;\n  z-index: 0;\n}\n.layout[_ngcontent-%COMP%]::before {\n  content: none;\n}\n.layout[_ngcontent-%COMP%]   .layout-container[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex: 1;\n  overflow: hidden;\n  padding: 0 var(--spacing-lg);\n  gap: var(--spacing-md);\n}\n.layout[_ngcontent-%COMP%]   .layout-main[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 0;\n  transition: padding var(--transition-base), transform var(--transition-base), box-shadow var(--transition-base);\n  background: var(--layout-surface);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--radius-xl);\n  box-shadow: var(--shadow-md);\n  backdrop-filter: blur(14px);\n  position: relative;\n  margin: var(--spacing-lg) auto 0;\n  width: min(100%, 1440px);\n  max-width: 1360px;\n  min-width: 0;\n}\n.layout[_ngcontent-%COMP%]   app-footer[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 50%;\n  bottom: 1rem;\n  transform: translateX(-50%) translateY(100%);\n  width: min(100%, 1240px);\n  z-index: var(--z-sticky);\n  opacity: 0;\n  pointer-events: none;\n  transition: transform var(--transition-fast), opacity var(--transition-fast);\n}\n.layout[_ngcontent-%COMP%]   app-footer.visible[_ngcontent-%COMP%] {\n  transform: translateX(-50%) translateY(0);\n  opacity: 1;\n  pointer-events: auto;\n}\n\n@media (max-width: 768px) {\n  .layout[_ngcontent-%COMP%]   .layout-container[_ngcontent-%COMP%] {\n    padding: 0 var(--spacing-md);\n  }\n  .layout[_ngcontent-%COMP%]   .layout-container[_ngcontent-%COMP%]   .layout-main[_ngcontent-%COMP%] {\n    margin-top: var(--spacing-md);\n    border-radius: var(--radius-xl);\n  }\n  .layout[_ngcontent-%COMP%]   app-footer[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 480px) {\n  .layout[_ngcontent-%COMP%]   .layout-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .layout[_ngcontent-%COMP%]   .layout-container[_ngcontent-%COMP%]   .layout-main[_ngcontent-%COMP%] {\n    margin: 0;\n    border-left: 0;\n    border-right: 0;\n    border-radius: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0L2xheW91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0FBQ1I7QUFFSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBQVI7QUFHSTtFQUNJLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLCtHQUFBO0VBQ0EsaUNBQUE7RUFDQSx1Q0FBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQURSO0FBSUk7RUFDSSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSw0RUFBQTtBQUZSO0FBS0k7RUFDSSx5Q0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtBQUhSOztBQU9BO0VBRVE7SUFDSSw0QkFBQTtFQUxWO0VBT1U7SUFDSSw2QkFBQTtJQUNBLCtCQUFBO0VBTGQ7RUFTTTtJQUNJLGFBQUE7RUFQVjtBQUNGO0FBV0E7RUFFUTtJQUNJLFVBQUE7RUFWVjtFQVlVO0lBQ0ksU0FBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7RUFWZDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmxheW91dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tcGFnZS1iYWNrZ3JvdW5kKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiAwO1xyXG5cclxuICAgICY6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IG5vbmU7XG4gICAgfVxyXG5cclxuICAgIC5sYXlvdXQtY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBwYWRkaW5nOiAwIHZhcigtLXNwYWNpbmctbGcpO1xuICAgICAgICBnYXA6IHZhcigtLXNwYWNpbmctbWQpO1xuICAgIH1cblxyXG4gICAgLmxheW91dC1tYWluIHtcclxuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IHBhZGRpbmcgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKSwgdHJhbnNmb3JtIHZhcigtLXRyYW5zaXRpb24tYmFzZSksIGJveC1zaGFkb3cgdmFyKC0tdHJhbnNpdGlvbi1iYXNlKTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1sYXlvdXQtc3VyZmFjZSk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLXhsKTtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LW1kKTtcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE0cHgpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luOiB2YXIoLS1zcGFjaW5nLWxnKSBhdXRvIDA7XG4gICAgICAgIHdpZHRoOiBtaW4oMTAwJSwgMTQ0MHB4KTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMzYwcHg7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICB9XHJcblxyXG4gICAgYXBwLWZvb3RlciB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgYm90dG9tOiAxcmVtO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgxMDAlKTtcclxuICAgICAgICB3aWR0aDogbWluKDEwMCUsIDEyNDBweCk7XHJcbiAgICAgICAgei1pbmRleDogdmFyKC0tei1zdGlja3kpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLXRyYW5zaXRpb24tZmFzdCksIG9wYWNpdHkgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KTtcclxuICAgIH1cclxuXHJcbiAgICBhcHAtZm9vdGVyLnZpc2libGUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5sYXlvdXQge1xuICAgICAgICAubGF5b3V0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIHZhcigtLXNwYWNpbmctbWQpO1xuXG4gICAgICAgICAgICAubGF5b3V0LW1haW4ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IHZhcigtLXNwYWNpbmctbWQpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy14bCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhcHAtZm9vdGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIC5sYXlvdXQge1xuICAgICAgICAubGF5b3V0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgICAubGF5b3V0LW1haW4ge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICBib3JkZXItbGVmdDogMDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 3083:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/navbar/navbar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarComponent: () => (/* binding */ NavbarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _theme_switch_theme_switch_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theme-switch/theme-switch.component */ 1467);
/* harmony import */ var _language_switch_language_switch_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language-switch/language-switch.component */ 5093);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 597);









function NavbarComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-theme-switch")(2, "app-language-switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 21)(4, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "svg", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "path", 23)(7, "path", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_div_23_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r2);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r2.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "svg", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "path", 28)(13, "polyline", 29)(14, "line", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const user_r4 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](user_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](16, 2, "common.logout"), " ");
  }
}
function NavbarComponent_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-theme-switch")(2, "app-language-switch");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 2, "common.login"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](8, 4, "common.register"));
  }
}
class NavbarComponent {
  constructor(authService, router) {
    this.authService = authService;
    this.router = router;
    this.onMenuClick = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    this.user$ = this.authService.user$;
    this.searchQuery = '';
  }
  ngOnInit() {}
  toggleMenu() {
    this.onMenuClick.emit();
  }
  onSearch() {
    if (this.searchQuery.trim()) {
      this.router.navigate(['/cryptocurrencies'], {
        queryParams: {
          q: this.searchQuery
        }
      });
    }
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/login']);
  }
  static {
    this.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      outputs: {
        onMenuClick: "onMenuClick"
      },
      decls: 27,
      vars: 8,
      consts: [["guestActions", ""], [1, "navbar"], [1, "navbar-container"], [1, "navbar-brand"], [1, "navbar-toggle", 3, "click"], ["routerLink", "/", 1, "navbar-logo"], ["aria-hidden", "true", 1, "logo-icon"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "12", "cy", "12", "r", "8.2", "stroke", "currentColor", "stroke-width", "1.7"], ["d", "M7 14.5l3-3 2.4 2.2 4.6-5.1", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M16.4 8.6H17v4", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M9.3 7.4h2.2c1 0 1.7.6 1.7 1.5s-.7 1.5-1.7 1.5H9.3V7.4Z", "stroke", "currentColor", "stroke-width", "1.35", "stroke-linejoin", "round"], [1, "logo-text"], [1, "navbar-search"], ["type", "text", 1, "search-input", 3, "ngModelChange", "keyup.enter", "placeholder", "ngModel"], [1, "search-btn", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor"], ["cx", "11", "cy", "11", "r", "8"], ["d", "m21 21-4.35-4.35"], ["class", "navbar-actions", 4, "ngIf", "ngIfElse"], [1, "navbar-actions"], [1, "navbar-user"], ["aria-hidden", "true", 1, "user-icon"], ["d", "M12 12.5c2.485 0 4.5-2.015 4.5-4.5S14.485 3.5 12 3.5 7.5 5.515 7.5 8 9.515 12.5 12 12.5Z", "stroke", "currentColor", "stroke-width", "1.8"], ["d", "M4.5 20.5c0-3.315 2.685-6 6-6s6 2.685 6 6", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], [1, "user-name"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], ["width", "16", "height", "16", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], [1, "navbar-actions", "navbar-actions-guest"], ["routerLink", "/auth/login", 1, "btn", "btn-secondary", "btn-sm"], ["routerLink", "/auth/register", 1, "btn", "btn-primary", "btn-sm"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "nav", 1)(1, "div", 2)(2, "div", 3)(3, "button", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.toggleMenu());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "span")(5, "span")(6, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 5)(8, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "svg", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "circle", 8)(11, "path", 9)(12, "path", 10)(13, "path", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "CryptoMonitor");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 13)(17, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayListener"]("ngModelChange", function NavbarComponent_Template_input_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayBindingSet"](ctx.searchQuery, $event) || (ctx.searchQuery = $event);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"]($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keyup.enter", function NavbarComponent_Template_input_keyup_enter_17_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onSearch());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r1);
            return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx.onSearch());
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "svg", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "circle", 17)(22, "path", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, NavbarComponent_div_23_Template, 17, 4, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](24, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](25, NavbarComponent_ng_template_25_Template, 9, 6, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          const guestActions_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](26);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](18, 4, "common.searchPlaceholder"));
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtwoWayProperty"]("ngModel", ctx.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](24, 6, ctx.user$))("ngIfElse", guestActions_r5);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _theme_switch_theme_switch_component__WEBPACK_IMPORTED_MODULE_1__.ThemeSwitchComponent, _language_switch_language_switch_component__WEBPACK_IMPORTED_MODULE_2__.LanguageSwitchComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe],
      styles: [".navbar[_ngcontent-%COMP%] {\n  background: var(--layout-surface);\n  border-bottom: 1px solid var(--surface-border);\n  padding: 0.85rem 0;\n  box-shadow: var(--shadow-sm);\n  position: sticky;\n  top: 0;\n  z-index: var(--z-sticky);\n  backdrop-filter: blur(18px);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 0 var(--spacing-lg);\n  gap: var(--spacing-lg);\n  min-height: 52px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  flex-shrink: 0;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%] {\n  display: none;\n  background: var(--surface-hover);\n  border: 1px solid var(--surface-border);\n  cursor: pointer;\n  flex-direction: column;\n  gap: 4px;\n  padding: 0.7rem;\n  border-radius: var(--radius-lg);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 2px;\n  background: var(--color-primary-light);\n  border-radius: var(--radius-full);\n  transition: all var(--transition-fast);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  background: var(--color-primary);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%]:hover {\n  background: var(--color-bg-hover);\n}\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .navbar-toggle[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .navbar-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n  color: var(--color-text-primary);\n  font-weight: 700;\n  font-size: 1.3rem;\n  transition: color var(--transition-fast);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .navbar-logo[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary-light);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .navbar-logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: grid;\n  place-items: center;\n  border-radius: var(--radius-lg);\n  background: rgba(79, 70, 229, 0.1);\n  color: var(--color-primary);\n  border: 1px solid var(--surface-border);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .navbar-logo[_ngcontent-%COMP%]   .logo-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .navbar-logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-search[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 400px;\n  display: flex;\n  align-items: center;\n  background: var(--color-bg-secondary);\n  border-radius: var(--radius-lg);\n  overflow: hidden;\n  border: 1px solid var(--surface-border);\n  transition: border-color var(--transition-fast);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-search[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--color-primary-light);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-search[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: none;\n  border: none;\n  padding: var(--spacing-sm) var(--spacing-md);\n  color: var(--color-text-primary);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-search[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-text-tertiary);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-search[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  box-shadow: none;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-search[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0 var(--spacing-md);\n  color: var(--color-text-secondary);\n  transition: color var(--transition-fast);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-search[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary-light);\n}\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-search[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.navbar[_ngcontent-%COMP%]   .navbar-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  flex-shrink: 0;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-actions[_ngcontent-%COMP%]   .navbar-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-sm);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-actions[_ngcontent-%COMP%]   .navbar-user[_ngcontent-%COMP%]   .user-icon[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  display: grid;\n  place-items: center;\n  border-radius: var(--radius-full);\n  background: rgba(245, 158, 11, 0.14);\n  color: var(--color-accent);\n  border: 1px solid var(--surface-border);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-actions[_ngcontent-%COMP%]   .navbar-user[_ngcontent-%COMP%]   .user-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-actions[_ngcontent-%COMP%]   .navbar-user[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  color: var(--color-text-primary);\n  font-weight: 500;\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-actions[_ngcontent-%COMP%]   .navbar-user[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 768px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-container[_ngcontent-%COMP%] {\n    flex-wrap: nowrap;\n    padding: 0 var(--spacing-md);\n    gap: var(--spacing-md);\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]   .navbar-logo[_ngcontent-%COMP%]   .logo-text[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-actions[_ngcontent-%COMP%] {\n    margin-left: auto;\n    gap: var(--spacing-sm);\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-actions[_ngcontent-%COMP%]:not(.navbar-actions-guest)   .btn[_ngcontent-%COMP%] {\n    width: 42px;\n    height: 42px;\n    padding: 0;\n    overflow: hidden;\n    color: transparent;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-actions[_ngcontent-%COMP%]:not(.navbar-actions-guest)   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    color: white;\n    flex: 0 0 auto;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-actions-guest[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    min-height: 2.2rem;\n    padding: 0.45rem 0.7rem;\n    font-size: 0.78rem;\n  }\n}\n@media (max-width: 420px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-actions[_ngcontent-%COMP%]   .navbar-user[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .navbar[_ngcontent-%COMP%]   .navbar-actions-guest[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlDQUFBO0VBQ0EsOENBQUE7RUFDQSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNSO0FBRUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFBUjtBQUVZO0VBQ0ksYUFBQTtFQUNBLGdDQUFBO0VBQ0EsdUNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FBQWhCO0FBRVk7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHNDQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQ0FBQTtBQUFoQjtBQUdnQjtFQUNJLGdDQUFBO0FBRHBCO0FBSWdCO0VBQ0ksaUNBQUE7QUFGcEI7QUFLWTtFQTFCQTtJQTJCSSxhQUFBO0VBRmQ7QUFDRjtBQUtRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx3Q0FBQTtBQUhaO0FBS1k7RUFDSSxpQ0FBQTtBQUhoQjtBQU1ZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsMkJBQUE7RUFDQSx1Q0FBQTtBQUpoQjtBQU9ZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFMaEI7QUFRWTtFQUNJLG1DQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQ0FBQTtFQUNBLHFCQUFBO0FBTmhCO0FBV0k7RUFDSSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLCtDQUFBO0FBVFI7QUFXUTtFQUNJLHdDQUFBO0FBVFo7QUFZUTtFQUNJLE9BQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSw0Q0FBQTtFQUNBLGdDQUFBO0FBVlo7QUFZWTtFQUNJLGlDQUFBO0FBVmhCO0FBYVk7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFYaEI7QUFlUTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0Esd0NBQUE7QUFiWjtBQWVZO0VBQ0ksaUNBQUE7QUFiaEI7QUFpQlE7RUE3Q0o7SUE4Q1EsYUFBQTtFQWRWO0FBQ0Y7QUFpQkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFmUjtBQWlCUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBZlo7QUFpQlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQkFBQTtFQUNBLHVDQUFBO0FBZmhCO0FBa0JZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFoQmhCO0FBbUJZO0VBQ0ksZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBakJoQjtBQW1CZ0I7RUFMSjtJQU1RLGFBQUE7RUFoQmxCO0FBQ0Y7QUFxQkk7RUFDSTtJQUNJLGlCQUFBO0lBQ0EsNEJBQUE7SUFDQSxzQkFBQTtFQW5CVjtFQXNCTTtJQUNJLGFBQUE7RUFwQlY7RUF1Qk07SUFDSSxpQkFBQTtJQUNBLHNCQUFBO0VBckJWO0VBd0JNO0lBQ0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQXRCVjtFQXdCVTtJQUNJLFlBQUE7SUFDQSxjQUFBO0VBdEJkO0VBMEJNO0lBQ0ksa0JBQUE7SUFDQSx1QkFBQTtJQUNBLGtCQUFBO0VBeEJWO0FBQ0Y7QUEyQkk7RUFDSTtJQUNJLGFBQUE7RUF6QlY7RUE0Qk07SUFDSSxhQUFBO0VBMUJWO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1sYXlvdXQtc3VyZmFjZSk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbiAgICBwYWRkaW5nOiAwLjg1cmVtIDA7XG4gICAgYm94LXNoYWRvdzogdmFyKC0tc2hhZG93LXNtKTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB6LWluZGV4OiB2YXIoLS16LXN0aWNreSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE4cHgpO1xuXHJcbiAgICAubmF2YmFyLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2luZy1sZyk7XG4gICAgICAgIGdhcDogdmFyKC0tc3BhY2luZy1sZyk7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDUycHg7XG4gICAgfVxyXG5cclxuICAgIC5uYXZiYXItYnJhbmQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IHZhcigtLXNwYWNpbmctbWQpO1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICAgICAgICAgICAgLm5hdmJhci10b2dnbGUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ob3Zlcik7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIGdhcDogNHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuN3JlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnktbGlnaHQpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIHZhcigtLXRyYW5zaXRpb24tZmFzdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmctaG92ZXIpO1xuICAgICAgICAgICAgICAgIH1cblxyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5uYXZiYXItbG9nbyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogdmFyKC0tc3BhY2luZy1zbSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KTtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktbGlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubG9nby1pY29uIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWxnKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDc5LCA3MCwgMjI5LCAwLjEpO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubG9nby1pY29uIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmxvZ28tdGV4dCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uYXZiYXItc2VhcmNoIHtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1iZy1zZWNvbmRhcnkpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciB2YXIoLS10cmFuc2l0aW9uLWZhc3QpO1xuXHJcbiAgICAgICAgJjpmb2N1cy13aXRoaW4ge1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktbGlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnNlYXJjaC1pbnB1dCB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLXNtKSB2YXIoLS1zcGFjaW5nLW1kKTtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtcHJpbWFyeSk7XHJcblxyXG4gICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC10ZXJ0aWFyeSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWFyY2gtYnRuIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgdmFyKC0tc3BhY2luZy1tZCk7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIHZhcigtLXRyYW5zaXRpb24tZmFzdCk7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWxpZ2h0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5uYXZiYXItYWN0aW9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1kKTtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG5cclxuICAgICAgICAubmF2YmFyLXVzZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xyXG5cclxuICAgICAgICAgICAgLnVzZXItaWNvbiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzZweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkaXVzLWZ1bGwpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ1LCAxNTgsIDExLCAwLjE0KTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItYWNjZW50KTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudXNlci1pY29uIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLnVzZXItbmFtZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIC5uYXZiYXItY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgICAgICAgICAgcGFkZGluZzogMCB2YXIoLS1zcGFjaW5nLW1kKTtcbiAgICAgICAgICAgIGdhcDogdmFyKC0tc3BhY2luZy1tZCk7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2YmFyLWJyYW5kIC5uYXZiYXItbG9nbyAubG9nby10ZXh0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2YmFyLWFjdGlvbnMge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBnYXA6IHZhcigtLXNwYWNpbmctc20pO1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hdmJhci1hY3Rpb25zOm5vdCgubmF2YmFyLWFjdGlvbnMtZ3Vlc3QpIC5idG4ge1xuICAgICAgICAgICAgd2lkdGg6IDQycHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcblxuICAgICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubmF2YmFyLWFjdGlvbnMtZ3Vlc3QgLmJ0biB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAyLjJyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjQ1cmVtIDAuN3JlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MjBweCkge1xuICAgICAgICAubmF2YmFyLWFjdGlvbnMgLm5hdmJhci11c2VyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAubmF2YmFyLWFjdGlvbnMtZ3Vlc3QgLmJ0bi1zZWNvbmRhcnkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 1417:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/sidebar/sidebar.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidebarComponent: () => (/* binding */ SidebarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/auth.service */ 8010);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 597);






const _c0 = a0 => ({
  exact: a0
});
function SidebarComponent_li_11__svg_svg_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 23)(2, "path", 24)(3, "path", 25)(4, "path", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SidebarComponent_li_11__svg_svg_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "circle", 27)(2, "path", 28)(3, "path", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SidebarComponent_li_11__svg_svg_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SidebarComponent_li_11__svg_svg_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 31)(2, "path", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SidebarComponent_li_11__svg_svg_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 33)(2, "path", 34)(3, "path", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SidebarComponent_li_11__svg_svg_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "svg", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "path", 36)(2, "path", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function SidebarComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 17)(1, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_li_11_Template_button_click_1_listener() {
      const item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r1).$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.navigate(item_r2.route));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, SidebarComponent_li_11__svg_svg_3_Template, 5, 0, "svg", 20)(4, SidebarComponent_li_11__svg_svg_4_Template, 4, 0, "svg", 20)(5, SidebarComponent_li_11__svg_svg_5_Template, 2, 0, "svg", 20)(6, SidebarComponent_li_11__svg_svg_6_Template, 3, 0, "svg", 20)(7, SidebarComponent_li_11__svg_svg_7_Template, 4, 0, "svg", 20)(8, SidebarComponent_li_11__svg_svg_8_Template, 3, 0, "svg", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", item_r2.route)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, item_r2.route === "/dashboard"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", item_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "crypto");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "favorites");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "history");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "export");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 10, item_r2.labelKey));
  }
}
function SidebarComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_div_21_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.closeSidebar());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
class SidebarComponent {
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
    this.open = false;
    this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.menuItems = [{
      labelKey: 'nav.dashboard',
      icon: 'dashboard',
      route: '/dashboard'
    }, {
      labelKey: 'nav.cryptocurrencies',
      icon: 'crypto',
      route: '/cryptocurrencies'
    }, {
      labelKey: 'nav.favorites',
      icon: 'favorites',
      route: '/favorites'
    }, {
      labelKey: 'nav.history',
      icon: 'history',
      route: '/history'
    }, {
      labelKey: 'nav.export',
      icon: 'export',
      route: '/export'
    }];
  }
  get visibleMenuItems() {
    const items = [...this.menuItems];
    if (this.authService.isAdmin()) {
      items.push({
        labelKey: 'nav.admin',
        icon: 'admin',
        route: '/admin'
      });
    }
    return items;
  }
  navigate(route) {
    this.router.navigate([route]);
    this.onClose.emit();
  }
  closeSidebar() {
    this.onClose.emit();
  }
  logout() {
    this.authService.logout();
    this.onClose.emit();
    this.router.navigate(['/auth/login']);
  }
  static {
    this.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      inputs: {
        open: "open"
      },
      outputs: {
        onClose: "onClose"
      },
      decls: 22,
      vars: 10,
      consts: [[1, "sidebar"], [1, "sidebar-close", 3, "click"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor"], ["x1", "18", "y1", "6", "x2", "6", "y2", "18"], ["x1", "6", "y1", "6", "x2", "18", "y2", "18"], [1, "sidebar-nav"], [1, "nav-section"], [1, "nav-title"], [1, "nav-list"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "sidebar-footer"], [1, "sidebar-logout", 3, "click"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor"], ["d", "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"], ["points", "16 17 21 12 16 7"], ["x1", "21", "y1", "12", "x2", "9", "y2", "12"], ["class", "sidebar-overlay", 3, "click", 4, "ngIf"], [1, "nav-item"], ["routerLinkActive", "active", 1, "nav-link", 3, "click", "routerLink", "routerLinkActiveOptions"], [1, "nav-icon", 3, "ngSwitch"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round", 4, "ngSwitchCase"], [1, "nav-label"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"], ["d", "M4 20h16"], ["d", "M8 16V10"], ["d", "M12 16V6"], ["d", "M16 16V13"], ["cx", "12", "cy", "12", "r", "7"], ["d", "M8 12h8"], ["d", "M12 8v8"], ["d", "M6 4h12v16l-6-4-6 4V4Z"], ["d", "M4 12a8 8 0 1 1 8 8"], ["d", "M12 4v8h8"], ["d", "M12 3v12"], ["d", "M8 11l4 4 4-4"], ["d", "M4 21h16"], ["d", "M12 3l7 3v5c0 4.5-2.8 8.4-7 10c-4.2-1.6-7-5.5-7-10V6l7-3Z"], ["d", "M9 12l2 2l4-4"], [1, "sidebar-overlay", 3, "click"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "aside", 0)(1, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_1_listener() {
            return ctx.closeSidebar();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "svg", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "line", 3)(4, "line", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "nav", 5)(6, "div", 6)(7, "h3", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "ul", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SidebarComponent_li_11_Template, 12, 14, "li", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10)(13, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SidebarComponent_Template_button_click_13_listener() {
            return ctx.logout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "svg", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "path", 13)(16, "polyline", 14)(17, "line", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "translate");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, SidebarComponent_div_21_Template, 1, 0, "div", 16);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("sidebar-open", ctx.open);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, "nav.mainMenu"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.visibleMenuItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 8, "common.logout"));
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.open);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgSwitchCase, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkActive, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
      styles: [".sidebar[_ngcontent-%COMP%] {\n  width: 280px;\n  flex: 0 0 280px;\n  background: var(--layout-surface);\n  border: 1px solid var(--surface-border);\n  border-radius: var(--radius-xl);\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  transition: transform var(--transition-base);\n  backdrop-filter: blur(18px);\n  box-shadow: var(--shadow-md);\n  margin-top: var(--spacing-lg);\n  max-height: calc(100vh - 112px);\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    left: var(--spacing-md);\n    top: 78px;\n    height: calc(100vh - 70px);\n    max-height: calc(100vh - 96px);\n    z-index: var(--z-fixed);\n    transform: translateX(-100%);\n    box-shadow: var(--shadow-lg);\n    border: 1px solid var(--surface-border);\n    margin-top: 0;\n    width: min(320px, 100vw - 2rem);\n  }\n  .sidebar.sidebar-open[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-close[_ngcontent-%COMP%] {\n  display: none;\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: var(--color-text-primary);\n  padding: var(--spacing-md);\n  justify-content: flex-end;\n}\n@media (max-width: 768px) {\n  .sidebar[_ngcontent-%COMP%]   .sidebar-close[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-close[_ngcontent-%COMP%]:hover {\n  color: var(--color-primary-light);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-nav[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: var(--spacing-lg);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-xl);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  color: var(--color-text-tertiary);\n  margin-bottom: var(--spacing-md);\n  font-weight: 600;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  margin-bottom: var(--spacing-sm);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  width: 100%;\n  padding: var(--spacing-md) var(--spacing-lg);\n  background: transparent;\n  border: 1px solid transparent;\n  border-radius: var(--radius-lg);\n  color: var(--color-text-secondary);\n  cursor: pointer;\n  transition: all var(--transition-fast);\n  font-size: 0.95rem;\n  font-weight: 500;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  background: var(--surface-hover);\n  border-color: var(--surface-border);\n  color: var(--color-primary);\n  transform: translateX(2px);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  background: rgba(79, 70, 229, 0.1);\n  border-color: rgba(79, 70, 229, 0.22);\n  color: var(--color-primary);\n  box-shadow: inset 3px 0 0 var(--color-primary);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%] {\n  width: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-primary);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .nav-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-nav[_ngcontent-%COMP%]   .nav-section[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   .nav-label[_ngcontent-%COMP%] {\n  flex: 1;\n  text-align: left;\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\n  padding: var(--spacing-lg);\n  border-top: 1px solid var(--surface-border);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .sidebar-logout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: var(--spacing-md);\n  width: 100%;\n  padding: var(--spacing-md) var(--spacing-lg);\n  background: var(--gradient-error);\n  color: white;\n  border: none;\n  border-radius: var(--radius-lg);\n  cursor: pointer;\n  font-weight: 500;\n  transition: all var(--transition-fast);\n}\n.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   .sidebar-logout[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: var(--shadow-lg);\n}\n\n.sidebar-overlay[_ngcontent-%COMP%] {\n  display: none;\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(3, 7, 18, 0.62);\n  backdrop-filter: blur(3px);\n  z-index: calc(var(--z-fixed) - 1);\n}\n@media (max-width: 768px) {\n  .sidebar-overlay[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7QUFDSjtBQUNJO0VBZko7SUFnQlEsZUFBQTtJQUNBLHVCQUFBO0lBQ0EsU0FBQTtJQUNBLDBCQUFBO0lBQ0EsOEJBQUE7SUFDQSx1QkFBQTtJQUNBLDRCQUFBO0lBQ0EsNEJBQUE7SUFDQSx1Q0FBQTtJQUNBLGFBQUE7SUFDQSwrQkFBQTtFQUVOO0VBQU07SUFDSSx3QkFBQTtFQUVWO0FBQ0Y7QUFDSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FBQ1I7QUFDUTtFQVRKO0lBVVEsYUFBQTtFQUVWO0FBQ0Y7QUFBUTtFQUNJLGlDQUFBO0FBRVo7QUFFSTtFQUNJLE9BQUE7RUFDQSwwQkFBQTtBQUFSO0FBRVE7RUFDSSxnQ0FBQTtBQUFaO0FBRVk7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFBaEI7QUFHWTtFQUNJLGdCQUFBO0FBRGhCO0FBR2dCO0VBQ0ksZ0NBQUE7QUFEcEI7QUFHb0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSw0Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsNkJBQUE7RUFDQSwrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUR4QjtBQUd3QjtFQUNJLGdDQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUNBLDBCQUFBO0FBRDVCO0FBSXdCO0VBQ0ksa0NBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsOENBQUE7QUFGNUI7QUFLd0I7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtBQUg1QjtBQU13QjtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBSjVCO0FBT3dCO0VBQ0ksT0FBQTtFQUNBLGdCQUFBO0FBTDVCO0FBYUk7RUFDSSwwQkFBQTtFQUNBLDJDQUFBO0FBWFI7QUFhUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLDRDQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7QUFYWjtBQWFZO0VBQ0ksMkJBQUE7RUFDQSw0QkFBQTtBQVhoQjs7QUFpQkE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsaUNBQUE7QUFkSjtBQWdCSTtFQVhKO0lBWVEsY0FBQTtFQWJOO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZWJhciB7XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIGZsZXg6IDAgMCAyODBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1sYXlvdXQtc3VyZmFjZSk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy14bCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIHZhcigtLXRyYW5zaXRpb24tYmFzZSk7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDE4cHgpO1xuICAgIGJveC1zaGFkb3c6IHZhcigtLXNoYWRvdy1tZCk7XG4gICAgbWFyZ2luLXRvcDogdmFyKC0tc3BhY2luZy1sZyk7XG4gICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDExMnB4KTtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGxlZnQ6IHZhcigtLXNwYWNpbmctbWQpO1xuICAgICAgICB0b3A6IDc4cHg7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDcwcHgpO1xuICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gOTZweCk7XG4gICAgICAgIHotaW5kZXg6IHZhcigtLXotZml4ZWQpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIHdpZHRoOiBtaW4oMzIwcHgsIGNhbGMoMTAwdncgLSAycmVtKSk7XG5cbiAgICAgICAgJi5zaWRlYmFyLW9wZW4ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICAgICAgICB9XG4gICAgfVxyXG5cclxuICAgIC5zaWRlYmFyLWNsb3NlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1saWdodCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlYmFyLW5hdiB7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zcGFjaW5nLWxnKTtcblxuICAgICAgICAubmF2LXNlY3Rpb24ge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy14bCk7XG5cclxuICAgICAgICAgICAgLm5hdi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtdGVydGlhcnkpO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc3BhY2luZy1tZCk7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubmF2LWxpc3Qge1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuXHJcbiAgICAgICAgICAgICAgICAubmF2LWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHZhcigtLXNwYWNpbmctc20pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAubmF2LWxpbmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnYXA6IHZhcigtLXNwYWNpbmctbWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpIHZhcigtLXNwYWNpbmctbGcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1sZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgdmFyKC0tdHJhbnNpdGlvbi1mYXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjk1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tc3VyZmFjZS1ob3Zlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1zdXJmYWNlLWJvcmRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg3OSwgNzAsIDIyOSwgMC4xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoNzksIDcwLCAyMjksIDAuMjIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAzcHggMCAwIHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5uYXYtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubmF2LWljb24gc3ZnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubmF2LWxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5zaWRlYmFyLWZvb3RlciB7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbGcpO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tc3VyZmFjZS1ib3JkZXIpO1xuXHJcbiAgICAgICAgLnNpZGViYXItbG9nb3V0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiB2YXIoLS1zcGFjaW5nLW1kKTtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IHZhcigtLXNwYWNpbmctbWQpIHZhcigtLXNwYWNpbmctbGcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmFkaWVudC1lcnJvcik7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtbGcpO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCB2YXIoLS10cmFuc2l0aW9uLWZhc3QpO1xyXG5cclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctbGcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2lkZWJhci1vdmVybGF5IHtcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgzLCA3LCAxOCwgMC42Mik7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG4gICAgei1pbmRleDogY2FsYyh2YXIoLS16LWZpeGVkKSAtIDEpO1xuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 1467:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/theme-switch/theme-switch.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeSwitchComponent: () => (/* binding */ ThemeSwitchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _core_services_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../core/services/theme.service */ 4081);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);



class ThemeSwitchComponent {
  constructor(themeService) {
    this.themeService = themeService;
    this.currentTheme$ = this.themeService.currentTheme$;
  }
  setTheme(theme) {
    this.themeService.setTheme(theme);
  }
  toggleTheme() {
    this.themeService.toggleTheme();
  }
  static {
    this.ɵfac = function ThemeSwitchComponent_Factory(t) {
      return new (t || ThemeSwitchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_services_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: ThemeSwitchComponent,
      selectors: [["app-theme-switch"]],
      decls: 14,
      vars: 8,
      consts: [["role", "group", "aria-label", "Tema", 1, "theme-switch"], ["type", "button", "title", "Tema claro", 1, "theme-option", 3, "click"], ["aria-hidden", "true", 1, "theme-icon"], ["width", "18", "height", "18", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "12", "cy", "12", "r", "5", "stroke", "currentColor", "stroke-width", "1.8"], ["d", "M12 1.5V3.5M12 20.5V22.5M4.5 4.5L5.9 5.9M18.1 18.1L19.5 19.5M1.5 12H3.5M20.5 12H22.5M4.5 19.5L5.9 18.1M18.1 5.9L19.5 4.5", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round"], ["type", "button", "title", "Tema escuro", 1, "theme-option", 3, "click"], ["d", "M21 12.79A9 9 0 0 1 11.21 3a7 7 0 1 0 9.79 9.79Z", "stroke", "currentColor", "stroke-width", "1.8", "stroke-linecap", "round", "stroke-linejoin", "round"]],
      template: function ThemeSwitchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ThemeSwitchComponent_Template_button_click_1_listener() {
            return ctx.setTheme("light");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "svg", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "circle", 4)(6, "path", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Claro ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ThemeSwitchComponent_Template_button_click_8_listener() {
            return ctx.setTheme("dark");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "svg", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "path", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Escuro ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, ctx.currentTheme$) === "light");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("active", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 6, ctx.currentTheme$) === "dark");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
      styles: [".theme-switch[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem;\n  border: 1px solid var(--surface-border);\n  border-radius: var(--radius-full);\n  background: var(--color-bg-tertiary);\n}\n\n.theme-option[_ngcontent-%COMP%] {\n  min-height: 2rem;\n  padding: 0.4rem 0.7rem;\n  border: 0;\n  border-radius: var(--radius-full);\n  background: transparent;\n  color: var(--color-text-secondary);\n  font-size: 0.78rem;\n  font-weight: 700;\n  gap: 0.35rem;\n  box-shadow: none;\n}\n\n.theme-option[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: none;\n  color: var(--color-primary);\n  background: var(--surface-hover);\n}\n\n.theme-option.active[_ngcontent-%COMP%] {\n  background: var(--layout-surface);\n  color: var(--color-primary);\n  box-shadow: var(--shadow-sm);\n}\n\n.theme-icon[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\n@media (max-width: 980px) {\n  .theme-option[_ngcontent-%COMP%] {\n    width: 2rem;\n    padding: 0;\n    overflow: hidden;\n    color: transparent;\n    gap: 0;\n  }\n  .theme-option[_ngcontent-%COMP%]   .theme-icon[_ngcontent-%COMP%] {\n    color: var(--color-text-secondary);\n  }\n  .theme-option.active[_ngcontent-%COMP%]   .theme-icon[_ngcontent-%COMP%] {\n    color: var(--color-primary);\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGhlbWUtc3dpdGNoL3RoZW1lLXN3aXRjaC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtFQUNBLGlDQUFBO0VBQ0Esb0NBQUE7QUFDSjs7QUFFQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsaUNBQUE7RUFDQSx1QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFQTtFQUNJLGlDQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7QUFDSjs7QUFFQTtFQUNJO0lBQ0ksV0FBQTtJQUNBLFVBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsTUFBQTtFQUNOO0VBRUU7SUFDSSxrQ0FBQTtFQUFOO0VBR0U7SUFDSSwyQkFBQTtFQUROO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIudGhlbWUtc3dpdGNoIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC4yNXJlbTtcbiAgICBwYWRkaW5nOiAwLjI1cmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1cmZhY2UtYm9yZGVyKTtcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWRpdXMtZnVsbCk7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmctdGVydGlhcnkpO1xufVxuXG4udGhlbWUtb3B0aW9uIHtcbiAgICBtaW4taGVpZ2h0OiAycmVtO1xuICAgIHBhZGRpbmc6IDAuNHJlbSAwLjdyZW07XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZGl1cy1mdWxsKTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1zZWNvbmRhcnkpO1xuICAgIGZvbnQtc2l6ZTogMC43OHJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGdhcDogMC4zNXJlbTtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4udGhlbWUtb3B0aW9uOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnkpO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXN1cmZhY2UtaG92ZXIpO1xufVxuXG4udGhlbWUtb3B0aW9uLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbGF5b3V0LXN1cmZhY2UpO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5KTtcbiAgICBib3gtc2hhZG93OiB2YXIoLS1zaGFkb3ctc20pO1xufVxuXG4udGhlbWUtaWNvbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5ODBweCkge1xuICAgIC50aGVtZS1vcHRpb24ge1xuICAgICAgICB3aWR0aDogMnJlbTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBnYXA6IDA7XG4gICAgfVxuXG4gICAgLnRoZW1lLW9wdGlvbiAudGhlbWUtaWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXNlY29uZGFyeSk7XG4gICAgfVxuXG4gICAgLnRoZW1lLW9wdGlvbi5hY3RpdmUgLnRoZW1lLWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map