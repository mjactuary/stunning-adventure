"use strict";
exports.id = 2378;
exports.ids = [2378];
exports.modules = {

/***/ 2378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Process),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./src/components/Blockquote.jsx
var Blockquote = __webpack_require__(5504);
// EXTERNAL MODULE: ./src/components/ContactSection.jsx
var ContactSection = __webpack_require__(7612);
// EXTERNAL MODULE: ./src/components/Container.jsx
var Container = __webpack_require__(1392);
// EXTERNAL MODULE: ./src/components/FadeIn.jsx
var FadeIn = __webpack_require__(5635);
// EXTERNAL MODULE: ./src/components/GridList.jsx
var GridList = __webpack_require__(4771);
// EXTERNAL MODULE: ./src/components/GridPattern.jsx
var GridPattern = __webpack_require__(5806);
// EXTERNAL MODULE: ./src/components/List.jsx
var List = __webpack_require__(3677);
// EXTERNAL MODULE: ./src/components/PageIntro.jsx
var PageIntro = __webpack_require__(3607);
// EXTERNAL MODULE: ./src/components/SectionIntro.jsx
var SectionIntro = __webpack_require__(5962);
// EXTERNAL MODULE: ./src/components/StylizedImage.jsx
var StylizedImage = __webpack_require__(9046);
// EXTERNAL MODULE: ./src/components/TagList.jsx
var TagList = __webpack_require__(9568);
// EXTERNAL MODULE: ./src/images/laptop.jpg
var laptop = __webpack_require__(3261);
;// CONCATENATED MODULE: ./src/images/meeting.jpg
/* harmony default export */ const meeting = ({"src":"/_next/static/media/meeting.0efc6edc.jpg","height":1600,"width":2400,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAfEAABAwMFAAAAAAAAAAAAAAACAAEEAwUREyEiMWH/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//EABgRAAMBAQAAAAAAAAAAAAAAAAABAhIx/9oADAMBAAIRAxEAPwC7ba86VbRlHMLVMXkPx2ybdY8wiIpw3kd9P//Z","blurWidth":8,"blurHeight":5});
;// CONCATENATED MODULE: ./src/images/whiteboard.jpg
/* harmony default export */ const whiteboard = ({"src":"/_next/static/media/whiteboard.2d6ee65a.jpg","height":1800,"width":2400,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAeEAABBAEFAAAAAAAAAAAAAAABAAIDEQQGEhMkQf/EABQBAQAAAAAAAAAAAAAAAAAAAAT/xAAZEQADAQEBAAAAAAAAAAAAAAABAgQAAxH/2gAMAwEAAhEDEQA/AKcvUc0LWdWLdzVHbi4AHwgoiJs8/Jl9IwKqOqMAp3//2Q==","blurWidth":8,"blurHeight":6});
;// CONCATENATED MODULE: ./src/app/process/page.jsx















function Section({ title, image, children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W, {
        className: "group/section [counter-increment:section]",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex justify-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(FadeIn/* FadeIn */.U, {
                        className: "w-[33.75rem] flex-none lg:w-[45rem]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(StylizedImage/* StylizedImage */.p, {
                            ...image,
                            sizes: "(min-width: 1024px) 41rem, 31rem",
                            className: "justify-center lg:justify-end lg:group-even/section:justify-start"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(FadeIn/* FadeIn */.U, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]",
                                "aria-hidden": "true"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl",
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mt-6",
                                children: children
                            })
                        ]
                    })
                })
            ]
        })
    });
}
function Discover() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section, {
        title: "Discover",
        image: {
            src: whiteboard
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-y-6 text-base text-neutral-600",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "We foster a close collaboration with each church's leadership team, striving to deeply understand both their specific needs and their theological stance on diverse topics."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "By examining the congregation's demographics and the current content being produced by the church, we identify optimal areas for the integration of our AI tools and content."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Upon finalizing our evaluation, we present a holistic plan paired with a detailed budget to seamlessly integrate AI-driven solutions into their operations."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "mt-12 font-display text-base font-semibold text-neutral-950",
                children: "Included in this phase"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TagList/* TagList */.P, {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(TagList/* TagListItem */.N, {
                        children: "Leadership Consultation"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TagList/* TagListItem */.N, {
                        children: "Theological Alignment"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TagList/* TagListItem */.N, {
                        children: "Demographic Analysis"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TagList/* TagListItem */.N, {
                        children: "Content Evaluation"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TagList/* TagListItem */.N, {
                        children: "AI Tool Identificationt"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TagList/* TagListItem */.N, {
                        children: "Budget Planning"
                    })
                ]
            })
        ]
    });
}
function Build() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section, {
        title: "Build",
        image: {
            src: laptop/* default */.Z,
            shape: 1
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-y-6 text-base text-neutral-600",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Beginning with a clear vision, we meticulously draft a roadmap for each AI tool and content initiative. This step-by-step plan ensures every aspect aligns with the church's needs and theological perspectives, paving the way for an impactful integration."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "To streamline the process and maintain transparent communication, we assign a dedicated account manager for each project. Their primary role is to be the bridge between Bible Intelligence and the church, ensuring feedback is incorporated and all concerns are promptly addressed."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Our AI specialists then get to work on crafting bespoke AI tools tailored to your church's specifics. Simultaneously, our content team generates insightful, theologically-sound material that resonates with the congregation's spiritual journey."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "mt-12 font-display text-base font-semibold text-neutral-950",
                children: "Included in this phase"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(TagList/* TagList */.P, {
                className: "mt-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(TagList/* TagListItem */.N, {
                        children: "Roadmapping"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TagList/* TagListItem */.N, {
                        children: "Assigning an Account Mamanger"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TagList/* TagListItem */.N, {
                        children: "Programming custom AI tools"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(TagList/* TagListItem */.N, {
                        children: "Developing required Content"
                    })
                ]
            })
        ]
    });
}
function Deliver() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section, {
        title: "Deliver",
        image: {
            src: meeting,
            shape: 2
        },
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "space-y-6 text-base text-neutral-600",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Once the AI tools and content have been crafted to perfection, the delivery phase commences. We seamlessly integrate our solutions into the church's existing systems, ensuring a hassle-free transition. Each tool and piece of content is designed to not only be user-friendly but to also resonate deeply with the church's congregation."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Understanding the significance of continual adaptation, we're committed to progressing with your needs. Post-deployment, we engage in regular check-ins and offer guidance on maximizing the potential of our AI-driven solutions, ensuring they remain relevant and impactful."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Our commitment doesn't end at delivery. We believe in forging long-term partnerships, and this is reflected in our dedication to providing ongoing support. Our team remains accessible, always ready to assist, iterate, and improve based on real-world feedback and the changing needs of your church."
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "mt-12 font-display text-base font-semibold text-neutral-950",
                children: "Included in this phase"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(List/* List */.a, {
                className: "mt-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(List/* ListItem */.H, {
                        title: "Testing",
                        children: "Before any tool goes live, it undergoes rigorous testing to ensure its accuracy, reliability, and alignment with theological principles."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(List/* ListItem */.H, {
                        title: "Monitoring",
                        children: "Post-launch, we actively monitor the performance and usage of our tools and content, gleaning insights to drive improvements and ensure optimal engagement."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(List/* ListItem */.H, {
                        title: "Support",
                        children: "Our support team is always at your beck and call, offering technical assistance, content updates, and answering any queries that arise."
                    })
                ]
            })
        ]
    });
}
function Values() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50",
                children: /*#__PURE__*/ jsx_runtime_.jsx(GridPattern/* GridPattern */.K, {
                    className: "absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]",
                    yOffset: -270
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SectionIntro/* SectionIntro */.v, {
                eyebrow: "Our values",
                title: "Faith Meets Future",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "At Bible Intelligence, our mission melds the timeless truths of faith with the cutting-edge potential of technology. These ten core values illuminate our path, guaranteeing that our collaboration with churches is both authentic and progressive."
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Container/* Container */.W, {
                className: "mt-24",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(GridList/* GridList */.e, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(GridList/* GridListItem */.l, {
                            title: "Theological Integrity",
                            children: "We prioritize the accuracy and truth of Biblical teachings in every tool and piece of content we create."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridList/* GridListItem */.l, {
                            title: "Innovative Spirit",
                            children: "We're committed to harnessing the latest in AI technology to bridge ancient wisdom with modern insights."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridList/* GridListItem */.l, {
                            title: "Church-Centered",
                            children: "Every solution we offer is tailored to the unique needs and theological stances of each church."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridList/* GridListItem */.l, {
                            title: "Transparent Collaboration",
                            children: "Open and consistent communication forms the backbone of our partnerships with churches."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridList/* GridListItem */.l, {
                            title: "Ethical Responsibility",
                            children: "We uphold the highest standards of ethics both in our technological developments and business practices."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridList/* GridListItem */.l, {
                            title: "Continual Growth",
                            children: "We believe in learning and progressing, always striving to improve and better serve the spiritual community."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridList/* GridListItem */.l, {
                            title: "Diverse Inclusion",
                            children: "Recognizing the diverse tapestry of the Christian community, we respect and incorporate various theological viewpoints."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridList/* GridListItem */.l, {
                            title: "Stewardship",
                            children: "We use our resources wisely, always aiming to provide the best value for our clients."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridList/* GridListItem */.l, {
                            title: "Accessibility",
                            children: "Our tools and content are designed to be user-friendly, ensuring that everyone, regardless of their tech-savviness, can benefit."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(GridList/* GridListItem */.l, {
                            title: "Spiritual Enhancement",
                            children: "Our ultimate goal is to deepen spiritual engagement and understanding, fostering a closer relationship between individuals and God."
                        })
                    ]
                })
            })
        ]
    });
}
const metadata = {
    title: "Our Process",
    description: "We believe in efficiency and maximizing our resources to provide the best value to our clients."
};
function Process() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PageIntro/* PageIntro */.O, {
                eyebrow: "Our process",
                title: "How we work",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "Recognizing the transformative potential of AI for churches, Bible Intelligence strategically identifies areas where technology can most enhance spiritual growth. We craft custom AI tools tailored to these areas, generate meaningful content, and continuously monitor the results. Our iterative approach ensures we expand and refine our offerings month after month, ensuring churches benefit from the best of AI-driven insights."
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Discover, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Build, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Deliver, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Values, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(ContactSection/* ContactSection */.U, {})
        ]
    });
}


/***/ }),

/***/ 9568:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   N: () => (/* binding */ TagListItem),
/* harmony export */   P: () => (/* binding */ TagList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7369);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);


function TagList({ children, className }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        role: "list",
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(className, "flex flex-wrap gap-4"),
        children: children
    });
}
function TagListItem({ children, className }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("rounded-full bg-neutral-100 px-4 py-1.5 text-base text-neutral-600", className),
        children: children
    });
}


/***/ })

};
;