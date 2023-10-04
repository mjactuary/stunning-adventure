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

/***/ "(app-pages-browser)/./src/components/PastorChat.jsx":
/*!***************************************!*\
  !*** ./src/components/PastorChat.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction PastorChat(param) {\n    let { inputKey } = param;\n    _s();\n    // Declare a state variable called 'count' and its setter 'setCount'\n    // const [count, setCount] = useState(0);\n    const [inputText, setInputText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // state for input text\n    const [outputText, setOutputText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"); // state for output text\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    // Handle form submission\n    const handleSubmit = async (event)=>{\n        event.preventDefault(); // prevent page reload on form submission\n        setIsLoading(true);\n        try {\n            const responsePastor = await fetch(\"https://api.openai.com/v1/chat/completions\", {\n                method: \"POST\",\n                headers: {\n                    \"Authorization\": `Bearer ${inputKey}`,\n                    \"Content-Type\": \"application/json\"\n                },\n                body: JSON.stringify({\n                    model: \"gpt-3.5-turbo\",\n                    messages: [\n                        {\n                            role: \"user\",\n                            content: \"Reply to the following as if you were a wise and loving Christian Pastor: \" + inputText\n                        }\n                    ]\n                })\n            });\n            // Check if the response was not successful\n            if (!responsePastor.ok) {\n                const errorData = await responsePastor.json();\n                console.error(\"Error from OpenAI API:\", errorData);\n                throw new Error(`OpenAI API Error: ${errorData.error || \"Unknown Error\"}`);\n            }\n            const dataPastor = await responsePastor.json();\n            let responseTextPastor = dataPastor.choices && dataPastor.choices[0] && dataPastor.choices[0].message ? dataPastor.choices[0].message.content.trim() : \"\";\n            setOutputText(responseTextPastor);\n        } catch (error) {\n            console.error(\"There was an error fetching the data:\", error);\n            setOutputText(\"The service is unfortunately busy.\");\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    // Handle input text change\n    const handleInputChange = (e)=>{\n        setInputText(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex items-center gap-x-8\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"px-4 py-5 sm:p-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"mt-5 sm:flex sm:items-center\",\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-full sm:max-w-xs\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    htmlFor: \"textInput\",\n                                    className: \"sr-only\",\n                                    children: \"Text\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/PastorChat.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    name: \"text\",\n                                    id: \"textInput\",\n                                    className: \"block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm sm:leading-6\",\n                                    placeholder: \"What is on your mind?\",\n                                    value: inputText,\n                                    onChange: handleInputChange\n                                }, void 0, false, {\n                                    fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/PastorChat.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/PastorChat.jsx\",\n                            lineNumber: 69,\n                            columnNumber: 19\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSubmit,\n                            disabled: isLoading,\n                            className: `mt-3 inline-flex w-full items-center justify-center rounded-md px-5 py-2 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 sm:ml-3 sm:mt-0 sm:w-auto ${isLoading ? \"bg-gray-400\" : \"bg-white\"}`,\n                            children: isLoading ? \"Loading...\" : \"Chat\"\n                        }, void 0, false, {\n                            fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/PastorChat.jsx\",\n                            lineNumber: 82,\n                            columnNumber: 19\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/PastorChat.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-5\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-white\",\n                        children: outputText\n                    }, void 0, false, {\n                        fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/PastorChat.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 3\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/PastorChat.jsx\",\n                    lineNumber: 91,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/PastorChat.jsx\",\n            lineNumber: 67,\n            columnNumber: 15\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/michaeljordan/bible-intelligence-four/src/components/PastorChat.jsx\",\n        lineNumber: 66,\n        columnNumber: 13\n    }, this);\n}\n_s(PastorChat, \"v+bR7Jh+VvXjsAA7YD3TQmkFVZw=\");\n_c = PastorChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PastorChat);\nvar _c;\n$RefreshReg$(_c, \"PastorChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Bhc3RvckNoYXQuanN4IiwibWFwcGluZ3MiOiI7Ozs7OztBQUVnQztBQUVoQyxTQUFTQyxXQUFXLEtBQVk7UUFBWixFQUFFQyxRQUFRLEVBQUUsR0FBWjs7SUFDaEIsb0VBQW9FO0lBQ3BFLHlDQUF5QztJQUV6QyxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0osK0NBQVFBLENBQUMsS0FBTyx1QkFBdUI7SUFDekUsTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDLEtBQUssd0JBQXdCO0lBQzFFLE1BQU0sQ0FBQ08sV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUUzQyx5QkFBeUI7SUFDekIsTUFBTVMsZUFBZSxPQUFPQztRQUUxQkEsTUFBTUMsY0FBYyxJQUFJLHlDQUF5QztRQUNqRUgsYUFBYTtRQUNiLElBQUk7WUFDRixNQUFNSSxpQkFBaUIsTUFBTUMsTUFBTSw4Q0FBOEM7Z0JBQy9FQyxRQUFRO2dCQUNSQyxTQUFTO29CQUNQLGlCQUFpQixDQUFDLE9BQU8sRUFBRWIsU0FBUyxDQUFDO29CQUNyQyxnQkFBZ0I7Z0JBQ2xCO2dCQUNBYyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7b0JBQ25CQyxPQUFPO29CQUNQQyxVQUFVO3dCQUNSOzRCQUNFQyxNQUFNOzRCQUNOQyxTQUFTLCtFQUErRW5CO3dCQUMxRjtxQkFDRDtnQkFDSDtZQUNGO1lBRUksMkNBQTJDO1lBQ25ELElBQUksQ0FBQ1MsZUFBZVcsRUFBRSxFQUFFO2dCQUN0QixNQUFNQyxZQUFZLE1BQU1aLGVBQWVhLElBQUk7Z0JBQzNDQyxRQUFRQyxLQUFLLENBQUMsMEJBQTBCSDtnQkFDeEMsTUFBTSxJQUFJSSxNQUFNLENBQUMsa0JBQWtCLEVBQUVKLFVBQVVHLEtBQUssSUFBSSxnQkFBZ0IsQ0FBQztZQUMzRTtZQUVBLE1BQU1FLGFBQWEsTUFBTWpCLGVBQWVhLElBQUk7WUFDNUMsSUFBSUsscUJBQXFCRCxXQUFXRSxPQUFPLElBQUlGLFdBQVdFLE9BQU8sQ0FBQyxFQUFFLElBQUlGLFdBQVdFLE9BQU8sQ0FBQyxFQUFFLENBQUNDLE9BQU8sR0FBR0gsV0FBV0UsT0FBTyxDQUFDLEVBQUUsQ0FBQ0MsT0FBTyxDQUFDVixPQUFPLENBQUNXLElBQUksS0FBSztZQUN2SjNCLGNBQWN3QjtRQUVoQixFQUFFLE9BQU9ILE9BQU87WUFDZEQsUUFBUUMsS0FBSyxDQUFDLHlDQUF5Q0E7WUFDdkRyQixjQUFjO1FBQ2hCLFNBQVU7WUFDUkUsYUFBYTtRQUNmO0lBSUU7SUFFQSwyQkFBMkI7SUFDM0IsTUFBTTBCLG9CQUFvQixDQUFDQztRQUN6Qi9CLGFBQWErQixFQUFFQyxNQUFNLENBQUNDLEtBQUs7SUFDN0I7SUFFQSxxQkFHUSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTs7OEJBQ2IsOERBQUNDO29CQUFLRCxXQUFVO29CQUErQkUsVUFBVWhDOztzQ0FDdkQsOERBQUM2Qjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNHO29DQUFNQyxTQUFRO29DQUFZSixXQUFVOzhDQUFVOzs7Ozs7OENBQy9DLDhEQUFDSztvQ0FDQ0MsTUFBSztvQ0FDTEMsTUFBSztvQ0FDTEMsSUFBRztvQ0FDSFIsV0FBVTtvQ0FDVlMsYUFBWTtvQ0FDWlgsT0FBT2xDO29DQUNQOEMsVUFBVWY7Ozs7Ozs7Ozs7OztzQ0FJZCw4REFBQ2dCOzRCQUNqQkMsU0FBUzFDOzRCQUNUMkMsVUFBVTdDOzRCQUNWZ0MsV0FBVyxDQUFDLDJRQUEyUSxFQUFFaEMsWUFBWSxnQkFBZ0IsV0FBVyxDQUFDO3NDQUVoVUEsWUFBWSxlQUFlOzs7Ozs7Ozs7Ozs7OEJBSWQsOERBQUMrQjtvQkFBSUMsV0FBVTs4QkFDN0IsNEVBQUNjO3dCQUFFZCxXQUFVO2tDQUFjbEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXM0I7R0FsR09KO0tBQUFBO0FBb0dQLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Bhc3RvckNoYXQuanN4Pzc1Y2UiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbmZ1bmN0aW9uIFBhc3RvckNoYXQoeyBpbnB1dEtleSB9KSB7XG4gICAgLy8gRGVjbGFyZSBhIHN0YXRlIHZhcmlhYmxlIGNhbGxlZCAnY291bnQnIGFuZCBpdHMgc2V0dGVyICdzZXRDb3VudCdcbiAgICAvLyBjb25zdCBbY291bnQsIHNldENvdW50XSA9IHVzZVN0YXRlKDApO1xuICBcbiAgICBjb25zdCBbaW5wdXRUZXh0LCBzZXRJbnB1dFRleHRdID0gdXNlU3RhdGUoJycpOyAgIC8vIHN0YXRlIGZvciBpbnB1dCB0ZXh0XG4gICAgY29uc3QgW291dHB1dFRleHQsIHNldE91dHB1dFRleHRdID0gdXNlU3RhdGUoJycpOyAvLyBzdGF0ZSBmb3Igb3V0cHV0IHRleHRcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBcbiAgICAvLyBIYW5kbGUgZm9ybSBzdWJtaXNzaW9uXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KT0+IHtcblxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsgLy8gcHJldmVudCBwYWdlIHJlbG9hZCBvbiBmb3JtIHN1Ym1pc3Npb25cbiAgICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlUGFzdG9yID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm9wZW5haS5jb20vdjEvY2hhdC9jb21wbGV0aW9ucycsIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQXV0aG9yaXphdGlvbic6IGBCZWFyZXIgJHtpbnB1dEtleX1gLCBcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9LFxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIG1vZGVsOiBcImdwdC0zLjUtdHVyYm9cIixcbiAgICAgICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByb2xlOiBcInVzZXJcIixcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlJlcGx5IHRvIHRoZSBmb2xsb3dpbmcgYXMgaWYgeW91IHdlcmUgYSB3aXNlIGFuZCBsb3ZpbmcgQ2hyaXN0aWFuIFBhc3RvcjogXCIgKyBpbnB1dFRleHRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgcmVzcG9uc2Ugd2FzIG5vdCBzdWNjZXNzZnVsXG4gICAgaWYgKCFyZXNwb25zZVBhc3Rvci5vaykge1xuICAgICAgY29uc3QgZXJyb3JEYXRhID0gYXdhaXQgcmVzcG9uc2VQYXN0b3IuanNvbigpO1xuICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZyb20gT3BlbkFJIEFQSTpcIiwgZXJyb3JEYXRhKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgT3BlbkFJIEFQSSBFcnJvcjogJHtlcnJvckRhdGEuZXJyb3IgfHwgJ1Vua25vd24gRXJyb3InfWApO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGFQYXN0b3IgPSBhd2FpdCByZXNwb25zZVBhc3Rvci5qc29uKCk7XG4gICAgbGV0IHJlc3BvbnNlVGV4dFBhc3RvciA9IGRhdGFQYXN0b3IuY2hvaWNlcyAmJiBkYXRhUGFzdG9yLmNob2ljZXNbMF0gJiYgZGF0YVBhc3Rvci5jaG9pY2VzWzBdLm1lc3NhZ2UgPyBkYXRhUGFzdG9yLmNob2ljZXNbMF0ubWVzc2FnZS5jb250ZW50LnRyaW0oKSA6IFwiXCI7XG4gICAgc2V0T3V0cHV0VGV4dChyZXNwb25zZVRleHRQYXN0b3IpO1xuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIlRoZXJlIHdhcyBhbiBlcnJvciBmZXRjaGluZyB0aGUgZGF0YTpcIiwgZXJyb3IpO1xuICAgIHNldE91dHB1dFRleHQoXCJUaGUgc2VydmljZSBpcyB1bmZvcnR1bmF0ZWx5IGJ1c3kuXCIpO1xuICB9IGZpbmFsbHkge1xuICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIH1cblxuXG4gICAgICBcbiAgICB9XG4gIFxuICAgIC8vIEhhbmRsZSBpbnB1dCB0ZXh0IGNoYW5nZVxuICAgIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcbiAgICAgIHNldElucHV0VGV4dChlLnRhcmdldC52YWx1ZSk7XG4gICAgfVxuICBcbiAgICByZXR1cm4gKFxuICAgICAgXG4gICAgICAgIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAteC04XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHgtNCBweS01IHNtOnAtNlwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cIm10LTUgc206ZmxleCBzbTppdGVtcy1jZW50ZXJcIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHNtOm1heC13LXhzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGV4dElucHV0XCIgY2xhc3NOYW1lPVwic3Itb25seVwiPlRleHQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwidGV4dElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB3LWZ1bGwgcm91bmRlZC1tZCBib3JkZXItMCBweC0yIHB5LTEuNSB0ZXh0LWdyYXktOTAwIHNoYWRvdy1zbSByaW5nLTEgcmluZy1pbnNldCByaW5nLWdyYXktMzAwIHBsYWNlaG9sZGVyOnRleHQtZ3JheS00MDAgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctaW5zZXQgZm9jdXM6cmluZy1yZWQtNjAwIHNtOnRleHQtc20gc206bGVhZGluZy02XCJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQgaXMgb24geW91ciBtaW5kP1wiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2lucHV0VGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBcbiAgb25DbGljaz17aGFuZGxlU3VibWl0fSBcbiAgZGlzYWJsZWQ9e2lzTG9hZGluZ31cbiAgY2xhc3NOYW1lPXtgbXQtMyBpbmxpbmUtZmxleCB3LWZ1bGwgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgcHgtNSBweS0yIHRleHQtc20gZm9udC1zZW1pYm9sZCB0ZXh0LWJsYWNrIHNoYWRvdy1zbSBob3ZlcjpiZy1ncmF5LTIwMCBmb2N1cy12aXNpYmxlOm91dGxpbmUgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW9mZnNldC0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1yZWQtNjAwIHNtOm1sLTMgc206bXQtMCBzbTp3LWF1dG8gJHtpc0xvYWRpbmcgPyAnYmctZ3JheS00MDAnIDogJ2JnLXdoaXRlJ31gfVxuPlxuICB7aXNMb2FkaW5nID8gJ0xvYWRpbmcuLi4nIDogJ0NoYXQnfVxuPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTVcIj5cbiAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiPntvdXRwdXRUZXh0fTwvcD5cbjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICBcbiAgXG4gICAgICAgICAgXG4gICAgKVxuICB9XG4gIFxuICBleHBvcnQgZGVmYXVsdCBQYXN0b3JDaGF0O1xuXG4gICJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlBhc3RvckNoYXQiLCJpbnB1dEtleSIsImlucHV0VGV4dCIsInNldElucHV0VGV4dCIsIm91dHB1dFRleHQiLCJzZXRPdXRwdXRUZXh0IiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlUGFzdG9yIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtb2RlbCIsIm1lc3NhZ2VzIiwicm9sZSIsImNvbnRlbnQiLCJvayIsImVycm9yRGF0YSIsImpzb24iLCJjb25zb2xlIiwiZXJyb3IiLCJFcnJvciIsImRhdGFQYXN0b3IiLCJyZXNwb25zZVRleHRQYXN0b3IiLCJjaG9pY2VzIiwibWVzc2FnZSIsInRyaW0iLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsIm5hbWUiLCJpZCIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/PastorChat.jsx\n"));

/***/ })

});