import dynamic from "next/dynamic";
import React, { useEffect, useMemo } from "react";
const Sketch = dynamic(import("react-p5"), { ssr: false });

// Instantiate an initial window size, image, and font that will be updated
const Fr: number = 60; // FrameRate
let w: number;
let h: number;
let sassyFont: any;
let myImage: any;

// The p5 Sketch is composed of the 'Preload', 'Setup', and 'Draw' functions. Only setup() and draw() are included here.
// 'P5' Package must be imported into each function explicity, including external functions.
export default function P5Sketch(props: any) {
  // Set up the Canvas and set the framerate. Also load images and text.
  const setup = (p5: any, ml5: any) => {
    // Creating the canvas with initial values of browser width and height.
    w = p5.windowWidth;
    h = p5.windowHeight;
    p5.createCanvas(w, h, p5.WEBGL);

    p5.frameRate(Fr);

    // Load a font
    sassyFont = p5.loadFont("./SassyFrass-Regular.ttf");

    // Load an Image: (defaults to look in /public/ folder)
    myImage = p5.loadImage("./next.svg");
  };

  // Redraw the canvas continuously at the framerate specified above.
  const draw = (p5: any) => {
    // Defining the canvas dimensions and background, must redraw every frame.
    w = p5.windowWidth;
    h = p5.windowHeight;
    p5.resizeCanvas(w, h);
    p5.background(`rgba(80, 80, 80, 1)`);
    p5.translate(-w / 2, -h / 2); // Move from WebGL centered coordinates to standard X/Y

    // Show Cursor
    p5.stroke(`rgba(255, 255, 255, 1)`);
    p5.ellipse(p5.mouseX, p5.mouseY, 35, 35);

    // Add text
    p5.textFont(sassyFont);
    p5.strokeWeight(1);
    p5.fill(`rgba(255, 255, 255, 1)`);
    p5.textSize(32);
    p5.text(`Width: ${w}`, 10, 30);
    p5.text(`Height: ${h}`, 10, 70);

    // Add image
    p5.image(myImage, 10, 130, 150, 40);

    // Use External Function to draw a red outline on the canvas.
    outlineDraw(p5, w, h);
  };

  // Render P5 Sketch
  return <Sketch setup={setup} draw={draw} />;
}

const outlineDraw = (p5: any, xWidth: number, yHeight: number) => {
  p5.strokeWeight(10);
  p5.stroke(`rgba(255, 80, 80, 0.75)`);
  p5.line(0, 0, xWidth, 0);
  p5.line(xWidth, 0, xWidth, yHeight);
  p5.line(xWidth, yHeight, 0, yHeight);
  p5.line(0, yHeight, 0, 0);
};
