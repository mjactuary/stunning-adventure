"use strict";
exports.id = 6132;
exports.ids = [6132];
exports.modules = {

/***/ 1961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export Testimonial */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4178);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7369);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1392);
/* harmony import */ var _components_FadeIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5635);
/* harmony import */ var _components_GridPattern__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5806);






function Testimonial({ children, client, className }) {
    return /*#__PURE__*/ _jsxs("div", {
        className: clsx("relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32", className),
        children: [
            /*#__PURE__*/ _jsx(GridPattern, {
                className: "absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]",
                yOffset: -256
            }),
            /*#__PURE__*/ _jsx(Container, {
                children: /*#__PURE__*/ _jsx(FadeIn, {
                    children: /*#__PURE__*/ _jsxs("figure", {
                        className: "mx-auto max-w-4xl",
                        children: [
                            /*#__PURE__*/ _jsx("blockquote", {
                                className: "relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl",
                                children: /*#__PURE__*/ _jsx("p", {
                                    className: "before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full",
                                    children: children
                                })
                            }),
                            /*#__PURE__*/ _jsx("figcaption", {
                                className: "mt-10",
                                children: /*#__PURE__*/ _jsx(Image, {
                                    src: client.logo,
                                    alt: client.name,
                                    unoptimized: true
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
}


/***/ }),

/***/ 319:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo-dark.939ef263.svg","height":300,"width":200,"blurWidth":0,"blurHeight":0});

/***/ })

};
;