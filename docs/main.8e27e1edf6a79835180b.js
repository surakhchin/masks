(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _appviews_clothing_clothing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appviews/clothing/clothing.component */ "./src/app/appviews/clothing/clothing.component.ts");
/* harmony import */ var _appviews_gloves_gloves_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./appviews/gloves/gloves.component */ "./src/app/appviews/gloves/gloves.component.ts");
/* harmony import */ var _appviews_kits_kits_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./appviews/kits/kits.component */ "./src/app/appviews/kits/kits.component.ts");
/* harmony import */ var _appviews_masks_masks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appviews/masks/masks.component */ "./src/app/appviews/masks/masks.component.ts");
/* harmony import */ var _appviews_product_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appviews/product/product.component */ "./src/app/appviews/product/product.component.ts");
/* harmony import */ var _appviews_sanitizers_sanitizers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./appviews/sanitizers/sanitizers.component */ "./src/app/appviews/sanitizers/sanitizers.component.ts");
/* harmony import */ var _appviews_ventilators_ventilators_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./appviews/ventilators/ventilators.component */ "./src/app/appviews/ventilators/ventilators.component.ts");
/* harmony import */ var _appviews_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./appviews/recommended/recommended.component */ "./src/app/appviews/recommended/recommended.component.ts");
/* harmony import */ var _appviews_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./appviews/about/about.component */ "./src/app/appviews/about/about.component.ts");
/* harmony import */ var _appviews_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./appviews/contact/contact.component */ "./src/app/appviews/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [
    {
        path: '',
        component: _appviews_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_9__["RecommendedComponent"],
        pathMatch: 'full'
    },
    {
        path: 'clothing',
        component: _appviews_clothing_clothing_component__WEBPACK_IMPORTED_MODULE_2__["ClothingComponent"],
        pathMatch: 'full'
    },
    {
        path: 'gloves',
        component: _appviews_gloves_gloves_component__WEBPACK_IMPORTED_MODULE_3__["GlovesComponent"],
        pathMatch: 'full'
    },
    {
        path: 'kits',
        component: _appviews_kits_kits_component__WEBPACK_IMPORTED_MODULE_4__["KitsComponent"],
        pathMatch: 'full'
    },
    {
        path: 'masks',
        component: _appviews_masks_masks_component__WEBPACK_IMPORTED_MODULE_5__["MasksComponent"],
        pathMatch: 'full'
    },
    {
        path: 'product',
        component: _appviews_product_product_component__WEBPACK_IMPORTED_MODULE_6__["ProductComponent"],
        pathMatch: 'full'
    },
    {
        path: 'kits',
        component: _appviews_kits_kits_component__WEBPACK_IMPORTED_MODULE_4__["KitsComponent"],
        pathMatch: 'full'
    },
    {
        path: 'sanitizers',
        component: _appviews_sanitizers_sanitizers_component__WEBPACK_IMPORTED_MODULE_7__["SanitizersComponent"],
        pathMatch: 'full'
    },
    {
        path: 'ventilators',
        component: _appviews_ventilators_ventilators_component__WEBPACK_IMPORTED_MODULE_8__["VentilatorsComponent"],
        pathMatch: 'full'
    },
    {
        path: 'about',
        component: _appviews_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
        pathMatch: 'full'
    },
    {
        path: 'contact',
        component: _appviews_contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
        pathMatch: 'full'
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper1{\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n/*.header1{*/\n/*flex-shrink: 0;*/\n/*flex-grow: 0;*/\n/*background: #039be5;*/\n/*padding: 3px 5px;*/\n/*}*/\n/*.content1{*/\n/*flex-shrink: 1;*/\n/*flex-grow: 1;*/\n/*padding: 3px 5px;*/\n/*position: relative;*/\n/*overflow-y: auto;*/\n/*}*/\n.footer1{\n\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper1\">\n\n  <div class=\"header1\">\n    <app-nav></app-nav>\n    <app-tabs></app-tabs>\n\n  <router-outlet></router-outlet>\n  </div>\n\n  <div class=\"footer1\">\n  <app-footer></app-footer>\n  </div>\n</div>\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'masks';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _appviews_all_all_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appviews/all/all.component */ "./src/app/appviews/all/all.component.ts");
/* harmony import */ var _appviews_masks_masks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./appviews/masks/masks.component */ "./src/app/appviews/masks/masks.component.ts");
/* harmony import */ var _appviews_clothing_clothing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./appviews/clothing/clothing.component */ "./src/app/appviews/clothing/clothing.component.ts");
/* harmony import */ var _appviews_sanitizers_sanitizers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./appviews/sanitizers/sanitizers.component */ "./src/app/appviews/sanitizers/sanitizers.component.ts");
/* harmony import */ var _appviews_kits_kits_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./appviews/kits/kits.component */ "./src/app/appviews/kits/kits.component.ts");
/* harmony import */ var _appviews_gloves_gloves_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./appviews/gloves/gloves.component */ "./src/app/appviews/gloves/gloves.component.ts");
/* harmony import */ var _appviews_product_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./appviews/product/product.component */ "./src/app/appviews/product/product.component.ts");
/* harmony import */ var _appviews_ventilators_ventilators_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./appviews/ventilators/ventilators.component */ "./src/app/appviews/ventilators/ventilators.component.ts");
/* harmony import */ var _appviews_nav_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./appviews/nav/nav.component */ "./src/app/appviews/nav/nav.component.ts");
/* harmony import */ var _appviews_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./appviews/footer/footer.component */ "./src/app/appviews/footer/footer.component.ts");
/* harmony import */ var _appviews_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./appviews/tabs/tabs.component */ "./src/app/appviews/tabs/tabs.component.ts");
/* harmony import */ var _appviews_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./appviews/recommended/recommended.component */ "./src/app/appviews/recommended/recommended.component.ts");
/* harmony import */ var _appviews_about_about_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./appviews/about/about.component */ "./src/app/appviews/about/about.component.ts");
/* harmony import */ var _appviews_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./appviews/contact/contact.component */ "./src/app/appviews/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _appviews_all_all_component__WEBPACK_IMPORTED_MODULE_5__["AllComponent"],
                _appviews_masks_masks_component__WEBPACK_IMPORTED_MODULE_6__["MasksComponent"],
                _appviews_clothing_clothing_component__WEBPACK_IMPORTED_MODULE_7__["ClothingComponent"],
                _appviews_sanitizers_sanitizers_component__WEBPACK_IMPORTED_MODULE_8__["SanitizersComponent"],
                _appviews_kits_kits_component__WEBPACK_IMPORTED_MODULE_9__["KitsComponent"],
                _appviews_gloves_gloves_component__WEBPACK_IMPORTED_MODULE_10__["GlovesComponent"],
                _appviews_product_product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"],
                _appviews_ventilators_ventilators_component__WEBPACK_IMPORTED_MODULE_12__["VentilatorsComponent"],
                _appviews_nav_nav_component__WEBPACK_IMPORTED_MODULE_13__["NavComponent"],
                _appviews_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                _appviews_tabs_tabs_component__WEBPACK_IMPORTED_MODULE_15__["TabsComponent"],
                _appviews_recommended_recommended_component__WEBPACK_IMPORTED_MODULE_16__["RecommendedComponent"],
                _appviews_about_about_component__WEBPACK_IMPORTED_MODULE_17__["AboutComponent"],
                _appviews_contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["APP_BASE_HREF"], useValue: '/masks' }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/appviews/about/about.component.css":
