"use client";

import React, { useState } from "react";
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import UndoIcon from '@mui/icons-material/Undo';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import DrawIcon from '@mui/icons-material/Draw';
import BackspaceIcon from '@mui/icons-material/Backspace';
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import ColorPalette from "./ColorPalette";

import { tools } from "@/app/resources/content";

export default function Tools({ undo, clear, color, setColor, tool, setTool }) {
    const MySwal = withReactContent(Swal)
    const [buttonOpen, setButtonOpen] = useState(false);

    const handleTool = (event, newTool) => {
        setTool(newTool);
    };

    const handleClear = () => {
        MySwal.fire({
            icon: "warning",
            title: tools.alert.confirm.title,
            text: tools.alert.confirm.text,
            showCancelButton: true,
          }).then((result) => {
            if (result.isConfirmed) {
              clear();
            }
          }
        );
    };

        return (
            <div className="z-10 w-auto bottom-0 flex flex-row m-5 justify-center text-black">
                <Paper
                    elevation={0}
                    sx={(theme) => ({
                        display: 'flex',
                        border: `1px solid ${theme.palette.divider}`,
                        flexWrap: 'wrap',
                    })}
                >
                    <ToggleButtonGroup>
                        <ToggleButton onClick={undo}>
                            <Tooltip title={tools.undo}>
                                <UndoIcon />
                            </Tooltip>
                        </ToggleButton>
                        <ToggleButton onClick={handleClear}>
                            <Tooltip title={tools.clear}>
                                <DeleteForeverIcon />
                            </Tooltip>
                        </ToggleButton>

                    </ToggleButtonGroup>
                    <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
                    <ToggleButtonGroup
                        value={tool}
                        exclusive
                        onChange={handleTool}
                    >
                        <ToggleButton value="eraser">
                            <Tooltip title={tools.eraser}>
                                <BackspaceIcon />
                            </Tooltip>
                        </ToggleButton>
                        <ToggleButton value="pen" onClick={() => setButtonOpen(!buttonOpen)} >
                            <Tooltip title={tools.pen}>
                                <DrawIcon />
                            </Tooltip>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Paper>
                {buttonOpen && <ColorPalette color={color} setColor={setColor} setButtonOpen={setButtonOpen} />}
            </div>
        );
    }