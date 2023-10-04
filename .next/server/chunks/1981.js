"use strict";
exports.id = 1981;
exports.ids = [1981];
exports.modules = {

/***/ 5117:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Work),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4178);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
// EXTERNAL MODULE: ./src/components/Blockquote.jsx
var components_Blockquote = __webpack_require__(5504);
// EXTERNAL MODULE: ./src/components/Border.jsx
var components_Border = __webpack_require__(2779);
// EXTERNAL MODULE: ./src/components/Button.jsx
var components_Button = __webpack_require__(732);
// EXTERNAL MODULE: ./src/components/ContactSection.jsx
var ContactSection = __webpack_require__(7612);
// EXTERNAL MODULE: ./src/components/Container.jsx
var components_Container = __webpack_require__(1392);
// EXTERNAL MODULE: ./src/components/FadeIn.jsx
var components_FadeIn = __webpack_require__(5635);
// EXTERNAL MODULE: ./src/components/PageIntro.jsx
var PageIntro = __webpack_require__(3607);
// EXTERNAL MODULE: ./src/components/Testimonial.jsx
var Testimonial = __webpack_require__(1961);
;// CONCATENATED MODULE: ./src/images/clients/bright-path/logo-dark.svg
/* harmony default export */ const logo_dark = ({"src":"/_next/static/media/logo-dark.1ff7dc9b.svg","height":36,"width":184,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/images/clients/family-fund/logo-dark.svg
/* harmony default export */ const family_fund_logo_dark = ({"src":"/_next/static/media/logo-dark.7370ef3f.svg","height":36,"width":184,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/images/clients/green-life/logo-dark.svg
/* harmony default export */ const green_life_logo_dark = ({"src":"/_next/static/media/logo-dark.645d638e.svg","height":36,"width":184,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/images/clients/home-work/logo-dark.svg
/* harmony default export */ const home_work_logo_dark = ({"src":"/_next/static/media/logo-dark.e87ae13a.svg","height":36,"width":184,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/images/clients/mail-smirk/logo-dark.svg
/* harmony default export */ const mail_smirk_logo_dark = ({"src":"/_next/static/media/logo-dark.ac5d2e8d.svg","height":36,"width":184,"blurWidth":0,"blurHeight":0});
;// CONCATENATED MODULE: ./src/images/clients/north-adventures/logo-dark.svg
/* harmony default export */ const north_adventures_logo_dark = ({"src":"/_next/static/media/logo-dark.ad8a4f58.svg","height":36,"width":184,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./src/images/clients/phobia/logo-dark.svg
var phobia_logo_dark = __webpack_require__(319);
;// CONCATENATED MODULE: ./src/images/clients/unseal/logo-dark.svg
/* harmony default export */ const unseal_logo_dark = ({"src":"/_next/static/media/logo-dark.4785dd63.svg","height":36,"width":184,"blurWidth":0,"blurHeight":0});
// EXTERNAL MODULE: ./src/lib/mdx.js
var mdx = __webpack_require__(6249);
// EXTERNAL MODULE: ./src/components/List.jsx
var List = __webpack_require__(3677);
;// CONCATENATED MODULE: ./src/app/work/page.jsx






















function CaseStudies({ caseStudies }) {
    return /*#__PURE__*/ _jsxs(Container, {
        className: "mt-40",
        children: [
            /*#__PURE__*/ _jsx(FadeIn, {
                children: /*#__PURE__*/ _jsx("h2", {
                    className: "font-display text-2xl font-semibold text-neutral-950",
                    children: "Case studies"
                })
            }),
            /*#__PURE__*/ _jsx("div", {
                className: "mt-10 space-y-20 sm:space-y-24 lg:space-y-32",
                children: caseStudies.map((caseStudy)=>/*#__PURE__*/ _jsx(FadeIn, {
                        children: /*#__PURE__*/ _jsx("article", {
                            children: /*#__PURE__*/ _jsxs(Border, {
                                className: "grid grid-cols-3 gap-x-8 gap-y-8 pt-16",
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block",
                                        children: [
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "sm:flex sm:items-center sm:gap-x-6 lg:block",
                                                children: [
                                                    /*#__PURE__*/ _jsx(Image, {
                                                        src: caseStudy.logo,
                                                        alt: "",
                                                        className: "h-16 w-16 flex-none",
                                                        unoptimized: true
                                                    }),
                                                    /*#__PURE__*/ _jsx("h3", {
                                                        className: "mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8",
                                                        children: caseStudy.client
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ _jsxs("div", {
                                                className: "mt-1 flex gap-x-4 sm:mt-0 lg:block",
                                                children: [
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden",
                                                        children: caseStudy.service
                                                    }),
                                                    /*#__PURE__*/ _jsx("p", {
                                                        className: "text-sm text-neutral-950 lg:mt-2",
                                                        children: /*#__PURE__*/ _jsx("time", {
                                                            dateTime: caseStudy.date,
                                                            children: formatDate(caseStudy.date)
                                                        })
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "col-span-full lg:col-span-2 lg:max-w-2xl",
                                        children: [
                                            /*#__PURE__*/ _jsx("p", {
                                                className: "font-display text-4xl font-medium text-neutral-950",
                                                children: /*#__PURE__*/ _jsx(Link, {
                                                    href: caseStudy.href,
                                                    children: caseStudy.title
                                                })
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "mt-6 space-y-6 text-base text-neutral-600",
                                                children: caseStudy.summary.map((paragraph)=>/*#__PURE__*/ _jsx("p", {
                                                        children: paragraph
                                                    }, paragraph))
                                            }),
                                            /*#__PURE__*/ _jsx("div", {
                                                className: "mt-8 flex",
                                                children: /*#__PURE__*/ _jsx(Button, {
                                                    href: caseStudy.href,
                                                    "aria-label": `Read case study: ${caseStudy.client}`,
                                                    children: "Read case study"
                                                })
                                            }),
                                            caseStudy.testimonial && /*#__PURE__*/ _jsx(Blockquote, {
                                                author: caseStudy.testimonial.author,
                                                className: "mt-12",
                                                children: caseStudy.testimonial.content
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }, caseStudy.client))
            })
        ]
    });
}
const clients = [
    [
        "Phobia",
        phobia_logo_dark/* default */.Z
    ],
    [
        "Family Fund",
        family_fund_logo_dark
    ],
    [
        "Unseal",
        unseal_logo_dark
    ],
    [
        "Mail Smirk",
        mail_smirk_logo_dark
    ],
    [
        "Home Work",
        home_work_logo_dark
    ],
    [
        "Green Life",
        green_life_logo_dark
    ],
    [
        "Bright Path",
        logo_dark
    ],
    [
        "North Adventures",
        north_adventures_logo_dark
    ]
];
function Clients() {
    return /*#__PURE__*/ _jsxs(Container, {
        className: "mt-24 sm:mt-32 lg:mt-40",
        children: [
            /*#__PURE__*/ _jsx(FadeIn, {
                children: /*#__PURE__*/ _jsx("h2", {
                    className: "font-display text-2xl font-semibold text-neutral-950",
                    children: "You’re in good company"
                })
            }),
            /*#__PURE__*/ _jsxs(FadeInStagger, {
                className: "mt-10",
                faster: true,
                children: [
                    /*#__PURE__*/ _jsx(Border, {
                        as: FadeIn
                    }),
                    /*#__PURE__*/ _jsx("ul", {
                        role: "list",
                        className: "grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4",
                        children: clients.map(([client, logo])=>/*#__PURE__*/ _jsx("li", {
                                className: "group",
                                children: /*#__PURE__*/ _jsx(FadeIn, {
                                    className: "overflow-hidden",
                                    children: /*#__PURE__*/ _jsx(Border, {
                                        className: "pt-12 group-[&:nth-child(-n+2)]:-mt-px sm:group-[&:nth-child(3)]:-mt-px lg:group-[&:nth-child(4)]:-mt-px",
                                        children: /*#__PURE__*/ _jsx(Image, {
                                            src: logo,
                                            alt: client,
                                            unoptimized: true
                                        })
                                    })
                                })
                            }, client))
                    })
                ]
            })
        ]
    });
}
const metadata = {
    title: "FAQ",
    description: "Answers to Your Queries: Dive into our frequently asked questions to gain clarity on how Bible Intelligence seamlessly blends faith with cutting-edge AI technology."
};
async function Work() {
    let caseStudies = await (0,mdx/* loadCaseStudies */.X)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(PageIntro/* PageIntro */.O, {
                eyebrow: "Frequently Asked Questions",
                title: "FAQ",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    children: "Answers to Your Queries: Dive into our frequently asked questions to gain clarity on how Bible Intelligence seamlessly blends faith with cutting-edge AI technology."
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Container/* Container */.W, {
                className: "mt-16",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "lg:flex lg:items-center lg:justify-end",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(List/* List */.a, {
                        className: "mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(List/* ListItem */.H, {
                                title: "What is Bible Intelligence?",
                                children: "Bible Intelligence combines artificial intelligence with biblical teachings to offer enhanced tools for understanding, prayer generation, and personalized insights into Scripture."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(List/* ListItem */.H, {
                                title: "How does the AI ensure the theological accuracy of its insights?",
                                children: "We employ ChatGPT, a state-of-the-art language model developed by OpenAI. ChatGPT is trained on a vast array of textual data, encompassing various theological perspectives and biblical interpretations. While it possesses a comprehensive understanding of theological matters, we further use prompt filters to refine its outputs. This combination ensures doctrinal accuracy while allowing for customization to suit specific church theological stances."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(List/* ListItem */.H, {
                                title: "Is my personal prayer data stored or shared?",
                                children: "Your privacy is paramount. Any prayer or query inputted is processed without being stored, ensuring your personal spiritual reflections remain confidential."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(List/* ListItem */.H, {
                                title: "How can AI help deepen my understanding of the Bible?",
                                children: "AI can provide contextual insights, cross-referencing verses, historical backgrounds, and even generate questions for reflection, all tailored to your theological perspective."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(List/* ListItem */.H, {
                                title: "Can our church customize the AI outputs to align with our specific beliefs?",
                                children: "Absolutely. We offer tools and workshops to aid churches in tailoring the AI insights to fit their specific doctrinal stances."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(List/* ListItem */.H, {
                                title: "Is there a risk of misinterpretation when using AI for theological insights?",
                                children: "While AI can provide valuable insights, it's essential to approach them as supplementary. We encourage users to combine AI's insights with personal reflection, discussions, and guidance from spiritual leaders."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(List/* ListItem */.H, {
                                title: "How does the AI prayer generator work?",
                                children: "Our prayer generator utilizes advanced algorithms trained on liturgical texts and prayers. When provided with a theme or intention, it crafts prayers that align with biblical teachings and sentiments."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(List/* ListItem */.H, {
                                title: "Do you offer training on integrating AI into our church's programs?",
                                children: "Yes, we provide workshops designed to educate staff on the potential and responsible use of AI in religious studies and engagements."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(List/* ListItem */.H, {
                                title: "Are there any costs associated with using Bible Intelligence tools?",
                                children: "While we offer some tools and insights for free, advanced features or customized solutions might come with associated costs. Please get in touch with us for detailed pricing."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(List/* ListItem */.H, {
                                title: "How can we ensure our congregation understands the balance between traditional teachings and AI insights?",
                                children: "Education is key. We recommend hosting sessions or workshops (which we can assist with) to explain the role of AI as a tool, not a replacement, in the spiritual journey."
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ContactSection/* ContactSection */.U, {})
        ]
    });
}


/***/ }),

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


/***/ })

};
;