/*!****************************************************!*\
  !*** ./src/app/appviews/about/about.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-green {\n    color: #269da1;\n}\n"

/***/ }),

/***/ "./src/app/appviews/about/about.component.html":
/*!*****************************************************!*\
  !*** ./src/app/appviews/about/about.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<!--<section id=\"about\">-->\n  <div class=\"container my-5\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 mx-auto text-center\">\n        <!--<h2 class=\"section-heading text-white\">Check out the 90 second pitch video!</h2>-->\n        <h2 class=\"section-heading\">About masks.com</h2>\n        <hr class=\"my-4\">\n        <p class=\" mb-4\">\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</p>\n        <p class=\" mb-4\">\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>\n        <!--<p class=\"text-faded mb-4\"><video height=\"500px\" controls=\"controls\" src=\"lasertagvid.MOV\"></video></p>-->\n        <a class=\"btn btn-primary btn-xl js-scroll-trigger\" routerLink=\"\">Buy Masks</a>\n      </div>\n    </div>\n  </div>\n<!--</section>-->\n"

/***/ }),

/***/ "./src/app/appviews/about/about.component.ts":
/*!***************************************************!*\
  !*** ./src/app/appviews/about/about.component.ts ***!
  \***************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/appviews/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/appviews/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/appviews/all/all.component.css":
/*!************************************************!*\
  !*** ./src/app/appviews/all/all.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/all/all.component.html":
/*!*************************************************!*\
  !*** ./src/app/appviews/all/all.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"\">\n      <!--<div class=\"container\">-->\n        <!--<div class=\"row\" >-->\n          <!--<div class=\"col-lg-12 text-center\">-->\n            <!--<h2 class=\"section-heading\">Products</h2>-->\n            <!--<hr class=\"my-4\">-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</div>-->\n      <div class=\"container-fluid\" id=\"products\">\n        <div class=\"row\">\n          <div class=\"col-sm col-xs-12 text-center d-flex flex-column justify-content-between\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <img style=\"max-height: 120px\" src=\"assets/img/PRM.png\">\n              <br><br>\n              <h5 class=\"mb-3\" style=\"font-weight: bold\">4 ply N95 Surgical Mask</h5>\n              <br><br class=\"d-xl-none\">\n              <p class=\"text-muted mb-0\">Our PRM-95 is a 4 Ply filter mask with a carbon layer with more filtration and highly comparable to the N95 filters in the marketplace.</p><br>\n            </div>\n            <div class=\"pb-4\">\n\n              <!--<a class=\"btn btn-primary js-scroll-trigger\" target=\"_blank\" href=\"gun.html\">Play Now!</a>-->\n\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"1\"\n  data-item-price=\"2.99\"\n  data-item-url=\"https://surakhchin.github.io/masks/products.json\"\n  data-item-description=\"Our PRM-95 is a 4 Ply filter mask with a carbon layer with more filtration and highly comparable to the N95 filters in the marketplace.\"\n  data-item-image=\"assets/img/PRM.png\"\n  data-item-name=\"4 ply N95 Surgical Mask\">\n  Add to cart\n</button>\n\n\n\n\n\n\n\n\n            </div>\n          </div>\n          <div class=\"col-sm col-xs-12 text-center d-flex flex-column justify-content-between\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <img style=\"max-height: 120px\" src=\"assets/img/KN95.png\">\n              <br><br>\n              <h5 class=\"mb-3\" style=\"font-weight: bold\">KN95 Respirator Face Mask</h5>\n              <br>\n              <p class=\"text-muted mb-0\">Multilayer protection: Filters out 95% of air born pollutants. Adjustable nose bridge and elastic ear loop for a tight seal</p><br>\n            </div>\n            <div class=\"pb-4\">\n\n\n\n\n\n              <!--<a class=\"btn btn-primary js-scroll-trigger\" target=\"_blank\" href=\"gun.html\">Play Now!</a>-->\n\n\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"2\"\n  data-item-price=\"4.99\"\n  data-item-url=\"https://surakhchin.github.io/masks/products.json\"\n  data-item-description=\"Multilayer protection: Filters out 95% of air born pollutants. Adjustable nose bridge and elastic ear loop for a tight seal.\"\n  data-item-image=\"assets/img/KN95.png\"\n  data-item-name=\"KN95 Respirator Face Mask\">\n  Add to cart\n</button>\n\n\n\n\n            </div>\n          </div>\n          <div class=\"col-sm col-xs-12 text-center d-flex flex-column justify-content-between\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <img style=\"max-height: 120px\" src=\"assets/img/N95.png\">\n              <br><br>\n              <h5 class=\"mb-3\" style=\"font-weight: bold\">NIOSH Particulate Respirator Mask</h5>\n              <br>\n              <p class=\"text-muted mb-0\">Niosh Particulate Respirator Mask Filters out 95% of air born pollutants. Meets CDC guidelines for exposure control</p><br>\n            </div>\n            <div class=\"pb-4\">\n\n\n\n              <!--<a class=\"btn btn-primary js-scroll-trigger\" target=\"_blank\" href=\"gun.html\">Play Now!</a>-->\n\n\n\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"3\"\n  data-item-price=\"5.99\"\n  data-item-url=\"https://surakhchin.github.io/masks/products.json\"\n  data-item-description=\"Niosh Particulate Respirator Mask Filters out 95% of air born pollutants. Meets CDC guidelines for exposure control.\"\n  data-item-image=\"assets/img/N95.png\"\n  data-item-name=\"NIOSH Particulate Respirator Mask\">\n  Add to cart\n</button>\n\n\n\n            </div>\n          </div>\n          <div class=\"col-sm col-xs-12 text-center d-flex flex-column justify-content-between\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <img style=\"max-height: 120px\" src=\"assets/img/3M3.png\">\n              <br><br>\n              <h5 class=\"mb-3\" style=\"font-weight: bold\">FFP3 Surgical Mask 3 Ply</h5>\n              <br>\n              <p class=\"text-muted mb-0\">SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.</p><br>\n            </div>\n            <div class=\"pb-4\">\n\n\n\n\n              <!--<a class=\"btn btn-primary js-scroll-trigger\" target=\"_blank\" href=\"gun.html\">Play Now!</a>-->\n\n\n\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"4\"\n  data-item-price=\"3.99\"\n  data-item-url=\"https://surakhchin.github.io/masks/products.json\"\n  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n  data-item-image=\"assets/img/3M3.png\"\n  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n  Add to cart\n</button>\n\n\n\n\n            </div>\n          </div>\n          <div class=\"col-sm col-xs-12 text-center d-flex flex-column justify-content-between\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <img style=\"max-height: 120px\" src=\"assets/img/3M1860.png\">\n              <br><br>\n              <h5 class=\"mb-3\" style=\"font-weight: bold\">3M 1860 Respirator Mask</h5>\n              <br>\n              <p class=\"text-muted mb-0\">3M 1860 Respirator Mask FDA Cleared for use as surgical mask, >99% BFE (Bacterial Filtration Efficiency) according to ASTM F2101 and Fluid resistant according to ASTM F1862</p><br>\n            </div>\n            <div class=\"pb-4\">\n\n\n\n\n\n              <!--<a class=\"btn btn-primary js-scroll-trigger\" target=\"_blank\" href=\"gun.html\">Play Now!</a>-->\n\n\n\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"5\"\n  data-item-price=\"7.99\"\n  data-item-url=\"https://surakhchin.github.io/masks/products.json\"\n  data-item-description=\"3M 1860 Respirator Mask FDA Cleared for use as surgical mask, >99% BFE (Bacterial Filtration Efficiency) according to ASTM F2101 and Fluid resistant according to ASTM F1862.\"\n  data-item-image=\"assets/img/3M1860.png\"\n  data-item-name=\"3M 1860 Respirator Mask\">\n  Add to cart\n</button>\n\n\n\n\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n"

/***/ }),

