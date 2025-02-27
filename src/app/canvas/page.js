"use client";

import React, { useState, useRef, useEffect } from "react";
import { Stage, Layer, Line } from "react-konva";
import { useColor } from "react-color-palette";
import Tools from "@/components/Tools";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';
import { redirect } from 'next/navigation';

import { canvas } from "@/app/resources/content";

export default function Page() {
  const MySwal = withReactContent(Swal);
  const [tool, setTool] = useState("pen");
  const [lines, setLines] = useState([]);
  const [color, setColor] = useColor("#000000");
  const isDrawing = useRef(false);
  const stageRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({ width: 800, height: 800 });

  useEffect(() => {
    const updateSize = () => setCanvasSize({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines((prevLines) => [...prevLines, { tool, color: color.hex, points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    if (!isDrawing.current) return;
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();

    setLines((prevLines) => {
      const newLines = [...prevLines];
      const lastLine = { ...newLines[newLines.length - 1] };
      lastLine.points = lastLine.points.concat([point.x, point.y]);
      newLines[newLines.length - 1] = lastLine;
      return newLines;
    });
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleUndo = () => {
    if (lines.length === 0) return;
    setLines((prevLines) => prevLines.slice(0, -1));
  };

  const handleClear = () => {
    setLines([]);
  };

  const handleSend = async () => {
    if (!stageRef.current) return;

    const uri = stageRef.current.toDataURL({ mimeType: "image/png" });
    const response = await fetch(uri);
    const blob = await response.blob();
    const file = new File([blob], "drawing.png", { type: "image/png" });
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/upload`, {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        MySwal.fire({
          icon: "success",
          title: canvas.alert.success.title,
          text: canvas.alert.success.text,
        }).then(() => {
          redirect('/');
        });
      } else {
        MySwal.fire({
          icon: "error",
          title: canvas.alert.error.title,
          text: canvas.alert.error.text,
        });
      }
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: canvas.alert.error.title,
        text: canvas.alert.error.text,
      });
    }
  };

  return (
    <div className="w-full h-max touch-none overflow-hidden bg-white flex justify-center flex-col items-center">
      <Stage
        ref={stageRef}
        width={canvasSize.width}
        height={canvasSize.height - 250}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
        style={{ border: "1px solid black" }}
      >
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={line.tool === "eraser" ? "white" : line.color}
              strokeWidth={5}
              tension={0.5}
              lineCap="round"
              lineJoin="round"
              globalCompositeOperation={line.tool === "eraser" ? "destination-out" : "source-over"}
            />
          ))}
        </Layer>
      </Stage>
      <Tools undo={handleUndo} clear={handleClear} color={color} setColor={setColor} tool={tool} setTool={setTool} />
      <Button variant="contained" color="success" onClick={handleSend}>{canvas.button}</Button>
    </div>
  );
}