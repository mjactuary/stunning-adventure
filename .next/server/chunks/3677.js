"use strict";
exports.id = 3677;
exports.ids = [3677];
exports.modules = {

/***/ 3677:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ ListItem),
/* harmony export */   a: () => (/* binding */ List)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7369);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Border__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2779);
/* harmony import */ var _components_FadeIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5635);




function List({ children, className }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FadeIn__WEBPACK_IMPORTED_MODULE_3__/* .FadeInStagger */ .o, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            role: "list",
            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("text-base text-neutral-600", className),
            children: children
        })
    });
}
function ListItem({ children, title }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: "group mt-10 first:mt-0",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FadeIn__WEBPACK_IMPORTED_MODULE_3__/* .FadeIn */ .U, {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Border__WEBPACK_IMPORTED_MODULE_2__/* .Border */ .O, {
                className: "pt-10 group-first:pt-0 group-first:before:hidden group-first:after:hidden",
                children: [
                    title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                        className: "font-semibold text-neutral-950",
                        children: `${title}. `
                    }),
                    children
                ]
            })
        })
    });
}


/***/ })

};
;