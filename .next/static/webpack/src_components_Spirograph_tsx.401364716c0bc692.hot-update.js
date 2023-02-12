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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ P5Sketch; }\n/* harmony export */ });\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/bx/code/js/P5-nextjs-template/src/components/Spirograph.tsx\";\n\n\n\nvar Sketch = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ \"node_modules_react-p5_build_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-p5 */ \"./node_modules/react-p5/build/index.js\", 23));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    modules: [\"../components/Spirograph.tsx -> \" + \"react-p5\"]\n  }\n});\n_c2 = Sketch;\n//const createLoop = dynamic(import(\"p5.createloop\"), { ssr: false });\n// ----- Global Variables ----- //\nvar Fr = 60; // FrameRate\n\nvar w;\nvar h;\nvar sassyFont; // ----- Algorithm Variables ----- //\n\nvar NUMSINES = 10; // how many of these things can we do at once?\n\nvar sines = new Array(NUMSINES); // an array to hold all the current angles\n\nvar rad; // an initial radius value for the central sine\n\nvar i; // a counter variable\n// play with these to get a sense of what's going on:\n\nvar fund = 0.005; // the speed of the central sine\n\nvar ratio = 0.5; // what multiplier for speed is each additional sine?\n\nvar alpha = 75; // how opaque is the tracing system\n\nvar trace = true; // are we tracing?\n\nvar backgroundColor = 40;\nvar lineThickness = 5; // Defining the Sketch\n\nfunction P5Sketch(props) {\n  // Set up the Canvas and set the framerate. Also load images and text.\n  var setup = function setup(p5, createLoop) {\n    // Creating the canvas with initial values of browser width and height.\n    w = p5.windowWidth;\n    h = p5.windowHeight;\n    p5.createCanvas(w, h, p5.WEBGL);\n    p5.frameRate(Fr);\n    sassyFont = p5.loadFont(\"./SassyFrass-Regular.ttf\");\n    rad = h / 4; // compute radius for central circle\n\n    p5.background(backgroundColor); // clear the screen\n    //createLoop({ duration: 3, gif: true });\n\n    for (var _i = 0; _i < sines.length; _i++) {\n      sines[_i] = Math.PI; // start EVERYBODY facing NORTH\n    }\n  }; // Redraw the canvas continuously at the framerate specified above.\n\n\n  var draw = function draw(p5) {\n    w = p5.windowWidth;\n    h = p5.windowHeight;\n    p5.resizeCanvas(w, h);\n    p5.translate(-w / 2, -h / 2); // Move from WebGL centered coordinates to standard X/Y\n    // Add text\n\n    p5.textFont(sassyFont);\n    p5.strokeWeight(1);\n    p5.fill(\"rgba(255, 255, 255, 0.01)\");\n    p5.textSize(20);\n    p5.text(\"Bx\", 10, 30);\n\n    if (!trace) {\n      p5.background(backgroundColor); // clear screen if showing geometry\n\n      p5.stroke(255); // black pen\n\n      p5.noFill(); // don't fill\n    } // MAIN ACTION\n\n\n    p5.push(); // start a transformation matrix\n\n    p5.translate(w / 2, h / 2); // move to middle of screen\n\n    for (var _i2 = 0; _i2 < sines.length; _i2++) {\n      var erad = 0; // radius for small \"point\" within circle... this is the 'pen' when tracing\n      // setup for tracing\n\n      if (trace) {\n        var colorScaling = p5[\"float\"](_i2) / sines.length;\n        p5.stroke(255 * colorScaling, alpha); // blue\n\n        p5.fill(255, 255, 255, alpha / 2); // white\n\n        erad = lineThickness * (1.0 - p5[\"float\"](_i2) / sines.length); // pen width will be related to which sine\n      }\n\n      var radius = rad / (_i2 + 1); // radius for circle itself\n\n      p5.rotate(sines[_i2]); // rotate circle\n\n      if (!trace) p5.ellipse(0, 0, radius * 2, radius * 2); // if we're simulating, draw the sine\n\n      p5.push(); // go up one level\n\n      p5.translate(0, radius); // move to sine edge\n\n      if (!trace) p5.ellipse(0, 0, 5, 5); // draw a little circle\n\n      if (trace) p5.ellipse(0, 0, erad, erad); // draw with erad if tracing\n\n      p5.pop(); // go down one level\n\n      p5.translate(0, radius); // move into position for next sine\n\n      sines[_i2] = (sines[_i2] + (fund + fund * _i2 * ratio)) % (2 * Math.PI); // update angle based on fundamental\n    }\n\n    p5.pop(); // pop down final transformation\n  }; // Render P5 Sketch\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Sketch, {\n    setup: setup,\n    draw: draw\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 98,\n    columnNumber: 10\n  }, this);\n}\n_c3 = P5Sketch;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Sketch$dynamic\");\n$RefreshReg$(_c2, \"Sketch\");\n$RefreshReg$(_c3, \"P5Sketch\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixNQUFNLEdBQUcsQ0FBMUIsRUFBNkJBLE1BQU0sR0FBRyxDQUF0QyxFQVh5QixDQVdpQjs7TUFDdER6QixFQUFFLENBQUNzQixJQUFILEdBWnFDLENBWTFCOztNQUNYdEIsRUFBRSxDQUFDYyxTQUFILENBQWEsQ0FBYixFQUFnQlcsTUFBaEIsRUFicUMsQ0FhWjs7TUFDekIsSUFBSSxDQUFDL0IsS0FBTCxFQUFZTSxFQUFFLENBQUMyQixPQUFILENBQVcsQ0FBWCxFQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFkeUIsQ0FjRDs7TUFDcEMsSUFBSWpDLEtBQUosRUFBV00sRUFBRSxDQUFDMkIsT0FBSCxDQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCSixJQUFqQixFQUF1QkEsSUFBdkIsRUFmMEIsQ0FlSTs7TUFDekN2QixFQUFFLENBQUM0QixHQUFILEdBaEJxQyxDQWdCM0I7O01BQ1Y1QixFQUFFLENBQUNjLFNBQUgsQ0FBYSxDQUFiLEVBQWdCVyxNQUFoQixFQWpCcUMsQ0FpQlo7O01BQ3pCdEMsS0FBSyxDQUFDRyxHQUFELENBQUwsR0FBVyxDQUFDSCxLQUFLLENBQUNHLEdBQUQsQ0FBTCxJQUFZQyxJQUFJLEdBQUdBLElBQUksR0FBR0QsR0FBUCxHQUFXRSxLQUE5QixDQUFELEtBQTBDLElBQUlrQixJQUFJLENBQUNDLEVBQW5ELENBQVgsQ0FsQnFDLENBa0I4QjtJQUNwRTs7SUFFRFgsRUFBRSxDQUFDNEIsR0FBSCxHQTVDd0IsQ0E0Q2Q7RUFDWCxDQTdDRCxDQXRCMkMsQ0FxRTNDOzs7RUFDQSxvQkFBTyw4REFBQyxNQUFEO0lBQVEsS0FBSyxFQUFFN0IsS0FBZjtJQUFzQixJQUFJLEVBQUVhO0VBQTVCO0lBQUE7SUFBQTtJQUFBO0VBQUEsUUFBUDtBQUNEO01BdkV1QmYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3Bpcm9ncmFwaC50c3g/ZjYxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBTa2V0Y2ggPSBkeW5hbWljKGltcG9ydChcInJlYWN0LXA1XCIpLCB7IHNzcjogZmFsc2UgfSk7XG5pbXBvcnQgY3JlYXRlTG9vcCBmcm9tIFwicDUuY3JlYXRlbG9vcFwiO1xuLy9jb25zdCBjcmVhdGVMb29wID0gZHluYW1pYyhpbXBvcnQoXCJwNS5jcmVhdGVsb29wXCIpLCB7IHNzcjogZmFsc2UgfSk7XG5cbi8vIC0tLS0tIEdsb2JhbCBWYXJpYWJsZXMgLS0tLS0gLy9cbmNvbnN0IEZyOiBudW1iZXIgPSA2MDsgLy8gRnJhbWVSYXRlXG5sZXQgdzogbnVtYmVyO1xubGV0IGg6IG51bWJlcjtcbmxldCBzYXNzeUZvbnQ6IGFueTtcblxuLy8gLS0tLS0gQWxnb3JpdGhtIFZhcmlhYmxlcyAtLS0tLSAvL1xubGV0IE5VTVNJTkVTID0gMTA7IC8vIGhvdyBtYW55IG9mIHRoZXNlIHRoaW5ncyBjYW4gd2UgZG8gYXQgb25jZT9cbmxldCBzaW5lcyA9IG5ldyBBcnJheShOVU1TSU5FUyk7IC8vIGFuIGFycmF5IHRvIGhvbGQgYWxsIHRoZSBjdXJyZW50IGFuZ2xlc1xubGV0IHJhZDogYW55OyAvLyBhbiBpbml0aWFsIHJhZGl1cyB2YWx1ZSBmb3IgdGhlIGNlbnRyYWwgc2luZVxubGV0IGk7IC8vIGEgY291bnRlciB2YXJpYWJsZVxuXG4vLyBwbGF5IHdpdGggdGhlc2UgdG8gZ2V0IGEgc2Vuc2Ugb2Ygd2hhdCdzIGdvaW5nIG9uOlxubGV0IGZ1bmQgPSAwLjAwNTsgLy8gdGhlIHNwZWVkIG9mIHRoZSBjZW50cmFsIHNpbmVcbmxldCByYXRpbyA9IDAuNTsgLy8gd2hhdCBtdWx0aXBsaWVyIGZvciBzcGVlZCBpcyBlYWNoIGFkZGl0aW9uYWwgc2luZT9cbmxldCBhbHBoYSA9IDc1OyAvLyBob3cgb3BhcXVlIGlzIHRoZSB0cmFjaW5nIHN5c3RlbVxubGV0IHRyYWNlID0gdHJ1ZTsgLy8gYXJlIHdlIHRyYWNpbmc/XG5sZXQgYmFja2dyb3VuZENvbG9yID0gNDA7XG5sZXQgbGluZVRoaWNrbmVzcyA9IDU7XG5cbi8vIERlZmluaW5nIHRoZSBTa2V0Y2hcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFA1U2tldGNoKHByb3BzOiBhbnkpIHtcbiAgLy8gU2V0IHVwIHRoZSBDYW52YXMgYW5kIHNldCB0aGUgZnJhbWVyYXRlLiBBbHNvIGxvYWQgaW1hZ2VzIGFuZCB0ZXh0LlxuICBjb25zdCBzZXR1cCA9IChwNTogYW55LCBjcmVhdGVMb29wOiBhbnkpID0+IHtcbiAgICAvLyBDcmVhdGluZyB0aGUgY2FudmFzIHdpdGggaW5pdGlhbCB2YWx1ZXMgb2YgYnJvd3NlciB3aWR0aCBhbmQgaGVpZ2h0LlxuICAgIHcgPSBwNS53aW5kb3dXaWR0aDtcbiAgICBoID0gcDUud2luZG93SGVpZ2h0O1xuICAgIHA1LmNyZWF0ZUNhbnZhcyh3LCBoLCBwNS5XRUJHTCk7XG5cbiAgICBwNS5mcmFtZVJhdGUoRnIpO1xuICAgIHNhc3N5Rm9udCA9IHA1LmxvYWRGb250KFwiLi9TYXNzeUZyYXNzLVJlZ3VsYXIudHRmXCIpO1xuXG4gICAgcmFkID0gaCAvIDQ7IC8vIGNvbXB1dGUgcmFkaXVzIGZvciBjZW50cmFsIGNpcmNsZVxuICAgIHA1LmJhY2tncm91bmQoYmFja2dyb3VuZENvbG9yKTsgLy8gY2xlYXIgdGhlIHNjcmVlblxuXG4gICAgLy9jcmVhdGVMb29wKHsgZHVyYXRpb246IDMsIGdpZjogdHJ1ZSB9KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2luZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNpbmVzW2ldID0gTWF0aC5QSTsgLy8gc3RhcnQgRVZFUllCT0RZIGZhY2luZyBOT1JUSFxuICAgIH1cbiAgfTtcblxuICAvLyBSZWRyYXcgdGhlIGNhbnZhcyBjb250aW51b3VzbHkgYXQgdGhlIGZyYW1lcmF0ZSBzcGVjaWZpZWQgYWJvdmUuXG4gIGNvbnN0IGRyYXcgPSAocDU6IGFueSkgPT4ge1xuICAgIHcgPSBwNS53aW5kb3dXaWR0aDtcbiAgICBoID0gcDUud2luZG93SGVpZ2h0O1xuICAgIHA1LnJlc2l6ZUNhbnZhcyh3LCBoKTtcbiAgICBwNS50cmFuc2xhdGUoLXcgLyAyLCAtaCAvIDIpOyAvLyBNb3ZlIGZyb20gV2ViR0wgY2VudGVyZWQgY29vcmRpbmF0ZXMgdG8gc3RhbmRhcmQgWC9ZXG5cbiAgICAvLyBBZGQgdGV4dFxuICAgIHA1LnRleHRGb250KHNhc3N5Rm9udCk7XG4gICAgcDUuc3Ryb2tlV2VpZ2h0KDEpO1xuICAgIHA1LmZpbGwoYHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMSlgKTtcbiAgICBwNS50ZXh0U2l6ZSgyMCk7XG4gICAgcDUudGV4dChgQnhgLCAxMCwgMzApO1xuXG4gICAgaWYgKCF0cmFjZSkge1xuICAgICAgcDUuYmFja2dyb3VuZChiYWNrZ3JvdW5kQ29sb3IpOyAvLyBjbGVhciBzY3JlZW4gaWYgc2hvd2luZyBnZW9tZXRyeVxuICAgICAgcDUuc3Ryb2tlKDI1NSk7IC8vIGJsYWNrIHBlblxuICAgICAgcDUubm9GaWxsKCk7IC8vIGRvbid0IGZpbGxcbiAgICB9XG5cbiAgICAvLyBNQUlOIEFDVElPTlxuICAgIHA1LnB1c2goKTsgLy8gc3RhcnQgYSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXhcbiAgICBwNS50cmFuc2xhdGUodyAvIDIsIGggLyAyKTsgLy8gbW92ZSB0byBtaWRkbGUgb2Ygc2NyZWVuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZXJhZCA9IDA7IC8vIHJhZGl1cyBmb3Igc21hbGwgXCJwb2ludFwiIHdpdGhpbiBjaXJjbGUuLi4gdGhpcyBpcyB0aGUgJ3Blbicgd2hlbiB0cmFjaW5nXG4gICAgICAvLyBzZXR1cCBmb3IgdHJhY2luZ1xuICAgICAgaWYgKHRyYWNlKSB7XG4gICAgICAgIGxldCBjb2xvclNjYWxpbmcgPSBwNS5mbG9hdChpKSAvIHNpbmVzLmxlbmd0aDtcbiAgICAgICAgcDUuc3Ryb2tlKDI1NSAqIGNvbG9yU2NhbGluZywgYWxwaGEpOyAvLyBibHVlXG4gICAgICAgIHA1LmZpbGwoMjU1LCAyNTUsIDI1NSwgYWxwaGEgLyAyKTsgLy8gd2hpdGVcbiAgICAgICAgZXJhZCA9IGxpbmVUaGlja25lc3MgKiAoMS4wIC0gcDUuZmxvYXQoaSkgLyBzaW5lcy5sZW5ndGgpOyAvLyBwZW4gd2lkdGggd2lsbCBiZSByZWxhdGVkIHRvIHdoaWNoIHNpbmVcbiAgICAgIH1cbiAgICAgIGxldCByYWRpdXMgPSByYWQgLyAoaSArIDEpOyAvLyByYWRpdXMgZm9yIGNpcmNsZSBpdHNlbGZcbiAgICAgIHA1LnJvdGF0ZShzaW5lc1tpXSk7IC8vIHJvdGF0ZSBjaXJjbGVcbiAgICAgIGlmICghdHJhY2UpIHA1LmVsbGlwc2UoMCwgMCwgcmFkaXVzICogMiwgcmFkaXVzICogMik7IC8vIGlmIHdlJ3JlIHNpbXVsYXRpbmcsIGRyYXcgdGhlIHNpbmVcbiAgICAgIHA1LnB1c2goKTsgLy8gZ28gdXAgb25lIGxldmVsXG4gICAgICBwNS50cmFuc2xhdGUoMCwgcmFkaXVzKTsgLy8gbW92ZSB0byBzaW5lIGVkZ2VcbiAgICAgIGlmICghdHJhY2UpIHA1LmVsbGlwc2UoMCwgMCwgNSwgNSk7IC8vIGRyYXcgYSBsaXR0bGUgY2lyY2xlXG4gICAgICBpZiAodHJhY2UpIHA1LmVsbGlwc2UoMCwgMCwgZXJhZCwgZXJhZCk7IC8vIGRyYXcgd2l0aCBlcmFkIGlmIHRyYWNpbmdcbiAgICAgIHA1LnBvcCgpOyAvLyBnbyBkb3duIG9uZSBsZXZlbFxuICAgICAgcDUudHJhbnNsYXRlKDAsIHJhZGl1cyk7IC8vIG1vdmUgaW50byBwb3NpdGlvbiBmb3IgbmV4dCBzaW5lXG4gICAgICBzaW5lc1tpXSA9IChzaW5lc1tpXSArIChmdW5kICsgZnVuZCAqIGkgKiByYXRpbykpICUgKDIgKiBNYXRoLlBJKTsgLy8gdXBkYXRlIGFuZ2xlIGJhc2VkIG9uIGZ1bmRhbWVudGFsXG4gICAgfVxuXG4gICAgcDUucG9wKCk7IC8vIHBvcCBkb3duIGZpbmFsIHRyYW5zZm9ybWF0aW9uXG4gIH07XG5cbiAgLy8gUmVuZGVyIFA1IFNrZXRjaFxuICByZXR1cm4gPFNrZXRjaCBzZXR1cD17c2V0dXB9IGRyYXc9e2RyYXd9IC8+O1xufVxuIl0sIm5hbWVzIjpbImR5bmFtaWMiLCJSZWFjdCIsIlNrZXRjaCIsInNzciIsIkZyIiwidyIsImgiLCJzYXNzeUZvbnQiLCJOVU1TSU5FUyIsInNpbmVzIiwiQXJyYXkiLCJyYWQiLCJpIiwiZnVuZCIsInJhdGlvIiwiYWxwaGEiLCJ0cmFjZSIsImJhY2tncm91bmRDb2xvciIsImxpbmVUaGlja25lc3MiLCJQNVNrZXRjaCIsInByb3BzIiwic2V0dXAiLCJwNSIsImNyZWF0ZUxvb3AiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsImNyZWF0ZUNhbnZhcyIsIldFQkdMIiwiZnJhbWVSYXRlIiwibG9hZEZvbnQiLCJiYWNrZ3JvdW5kIiwibGVuZ3RoIiwiTWF0aCIsIlBJIiwiZHJhdyIsInJlc2l6ZUNhbnZhcyIsInRyYW5zbGF0ZSIsInRleHRGb250Iiwic3Ryb2tlV2VpZ2h0IiwiZmlsbCIsInRleHRTaXplIiwidGV4dCIsInN0cm9rZSIsIm5vRmlsbCIsInB1c2giLCJlcmFkIiwiY29sb3JTY2FsaW5nIiwicmFkaXVzIiwicm90YXRlIiwiZWxsaXBzZSIsInBvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Spirograph.tsx\n"));

/***/ })

});