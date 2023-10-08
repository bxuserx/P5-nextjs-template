import dynamic from "next/dynamic";
import React, { useEffect, useMemo } from "react";
const Sketch = dynamic(import("react-p5"), { ssr: false });
//import createLoop from "p5.createloop";
//const createLoop = dynamic(import("p5.createloop"), { ssr: false });

// ----- Global Variables ----- //
const Fr: number = 120; // FrameRate
let w: number;
let h: number;
let sassyFont: any;
let rad: any; // an initial radius value for the central sine
let i; // a counter variable

// ----- Algorithm Variables ----- //
const frameStop = 50000;
let centerCircle = false;
let NUMSINES = 15; // how many of these things can we do at once?
let sines = new Array(NUMSINES); // an array to hold all the current angles
// play with these to get a sense of what's going on:
let fund = 0.001; // the speed of the central sine (default 0.005), 0.03 for decent understanding of complex patterns
let ratio = 2; // what multiplier for speed is each additional sine? (default 0.5)
let alpha = 75; // how opaque is the tracing system
let trace = true; // are we tracing?
let backgroundColor = 40;
let lineThickness = 10; // (default 15)
const thicknessScaling = 0.3; // Scaling of line thickness radially (default [0 : 1 : 100])
let radiusMultiplier = 0.55; // Multiplier of radial distance (default 1)

// Defining the Sketch
export default function P5Sketch(props: any) {
  // Set up the Canvas and set the framerate. Also load images and text.
  const setup = (p5: any, createLoop: any) => {
    // Creating the canvas with initial values of browser width and height.
    w = p5.windowWidth;
    h = p5.windowHeight;
    p5.createCanvas(w, h, p5.WEBGL);

    p5.frameRate(Fr);
    sassyFont = p5.loadFont("./SassyFrass-Regular.ttf");

    rad = (h * radiusMultiplier) / 4; // compute radius for central circle
    p5.background(backgroundColor); // clear the screen

    //createLoop({ duration: 3, gif: true });

    for (let i = 0; i < sines.length; i++) {
      sines[i] = Math.PI; // start EVERYBODY facing NORTH
    }
  };

  // Redraw the canvas continuously at the framerate specified above.
  const draw = (p5: any) => {
    w = p5.windowWidth;
    h = p5.windowHeight;
    p5.resizeCanvas(w, h);
    p5.translate(-w / 2, -h / 2); // Move from WebGL centered coordinates to standard X/Y

    // Add text
    p5.textFont(sassyFont);
    p5.strokeWeight(1);
    p5.fill(`rgba(255, 255, 255, 0.01)`);
    p5.textSize(20);
    p5.text(`Bx`, w - 40, h - 20);

    if (!trace) {
      p5.background(backgroundColor); // clear screen if showing geometry
      p5.stroke(255); // black pen
      p5.noFill(); // don't fill
    }

    // MAIN ACTION
    p5.push(); // start a transformation matrix
    p5.translate(w / 2, h / 2); // move to middle of screen

    for (let i = 0; i < sines.length; i++) {
      let erad = 0; // radius for small "point" within circle... this is the 'pen' when tracing
      // setup for tracing
      if (trace) {
        let colorScaling = p5.float(i) / sines.length;
        p5.stroke(255 * colorScaling, alpha); // blue
        p5.fill(255, 255, 255, alpha / 2); // white
        erad = lineThickness / (i * thicknessScaling + 1); // pen width will be related to which sine
      }
      let radius = rad / (i + 1); // radius for circle itself
      p5.rotate(sines[i]); // rotate circle
      if (!trace) p5.ellipse(0, 0, radius * 2, radius * 2); // if we're simulating, draw the sine
      p5.push(); // go up one level
      p5.translate(0, radius); // move to sine edge
      if (!trace) p5.ellipse(0, 0, 5, 5); // draw a little circle
      if (i == 0) {
        centerCircle ? p5.ellipse(0, 0, erad, erad) : null;
      } else {
        p5.ellipse(0, 0, erad, erad);
      } // draw with erad if tracing. centerCircle == FALSE then don't draw it.
      p5.pop(); // go down one level
      p5.translate(0, radius); // move into position for next sine
      sines[i] = (sines[i] + (fund + fund * i * ratio)) % (2 * Math.PI); // update angle based on fundamental
    }

    p5.pop(); // pop down final transformation
    if (p5.frameCount > frameStop) {
      p5.noLoop();
    }
  };

  // Render P5 Sketch
  return <Sketch setup={setup} draw={draw} />;
}