/***/ "./src/app/appviews/all/all.component.ts":
/*!***********************************************!*\
  !*** ./src/app/appviews/all/all.component.ts ***!
  \***********************************************/
/*! exports provided: AllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllComponent", function() { return AllComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AllComponent = /** @class */ (function () {
    function AllComponent() {
    }
    AllComponent.prototype.ngOnInit = function () {
    };
    AllComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all',
            template: __webpack_require__(/*! ./all.component.html */ "./src/app/appviews/all/all.component.html"),
            styles: [__webpack_require__(/*! ./all.component.css */ "./src/app/appviews/all/all.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AllComponent);
    return AllComponent;
}());



/***/ }),

/***/ "./src/app/appviews/clothing/clothing.component.css":
/*!**********************************************************!*\
  !*** ./src/app/appviews/clothing/clothing.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/clothing/clothing.component.html":
/*!***********************************************************!*\
  !*** ./src/app/appviews/clothing/clothing.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<br><br>\n<br>\n<br>\n<br>\n\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h1>Clothing</h1>\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/appviews/clothing/clothing.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/appviews/clothing/clothing.component.ts ***!
  \*********************************************************/
/*! exports provided: ClothingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClothingComponent", function() { return ClothingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClothingComponent = /** @class */ (function () {
    function ClothingComponent() {
    }
    ClothingComponent.prototype.ngOnInit = function () {
    };
    ClothingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clothing',
            template: __webpack_require__(/*! ./clothing.component.html */ "./src/app/appviews/clothing/clothing.component.html"),
            styles: [__webpack_require__(/*! ./clothing.component.css */ "./src/app/appviews/clothing/clothing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClothingComponent);
    return ClothingComponent;
}());



/***/ }),

