"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("src_components_Spirograph_tsx",{

/***/ "./src/components/Spirograph.tsx":
/*!***************************************!*\
  !*** ./src/components/Spirograph.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ P5Sketch; }\n/* harmony export */ });\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/bx/code/js/P5-nextjs-template/src/components/Spirograph.tsx\";\n\n\n\nvar Sketch = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ \"node_modules_react-p5_build_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-p5 */ \"./node_modules/react-p5/build/index.js\", 23));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    modules: [\"../components/Spirograph.tsx -> \" + \"react-p5\"]\n  }\n}); //import CreateLoop from \"p5.createloop\";\n\n_c2 = Sketch;\nvar CreateLoop = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(_c3 = function _c3() {\n  return __webpack_require__.e(/*! import() */ \"node_modules_p5_createloop_src_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! p5.createloop */ \"./node_modules/p5.createloop/src/index.js\", 23));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    modules: [\"../components/Spirograph.tsx -> \" + \"p5.createloop\"]\n  }\n}); // ----- Global Variables ----- //\n\n_c4 = CreateLoop;\nvar Fr = 60; // FrameRate\n\nvar w;\nvar h;\nvar sassyFont; // ----- Algorithm Variables ----- //\n\nvar NUMSINES = 10; // how many of these things can we do at once?\n\nvar sines = new Array(NUMSINES); // an array to hold all the current angles\n\nvar rad; // an initial radius value for the central sine\n\nvar i; // a counter variable\n// play with these to get a sense of what's going on:\n\nvar fund = 0.005; // the speed of the central sine\n\nvar ratio = 1; // what multiplier for speed is each additional sine?\n\nvar alpha = 75; // how opaque is the tracing system\n\nvar trace = true; // are we tracing?\n\nvar backgroundColor = 40; // Defining the Sketch\n\nfunction P5Sketch(props) {\n  // Set up the Canvas and set the framerate. Also load images and text.\n  var setup = function setup(p5, ml5) {\n    // Creating the canvas with initial values of browser width and height.\n    w = p5.windowWidth;\n    h = p5.windowHeight;\n    p5.createCanvas(w, h, p5.WEBGL);\n    p5.frameRate(Fr);\n    sassyFont = p5.loadFont(\"./SassyFrass-Regular.ttf\");\n    rad = h / 4; // compute radius for central circle\n\n    p5.background(backgroundColor); // clear the screen\n\n    for (var _i = 0; _i < sines.length; _i++) {\n      sines[_i] = Math.PI; // start EVERYBODY facing NORTH\n    }\n  }; // Redraw the canvas continuously at the framerate specified above.\n\n\n  var draw = function draw(p5) {\n    w = p5.windowWidth;\n    h = p5.windowHeight;\n    p5.resizeCanvas(w, h);\n    p5.translate(-w / 2, -h / 2); // Move from WebGL centered coordinates to standard X/Y\n    // Add text\n\n    p5.textFont(sassyFont);\n    p5.strokeWeight(1);\n    p5.fill(\"rgba(255, 255, 255, 0.1)\");\n    p5.textSize(20);\n    p5.text(\"Bx\", 10, 30);\n\n    if (!trace) {\n      p5.background(backgroundColor); // clear screen if showing geometry\n\n      p5.stroke(255); // black pen\n\n      p5.noFill(); // don't fill\n    } // MAIN ACTION\n\n\n    p5.push(); // start a transformation matrix\n\n    p5.translate(w / 2, h / 2); // move to middle of screen\n\n    for (var _i2 = 0; _i2 < sines.length; _i2++) {\n      var erad = 0; // radius for small \"point\" within circle... this is the 'pen' when tracing\n      // setup for tracing\n\n      if (trace) {\n        var colorScaling = p5[\"float\"](_i2) / sines.length;\n        p5.stroke(255 * colorScaling, alpha); // blue\n\n        console.log(\"Blue from 0-255: \", p5[\"float\"](_i2) / sines.length);\n        p5.fill(255, 255, 255, alpha / 2); // white\n\n        erad = 5.0 * (1.0 - p5[\"float\"](_i2) / sines.length); // pen width will be related to which sine\n      }\n\n      var radius = rad / (_i2 + 1); // radius for circle itself\n\n      p5.rotate(sines[_i2]); // rotate circle\n\n      if (!trace) p5.ellipse(0, 0, radius * 2, radius * 2); // if we're simulating, draw the sine\n\n      p5.push(); // go up one level\n\n      p5.translate(0, radius); // move to sine edge\n\n      if (!trace) p5.ellipse(0, 0, 5, 5); // draw a little circle\n\n      if (trace) p5.ellipse(0, 0, erad, erad); // draw with erad if tracing\n\n      p5.pop(); // go down one level\n\n      p5.translate(0, radius); // move into position for next sine\n\n      sines[_i2] = (sines[_i2] + (fund + fund * _i2 * ratio)) % (2 * Math.PI); // update angle based on fundamental\n    }\n\n    p5.pop(); // pop down final transformation\n  }; // Render P5 Sketch\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Sketch, {\n    setup: setup,\n    draw: draw\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 96,\n    columnNumber: 10\n  }, this);\n}\n_c5 = P5Sketch;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Sketch$dynamic\");\n$RefreshReg$(_c2, \"Sketch\");\n$RefreshReg$(_c3, \"CreateLoop$dynamic\");\n$RefreshReg$(_c4, \"CreateLoop\");\n$RefreshReg$(_c5, \"P5Sketch\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YTtFQUE1QjtJQUFBO0lBQUE7SUFBQTtFQUFBLFFBQVA7QUFDRDtNQXRFdUJmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwaXJvZ3JhcGgudHN4P2Y2MTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gXCJyZWFjdFwiO1xuY29uc3QgU2tldGNoID0gZHluYW1pYyhpbXBvcnQoXCJyZWFjdC1wNVwiKSwgeyBzc3I6IGZhbHNlIH0pO1xuLy9pbXBvcnQgQ3JlYXRlTG9vcCBmcm9tIFwicDUuY3JlYXRlbG9vcFwiO1xuY29uc3QgQ3JlYXRlTG9vcCA9IGR5bmFtaWMoaW1wb3J0KFwicDUuY3JlYXRlbG9vcFwiKSwgeyBzc3I6IGZhbHNlIH0pO1xuXG4vLyAtLS0tLSBHbG9iYWwgVmFyaWFibGVzIC0tLS0tIC8vXG5jb25zdCBGcjogbnVtYmVyID0gNjA7IC8vIEZyYW1lUmF0ZVxubGV0IHc6IG51bWJlcjtcbmxldCBoOiBudW1iZXI7XG5sZXQgc2Fzc3lGb250OiBhbnk7XG5cbi8vIC0tLS0tIEFsZ29yaXRobSBWYXJpYWJsZXMgLS0tLS0gLy9cbmxldCBOVU1TSU5FUyA9IDEwOyAvLyBob3cgbWFueSBvZiB0aGVzZSB0aGluZ3MgY2FuIHdlIGRvIGF0IG9uY2U/XG5sZXQgc2luZXMgPSBuZXcgQXJyYXkoTlVNU0lORVMpOyAvLyBhbiBhcnJheSB0byBob2xkIGFsbCB0aGUgY3VycmVudCBhbmdsZXNcbmxldCByYWQ6IGFueTsgLy8gYW4gaW5pdGlhbCByYWRpdXMgdmFsdWUgZm9yIHRoZSBjZW50cmFsIHNpbmVcbmxldCBpOyAvLyBhIGNvdW50ZXIgdmFyaWFibGVcblxuLy8gcGxheSB3aXRoIHRoZXNlIHRvIGdldCBhIHNlbnNlIG9mIHdoYXQncyBnb2luZyBvbjpcbmxldCBmdW5kID0gMC4wMDU7IC8vIHRoZSBzcGVlZCBvZiB0aGUgY2VudHJhbCBzaW5lXG5sZXQgcmF0aW8gPSAxOyAvLyB3aGF0IG11bHRpcGxpZXIgZm9yIHNwZWVkIGlzIGVhY2ggYWRkaXRpb25hbCBzaW5lP1xubGV0IGFscGhhID0gNzU7IC8vIGhvdyBvcGFxdWUgaXMgdGhlIHRyYWNpbmcgc3lzdGVtXG5sZXQgdHJhY2UgPSB0cnVlOyAvLyBhcmUgd2UgdHJhY2luZz9cbmxldCBiYWNrZ3JvdW5kQ29sb3IgPSA0MDtcblxuLy8gRGVmaW5pbmcgdGhlIFNrZXRjaFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUDVTa2V0Y2gocHJvcHM6IGFueSkge1xuICAvLyBTZXQgdXAgdGhlIENhbnZhcyBhbmQgc2V0IHRoZSBmcmFtZXJhdGUuIEFsc28gbG9hZCBpbWFnZXMgYW5kIHRleHQuXG4gIGNvbnN0IHNldHVwID0gKHA1OiBhbnksIG1sNTogYW55KSA9PiB7XG4gICAgLy8gQ3JlYXRpbmcgdGhlIGNhbnZhcyB3aXRoIGluaXRpYWwgdmFsdWVzIG9mIGJyb3dzZXIgd2lkdGggYW5kIGhlaWdodC5cbiAgICB3ID0gcDUud2luZG93V2lkdGg7XG4gICAgaCA9IHA1LndpbmRvd0hlaWdodDtcbiAgICBwNS5jcmVhdGVDYW52YXModywgaCwgcDUuV0VCR0wpO1xuXG4gICAgcDUuZnJhbWVSYXRlKEZyKTtcbiAgICBzYXNzeUZvbnQgPSBwNS5sb2FkRm9udChcIi4vU2Fzc3lGcmFzcy1SZWd1bGFyLnR0ZlwiKTtcblxuICAgIHJhZCA9IGggLyA0OyAvLyBjb21wdXRlIHJhZGl1cyBmb3IgY2VudHJhbCBjaXJjbGVcbiAgICBwNS5iYWNrZ3JvdW5kKGJhY2tncm91bmRDb2xvcik7IC8vIGNsZWFyIHRoZSBzY3JlZW5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2luZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNpbmVzW2ldID0gTWF0aC5QSTsgLy8gc3RhcnQgRVZFUllCT0RZIGZhY2luZyBOT1JUSFxuICAgIH1cbiAgfTtcblxuICAvLyBSZWRyYXcgdGhlIGNhbnZhcyBjb250aW51b3VzbHkgYXQgdGhlIGZyYW1lcmF0ZSBzcGVjaWZpZWQgYWJvdmUuXG4gIGNvbnN0IGRyYXcgPSAocDU6IGFueSkgPT4ge1xuICAgIHcgPSBwNS53aW5kb3dXaWR0aDtcbiAgICBoID0gcDUud2luZG93SGVpZ2h0O1xuICAgIHA1LnJlc2l6ZUNhbnZhcyh3LCBoKTtcbiAgICBwNS50cmFuc2xhdGUoLXcgLyAyLCAtaCAvIDIpOyAvLyBNb3ZlIGZyb20gV2ViR0wgY2VudGVyZWQgY29vcmRpbmF0ZXMgdG8gc3RhbmRhcmQgWC9ZXG5cbiAgICAvLyBBZGQgdGV4dFxuICAgIHA1LnRleHRGb250KHNhc3N5Rm9udCk7XG4gICAgcDUuc3Ryb2tlV2VpZ2h0KDEpO1xuICAgIHA1LmZpbGwoYHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKWApO1xuICAgIHA1LnRleHRTaXplKDIwKTtcbiAgICBwNS50ZXh0KGBCeGAsIDEwLCAzMCk7XG5cbiAgICBpZiAoIXRyYWNlKSB7XG4gICAgICBwNS5iYWNrZ3JvdW5kKGJhY2tncm91bmRDb2xvcik7IC8vIGNsZWFyIHNjcmVlbiBpZiBzaG93aW5nIGdlb21ldHJ5XG4gICAgICBwNS5zdHJva2UoMjU1KTsgLy8gYmxhY2sgcGVuXG4gICAgICBwNS5ub0ZpbGwoKTsgLy8gZG9uJ3QgZmlsbFxuICAgIH1cblxuICAgIC8vIE1BSU4gQUNUSU9OXG4gICAgcDUucHVzaCgpOyAvLyBzdGFydCBhIHRyYW5zZm9ybWF0aW9uIG1hdHJpeFxuICAgIHA1LnRyYW5zbGF0ZSh3IC8gMiwgaCAvIDIpOyAvLyBtb3ZlIHRvIG1pZGRsZSBvZiBzY3JlZW5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2luZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBlcmFkID0gMDsgLy8gcmFkaXVzIGZvciBzbWFsbCBcInBvaW50XCIgd2l0aGluIGNpcmNsZS4uLiB0aGlzIGlzIHRoZSAncGVuJyB3aGVuIHRyYWNpbmdcbiAgICAgIC8vIHNldHVwIGZvciB0cmFjaW5nXG4gICAgICBpZiAodHJhY2UpIHtcbiAgICAgICAgbGV0IGNvbG9yU2NhbGluZyA9IHA1LmZsb2F0KGkpIC8gc2luZXMubGVuZ3RoO1xuICAgICAgICBwNS5zdHJva2UoMjU1ICogY29sb3JTY2FsaW5nLCBhbHBoYSk7IC8vIGJsdWVcbiAgICAgICAgY29uc29sZS5sb2coYEJsdWUgZnJvbSAwLTI1NTogYCwgcDUuZmxvYXQoaSkgLyBzaW5lcy5sZW5ndGgpO1xuICAgICAgICBwNS5maWxsKDI1NSwgMjU1LCAyNTUsIGFscGhhIC8gMik7IC8vIHdoaXRlXG4gICAgICAgIGVyYWQgPSA1LjAgKiAoMS4wIC0gcDUuZmxvYXQoaSkgLyBzaW5lcy5sZW5ndGgpOyAvLyBwZW4gd2lkdGggd2lsbCBiZSByZWxhdGVkIHRvIHdoaWNoIHNpbmVcbiAgICAgIH1cbiAgICAgIGxldCByYWRpdXMgPSByYWQgLyAoaSArIDEpOyAvLyByYWRpdXMgZm9yIGNpcmNsZSBpdHNlbGZcbiAgICAgIHA1LnJvdGF0ZShzaW5lc1tpXSk7IC8vIHJvdGF0ZSBjaXJjbGVcbiAgICAgIGlmICghdHJhY2UpIHA1LmVsbGlwc2UoMCwgMCwgcmFkaXVzICogMiwgcmFkaXVzICogMik7IC8vIGlmIHdlJ3JlIHNpbXVsYXRpbmcsIGRyYXcgdGhlIHNpbmVcbiAgICAgIHA1LnB1c2goKTsgLy8gZ28gdXAgb25lIGxldmVsXG4gICAgICBwNS50cmFuc2xhdGUoMCwgcmFkaXVzKTsgLy8gbW92ZSB0byBzaW5lIGVkZ2VcbiAgICAgIGlmICghdHJhY2UpIHA1LmVsbGlwc2UoMCwgMCwgNSwgNSk7IC8vIGRyYXcgYSBsaXR0bGUgY2lyY2xlXG4gICAgICBpZiAodHJhY2UpIHA1LmVsbGlwc2UoMCwgMCwgZXJhZCwgZXJhZCk7IC8vIGRyYXcgd2l0aCBlcmFkIGlmIHRyYWNpbmdcbiAgICAgIHA1LnBvcCgpOyAvLyBnbyBkb3duIG9uZSBsZXZlbFxuICAgICAgcDUudHJhbnNsYXRlKDAsIHJhZGl1cyk7IC8vIG1vdmUgaW50byBwb3NpdGlvbiBmb3IgbmV4dCBzaW5lXG4gICAgICBzaW5lc1tpXSA9IChzaW5lc1tpXSArIChmdW5kICsgZnVuZCAqIGkgKiByYXRpbykpICUgKDIgKiBNYXRoLlBJKTsgLy8gdXBkYXRlIGFuZ2xlIGJhc2VkIG9uIGZ1bmRhbWVudGFsXG4gICAgfVxuXG4gICAgcDUucG9wKCk7IC8vIHBvcCBkb3duIGZpbmFsIHRyYW5zZm9ybWF0aW9uXG4gIH07XG5cbiAgLy8gUmVuZGVyIFA1IFNrZXRjaFxuICByZXR1cm4gPFNrZXRjaCBzZXR1cD17c2V0dXB9IGRyYXc9e2RyYXd9IC8+O1xufVxuIl0sIm5hbWVzIjpbImR5bmFtaWMiLCJSZWFjdCIsIlNrZXRjaCIsInNzciIsIkNyZWF0ZUxvb3AiLCJGciIsInciLCJoIiwic2Fzc3lGb250IiwiTlVNU0lORVMiLCJzaW5lcyIsIkFycmF5IiwicmFkIiwiaSIsImZ1bmQiLCJyYXRpbyIsImFscGhhIiwidHJhY2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJQNVNrZXRjaCIsInByb3BzIiwic2V0dXAiLCJwNSIsIm1sNSIsIndpbmRvd1dpZHRoIiwid2luZG93SGVpZ2h0IiwiY3JlYXRlQ2FudmFzIiwiV0VCR0wiLCJmcmFtZVJhdGUiLCJsb2FkRm9udCIsImJhY2tncm91bmQiLCJsZW5ndGgiLCJNYXRoIiwiUEkiLCJkcmF3IiwicmVzaXplQ2FudmFzIiwidHJhbnNsYXRlIiwidGV4dEZvbnQiLCJzdHJva2VXZWlnaHQiLCJmaWxsIiwidGV4dFNpemUiLCJ0ZXh0Iiwic3Ryb2tlIiwibm9GaWxsIiwicHVzaCIsImVyYWQiLCJjb2xvclNjYWxpbmciLCJjb25zb2xlIiwibG9nIiwicmFkaXVzIiwicm90YXRlIiwiZWxsaXBzZSIsInBvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Spirograph.tsx\n"));

/***/ })

});