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

/***/ "(app-pages-browser)/./src/components/BibleCom.jsx":
/*!*************************************!*\
  !*** ./src/components/BibleCom.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction BibleCom() {\n    _s();\n    // Declare a state variable called 'count' and its setter 'setCount'\n    // const [count, setCount] = useState(0);\n    const [inputText, setInputText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // state for input text\n    const [outputText, setOutputText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // state for output text\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Handle form submission\n    const handleSubmit = async (event)=>{\n        event.preventDefault(); // prevent page reload on form submission\n        setIsLoading(true);\n        try {\n            const responsePastor = await fetch(\"https://api.openai.com/v1/chat/completions\", {\n                method: \"POST\",\n                headers: {\n                    \"Authorization\": `Bearer ${process.env.REACT_APP_API_KEY}`,\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    model: \"gpt-3.5-turbo\",\n                    messages: [\n                        {\n                            role: \"user\",\n                            content: \"Provide the bible verse for: \" + inputText + \" and give a brief Christian commentary on the verse, your commentary should be three sentences or less \"\n                        }\n                    ]\n                })\n            });\n            // Check if the response was not successful\n            if (!responsePastor.ok) {\n                const errorData = await responsePastor.json();\n                console.error(\"Error from OpenAI API:\", errorData);\n                throw new Error(`OpenAI API Error: ${errorData.error || \"Unknown Error\"}`);\n            }\n            const dataPastor = await responsePastor.json();\n            let responseTextPastor = dataPastor.choices && dataPastor.choices[0] && dataPastor.choices[0].message ? dataPastor.choices[0].message.content.trim() : \"\";\n            setOutputText(responseTextPastor);\n        } catch (error) {\n            console.error(\"There was an error fetching the data:\", error);\n            setOutputText(\"The Pastor is unfortunately busy.\");\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    // Handle input text change\n    const handleInputChange = (e)=>{\n        setInputText(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center gap-x-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"px-4 py-5 sm:p-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"mt-5 sm:flex sm:items-center\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full sm:max-w-xs\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"textInput\",\n                                    className: \"sr-only\",\n                                    children: \"Text\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/BibleCom.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"text\",\n                                    id: \"textInput\",\n                                    className: \"block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6\",\n                                    placeholder: \"e.g. John 3:16\",\n                                    value: inputText,\n                                    onChange: handleInputChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/BibleCom.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/BibleCom.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 19\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: \"hello\"\n                        }, void 0, false, {\n                            fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/BibleCom.jsx\",\n                            lineNumber: 81,\n                            columnNumber: 19\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSubmit,\n                            disabled: isLoading,\n                            className: \"mt-3 inline-flex w-full items-center justify-center rounded-md bg-white px-5 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto\",\n                            children: isLoading ? \"Loading...\" : process.env.REACT_APP_API_KEY\n                        }, void 0, false, {\n                            fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/BibleCom.jsx\",\n                            lineNumber: 85,\n                            columnNumber: 19\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/BibleCom.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white\",\n                        children: outputText\n                    }, void 0, false, {\n                        fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/BibleCom.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 3\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/BibleCom.jsx\",\n                    lineNumber: 93,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/BibleCom.jsx\",\n            lineNumber: 67,\n            columnNumber: 15\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/BibleCom.jsx\",\n        lineNumber: 66,\n        columnNumber: 13\n    }, this);\n}\n_s(BibleCom, \"v+bR7Jh+VvXjsAA7YD3TQmkFVZw=\");\n_c = BibleCom;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BibleCom);\nvar _c;\n$RefreshReg$(_c, \"BibleCom\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0JpYmxlQ29tLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRWdDO0FBRWhDLFNBQVNDOztJQUNMLG9FQUFvRTtJQUNwRSx5Q0FBeUM7SUFFekMsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdILCtDQUFRQSxDQUFDLEtBQU8sdUJBQXVCO0lBQ3pFLE1BQU0sQ0FBQ0ksWUFBWUMsY0FBYyxHQUFHTCwrQ0FBUUEsQ0FBQyxLQUFLLHdCQUF3QjtJQUMxRSxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFFM0MseUJBQXlCO0lBQ3pCLE1BQU1RLGVBQWUsT0FBT0M7UUFFMUJBLE1BQU1DLGNBQWMsSUFBSSx5Q0FBeUM7UUFDakVILGFBQWE7UUFDYixJQUFJO1lBQ0YsTUFBTUksaUJBQWlCLE1BQU1DLE1BQU0sOENBQThDO2dCQUMvRUMsUUFBUTtnQkFDUkMsU0FBUztvQkFDUCxpQkFBaUIsQ0FBQyxPQUFPLEVBQUVDLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQztvQkFDMUQsZ0JBQWdCO2dCQUNsQjtnQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO29CQUNuQkMsT0FBTztvQkFDUEMsVUFBVTt3QkFDUjs0QkFDRUMsTUFBTTs0QkFDTkMsU0FBUyxrQ0FBa0N0QixZQUFZO3dCQUN6RDtxQkFDRDtnQkFDSDtZQUNGO1lBRUksMkNBQTJDO1lBQ25ELElBQUksQ0FBQ1MsZUFBZWMsRUFBRSxFQUFFO2dCQUN0QixNQUFNQyxZQUFZLE1BQU1mLGVBQWVnQixJQUFJO2dCQUMzQ0MsUUFBUUMsS0FBSyxDQUFDLDBCQUEwQkg7Z0JBQ3hDLE1BQU0sSUFBSUksTUFBTSxDQUFDLGtCQUFrQixFQUFFSixVQUFVRyxLQUFLLElBQUksZ0JBQWdCLENBQUM7WUFDM0U7WUFFQSxNQUFNRSxhQUFhLE1BQU1wQixlQUFlZ0IsSUFBSTtZQUM1QyxJQUFJSyxxQkFBcUJELFdBQVdFLE9BQU8sSUFBSUYsV0FBV0UsT0FBTyxDQUFDLEVBQUUsSUFBSUYsV0FBV0UsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsT0FBTyxHQUFHSCxXQUFXRSxPQUFPLENBQUMsRUFBRSxDQUFDQyxPQUFPLENBQUNWLE9BQU8sQ0FBQ1csSUFBSSxLQUFLO1lBQ3ZKOUIsY0FBYzJCO1FBRWhCLEVBQUUsT0FBT0gsT0FBTztZQUNkRCxRQUFRQyxLQUFLLENBQUMseUNBQXlDQTtZQUN2RHhCLGNBQWM7UUFDaEIsU0FBVTtZQUNSRSxhQUFhO1FBQ2Y7SUFJRTtJQUVBLDJCQUEyQjtJQUMzQixNQUFNNkIsb0JBQW9CLENBQUNDO1FBQ3pCbEMsYUFBYWtDLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztJQUM3QjtJQUVBLHFCQUdRLDhEQUFDQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUtELFdBQVU7b0JBQStCRSxVQUFVbkM7O3NDQUN2RCw4REFBQ2dDOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0c7b0NBQU1DLFNBQVE7b0NBQVlKLFdBQVU7OENBQVU7Ozs7Ozs4Q0FDL0MsOERBQUNLO29DQUNDQyxNQUFLO29DQUNMQyxNQUFLO29DQUNMQyxJQUFHO29DQUNIUixXQUFVO29DQUNWUyxhQUFZO29DQUNaWCxPQUFPckM7b0NBQ1BpRCxVQUFVZjs7Ozs7Ozs7Ozs7O3NDQUdkLDhEQUFDZ0I7c0NBQUU7Ozs7OztzQ0FJSCw4REFBQ0M7NEJBQ2pCQyxTQUFTOUM7NEJBQ1QrQyxVQUFVakQ7NEJBQ1ZtQyxXQUFVO3NDQUNUbkMsWUFBWSxlQUFlUyxPQUFPQSxDQUFDQyxHQUFHLENBQUNDLGlCQUFpQjs7Ozs7Ozs7Ozs7OzhCQUkzQyw4REFBQ3VCO29CQUFJQyxXQUFVOzhCQUM3Qiw0RUFBQ1c7d0JBQUVYLFdBQVU7a0NBQWNyQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVczQjtHQXBHT0g7S0FBQUE7QUFzR1AsK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQmlibGVDb20uanN4P2VmMzMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIEJpYmxlQ29tKCkge1xuICAgIC8vIERlY2xhcmUgYSBzdGF0ZSB2YXJpYWJsZSBjYWxsZWQgJ2NvdW50JyBhbmQgaXRzIHNldHRlciAnc2V0Q291bnQnXG4gICAgLy8gY29uc3QgW2NvdW50LCBzZXRDb3VudF0gPSB1c2VTdGF0ZSgwKTtcbiAgXG4gICAgY29uc3QgW2lucHV0VGV4dCwgc2V0SW5wdXRUZXh0XSA9IHVzZVN0YXRlKCcnKTsgICAvLyBzdGF0ZSBmb3IgaW5wdXQgdGV4dFxuICAgIGNvbnN0IFtvdXRwdXRUZXh0LCBzZXRPdXRwdXRUZXh0XSA9IHVzZVN0YXRlKCcnKTsgLy8gc3RhdGUgZm9yIG91dHB1dCB0ZXh0XG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgXG4gICAgLy8gSGFuZGxlIGZvcm0gc3VibWlzc2lvblxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCk9PiB7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vIHByZXZlbnQgcGFnZSByZWxvYWQgb24gZm9ybSBzdWJtaXNzaW9uXG4gICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZVBhc3RvciA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS5vcGVuYWkuY29tL3YxL2NoYXQvY29tcGxldGlvbnMnLCB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7cHJvY2Vzcy5lbnYuUkVBQ1RfQVBQX0FQSV9LRVl9YCwgXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgfSxcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICBtb2RlbDogXCJncHQtMy41LXR1cmJvXCIsXG4gICAgICAgICAgICBtZXNzYWdlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcm9sZTogXCJ1c2VyXCIsXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJQcm92aWRlIHRoZSBiaWJsZSB2ZXJzZSBmb3I6IFwiICsgaW5wdXRUZXh0ICsgXCIgYW5kIGdpdmUgYSBicmllZiBDaHJpc3RpYW4gY29tbWVudGFyeSBvbiB0aGUgdmVyc2UsIHlvdXIgY29tbWVudGFyeSBzaG91bGQgYmUgdGhyZWUgc2VudGVuY2VzIG9yIGxlc3MgXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgcmVzcG9uc2Ugd2FzIG5vdCBzdWNjZXNzZnVsXG4gICAgaWYgKCFyZXNwb25zZVBhc3Rvci5vaykge1xuICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2VQYXN0b3IuanNvbigpO1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZyb20gT3BlbkFJIEFQSTpcIiwgZXJyb3JEYXRhKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT3BlbkFJIEFQSSBFcnJvcjogJHtlcnJvckRhdGEuZXJyb3IgfHwgJ1Vua25vd24gRXJyb3InfWApO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGFQYXN0b3IgPSBhd2FpdCByZXNwb25zZVBhc3Rvci5qc29uKCk7XG4gICAgbGV0IHJlc3BvbnNlVGV4dFBhc3RvciA9IGRhdGFQYXN0b3IuY2hvaWNlcyAmJiBkYXRhUGFzdG9yLmNob2ljZXNbMF0gJiYgZGF0YVBhc3Rvci5jaG9pY2VzWzBdLm1lc3NhZ2UgPyBkYXRhUGFzdG9yLmNob2ljZXNbMF0ubWVzc2FnZS5jb250ZW50LnRyaW0oKSA6IFwiXCI7XG4gICAgc2V0T3V0cHV0VGV4dChyZXNwb25zZVRleHRQYXN0b3IpO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlRoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgZGF0YTpcIiwgZXJyb3IpO1xuICAgIHNldE91dHB1dFRleHQoXCJUaGUgUGFzdG9yIGlzIHVuZm9ydHVuYXRlbHkgYnVzeS5cIik7XG4gIH0gZmluYWxseSB7XG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgfVxuXG5cbiAgICAgIFxuICAgIH1cbiAgXG4gICAgLy8gSGFuZGxlIGlucHV0IHRleHQgY2hhbmdlXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgICAgc2V0SW5wdXRUZXh0KGUudGFyZ2V0LnZhbHVlKTtcbiAgICB9XG4gIFxuICAgIHJldHVybiAoXG4gICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC14LThcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJweC00IHB5LTUgc206cC02XCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibXQtNSBzbTpmbGV4IHNtOml0ZW1zLWNlbnRlclwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgc206bWF4LXcteHNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0ZXh0SW5wdXRcIiBjbGFzc05hbWU9XCJzci1vbmx5XCI+VGV4dDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ0ZXh0SW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHctZnVsbCByb3VuZGVkLW1kIGJvcmRlci0wIHB4LTIgcHktMS41IHRleHQtZ3JheS05MDAgc2hhZG93LXNtIHJpbmctMSByaW5nLWluc2V0IHJpbmctZ3JheS0zMDAgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTQwMCBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1pbnNldCBmb2N1czpyaW5nLWluZGlnby02MDAgc206dGV4dC1zbSBzbTpsZWFkaW5nLTZcIlxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZS5nLiBKb2huIDM6MTZcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgaGVsbG9cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgb25DbGljaz17aGFuZGxlU3VibWl0fSBcbiAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgY2xhc3NOYW1lPVwibXQtMyBpbmxpbmUtZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYmctd2hpdGUgcHgtNSBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWJsYWNrIHNoYWRvdy1zbSBob3ZlcjpiZy1ncmF5LTIwMCBmb2N1cy12aXNpYmxlOm91dGxpbmUgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW9mZnNldC0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1pbmRpZ28tNjAwIHNtOm1sLTMgc206bXQtMCBzbTp3LWF1dG9cIj5cbiAge2lzTG9hZGluZyA/ICdMb2FkaW5nLi4uJyA6IHByb2Nlc3MuZW52LlJFQUNUX0FQUF9BUElfS0VZIH1cbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XG4gIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGVcIj57b3V0cHV0VGV4dH08L3A+XG48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgXG4gIFxuICAgICAgICAgIFxuICAgIClcbiAgfVxuICBcbiAgZXhwb3J0IGRlZmF1bHQgQmlibGVDb207XG5cbiAgIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQmlibGVDb20iLCJpbnB1dFRleHQiLCJzZXRJbnB1dFRleHQiLCJvdXRwdXRUZXh0Iiwic2V0T3V0cHV0VGV4dCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJyZXNwb25zZVBhc3RvciIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInByb2Nlc3MiLCJlbnYiLCJSRUFDVF9BUFBfQVBJX0tFWSIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwibW9kZWwiLCJtZXNzYWdlcyIsInJvbGUiLCJjb250ZW50Iiwib2siLCJlcnJvckRhdGEiLCJqc29uIiwiY29uc29sZSIsImVycm9yIiwiRXJyb3IiLCJkYXRhUGFzdG9yIiwicmVzcG9uc2VUZXh0UGFzdG9yIiwiY2hvaWNlcyIsIm1lc3NhZ2UiLCJ0cmltIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJuYW1lIiwiaWQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwicCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/BibleCom.jsx\n"));

/***/ })

});