/***/ "./src/app/appviews/contact/contact.component.css":
/*!********************************************************!*\
  !*** ./src/app/appviews/contact/contact.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/contact/contact.component.html":
/*!*********************************************************!*\
  !*** ./src/app/appviews/contact/contact.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<section id=\"contact\">-->\n  <div class=\"container my-5\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 mx-auto text-center\">\n        <h2 class=\"section-heading\">Contact Us</h2>\n        <hr class=\"my-4\">\n        <p class=\"mb-5\">masks.com is headquartered in Chicago encorporated ©2020  </p>\n        <p>Creator/Developer: <a target=\"_blank\" href=\"https://surakhchin.github.io\">Serge Urakhchin</a></p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 ml-auto text-center\">\n        <i class=\"fa fa-phone fa-3x mb-3 sr-contact\"></i>\n        <p>630-999-8734</p>\n      </div>\n      <div class=\"col-lg-4 mr-auto text-center\">\n        <i class=\"fa fa-envelope-o fa-3x mb-3 sr-contact\"></i>\n        <p>\n          <a href=\"mailto:your-email@your-domain.com\">urakhchin@gmail.com</a>\n        </p>\n      </div>\n    </div>\n  </div>\n<!--</section>-->\n"

/***/ }),

/***/ "./src/app/appviews/contact/contact.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/appviews/contact/contact.component.ts ***!
  \*******************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/appviews/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/appviews/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/appviews/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/appviews/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/footer/footer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/appviews/footer/footer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<section class=\"bg-primary\" id=\"about\">-->\n  <!--<div class=\"container\">-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-lg-8 mx-auto text-center\">-->\n        <!--&lt;!&ndash;<h2 class=\"section-heading text-white\">Check out the 90 second pitch video!</h2>&ndash;&gt;-->\n        <!--<h2 class=\"section-heading text-white\">About masks.com</h2>-->\n        <!--<hr class=\"light my-4\">-->\n        <!--<p class=\"text-faded mb-4\">\"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"</p>-->\n        <!--<p class=\"text-faded mb-4\">\"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>-->\n        <!--<p class=\"text-faded mb-4\"> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>-->\n        <!--&lt;!&ndash;<p class=\"text-faded mb-4\"><video height=\"500px\" controls=\"controls\" src=\"lasertagvid.MOV\"></video></p>&ndash;&gt;-->\n        <!--<a class=\"btn btn-light btn-xl js-scroll-trigger\" href=\"#products\">Buy Masks</a>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</section>-->\n\n\n\n\n\n<!--<section class=\"bg-dark text-whitey\" id=\"team\">-->\n  <!--<div class=\"container\">-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-lg-8 mx-auto text-center\">-->\n        <!--&lt;!&ndash;<h2 class=\"section-heading text-white\">Check out the 90 second pitch video!</h2>&ndash;&gt;-->\n        <!--<h2 class=\"section-heading text-white\">Executive Team</h2>-->\n        <!--<hr class=\"light my-4\">-->\n        <!--<p class=\"text-faded mb-4\">\"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>-->\n        <!--<p class=\"text-faded mb-4\">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>-->\n        <!--<p class=\"text-faded mb-4\">Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.\"</p>-->\n        <!--&lt;!&ndash;<p class=\"text-faded mb-4\"><video height=\"500px\" controls=\"controls\" src=\"lasertagvid.MOV\"></video></p>&ndash;&gt;-->\n        <!--<a class=\"btn btn-light btn-xl js-scroll-trigger\" href=\"#products\">Buy Masks</a>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</section>-->\n\n\n\n\n\n<!--<section id=\"contact\">-->\n  <!--<div class=\"container\">-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-lg-8 mx-auto text-center\">-->\n        <!--<h2 class=\"section-heading\">Contact Us</h2>-->\n        <!--<hr class=\"my-4\">-->\n        <!--<p class=\"mb-5\">masks.com is headquartered in Chicago encorporated ©2020  </p>-->\n        <!--<p>Creator/Developer: <a target=\"_blank\" href=\"https://surakhchin.github.io\">Serge Urakhchin</a></p>-->\n      <!--</div>-->\n    <!--</div>-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-lg-4 ml-auto text-center\">-->\n        <!--<i class=\"fa fa-phone fa-3x mb-3 sr-contact\"></i>-->\n        <!--<p>630-999-8734</p>-->\n      <!--</div>-->\n      <!--<div class=\"col-lg-4 mr-auto text-center\">-->\n        <!--<i class=\"fa fa-envelope-o fa-3x mb-3 sr-contact\"></i>-->\n        <!--<p>-->\n          <!--<a href=\"mailto:your-email@your-domain.com\">urakhchin@gmail.com</a>-->\n        <!--</p>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</section>-->\n\n\n\n<!-- Footer-->\n<footer class=\"bg-light py-5\">\n    <div class=\"container\"><div class=\"small text-center text-muted\">Copyright © 2020 - masks.com</div></div>\n</footer>\n"

/***/ }),

/***/ "./src/app/appviews/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/appviews/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/appviews/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/appviews/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/appviews/gloves/gloves.component.css":
/*!******************************************************!*\
  !*** ./src/app/appviews/gloves/gloves.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n"

/***/ }),

/***/ "./src/app/appviews/gloves/gloves.component.html":
/*!*******************************************************!*\
  !*** ./src/app/appviews/gloves/gloves.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br><br>\n<br>\n<br>\n<br>\n\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h1>Gloves</h1>\n        </div>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/appviews/gloves/gloves.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/appviews/gloves/gloves.component.ts ***!
  \*****************************************************/
