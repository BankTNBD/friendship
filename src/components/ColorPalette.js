"use client";

import React, { useState } from "react";
import { ColorPicker, useColor } from "react-color-palette";
import CloseIcon from '@mui/icons-material/Close';

import "react-color-palette/css";

export default function ColorPalette({ color, setColor, setButtonOpen}) {

  return (
    <div className="w-64 bottom-5 right-5 fixed">
      <CloseIcon className="text-center w-64 m-2 cursor-pointer" onClick={() => setButtonOpen(false)} />
      <ColorPicker color={color} onChange={setColor} height={40} hideInput={["rgb", "hsv"]} />
    </div>
  );
}