"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/VerseFinder.jsx":
/*!****************************************!*\
  !*** ./src/components/VerseFinder.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction VerseFinder() {\n    _s();\n    // Declare a state variable called 'count' and its setter 'setCount'\n    // const [count, setCount] = useState(0);\n    const [inputText, setInputText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // state for input text\n    const [outputText, setOutputText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // state for output text\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Handle form submission\n    const handleSubmit = async (event)=>{\n        event.preventDefault(); // prevent page reload on form submission\n        setIsLoading(true);\n        try {\n            const responsePastor = await fetch(\"https://api.openai.com/v1/chat/completions\", {\n                method: \"POST\",\n                headers: {\n                    \"Authorization\": `Bearer ${inputKey}`,\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    model: \"gpt-3.5-turbo\",\n                    messages: [\n                        {\n                            role: \"user\",\n                            content: \"Provide the Bible verse that relates to the following: \" + inputText\n                        }\n                    ]\n                })\n            });\n            // Check if the response was not successful\n            if (!responsePastor.ok) {\n                const errorData = await responsePastor.json();\n                console.error(\"Error from OpenAI API:\", errorData);\n                throw new Error(`OpenAI API Error: ${errorData.error || \"Unknown Error\"}`);\n            }\n            const dataPastor = await responsePastor.json();\n            let responseTextPastor = dataPastor.choices && dataPastor.choices[0] && dataPastor.choices[0].message ? dataPastor.choices[0].message.content.trim() : \"\";\n            setOutputText(responseTextPastor);\n        } catch (error) {\n            console.error(\"There was an error fetching the data:\", error);\n            setOutputText(\"The service is unfortunately busy.\");\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    // Handle input text change\n    const handleInputChange = (e)=>{\n        setInputText(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center gap-x-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"px-4 py-5 sm:p-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"mt-5 sm:flex sm:items-center\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full sm:max-w-xs\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"textInput\",\n                                    className: \"sr-only\",\n                                    children: \"Text\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/VerseFinder.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"text\",\n                                    id: \"textInput\",\n                                    className: \"block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6\",\n                                    placeholder: \"e.g. Angles\",\n                                    value: inputText,\n                                    onChange: handleInputChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/VerseFinder.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/VerseFinder.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 19\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSubmit,\n                            disabled: isLoading,\n                            className: `mt-3 inline-flex w-full items-center justify-center rounded-md px-5 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 sm:ml-3 sm:mt-0 sm:w-auto ${isLoading ? \"bg-gray-400\" : \"bg-white\"}`,\n                            children: isLoading ? \"Loading...\" : \"Find\"\n                        }, void 0, false, {\n                            fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/VerseFinder.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 19\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/VerseFinder.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white\",\n                        children: outputText\n                    }, void 0, false, {\n                        fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/VerseFinder.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 3\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/VerseFinder.jsx\",\n                    lineNumber: 91,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/VerseFinder.jsx\",\n            lineNumber: 67,\n            columnNumber: 15\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/VerseFinder.jsx\",\n        lineNumber: 66,\n        columnNumber: 13\n    }, this);\n}\n_s(VerseFinder, \"v+bR7Jh+VvXjsAA7YD3TQmkFVZw=\");\n_c = VerseFinder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (VerseFinder);\nvar _c;\n$RefreshReg$(_c, \"VerseFinder\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1ZlcnNlRmluZGVyLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFFZ0M7QUFFaEMsU0FBU0M7O0lBQ0wsb0VBQW9FO0lBQ3BFLHlDQUF5QztJQUV6QyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0gsK0NBQVFBLENBQUMsS0FBTyx1QkFBdUI7SUFDekUsTUFBTSxDQUFDSSxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFDLEtBQUssd0JBQXdCO0lBQzFFLE1BQU0sQ0FBQ00sV0FBV0MsYUFBYSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUUzQyx5QkFBeUI7SUFDekIsTUFBTVEsZUFBZSxPQUFPQztRQUUxQkEsTUFBTUMsY0FBYyxJQUFJLHlDQUF5QztRQUNqRUgsYUFBYTtRQUNiLElBQUk7WUFDRixNQUFNSSxpQkFBaUIsTUFBTUMsTUFBTSw4Q0FBOEM7Z0JBQy9FQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGlCQUFpQixDQUFDLE9BQU8sRUFBRUMsU0FBUyxDQUFDO29CQUNyQyxnQkFBZ0I7Z0JBQ2xCO2dCQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQ25CQyxPQUFPO29CQUNQQyxVQUFVO3dCQUNSOzRCQUNFQyxNQUFNOzRCQUNOQyxTQUFTLDREQUE0RHBCO3dCQUN2RTtxQkFDRDtnQkFDSDtZQUNGO1lBRUksMkNBQTJDO1lBQ25ELElBQUksQ0FBQ1MsZUFBZVksRUFBRSxFQUFFO2dCQUN0QixNQUFNQyxZQUFZLE1BQU1iLGVBQWVjLElBQUk7Z0JBQzNDQyxRQUFRQyxLQUFLLENBQUMsMEJBQTBCSDtnQkFDeEMsTUFBTSxJQUFJSSxNQUFNLENBQUMsa0JBQWtCLEVBQUVKLFVBQVVHLEtBQUssSUFBSSxnQkFBZ0IsQ0FBQztZQUMzRTtZQUVBLE1BQU1FLGFBQWEsTUFBTWxCLGVBQWVjLElBQUk7WUFDNUMsSUFBSUsscUJBQXFCRCxXQUFXRSxPQUFPLElBQUlGLFdBQVdFLE9BQU8sQ0FBQyxFQUFFLElBQUlGLFdBQVdFLE9BQU8sQ0FBQyxFQUFFLENBQUNDLE9BQU8sR0FBR0gsV0FBV0UsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDVixPQUFPLENBQUNXLElBQUksS0FBSztZQUN2SjVCLGNBQWN5QjtRQUVoQixFQUFFLE9BQU9ILE9BQU87WUFDZEQsUUFBUUMsS0FBSyxDQUFDLHlDQUF5Q0E7WUFDdkR0QixjQUFjO1FBQ2hCLFNBQVU7WUFDUkUsYUFBYTtRQUNmO0lBSUU7SUFFQSwyQkFBMkI7SUFDM0IsTUFBTTJCLG9CQUFvQixDQUFDQztRQUN6QmhDLGFBQWFnQyxFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDN0I7SUFFQSxxQkFHUSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFLRCxXQUFVO29CQUErQkUsVUFBVWpDOztzQ0FDdkQsOERBQUM4Qjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNHO29DQUFNQyxTQUFRO29DQUFZSixXQUFVOzhDQUFVOzs7Ozs7OENBQy9DLDhEQUFDSztvQ0FDQ0MsTUFBSztvQ0FDTEMsTUFBSztvQ0FDTEMsSUFBRztvQ0FDSFIsV0FBVTtvQ0FDVlMsYUFBWTtvQ0FDWlgsT0FBT25DO29DQUNQK0MsVUFBVWY7Ozs7Ozs7Ozs7OztzQ0FJZCw4REFBQ2dCOzRCQUNqQkMsU0FBUzNDOzRCQUNUNEMsVUFBVTlDOzRCQUNWaUMsV0FBVyxDQUFDLDJRQUEyUSxFQUFFakMsWUFBWSxnQkFBZ0IsV0FBVyxDQUFDO3NDQUVoVUEsWUFBWSxlQUFlOzs7Ozs7Ozs7Ozs7OEJBSWQsOERBQUNnQztvQkFBSUMsV0FBVTs4QkFDN0IsNEVBQUNjO3dCQUFFZCxXQUFVO2tDQUFjbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXM0I7R0FsR09IO0tBQUFBO0FBb0dQLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1ZlcnNlRmluZGVyLmpzeD9lOGM5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5mdW5jdGlvbiBWZXJzZUZpbmRlcigpIHtcbiAgICAvLyBEZWNsYXJlIGEgc3RhdGUgdmFyaWFibGUgY2FsbGVkICdjb3VudCcgYW5kIGl0cyBzZXR0ZXIgJ3NldENvdW50J1xuICAgIC8vIGNvbnN0IFtjb3VudCwgc2V0Q291bnRdID0gdXNlU3RhdGUoMCk7XG4gIFxuICAgIGNvbnN0IFtpbnB1dFRleHQsIHNldElucHV0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7ICAgLy8gc3RhdGUgZm9yIGlucHV0IHRleHRcbiAgICBjb25zdCBbb3V0cHV0VGV4dCwgc2V0T3V0cHV0VGV4dF0gPSB1c2VTdGF0ZSgnJyk7IC8vIHN0YXRlIGZvciBvdXRwdXQgdGV4dFxuICAgIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIFxuICAgIC8vIEhhbmRsZSBmb3JtIHN1Ym1pc3Npb25cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZXZlbnQpPT4ge1xuXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBwcmV2ZW50IHBhZ2UgcmVsb2FkIG9uIGZvcm0gc3VibWlzc2lvblxuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VQYXN0b3IgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkub3BlbmFpLmNvbS92MS9jaGF0L2NvbXBsZXRpb25zJywge1xuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke2lucHV0S2V5fWAsIFxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgbW9kZWw6IFwiZ3B0LTMuNS10dXJib1wiLFxuICAgICAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJvbGU6IFwidXNlclwiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiUHJvdmlkZSB0aGUgQmlibGUgdmVyc2UgdGhhdCByZWxhdGVzIHRvIHRoZSBmb2xsb3dpbmc6IFwiICsgaW5wdXRUZXh0XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHJlc3BvbnNlIHdhcyBub3Qgc3VjY2Vzc2Z1bFxuICAgIGlmICghcmVzcG9uc2VQYXN0b3Iub2spIHtcbiAgICAgIGNvbnN0IGVycm9yRGF0YSA9IGF3YWl0IHJlc3BvbnNlUGFzdG9yLmpzb24oKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmcm9tIE9wZW5BSSBBUEk6XCIsIGVycm9yRGF0YSk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE9wZW5BSSBBUEkgRXJyb3I6ICR7ZXJyb3JEYXRhLmVycm9yIHx8ICdVbmtub3duIEVycm9yJ31gKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhUGFzdG9yID0gYXdhaXQgcmVzcG9uc2VQYXN0b3IuanNvbigpO1xuICAgIGxldCByZXNwb25zZVRleHRQYXN0b3IgPSBkYXRhUGFzdG9yLmNob2ljZXMgJiYgZGF0YVBhc3Rvci5jaG9pY2VzWzBdICYmIGRhdGFQYXN0b3IuY2hvaWNlc1swXS5tZXNzYWdlID8gZGF0YVBhc3Rvci5jaG9pY2VzWzBdLm1lc3NhZ2UuY29udGVudC50cmltKCkgOiBcIlwiO1xuICAgIHNldE91dHB1dFRleHQocmVzcG9uc2VUZXh0UGFzdG9yKTtcblxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJUaGVyZSB3YXMgYW4gZXJyb3IgZmV0Y2hpbmcgdGhlIGRhdGE6XCIsIGVycm9yKTtcbiAgICBzZXRPdXRwdXRUZXh0KFwiVGhlIHNlcnZpY2UgaXMgdW5mb3J0dW5hdGVseSBidXN5LlwiKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICB9XG5cblxuICAgICAgXG4gICAgfVxuICBcbiAgICAvLyBIYW5kbGUgaW5wdXQgdGV4dCBjaGFuZ2VcbiAgICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgICBzZXRJbnB1dFRleHQoZS50YXJnZXQudmFsdWUpO1xuICAgIH1cbiAgXG4gICAgcmV0dXJuIChcbiAgICAgIFxuICAgICAgICBcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtOFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTQgcHktNSBzbTpwLTZcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtdC01IHNtOmZsZXggc206aXRlbXMtY2VudGVyXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBzbTptYXgtdy14c1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRleHRJbnB1dFwiIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5UZXh0PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInRleHRJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdy1mdWxsIHJvdW5kZWQtbWQgYm9yZGVyLTAgcHgtMiBweS0xLjUgdGV4dC1ncmF5LTkwMCBzaGFkb3ctc20gcmluZy0xIHJpbmctaW5zZXQgcmluZy1ncmF5LTMwMCBwbGFjZWhvbGRlcjp0ZXh0LWdyYXktNDAwIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWluc2V0IGZvY3VzOnJpbmctcmVkLTYwMCBzbTp0ZXh0LXNtIHNtOmxlYWRpbmctNlwiXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJlLmcuIEFuZ2xlc1wiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgb25DbGljaz17aGFuZGxlU3VibWl0fSBcbiAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgY2xhc3NOYW1lPXtgbXQtMyBpbmxpbmUtZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgcHgtNSBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWJsYWNrIHNoYWRvdy1zbSBob3ZlcjpiZy1ncmF5LTIwMCBmb2N1cy12aXNpYmxlOm91dGxpbmUgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW9mZnNldC0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1yZWQtNjAwIHNtOm1sLTMgc206bXQtMCBzbTp3LWF1dG8gJHtpc0xvYWRpbmcgPyAnYmctZ3JheS00MDAnIDogJ2JnLXdoaXRlJ31gfVxuPlxuICB7aXNMb2FkaW5nID8gJ0xvYWRpbmcuLi4nIDogJ0ZpbmQnfVxuPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTVcIj5cbiAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPntvdXRwdXRUZXh0fTwvcD5cbjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICBcbiAgXG4gICAgICAgICAgXG4gICAgKVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBWZXJzZUZpbmRlcjtcblxuICAiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJWZXJzZUZpbmRlciIsImlucHV0VGV4dCIsInNldElucHV0VGV4dCIsIm91dHB1dFRleHQiLCJzZXRPdXRwdXRUZXh0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlUGFzdG9yIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiaW5wdXRLZXkiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm1vZGVsIiwibWVzc2FnZXMiLCJyb2xlIiwiY29udGVudCIsIm9rIiwiZXJyb3JEYXRhIiwianNvbiIsImNvbnNvbGUiLCJlcnJvciIsIkVycm9yIiwiZGF0YVBhc3RvciIsInJlc3BvbnNlVGV4dFBhc3RvciIsImNob2ljZXMiLCJtZXNzYWdlIiwidHJpbSIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwibmFtZSIsImlkIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/VerseFinder.jsx\n"));

/***/ })

});