/*! exports provided: GlovesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlovesComponent", function() { return GlovesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GlovesComponent = /** @class */ (function () {
    function GlovesComponent() {
    }
    GlovesComponent.prototype.ngOnInit = function () {
    };
    GlovesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gloves',
            template: __webpack_require__(/*! ./gloves.component.html */ "./src/app/appviews/gloves/gloves.component.html"),
            styles: [__webpack_require__(/*! ./gloves.component.css */ "./src/app/appviews/gloves/gloves.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GlovesComponent);
    return GlovesComponent;
}());



/***/ }),

/***/ "./src/app/appviews/kits/kits.component.css":
/*!**************************************************!*\
  !*** ./src/app/appviews/kits/kits.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/kits/kits.component.html":
/*!***************************************************!*\
  !*** ./src/app/appviews/kits/kits.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<br><br>\n<br>\n<br>\n<br>\n\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h1>Kits</h1>\n        </div>\n    </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/appviews/kits/kits.component.ts":
/*!*************************************************!*\
  !*** ./src/app/appviews/kits/kits.component.ts ***!
  \*************************************************/
/*! exports provided: KitsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KitsComponent", function() { return KitsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KitsComponent = /** @class */ (function () {
    function KitsComponent() {
    }
    KitsComponent.prototype.ngOnInit = function () {
    };
    KitsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-kits',
            template: __webpack_require__(/*! ./kits.component.html */ "./src/app/appviews/kits/kits.component.html"),
            styles: [__webpack_require__(/*! ./kits.component.css */ "./src/app/appviews/kits/kits.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], KitsComponent);
    return KitsComponent;
}());



/***/ }),

/***/ "./src/app/appviews/masks/masks.component.css":
/*!****************************************************!*\
  !*** ./src/app/appviews/masks/masks.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/masks/masks.component.html":
/*!*****************************************************!*\
  !*** ./src/app/appviews/masks/masks.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n<br><br>\n<br>\n<br>\n<br>\n\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h1>Masks</h1>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/masks/masks.component.ts":
/*!***************************************************!*\
  !*** ./src/app/appviews/masks/masks.component.ts ***!
  \***************************************************/
/*! exports provided: MasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasksComponent", function() { return MasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MasksComponent = /** @class */ (function () {
    function MasksComponent() {
    }
    MasksComponent.prototype.ngOnInit = function () {
    };
    MasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-masks',
            template: __webpack_require__(/*! ./masks.component.html */ "./src/app/appviews/masks/masks.component.html"),
            styles: [__webpack_require__(/*! ./masks.component.css */ "./src/app/appviews/masks/masks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MasksComponent);
    return MasksComponent;
}());



/***/ }),

/***/ "./src/app/appviews/nav/nav.component.css":
/*!************************************************!*\
  !*** ./src/app/appviews/nav/nav.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/nav/nav.component.html":
/*!*************************************************!*\
  !*** ./src/app/appviews/nav/nav.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-expand-lg navbar-light fixed-top\" id=\"mainNav\">\n  <div class=\"container\">\n\n    <a class=\"navbar-brand js-scroll-trigger\" routerLink=\"\">masks.com</a>\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" routerLink=\"\">Products</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" routerLink=\"about\">About</a>\n        </li>\n        <!--<li class=\"nav-item\">-->\n          <!--<a class=\"nav-link js-scroll-trigger\" href=\"#team\">Executive Team</a>-->\n        <!--</li>-->\n        <li class=\"nav-item\">\n          <a class=\"nav-link js-scroll-trigger\" routerLink=\"contact\">Contact</a>\n        </li>\n        <li class=\"nav-item\">\n\n\n\n<a class=\"header__checkout snipcart-checkout nav-link\">\n    <svg width=\"31\" height=\"27\" viewBox=\"0 0 31 27\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path d=\"M1.10512 0.368718C0.560256 0.368718 0.118164 0.812066 0.118164 1.35848C0.118164 1.9049 0.560256 2.34824 1.10512 2.34824H4.90887L8.30138 18.4009C8.43503 19.0053 8.83085 19.5079 9.32946 19.5041H25.7788C26.3005 19.5118 26.7799 19.0375 26.7799 18.5143C26.7799 17.9911 26.3006 17.5168 25.7788 17.5245H10.1315L9.71003 15.545H27.095C27.5371 15.5412 27.9547 15.2048 28.0511 14.7718L30.354 4.87412C30.4825 4.29933 29.9852 3.67172 29.3979 3.66786H7.21171L6.6771 1.15221C6.58329 0.71276 6.15921 0.368652 5.7107 0.368652L1.10512 0.368718ZM7.623 5.64746H12.7634L13.2569 8.61674H8.25005L7.623 5.64746ZM14.7785 5.64746H20.9881L20.4946 8.61674H15.2719L14.7785 5.64746ZM23.0031 5.64746H28.1537L27.4649 8.61674H22.5097L23.0031 5.64746ZM8.67181 10.5963H13.5862L14.0797 13.5656H9.29919L8.67181 10.5963ZM15.6009 10.5963H20.1656L19.6721 13.5656H16.0944L15.6009 10.5963ZM22.1807 10.5963H27.0023L26.3135 13.5656H21.6872L22.1807 10.5963ZM12.6197 20.164C10.8141 20.164 9.32979 21.6525 9.32979 23.4632C9.32979 25.2739 10.8141 26.7624 12.6197 26.7624C14.4252 26.7624 15.9095 25.2739 15.9095 23.4632C15.9095 21.6525 14.4252 20.164 12.6197 20.164ZM22.4892 20.164C20.6837 20.164 19.1994 21.6525 19.1994 23.4632C19.1994 25.2739 20.6837 26.7624 22.4892 26.7624C24.2948 26.7624 25.7791 25.2739 25.7791 23.4632C25.7791 21.6525 24.2948 20.164 22.4892 20.164ZM12.6197 22.1435C13.3586 22.1435 13.9356 22.7222 13.9356 23.4632C13.9356 24.2042 13.3586 24.7829 12.6197 24.7829C11.8807 24.7829 11.3037 24.2042 11.3037 23.4632C11.3037 22.7222 11.8807 22.1435 12.6197 22.1435ZM22.4892 22.1435C23.2282 22.1435 23.8052 22.7222 23.8052 23.4632C23.8052 24.2042 23.2282 24.7829 22.4892 24.7829C21.7503 24.7829 21.1733 24.2042 21.1733 23.4632C21.1733 22.7222 21.7503 22.1435 22.4892 22.1435Z\" fill=\"#269da1\" class=\"header__checkout-fill\"></path>\n    </svg>\n    <span class=\"snipcart-total-price\">$0.00</span>\n    (<span class=\"snipcart-items-count\">0</span>)\n  </a>\n\n\n\n\n\n        </li>\n      </ul>\n    </div>\n  </div>\n\n</nav>\n\n<!--<header class=\"masthead text-center text-white d-flex\">-->\n  <!--<div class=\"container my-auto\">-->\n    <!--&lt;!&ndash;style=\"text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;\"&ndash;&gt;-->\n    <!--<div class=\"row\">-->\n      <!--<div class=\"col-lg-10 mx-auto\">-->\n        <!--<h1 class=\"text-uppercase\">-->\n          <!--<strong>Your Online Store for Medical Masks</strong>-->\n        <!--</h1>-->\n        <!--<hr>-->\n      <!--</div>-->\n      <!--<div class=\"col-lg-8 mx-auto\">-->\n        <!--<p style=\"font-weight: bold\" class=\" mb-5\">We are working with our manufacturing and supply chain partners, as well as global health organizations, to provide much needed medical masks around the US.</p>-->\n        <!--<a class=\"btn btn-primary btn-xl js-scroll-trigger\" href=\"#products\">Find Out More</a>-->\n      <!--</div>-->\n    <!--</div>-->\n  <!--</div>-->\n<!--</header>-->\n\n\n"

/***/ }),

