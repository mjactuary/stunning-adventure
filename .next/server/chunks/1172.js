"use strict";
exports.id = 1172;
exports.ids = [1172];
exports.modules = {

/***/ 5806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ e0)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`/Users/michaeljordan/bible-intelligence-four/src/components/GridPattern.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["GridPattern"];


/***/ }),

/***/ 5962:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   v: () => (/* binding */ SectionIntro)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7369);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1392);
/* harmony import */ var _components_FadeIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5635);




function SectionIntro({ title, eyebrow, children, smaller = false, invert = false, ...props }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_2__/* .Container */ .W, {
        ...props,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_FadeIn__WEBPACK_IMPORTED_MODULE_3__/* .FadeIn */ .U, {
            className: "max-w-2xl",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                    children: [
                        eyebrow && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("mb-6 block font-display text-base font-semibold", invert ? "text-white" : "text-neutral-950"),
                                    children: eyebrow
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "sr-only",
                                    children: " - "
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("block font-display tracking-tight [text-wrap:balance]", smaller ? "text-2xl font-semibold" : "text-4xl font-medium sm:text-5xl", invert ? "text-white" : "text-neutral-950"),
                            children: title
                        })
                    ]
                }),
                children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("mt-6 text-xl", invert ? "text-neutral-300" : "text-neutral-600"),
                    children: children
                })
            ]
        })
    });
}


/***/ })

};
;