"use strict";
exports.id = 6820;
exports.ids = [6820];
exports.modules = {

/***/ 6820:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ About),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4178);
// EXTERNAL MODULE: ./src/components/Border.jsx
var Border = __webpack_require__(2779);
// EXTERNAL MODULE: ./src/components/ContactSection.jsx
var ContactSection = __webpack_require__(7612);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(1392);
// EXTERNAL MODULE: ./src/components/FadeIn.jsx
var FadeIn = __webpack_require__(5635);
// EXTERNAL MODULE: ./src/components/GridList.jsx
var GridList = __webpack_require__(4771);
// EXTERNAL MODULE: ./src/components/PageIntro.jsx
var PageIntro = __webpack_require__(3607);
// EXTERNAL MODULE: ./src/components/PageLinks.jsx
var PageLinks = __webpack_require__(7969);
// EXTERNAL MODULE: ./src/components/SectionIntro.jsx
var SectionIntro = __webpack_require__(5962);
// EXTERNAL MODULE: ./src/components/StatList.jsx
var StatList = __webpack_require__(7129);
// EXTERNAL MODULE: ./src/images/team/angela-fisher.jpg
var angela_fisher = __webpack_require__(5202);
;// CONCATENATED MODULE: ./src/images/team/benjamin-russel.jpg
/* harmony default export */ const benjamin_russel = ({"src":"/_next/static/media/benjamin-russel.da51eb4b.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAcEAAABgMAAAAAAAAAAAAAAAAAAQIDBBEFIkH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQAREv/aAAwDAQACEQMRAD8Agw+KflwZK0xHTfI0Kbuy0rai7wAAJyEC7f/Z","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/team/blake-reid.jpg
/* harmony default export */ const blake_reid = ({"src":"/_next/static/media/blake-reid.bcc5ac4f.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAeEAABAwUBAQAAAAAAAAAAAAABAAIDBAUREiExMv/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGBEBAQADAAAAAAAAAAAAAAAAAQACEiH/2gAMAwEAAhEDEQA/AI6mpE13Jbb42RtiLXTQl2uhae4z9A595xERUaBG5vG//9k=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./src/images/team/chelsea-hagon.jpg
var chelsea_hagon = __webpack_require__(9647);
;// CONCATENATED MODULE: ./src/images/team/dries-vincent.jpg
/* harmony default export */ const dries_vincent = ({"src":"/_next/static/media/dries-vincent.5cac3ed5.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAfEAAABQQDAAAAAAAAAAAAAAAAAQIDEQQGEkEUIXH/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/8QAFxEBAAMAAAAAAAAAAAAAAAAAAAECQf/aAAwDAQACEQMRAD8AmrrFMVrMElhXMOoVmreMFHU+6AABgrY//9k=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/team/emma-dorsey.jpg
/* harmony default export */ const emma_dorsey = ({"src":"/_next/static/media/emma-dorsey.4fab86fa.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAdEAABBAIDAAAAAAAAAAAAAAACAAEEEQNhEyEx/8QAFQEBAQAAAAAAAAAAAAAAAAAABAX/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIDBP/aAAwDAQACEQMRAD8AhcBijDj24SyztyD24vjeq17e0REfahRAlDl0toKz/9k=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/team/jeffrey-webb.jpg
/* harmony default export */ const jeffrey_webb = ({"src":"/_next/static/media/jeffrey-webb.a90fe9d1.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAfEAABBAICAwAAAAAAAAAAAAACAAEDEQQFEhQhMUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAB/8QAFhEBAQEAAAAAAAAAAAAAAAAAEQAB/9oADAMBAAIRAxEAPwCYxtxrpCjcs3KCfsWM5Fb8W9MTX4t/qIiAjdb/2Q==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/team/kathryn-murphy.jpg
/* harmony default export */ const kathryn_murphy = ({"src":"/_next/static/media/kathryn-murphy.550962fd.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAeEAACAgICAwAAAAAAAAAAAAABBAADAhEFEiExYf/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAYEQEAAwEAAAAAAAAAAAAAAAABAAIhMf/aAAwDAQACEQMRAD8At1BZfkijXyT1a1GQWFxuGxlvqcRj437Gj8iIi4xFSxs//9k=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/team/leonard-krasner.jpg
/* harmony default export */ const leonard_krasner = ({"src":"/_next/static/media/leonard-krasner.5a4a4614.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAfEAACAgEEAwAAAAAAAAAAAAABAgADBAUGESEUMUH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAGBEBAAMBAAAAAAAAAAAAAAAAAQACAzH/2gAMAwEAAhEDEQA/AKGsbr1Onc6V4mUvjLnV0qqkFWrI4Yng99n38iIiNAYNdFOT/9k=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./src/images/team/leslie-alexander.jpg
var leslie_alexander = __webpack_require__(5726);
;// CONCATENATED MODULE: ./src/images/team/michael-foster.jpg
/* harmony default export */ const michael_foster = ({"src":"/_next/static/media/michael-foster.00319162.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAgEAABAwMFAQAAAAAAAAAAAAACAAEDBAUREhMUITGR/8QAFQEBAQAAAAAAAAAAAAAAAAAAAwT/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIR/9oADAMBAAIRAxEAPwCmutM9Pchr3nfiFC4yDudCWWw+n74iIo9bRlDpf//Z","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./src/images/team/whitney-francis.jpg
/* harmony default export */ const whitney_francis = ({"src":"/_next/static/media/whitney-francis.ced7480b.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAfEAACAQQCAwAAAAAAAAAAAAABAwACBAURBhIhIkH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABgRAQADAQAAAAAAAAAAAAAAAAEAAgMR/9oADAMBAAIRAxEAPwC3Ii7I5lak3NbbBFytFfYetPYedg/Qd6iIlK5gchbT/9k=","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./src/lib/mdx.js
var mdx = __webpack_require__(6249);
;// CONCATENATED MODULE: ./src/app/about/page.jsx
























function Culture() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SectionIntro/* SectionIntro */.v, {
                eyebrow: "Our vision",
                title: "To help the world study the Bible.",
                invert: true,
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "We can use technology to teach everyone about theology."
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W, {
                className: "mt-16",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridList/* GridList */.e, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridList/* GridListItem */.l, {
                            title: "Technology",
                            invert: true,
                            children: "Harnessing cutting-edge AI to unlock a new realm of spiritual exploration and understanding."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridList/* GridListItem */.l, {
                            title: "Teaching",
                            invert: true,
                            children: "Empowering every individual with curated insights, fostering a deeper connection to age-old wisdom."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridList/* GridListItem */.l, {
                            title: "Theology",
                            invert: true,
                            children: "Exploring diverse Christian theological perspectives with an open mind and heart."
                        })
                    ]
                })
            })
        ]
    });
}
const metadata = {
    title: "About Us",
    description: "We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do."
};
async function About() {
    let blogArticles = (await (0,mdx/* loadArticles */.n)()).slice(0, 2);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(PageIntro/* PageIntro */.O, {
                eyebrow: "About us",
                title: "Our Founder",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Michael Jordan is a Fellow of the Actuarial Society of South Africa. Though his main skill is around Enterprise Risk Management, he has a passion for Teaching, Technology and Theology."
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mt-10 max-w-2xl space-y-6 text-base",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "2010 - Part of the school team that won the Johannesburg Bible Quiz Tournament."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "2013 - Graduated from Wits University with Honours in Actuarial Science and a major in Mathematical Statistics."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "2014 - Launched a Bible USSD application that reached 20 000 people in Zimbabwe."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "2015 - Recorded a series of religious YouTube videos where one got over 250 000 views."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "2016 - Created an Artificial Intelligence that is featured in the South African Journal of Science."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "2017 - Gave a TedX Talk at UCT about how machine learning principles can be used to help students study."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "2018 - Wrote an article on how morality can be influenced by uncertainty in the Philosophy Now Magazine."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: '2019 - Self published a book on Amazon entitled "What to Pray For".'
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "2020 - Secured a tender from a branch of the SA Government to create Post Graduate Courses on Insurance and Risk Management."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "2021 - Joined Polygon, a fast growing tech startup and presented at various international conferences about emerging technology."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "2022 - An early adopter of ChatGPT and MidJourney."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                children: "2023 - Secured funding to pursue Bible Intelligence full time."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W, {
                className: "mt-16",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StatList/* StatList */.Z, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(StatList/* StatListItem */.j, {
                            value: "+50",
                            label: "Books in the Bible Decoded Series"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(StatList/* StatListItem */.j, {
                            value: "+1 Million",
                            label: "Views on YouTube"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(StatList/* StatListItem */.j, {
                            value: "+50 000",
                            label: "Subscribers"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Culture, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(PageLinks/* PageLinks */.b, {
                className: "mt-24 sm:mt-32 lg:mt-40",
                title: "From the blog",
                intro: "Read more about what we are doing and how we can benefit your church",
                pages: blogArticles
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ContactSection/* ContactSection */.U, {})
        ]
    });
}


/***/ }),

/***/ 5202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/angela-fisher.f2122cd4.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAdEAAABgMBAAAAAAAAAAAAAAAAAQIDBAURIXET/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABcRAQADAAAAAAAAAAAAAAAAAAABAjH/2gAMAwEAAhEDEQA/AKEelkt18l6wiKR7Pkpk1Fom8a5wAACCtr//2Q==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 9647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/chelsea-hagon.073aa8f2.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAeEAABBQACAwAAAAAAAAAAAAACAAEDBBEFMQYSIv/EABQBAQAAAAAAAAAAAAAAAAAAAAL/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8AoT8pZr+Y1BKY3htkEIg5fAi8bk7Z1u+r72iIlBf/2Q==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 5726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/leslie-alexander.cf5840d1.jpg","height":1800,"width":1800,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAgEAAABQMFAAAAAAAAAAAAAAAAAQIDBAUSIREVImGB/8QAFAEBAAAAAAAAAAAAAAAAAAAAA//EABkRAAMAAwAAAAAAAAAAAAAAAAABAgMhcf/aAAwDAQACEQMRAD8Atvk2RUXJsWpm8w2sm1ykK4ttW5uI8a3degABolNsLItTw//Z","blurWidth":8,"blurHeight":8});

/***/ })

};
;