/***/ "./src/app/appviews/nav/nav.component.ts":
/*!***********************************************!*\
  !*** ./src/app/appviews/nav/nav.component.ts ***!
  \***********************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
        __webpack_require__(/*! src/assets/js/creative.js */ "./src/assets/js/creative.js");
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/appviews/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/appviews/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/appviews/product/product.component.css":
/*!********************************************************!*\
  !*** ./src/app/appviews/product/product.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/product/product.component.html":
/*!*********************************************************!*\
  !*** ./src/app/appviews/product/product.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Single Product</h1>\n"

/***/ }),

/***/ "./src/app/appviews/product/product.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/appviews/product/product.component.ts ***!
  \*******************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductComponent = /** @class */ (function () {
    function ProductComponent() {
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/appviews/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.css */ "./src/app/appviews/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/appviews/recommended/recommended.component.css":
/*!****************************************************************!*\
  !*** ./src/app/appviews/recommended/recommended.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/recommended/recommended.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/appviews/recommended/recommended.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<section class=\"\">-->\n      <!--<div class=\"container\">-->\n        <!--<div class=\"row\" >-->\n          <!--<div class=\"col-lg-12 text-center\">-->\n            <!--<h2 class=\"section-heading\">Products</h2>-->\n            <!--<hr class=\"my-4\">-->\n          <!--</div>-->\n        <!--</div>-->\n      <!--</div>-->\n      <div class=\"container-fluid\" id=\"products\">\n        <div class=\"row\">\n          <div class=\"col-sm col-xs-12 text-center d-flex flex-column justify-content-between\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <img style=\"max-height: 120px\" src=\"../masks/assets/img/PRM.png\">\n              <br><br>\n              <h5 class=\"mb-3\" style=\"font-weight: bold\">4 ply N95 Surgical Mask</h5>\n              <br><br class=\"d-xl-none\">\n              <p class=\"text-muted mb-0\">Our PRM-95 is a 4 Ply filter mask with a carbon layer with more filtration and highly comparable to the N95 filters in the marketplace.</p><br>\n            </div>\n            <div class=\"pb-4\">\n\n              <!--<a class=\"btn btn-primary js-scroll-trigger\" target=\"_blank\" href=\"gun.html\">Play Now!</a>-->\n\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"1\"\n  data-item-price=\"2.99\"\n  data-item-url=\"https://surakhchin.github.io/masks/products.json\"\n  data-item-description=\"Our PRM-95 is a 4 Ply filter mask with a carbon layer with more filtration and highly comparable to the N95 filters in the marketplace.\"\n  data-item-image=\"assets/img/PRM.png\"\n  data-item-name=\"4 ply N95 Surgical Mask\">\n  Add to cart\n</button>\n\n\n\n\n\n\n\n\n            </div>\n          </div>\n          <div class=\"col-sm col-xs-12 text-center d-flex flex-column justify-content-between\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <img style=\"max-height: 120px\" src=\"../masks/assets/img/KN95.png\">\n              <br><br>\n              <h5 class=\"mb-3\" style=\"font-weight: bold\">KN95 Respirator Face Mask</h5>\n              <br>\n              <p class=\"text-muted mb-0\">Multilayer protection: Filters out 95% of air born pollutants. Adjustable nose bridge and elastic ear loop for a tight seal</p><br>\n            </div>\n            <div class=\"pb-4\">\n\n\n\n\n\n              <!--<a class=\"btn btn-primary js-scroll-trigger\" target=\"_blank\" href=\"gun.html\">Play Now!</a>-->\n\n\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"2\"\n  data-item-price=\"4.99\"\n  data-item-url=\"https://surakhchin.github.io/masks/products.json\"\n  data-item-description=\"Multilayer protection: Filters out 95% of air born pollutants. Adjustable nose bridge and elastic ear loop for a tight seal.\"\n  data-item-image=\"assets/img/KN95.png\"\n  data-item-name=\"KN95 Respirator Face Mask\">\n  Add to cart\n</button>\n\n\n\n\n            </div>\n          </div>\n          <div class=\"col-sm col-xs-12 text-center d-flex flex-column justify-content-between\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <img style=\"max-height: 120px\" src=\"../masks/assets/img/N95.png\">\n              <br><br>\n              <h5 class=\"mb-3\" style=\"font-weight: bold\">NIOSH Particulate Respirator Mask</h5>\n              <br>\n              <p class=\"text-muted mb-0\">Niosh Particulate Respirator Mask Filters out 95% of air born pollutants. Meets CDC guidelines for exposure control</p><br>\n            </div>\n            <div class=\"pb-4\">\n\n\n\n              <!--<a class=\"btn btn-primary js-scroll-trigger\" target=\"_blank\" href=\"gun.html\">Play Now!</a>-->\n\n\n\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"3\"\n  data-item-price=\"5.99\"\n  data-item-url=\"https://surakhchin.github.io/masks/products.json\"\n  data-item-description=\"Niosh Particulate Respirator Mask Filters out 95% of air born pollutants. Meets CDC guidelines for exposure control.\"\n  data-item-image=\"assets/img/N95.png\"\n  data-item-name=\"NIOSH Particulate Respirator Mask\">\n  Add to cart\n</button>\n\n\n\n            </div>\n          </div>\n          <div class=\"col-sm col-xs-12 text-center d-flex flex-column justify-content-between\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <img style=\"max-height: 120px\" src=\"../masks/assets/img/3M3.png\">\n              <br><br>\n              <h5 class=\"mb-3\" style=\"font-weight: bold\">FFP3 Surgical Mask 3 Ply</h5>\n              <br>\n              <p class=\"text-muted mb-0\">SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.</p><br>\n            </div>\n            <div class=\"pb-4\">\n\n\n\n\n              <!--<a class=\"btn btn-primary js-scroll-trigger\" target=\"_blank\" href=\"gun.html\">Play Now!</a>-->\n\n\n\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"4\"\n  data-item-price=\"3.99\"\n  data-item-url=\"https://surakhchin.github.io/masks/products.json\"\n  data-item-description=\"SM-3 Ply is a disposable medical device that reduces wearers exposure to particles.\"\n  data-item-image=\"assets/img/3M3.png\"\n  data-item-name=\"FFP3 Surgical Mask 3 Ply\">\n  Add to cart\n</button>\n\n\n\n\n            </div>\n          </div>\n          <div class=\"col-sm col-xs-12 text-center d-flex flex-column justify-content-between\">\n            <div class=\"service-box mt-5 mx-auto\">\n              <img style=\"max-height: 120px\" src=\"../masks/assets/img/3M1860.png\">\n              <br><br>\n              <h5 class=\"mb-3\" style=\"font-weight: bold\">3M 1860 Respirator Mask</h5>\n              <br>\n              <p class=\"text-muted mb-0\">3M 1860 Respirator Mask FDA Cleared for use as surgical mask, >99% BFE (Bacterial Filtration Efficiency) according to ASTM F2101 and Fluid resistant according to ASTM F1862</p><br>\n            </div>\n            <div class=\"pb-4\">\n\n\n\n\n\n              <!--<a class=\"btn btn-primary js-scroll-trigger\" target=\"_blank\" href=\"gun.html\">Play Now!</a>-->\n\n\n\n<button class=\"snipcart-add-item btn btn-primary\"\n  data-item-id=\"5\"\n  data-item-price=\"7.99\"\n  data-item-url=\"https://surakhchin.github.io/masks/products.json\"\n  data-item-description=\"3M 1860 Respirator Mask FDA Cleared for use as surgical mask, >99% BFE (Bacterial Filtration Efficiency) according to ASTM F2101 and Fluid resistant according to ASTM F1862.\"\n  data-item-image=\"assets/img/3M1860.png\"\n  data-item-name=\"3M 1860 Respirator Mask\">\n  Add to cart\n</button>\n\n\n\n\n\n            </div>\n          </div>\n        </div>\n      </div>\n    <!--</section>-->\n"

/***/ }),

/***/ "./src/app/appviews/recommended/recommended.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/appviews/recommended/recommended.component.ts ***!
  \***************************************************************/
/*! exports provided: RecommendedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedComponent", function() { return RecommendedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RecommendedComponent = /** @class */ (function () {
    function RecommendedComponent() {
    }
    RecommendedComponent.prototype.ngOnInit = function () {
    };
    RecommendedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-recommended',
            template: __webpack_require__(/*! ./recommended.component.html */ "./src/app/appviews/recommended/recommended.component.html"),
            styles: [__webpack_require__(/*! ./recommended.component.css */ "./src/app/appviews/recommended/recommended.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecommendedComponent);
    return RecommendedComponent;
}());



/***/ }),

/***/ "./src/app/appviews/sanitizers/sanitizers.component.css":
/*!**************************************************************!*\
  !*** ./src/app/appviews/sanitizers/sanitizers.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/sanitizers/sanitizers.component.html":
/*!***************************************************************!*\
  !*** ./src/app/appviews/sanitizers/sanitizers.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<br><br>\n<br>\n<br>\n<br>\n\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h1>Sanitizers</h1>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/sanitizers/sanitizers.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/appviews/sanitizers/sanitizers.component.ts ***!
  \*************************************************************/
/*! exports provided: SanitizersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizersComponent", function() { return SanitizersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SanitizersComponent = /** @class */ (function () {
    function SanitizersComponent() {
    }
    SanitizersComponent.prototype.ngOnInit = function () {
    };
    SanitizersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sanitizers',
            template: __webpack_require__(/*! ./sanitizers.component.html */ "./src/app/appviews/sanitizers/sanitizers.component.html"),
            styles: [__webpack_require__(/*! ./sanitizers.component.css */ "./src/app/appviews/sanitizers/sanitizers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SanitizersComponent);
    return SanitizersComponent;
}());



/***/ }),

/***/ "./src/app/appviews/tabs/tabs.component.css":
/*!**************************************************!*\
  !*** ./src/app/appviews/tabs/tabs.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (min-width: 1281px){\n    nav {\n        margin-top: 100px;\n\n    }\n}\n@media (max-width: 1280px){\n    nav {\n        margin-top: 85px;\n\n    }\n}\n/*nav {*/\n/*!*position: fixed;*!*/\n/*margin-top: 85px;*/\n/*!*width: 100%;*!*/\n/*!*z-index: 1;*!*/\n/*}*/\n.navbar-serge .nav-link {\n    padding-top: .75rem;\n    padding-bottom: .75rem;\n    font-size: .875rem;\n    color: #373a3c;\n    border-color: darkgray;\n    border-style: solid;\n    border-width: thin;\n  }\n.navbar-serge .active {\n    font-weight: 600;\n    background-color: #11A6BD;\n    color: #fff;\n  }\n.navbar-serge {\n    background: white;\n    background-color:white;\n  }\n"

/***/ }),

