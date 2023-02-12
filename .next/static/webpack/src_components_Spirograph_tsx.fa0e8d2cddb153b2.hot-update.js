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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ P5Sketch; }\n/* harmony export */ });\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/bx/code/js/P5-nextjs-template/src/components/Spirograph.tsx\";\n\n\n\nvar Sketch = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ \"node_modules_react-p5_build_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-p5 */ \"./node_modules/react-p5/build/index.js\", 23));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    modules: [\"../components/Spirograph.tsx -> \" + \"react-p5\"]\n  }\n}); //import CreateLoop from \"p5.createloop\";\n\n_c2 = Sketch;\nvar createLoop = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(function () {\n  return __webpack_require__.e(/*! import() */ \"node_modules_p5_createloop_src_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! p5.createloop */ \"./node_modules/p5.createloop/src/index.js\", 23));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    modules: [\"../components/Spirograph.tsx -> \" + \"p5.createloop\"]\n  }\n}); // ----- Global Variables ----- //\n\nvar Fr = 60; // FrameRate\n\nvar w;\nvar h;\nvar sassyFont; // ----- Algorithm Variables ----- //\n\nvar NUMSINES = 10; // how many of these things can we do at once?\n\nvar sines = new Array(NUMSINES); // an array to hold all the current angles\n\nvar rad; // an initial radius value for the central sine\n\nvar i; // a counter variable\n// play with these to get a sense of what's going on:\n\nvar fund = 0.005; // the speed of the central sine\n\nvar ratio = 1; // what multiplier for speed is each additional sine?\n\nvar alpha = 75; // how opaque is the tracing system\n\nvar trace = true; // are we tracing?\n\nvar backgroundColor = 40; // Defining the Sketch\n\nfunction P5Sketch(props) {\n  // Set up the Canvas and set the framerate. Also load images and text.\n  var setup = function setup(p5, createLoop) {\n    // Creating the canvas with initial values of browser width and height.\n    w = p5.windowWidth;\n    h = p5.windowHeight;\n    p5.createCanvas(w, h, p5.WEBGL);\n    p5.frameRate(Fr);\n    sassyFont = p5.loadFont(\"./SassyFrass-Regular.ttf\");\n    rad = h / 4; // compute radius for central circle\n\n    p5.background(backgroundColor); // clear the screen\n\n    createLoop({\n      duration: 3,\n      gif: true\n    });\n\n    for (var _i = 0; _i < sines.length; _i++) {\n      sines[_i] = Math.PI; // start EVERYBODY facing NORTH\n    }\n  }; // Redraw the canvas continuously at the framerate specified above.\n\n\n  var draw = function draw(p5) {\n    w = p5.windowWidth;\n    h = p5.windowHeight;\n    p5.resizeCanvas(w, h);\n    p5.translate(-w / 2, -h / 2); // Move from WebGL centered coordinates to standard X/Y\n    // Add text\n\n    p5.textFont(sassyFont);\n    p5.strokeWeight(1);\n    p5.fill(\"rgba(255, 255, 255, 0.01)\");\n    p5.textSize(20);\n    p5.text(\"Bx\", 10, 30);\n\n    if (!trace) {\n      p5.background(backgroundColor); // clear screen if showing geometry\n\n      p5.stroke(255); // black pen\n\n      p5.noFill(); // don't fill\n    } // MAIN ACTION\n\n\n    p5.push(); // start a transformation matrix\n\n    p5.translate(w / 2, h / 2); // move to middle of screen\n\n    for (var _i2 = 0; _i2 < sines.length; _i2++) {\n      var erad = 0; // radius for small \"point\" within circle... this is the 'pen' when tracing\n      // setup for tracing\n\n      if (trace) {\n        var colorScaling = p5[\"float\"](_i2) / sines.length;\n        p5.stroke(255 * colorScaling, alpha); // blue\n\n        p5.fill(255, 255, 255, alpha / 2); // white\n\n        erad = 5.0 * (1.0 - p5[\"float\"](_i2) / sines.length); // pen width will be related to which sine\n      }\n\n      var radius = rad / (_i2 + 1); // radius for circle itself\n\n      p5.rotate(sines[_i2]); // rotate circle\n\n      if (!trace) p5.ellipse(0, 0, radius * 2, radius * 2); // if we're simulating, draw the sine\n\n      p5.push(); // go up one level\n\n      p5.translate(0, radius); // move to sine edge\n\n      if (!trace) p5.ellipse(0, 0, 5, 5); // draw a little circle\n\n      if (trace) p5.ellipse(0, 0, erad, erad); // draw with erad if tracing\n\n      p5.pop(); // go down one level\n\n      p5.translate(0, radius); // move into position for next sine\n\n      sines[_i2] = (sines[_i2] + (fund + fund * _i2 * ratio)) % (2 * Math.PI); // update angle based on fundamental\n    }\n\n    p5.pop(); // pop down final transformation\n  }; // Render P5 Sketch\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Sketch, {\n    setup: setup,\n    draw: draw\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 97,\n    columnNumber: 10\n  }, this);\n}\n_c3 = P5Sketch;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Sketch$dynamic\");\n$RefreshReg$(_c2, \"Sketch\");\n$RefreshReg$(_c3, \"P5Sketch\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtJQUFBO0lBQUE7RUFBQSxRQUFQO0FBQ0Q7TUF2RXVCaEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3Bpcm9ncmFwaC50c3g/ZjYxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBTa2V0Y2ggPSBkeW5hbWljKGltcG9ydChcInJlYWN0LXA1XCIpLCB7IHNzcjogZmFsc2UgfSk7XG4vL2ltcG9ydCBDcmVhdGVMb29wIGZyb20gXCJwNS5jcmVhdGVsb29wXCI7XG5jb25zdCBjcmVhdGVMb29wID0gZHluYW1pYyhpbXBvcnQoXCJwNS5jcmVhdGVsb29wXCIpLCB7IHNzcjogZmFsc2UgfSk7XG5cbi8vIC0tLS0tIEdsb2JhbCBWYXJpYWJsZXMgLS0tLS0gLy9cbmNvbnN0IEZyOiBudW1iZXIgPSA2MDsgLy8gRnJhbWVSYXRlXG5sZXQgdzogbnVtYmVyO1xubGV0IGg6IG51bWJlcjtcbmxldCBzYXNzeUZvbnQ6IGFueTtcblxuLy8gLS0tLS0gQWxnb3JpdGhtIFZhcmlhYmxlcyAtLS0tLSAvL1xubGV0IE5VTVNJTkVTID0gMTA7IC8vIGhvdyBtYW55IG9mIHRoZXNlIHRoaW5ncyBjYW4gd2UgZG8gYXQgb25jZT9cbmxldCBzaW5lcyA9IG5ldyBBcnJheShOVU1TSU5FUyk7IC8vIGFuIGFycmF5IHRvIGhvbGQgYWxsIHRoZSBjdXJyZW50IGFuZ2xlc1xubGV0IHJhZDogYW55OyAvLyBhbiBpbml0aWFsIHJhZGl1cyB2YWx1ZSBmb3IgdGhlIGNlbnRyYWwgc2luZVxubGV0IGk7IC8vIGEgY291bnRlciB2YXJpYWJsZVxuXG4vLyBwbGF5IHdpdGggdGhlc2UgdG8gZ2V0IGEgc2Vuc2Ugb2Ygd2hhdCdzIGdvaW5nIG9uOlxubGV0IGZ1bmQgPSAwLjAwNTsgLy8gdGhlIHNwZWVkIG9mIHRoZSBjZW50cmFsIHNpbmVcbmxldCByYXRpbyA9IDE7IC8vIHdoYXQgbXVsdGlwbGllciBmb3Igc3BlZWQgaXMgZWFjaCBhZGRpdGlvbmFsIHNpbmU/XG5sZXQgYWxwaGEgPSA3NTsgLy8gaG93IG9wYXF1ZSBpcyB0aGUgdHJhY2luZyBzeXN0ZW1cbmxldCB0cmFjZSA9IHRydWU7IC8vIGFyZSB3ZSB0cmFjaW5nP1xubGV0IGJhY2tncm91bmRDb2xvciA9IDQwO1xuXG4vLyBEZWZpbmluZyB0aGUgU2tldGNoXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQNVNrZXRjaChwcm9wczogYW55KSB7XG4gIC8vIFNldCB1cCB0aGUgQ2FudmFzIGFuZCBzZXQgdGhlIGZyYW1lcmF0ZS4gQWxzbyBsb2FkIGltYWdlcyBhbmQgdGV4dC5cbiAgY29uc3Qgc2V0dXAgPSAocDU6IGFueSwgY3JlYXRlTG9vcDogYW55KSA9PiB7XG4gICAgLy8gQ3JlYXRpbmcgdGhlIGNhbnZhcyB3aXRoIGluaXRpYWwgdmFsdWVzIG9mIGJyb3dzZXIgd2lkdGggYW5kIGhlaWdodC5cbiAgICB3ID0gcDUud2luZG93V2lkdGg7XG4gICAgaCA9IHA1LndpbmRvd0hlaWdodDtcbiAgICBwNS5jcmVhdGVDYW52YXModywgaCwgcDUuV0VCR0wpO1xuXG4gICAgcDUuZnJhbWVSYXRlKEZyKTtcbiAgICBzYXNzeUZvbnQgPSBwNS5sb2FkRm9udChcIi4vU2Fzc3lGcmFzcy1SZWd1bGFyLnR0ZlwiKTtcblxuICAgIHJhZCA9IGggLyA0OyAvLyBjb21wdXRlIHJhZGl1cyBmb3IgY2VudHJhbCBjaXJjbGVcbiAgICBwNS5iYWNrZ3JvdW5kKGJhY2tncm91bmRDb2xvcik7IC8vIGNsZWFyIHRoZSBzY3JlZW5cblxuICAgIGNyZWF0ZUxvb3AoeyBkdXJhdGlvbjogMywgZ2lmOiB0cnVlIH0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaW5lcy5sZW5ndGg7IGkrKykge1xuICAgICAgc2luZXNbaV0gPSBNYXRoLlBJOyAvLyBzdGFydCBFVkVSWUJPRFkgZmFjaW5nIE5PUlRIXG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZHJhdyB0aGUgY2FudmFzIGNvbnRpbnVvdXNseSBhdCB0aGUgZnJhbWVyYXRlIHNwZWNpZmllZCBhYm92ZS5cbiAgY29uc3QgZHJhdyA9IChwNTogYW55KSA9PiB7XG4gICAgdyA9IHA1LndpbmRvd1dpZHRoO1xuICAgIGggPSBwNS53aW5kb3dIZWlnaHQ7XG4gICAgcDUucmVzaXplQ2FudmFzKHcsIGgpO1xuICAgIHA1LnRyYW5zbGF0ZSgtdyAvIDIsIC1oIC8gMik7IC8vIE1vdmUgZnJvbSBXZWJHTCBjZW50ZXJlZCBjb29yZGluYXRlcyB0byBzdGFuZGFyZCBYL1lcblxuICAgIC8vIEFkZCB0ZXh0XG4gICAgcDUudGV4dEZvbnQoc2Fzc3lGb250KTtcbiAgICBwNS5zdHJva2VXZWlnaHQoMSk7XG4gICAgcDUuZmlsbChgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjAxKWApO1xuICAgIHA1LnRleHRTaXplKDIwKTtcbiAgICBwNS50ZXh0KGBCeGAsIDEwLCAzMCk7XG5cbiAgICBpZiAoIXRyYWNlKSB7XG4gICAgICBwNS5iYWNrZ3JvdW5kKGJhY2tncm91bmRDb2xvcik7IC8vIGNsZWFyIHNjcmVlbiBpZiBzaG93aW5nIGdlb21ldHJ5XG4gICAgICBwNS5zdHJva2UoMjU1KTsgLy8gYmxhY2sgcGVuXG4gICAgICBwNS5ub0ZpbGwoKTsgLy8gZG9uJ3QgZmlsbFxuICAgIH1cblxuICAgIC8vIE1BSU4gQUNUSU9OXG4gICAgcDUucHVzaCgpOyAvLyBzdGFydCBhIHRyYW5zZm9ybWF0aW9uIG1hdHJpeFxuICAgIHA1LnRyYW5zbGF0ZSh3IC8gMiwgaCAvIDIpOyAvLyBtb3ZlIHRvIG1pZGRsZSBvZiBzY3JlZW5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2luZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBlcmFkID0gMDsgLy8gcmFkaXVzIGZvciBzbWFsbCBcInBvaW50XCIgd2l0aGluIGNpcmNsZS4uLiB0aGlzIGlzIHRoZSAncGVuJyB3aGVuIHRyYWNpbmdcbiAgICAgIC8vIHNldHVwIGZvciB0cmFjaW5nXG4gICAgICBpZiAodHJhY2UpIHtcbiAgICAgICAgbGV0IGNvbG9yU2NhbGluZyA9IHA1LmZsb2F0KGkpIC8gc2luZXMubGVuZ3RoO1xuICAgICAgICBwNS5zdHJva2UoMjU1ICogY29sb3JTY2FsaW5nLCBhbHBoYSk7IC8vIGJsdWVcbiAgICAgICAgcDUuZmlsbCgyNTUsIDI1NSwgMjU1LCBhbHBoYSAvIDIpOyAvLyB3aGl0ZVxuICAgICAgICBlcmFkID0gNS4wICogKDEuMCAtIHA1LmZsb2F0KGkpIC8gc2luZXMubGVuZ3RoKTsgLy8gcGVuIHdpZHRoIHdpbGwgYmUgcmVsYXRlZCB0byB3aGljaCBzaW5lXG4gICAgICB9XG4gICAgICBsZXQgcmFkaXVzID0gcmFkIC8gKGkgKyAxKTsgLy8gcmFkaXVzIGZvciBjaXJjbGUgaXRzZWxmXG4gICAgICBwNS5yb3RhdGUoc2luZXNbaV0pOyAvLyByb3RhdGUgY2lyY2xlXG4gICAgICBpZiAoIXRyYWNlKSBwNS5lbGxpcHNlKDAsIDAsIHJhZGl1cyAqIDIsIHJhZGl1cyAqIDIpOyAvLyBpZiB3ZSdyZSBzaW11bGF0aW5nLCBkcmF3IHRoZSBzaW5lXG4gICAgICBwNS5wdXNoKCk7IC8vIGdvIHVwIG9uZSBsZXZlbFxuICAgICAgcDUudHJhbnNsYXRlKDAsIHJhZGl1cyk7IC8vIG1vdmUgdG8gc2luZSBlZGdlXG4gICAgICBpZiAoIXRyYWNlKSBwNS5lbGxpcHNlKDAsIDAsIDUsIDUpOyAvLyBkcmF3IGEgbGl0dGxlIGNpcmNsZVxuICAgICAgaWYgKHRyYWNlKSBwNS5lbGxpcHNlKDAsIDAsIGVyYWQsIGVyYWQpOyAvLyBkcmF3IHdpdGggZXJhZCBpZiB0cmFjaW5nXG4gICAgICBwNS5wb3AoKTsgLy8gZ28gZG93biBvbmUgbGV2ZWxcbiAgICAgIHA1LnRyYW5zbGF0ZSgwLCByYWRpdXMpOyAvLyBtb3ZlIGludG8gcG9zaXRpb24gZm9yIG5leHQgc2luZVxuICAgICAgc2luZXNbaV0gPSAoc2luZXNbaV0gKyAoZnVuZCArIGZ1bmQgKiBpICogcmF0aW8pKSAlICgyICogTWF0aC5QSSk7IC8vIHVwZGF0ZSBhbmdsZSBiYXNlZCBvbiBmdW5kYW1lbnRhbFxuICAgIH1cblxuICAgIHA1LnBvcCgpOyAvLyBwb3AgZG93biBmaW5hbCB0cmFuc2Zvcm1hdGlvblxuICB9O1xuXG4gIC8vIFJlbmRlciBQNSBTa2V0Y2hcbiAgcmV0dXJuIDxTa2V0Y2ggc2V0dXA9e3NldHVwfSBkcmF3PXtkcmF3fSAvPjtcbn1cbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwiUmVhY3QiLCJTa2V0Y2giLCJzc3IiLCJjcmVhdGVMb29wIiwiRnIiLCJ3IiwiaCIsInNhc3N5Rm9udCIsIk5VTVNJTkVTIiwic2luZXMiLCJBcnJheSIsInJhZCIsImkiLCJmdW5kIiwicmF0aW8iLCJhbHBoYSIsInRyYWNlIiwiYmFja2dyb3VuZENvbG9yIiwiUDVTa2V0Y2giLCJwcm9wcyIsInNldHVwIiwicDUiLCJ3aW5kb3dXaWR0aCIsIndpbmRvd0hlaWdodCIsImNyZWF0ZUNhbnZhcyIsIldFQkdMIiwiZnJhbWVSYXRlIiwibG9hZEZvbnQiLCJiYWNrZ3JvdW5kIiwiZHVyYXRpb24iLCJnaWYiLCJsZW5ndGgiLCJNYXRoIiwiUEkiLCJkcmF3IiwicmVzaXplQ2FudmFzIiwidHJhbnNsYXRlIiwidGV4dEZvbnQiLCJzdHJva2VXZWlnaHQiLCJmaWxsIiwidGV4dFNpemUiLCJ0ZXh0Iiwic3Ryb2tlIiwibm9GaWxsIiwicHVzaCIsImVyYWQiLCJjb2xvclNjYWxpbmciLCJyYWRpdXMiLCJyb3RhdGUiLCJlbGxpcHNlIiwicG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Spirograph.tsx\n"));

/***/ })

});