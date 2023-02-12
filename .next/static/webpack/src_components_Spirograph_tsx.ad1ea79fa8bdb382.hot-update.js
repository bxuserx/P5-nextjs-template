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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ P5Sketch; }\n/* harmony export */ });\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/bx/code/js/P5-nextjs-template/src/components/Spirograph.tsx\";\n\n\n\nvar Sketch = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ \"node_modules_react-p5_build_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! react-p5 */ \"./node_modules/react-p5/build/index.js\", 23));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    modules: [\"../components/Spirograph.tsx -> \" + \"react-p5\"]\n  }\n}); //import CreateLoop from \"p5.createloop\";\n\n_c2 = Sketch;\nvar CreateLoop = next_dynamic__WEBPACK_IMPORTED_MODULE_0___default()(_c3 = function _c3() {\n  return __webpack_require__.e(/*! import() */ \"node_modules_p5_createloop_src_index_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! p5.createloop */ \"./node_modules/p5.createloop/src/index.js\", 23));\n}, {\n  ssr: false,\n  loadableGenerated: {\n    modules: [\"../components/Spirograph.tsx -> \" + \"p5.createloop\"]\n  }\n}); // ----- Global Variables ----- //\n\n_c4 = CreateLoop;\nvar Fr = 60; // FrameRate\n\nvar w;\nvar h;\nvar sassyFont; // ----- Algorithm Variables ----- //\n\nvar NUMSINES = 10; // how many of these things can we do at once?\n\nvar sines = new Array(NUMSINES); // an array to hold all the current angles\n\nvar rad; // an initial radius value for the central sine\n\nvar i; // a counter variable\n// play with these to get a sense of what's going on:\n\nvar fund = 0.005; // the speed of the central sine\n\nvar ratio = 1; // what multiplier for speed is each additional sine?\n\nvar alpha = 75; // how opaque is the tracing system\n\nvar trace = true; // are we tracing?\n\nvar backgroundColor = 40; // Defining the Sketch\n\nfunction P5Sketch(props) {\n  // Set up the Canvas and set the framerate. Also load images and text.\n  var setup = function setup(p5, ml5, CreateLoop) {\n    // Creating the canvas with initial values of browser width and height.\n    w = p5.windowWidth;\n    h = p5.windowHeight;\n    p5.createCanvas(w, h, p5.WEBGL);\n    p5.frameRate(Fr);\n    sassyFont = p5.loadFont(\"./SassyFrass-Regular.ttf\");\n    rad = h / 4; // compute radius for central circle\n\n    p5.background(backgroundColor); // clear the screen\n\n    CreateLoop({\n      duration: 3,\n      gif: true\n    });\n\n    for (var _i = 0; _i < sines.length; _i++) {\n      sines[_i] = Math.PI; // start EVERYBODY facing NORTH\n    }\n  }; // Redraw the canvas continuously at the framerate specified above.\n\n\n  var draw = function draw(p5) {\n    w = p5.windowWidth;\n    h = p5.windowHeight;\n    p5.resizeCanvas(w, h);\n    p5.translate(-w / 2, -h / 2); // Move from WebGL centered coordinates to standard X/Y\n    // Add text\n\n    p5.textFont(sassyFont);\n    p5.strokeWeight(1);\n    p5.fill(\"rgba(255, 255, 255, 0.01)\");\n    p5.textSize(20);\n    p5.text(\"Bx\", 10, 30);\n\n    if (!trace) {\n      p5.background(backgroundColor); // clear screen if showing geometry\n\n      p5.stroke(255); // black pen\n\n      p5.noFill(); // don't fill\n    } // MAIN ACTION\n\n\n    p5.push(); // start a transformation matrix\n\n    p5.translate(w / 2, h / 2); // move to middle of screen\n\n    for (var _i2 = 0; _i2 < sines.length; _i2++) {\n      var erad = 0; // radius for small \"point\" within circle... this is the 'pen' when tracing\n      // setup for tracing\n\n      if (trace) {\n        var colorScaling = p5[\"float\"](_i2) / sines.length;\n        p5.stroke(255 * colorScaling, alpha); // blue\n\n        p5.fill(255, 255, 255, alpha / 2); // white\n\n        erad = 5.0 * (1.0 - p5[\"float\"](_i2) / sines.length); // pen width will be related to which sine\n      }\n\n      var radius = rad / (_i2 + 1); // radius for circle itself\n\n      p5.rotate(sines[_i2]); // rotate circle\n\n      if (!trace) p5.ellipse(0, 0, radius * 2, radius * 2); // if we're simulating, draw the sine\n\n      p5.push(); // go up one level\n\n      p5.translate(0, radius); // move to sine edge\n\n      if (!trace) p5.ellipse(0, 0, 5, 5); // draw a little circle\n\n      if (trace) p5.ellipse(0, 0, erad, erad); // draw with erad if tracing\n\n      p5.pop(); // go down one level\n\n      p5.translate(0, radius); // move into position for next sine\n\n      sines[_i2] = (sines[_i2] + (fund + fund * _i2 * ratio)) % (2 * Math.PI); // update angle based on fundamental\n    }\n\n    p5.pop(); // pop down final transformation\n  }; // Render P5 Sketch\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Sketch, {\n    setup: setup,\n    draw: draw\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 97,\n    columnNumber: 10\n  }, this);\n}\n_c5 = P5Sketch;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"Sketch$dynamic\");\n$RefreshReg$(_c2, \"Sketch\");\n$RefreshReg$(_c3, \"CreateLoop$dynamic\");\n$RefreshReg$(_c4, \"CreateLoop\");\n$RefreshReg$(_c5, \"P5Sketch\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXNCLElBQUksRUFBRWU7RUFBNUI7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQUFQO0FBQ0Q7TUF2RXVCakIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3Bpcm9ncmFwaC50c3g/ZjYxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZHluYW1pYyBmcm9tIFwibmV4dC9keW5hbWljXCI7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBTa2V0Y2ggPSBkeW5hbWljKGltcG9ydChcInJlYWN0LXA1XCIpLCB7IHNzcjogZmFsc2UgfSk7XG4vL2ltcG9ydCBDcmVhdGVMb29wIGZyb20gXCJwNS5jcmVhdGVsb29wXCI7XG5jb25zdCBDcmVhdGVMb29wID0gZHluYW1pYyhpbXBvcnQoXCJwNS5jcmVhdGVsb29wXCIpLCB7IHNzcjogZmFsc2UgfSk7XG5cbi8vIC0tLS0tIEdsb2JhbCBWYXJpYWJsZXMgLS0tLS0gLy9cbmNvbnN0IEZyOiBudW1iZXIgPSA2MDsgLy8gRnJhbWVSYXRlXG5sZXQgdzogbnVtYmVyO1xubGV0IGg6IG51bWJlcjtcbmxldCBzYXNzeUZvbnQ6IGFueTtcblxuLy8gLS0tLS0gQWxnb3JpdGhtIFZhcmlhYmxlcyAtLS0tLSAvL1xubGV0IE5VTVNJTkVTID0gMTA7IC8vIGhvdyBtYW55IG9mIHRoZXNlIHRoaW5ncyBjYW4gd2UgZG8gYXQgb25jZT9cbmxldCBzaW5lcyA9IG5ldyBBcnJheShOVU1TSU5FUyk7IC8vIGFuIGFycmF5IHRvIGhvbGQgYWxsIHRoZSBjdXJyZW50IGFuZ2xlc1xubGV0IHJhZDogYW55OyAvLyBhbiBpbml0aWFsIHJhZGl1cyB2YWx1ZSBmb3IgdGhlIGNlbnRyYWwgc2luZVxubGV0IGk7IC8vIGEgY291bnRlciB2YXJpYWJsZVxuXG4vLyBwbGF5IHdpdGggdGhlc2UgdG8gZ2V0IGEgc2Vuc2Ugb2Ygd2hhdCdzIGdvaW5nIG9uOlxubGV0IGZ1bmQgPSAwLjAwNTsgLy8gdGhlIHNwZWVkIG9mIHRoZSBjZW50cmFsIHNpbmVcbmxldCByYXRpbyA9IDE7IC8vIHdoYXQgbXVsdGlwbGllciBmb3Igc3BlZWQgaXMgZWFjaCBhZGRpdGlvbmFsIHNpbmU/XG5sZXQgYWxwaGEgPSA3NTsgLy8gaG93IG9wYXF1ZSBpcyB0aGUgdHJhY2luZyBzeXN0ZW1cbmxldCB0cmFjZSA9IHRydWU7IC8vIGFyZSB3ZSB0cmFjaW5nP1xubGV0IGJhY2tncm91bmRDb2xvciA9IDQwO1xuXG4vLyBEZWZpbmluZyB0aGUgU2tldGNoXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQNVNrZXRjaChwcm9wczogYW55KSB7XG4gIC8vIFNldCB1cCB0aGUgQ2FudmFzIGFuZCBzZXQgdGhlIGZyYW1lcmF0ZS4gQWxzbyBsb2FkIGltYWdlcyBhbmQgdGV4dC5cbiAgY29uc3Qgc2V0dXAgPSAocDU6IGFueSwgbWw1OiBhbnksIENyZWF0ZUxvb3A6IGFueSkgPT4ge1xuICAgIC8vIENyZWF0aW5nIHRoZSBjYW52YXMgd2l0aCBpbml0aWFsIHZhbHVlcyBvZiBicm93c2VyIHdpZHRoIGFuZCBoZWlnaHQuXG4gICAgdyA9IHA1LndpbmRvd1dpZHRoO1xuICAgIGggPSBwNS53aW5kb3dIZWlnaHQ7XG4gICAgcDUuY3JlYXRlQ2FudmFzKHcsIGgsIHA1LldFQkdMKTtcblxuICAgIHA1LmZyYW1lUmF0ZShGcik7XG4gICAgc2Fzc3lGb250ID0gcDUubG9hZEZvbnQoXCIuL1Nhc3N5RnJhc3MtUmVndWxhci50dGZcIik7XG5cbiAgICByYWQgPSBoIC8gNDsgLy8gY29tcHV0ZSByYWRpdXMgZm9yIGNlbnRyYWwgY2lyY2xlXG4gICAgcDUuYmFja2dyb3VuZChiYWNrZ3JvdW5kQ29sb3IpOyAvLyBjbGVhciB0aGUgc2NyZWVuXG5cbiAgICBDcmVhdGVMb29wKHsgZHVyYXRpb246IDMsIGdpZjogdHJ1ZSB9KTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2luZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHNpbmVzW2ldID0gTWF0aC5QSTsgLy8gc3RhcnQgRVZFUllCT0RZIGZhY2luZyBOT1JUSFxuICAgIH1cbiAgfTtcblxuICAvLyBSZWRyYXcgdGhlIGNhbnZhcyBjb250aW51b3VzbHkgYXQgdGhlIGZyYW1lcmF0ZSBzcGVjaWZpZWQgYWJvdmUuXG4gIGNvbnN0IGRyYXcgPSAocDU6IGFueSkgPT4ge1xuICAgIHcgPSBwNS53aW5kb3dXaWR0aDtcbiAgICBoID0gcDUud2luZG93SGVpZ2h0O1xuICAgIHA1LnJlc2l6ZUNhbnZhcyh3LCBoKTtcbiAgICBwNS50cmFuc2xhdGUoLXcgLyAyLCAtaCAvIDIpOyAvLyBNb3ZlIGZyb20gV2ViR0wgY2VudGVyZWQgY29vcmRpbmF0ZXMgdG8gc3RhbmRhcmQgWC9ZXG5cbiAgICAvLyBBZGQgdGV4dFxuICAgIHA1LnRleHRGb250KHNhc3N5Rm9udCk7XG4gICAgcDUuc3Ryb2tlV2VpZ2h0KDEpO1xuICAgIHA1LmZpbGwoYHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wMSlgKTtcbiAgICBwNS50ZXh0U2l6ZSgyMCk7XG4gICAgcDUudGV4dChgQnhgLCAxMCwgMzApO1xuXG4gICAgaWYgKCF0cmFjZSkge1xuICAgICAgcDUuYmFja2dyb3VuZChiYWNrZ3JvdW5kQ29sb3IpOyAvLyBjbGVhciBzY3JlZW4gaWYgc2hvd2luZyBnZW9tZXRyeVxuICAgICAgcDUuc3Ryb2tlKDI1NSk7IC8vIGJsYWNrIHBlblxuICAgICAgcDUubm9GaWxsKCk7IC8vIGRvbid0IGZpbGxcbiAgICB9XG5cbiAgICAvLyBNQUlOIEFDVElPTlxuICAgIHA1LnB1c2goKTsgLy8gc3RhcnQgYSB0cmFuc2Zvcm1hdGlvbiBtYXRyaXhcbiAgICBwNS50cmFuc2xhdGUodyAvIDIsIGggLyAyKTsgLy8gbW92ZSB0byBtaWRkbGUgb2Ygc2NyZWVuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgZXJhZCA9IDA7IC8vIHJhZGl1cyBmb3Igc21hbGwgXCJwb2ludFwiIHdpdGhpbiBjaXJjbGUuLi4gdGhpcyBpcyB0aGUgJ3Blbicgd2hlbiB0cmFjaW5nXG4gICAgICAvLyBzZXR1cCBmb3IgdHJhY2luZ1xuICAgICAgaWYgKHRyYWNlKSB7XG4gICAgICAgIGxldCBjb2xvclNjYWxpbmcgPSBwNS5mbG9hdChpKSAvIHNpbmVzLmxlbmd0aDtcbiAgICAgICAgcDUuc3Ryb2tlKDI1NSAqIGNvbG9yU2NhbGluZywgYWxwaGEpOyAvLyBibHVlXG4gICAgICAgIHA1LmZpbGwoMjU1LCAyNTUsIDI1NSwgYWxwaGEgLyAyKTsgLy8gd2hpdGVcbiAgICAgICAgZXJhZCA9IDUuMCAqICgxLjAgLSBwNS5mbG9hdChpKSAvIHNpbmVzLmxlbmd0aCk7IC8vIHBlbiB3aWR0aCB3aWxsIGJlIHJlbGF0ZWQgdG8gd2hpY2ggc2luZVxuICAgICAgfVxuICAgICAgbGV0IHJhZGl1cyA9IHJhZCAvIChpICsgMSk7IC8vIHJhZGl1cyBmb3IgY2lyY2xlIGl0c2VsZlxuICAgICAgcDUucm90YXRlKHNpbmVzW2ldKTsgLy8gcm90YXRlIGNpcmNsZVxuICAgICAgaWYgKCF0cmFjZSkgcDUuZWxsaXBzZSgwLCAwLCByYWRpdXMgKiAyLCByYWRpdXMgKiAyKTsgLy8gaWYgd2UncmUgc2ltdWxhdGluZywgZHJhdyB0aGUgc2luZVxuICAgICAgcDUucHVzaCgpOyAvLyBnbyB1cCBvbmUgbGV2ZWxcbiAgICAgIHA1LnRyYW5zbGF0ZSgwLCByYWRpdXMpOyAvLyBtb3ZlIHRvIHNpbmUgZWRnZVxuICAgICAgaWYgKCF0cmFjZSkgcDUuZWxsaXBzZSgwLCAwLCA1LCA1KTsgLy8gZHJhdyBhIGxpdHRsZSBjaXJjbGVcbiAgICAgIGlmICh0cmFjZSkgcDUuZWxsaXBzZSgwLCAwLCBlcmFkLCBlcmFkKTsgLy8gZHJhdyB3aXRoIGVyYWQgaWYgdHJhY2luZ1xuICAgICAgcDUucG9wKCk7IC8vIGdvIGRvd24gb25lIGxldmVsXG4gICAgICBwNS50cmFuc2xhdGUoMCwgcmFkaXVzKTsgLy8gbW92ZSBpbnRvIHBvc2l0aW9uIGZvciBuZXh0IHNpbmVcbiAgICAgIHNpbmVzW2ldID0gKHNpbmVzW2ldICsgKGZ1bmQgKyBmdW5kICogaSAqIHJhdGlvKSkgJSAoMiAqIE1hdGguUEkpOyAvLyB1cGRhdGUgYW5nbGUgYmFzZWQgb24gZnVuZGFtZW50YWxcbiAgICB9XG5cbiAgICBwNS5wb3AoKTsgLy8gcG9wIGRvd24gZmluYWwgdHJhbnNmb3JtYXRpb25cbiAgfTtcblxuICAvLyBSZW5kZXIgUDUgU2tldGNoXG4gIHJldHVybiA8U2tldGNoIHNldHVwPXtzZXR1cH0gZHJhdz17ZHJhd30gLz47XG59XG4iXSwibmFtZXMiOlsiZHluYW1pYyIsIlJlYWN0IiwiU2tldGNoIiwic3NyIiwiQ3JlYXRlTG9vcCIsIkZyIiwidyIsImgiLCJzYXNzeUZvbnQiLCJOVU1TSU5FUyIsInNpbmVzIiwiQXJyYXkiLCJyYWQiLCJpIiwiZnVuZCIsInJhdGlvIiwiYWxwaGEiLCJ0cmFjZSIsImJhY2tncm91bmRDb2xvciIsIlA1U2tldGNoIiwicHJvcHMiLCJzZXR1cCIsInA1IiwibWw1Iiwid2luZG93V2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJjcmVhdGVDYW52YXMiLCJXRUJHTCIsImZyYW1lUmF0ZSIsImxvYWRGb250IiwiYmFja2dyb3VuZCIsImR1cmF0aW9uIiwiZ2lmIiwibGVuZ3RoIiwiTWF0aCIsIlBJIiwiZHJhdyIsInJlc2l6ZUNhbnZhcyIsInRyYW5zbGF0ZSIsInRleHRGb250Iiwic3Ryb2tlV2VpZ2h0IiwiZmlsbCIsInRleHRTaXplIiwidGV4dCIsInN0cm9rZSIsIm5vRmlsbCIsInB1c2giLCJlcmFkIiwiY29sb3JTY2FsaW5nIiwicmFkaXVzIiwicm90YXRlIiwiZWxsaXBzZSIsInBvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Spirograph.tsx\n"));

/***/ })

});