/***/ "./src/app/appviews/tabs/tabs.component.html":
/*!***************************************************!*\
  !*** ./src/app/appviews/tabs/tabs.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<br><br><br>-->\n <nav role=\"navigation\" class=\"navbar-serge nav-tabs\">\n\n<div class=\"container\">\n<div class=\"row bg-light\">\n\n    <a class=\"col nav-item nav-link btn-light text-center\" data-toggle=\"tab\" routerLink=\"\" [routerLinkActive]=\"'active'\" [routerLinkActiveOptions]=\"{ exact: true }\">\n        Recommended\n    </a>\n    <a class=\"col nav-item nav-link btn-light  text-center\" data-toggle=\"tab\" routerLink=\"masks\" [routerLinkActive]=\"'active'\">\n        Masks\n    </a>\n    <a class=\"col nav-item nav-link btn-light 3 text-center\" data-toggle=\"tab\" routerLink=\"clothing\" [routerLinkActive]=\"'active'\">\n        Clothing\n    </a>\n    <a class=\"col nav-item nav-link btn-light  text-center\" data-toggle=\"tab\" routerLink=\"sanitizers\" [routerLinkActive]=\"'active'\">\n        Sanitizers\n    </a>\n    <a class=\"col nav-item nav-link btn-light  text-center\" data-toggle=\"tab\" routerLink=\"ventilators\" [routerLinkActive]=\"'active'\">\n        Ventilators\n    </a>\n    <a class=\"col nav-item nav-link btn-light  text-center\" data-toggle=\"tab\" routerLink=\"gloves\" [routerLinkActive]=\"'active'\">\n        Gloves\n    </a>\n    <a class=\"col nav-item nav-link btn-light  text-center\" data-toggle=\"tab\" routerLink=\"kits\" [routerLinkActive]=\"'active'\">\n        Testing Kits\n    </a>\n\n</div>\n\n</div>\n\n\n</nav>\n"

/***/ }),

/***/ "./src/app/appviews/tabs/tabs.component.ts":
/*!*************************************************!*\
  !*** ./src/app/appviews/tabs/tabs.component.ts ***!
  \*************************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabsComponent = /** @class */ (function () {
    function TabsComponent() {
        this.sections = ['masks', 'clothing', 'hand sanitizers', 'ventilators', 'testing kits', 'gloves'];
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__(/*! ./tabs.component.html */ "./src/app/appviews/tabs/tabs.component.html"),
            styles: [__webpack_require__(/*! ./tabs.component.css */ "./src/app/appviews/tabs/tabs.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/appviews/ventilators/ventilators.component.css":
/*!****************************************************************!*\
  !*** ./src/app/appviews/ventilators/ventilators.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/appviews/ventilators/ventilators.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/appviews/ventilators/ventilators.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n<br><br>\n<br>\n<br>\n<br>\n\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col\">\n            <h1>Ventilators</h1>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/appviews/ventilators/ventilators.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/appviews/ventilators/ventilators.component.ts ***!
  \***************************************************************/
/*! exports provided: VentilatorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VentilatorsComponent", function() { return VentilatorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VentilatorsComponent = /** @class */ (function () {
    function VentilatorsComponent() {
    }
    VentilatorsComponent.prototype.ngOnInit = function () {
    };
    VentilatorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ventilators',
            template: __webpack_require__(/*! ./ventilators.component.html */ "./src/app/appviews/ventilators/ventilators.component.html"),
            styles: [__webpack_require__(/*! ./ventilators.component.css */ "./src/app/appviews/ventilators/ventilators.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VentilatorsComponent);
    return VentilatorsComponent;
}());



/***/ }),

/***/ "./src/assets/js/creative.js":
/*!***********************************!*\
  !*** ./src/assets/js/creative.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// setTimeout(function(){

(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {

    if ($("#mainNav").length) {
  if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
}

  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict


// }, 100);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/georgeurakhchin/Documents/masks-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.8e27e1edf6a79835180b.js.map