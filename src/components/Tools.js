"use client";

import React, { useState } from "react";
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Tooltip from '@mui/material/Tooltip';
import UndoIcon from '@mui/icons-material/Undo';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import DrawIcon from '@mui/icons-material/Draw';
import BackspaceIcon from '@mui/icons-material/Backspace';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import ColorPalette from "./ColorPalette";

export default function Tools({ undo, clear, color, setColor, tool, setTool }) {
    const [buttonOpen, setButtonOpen] = useState(false);
    const [openConfirm, setOpenConfirm] = useState(false);

    const handleTool = (event, newTool) => {
        setTool(newTool);
    };

    const handleClear = () => {
        openConfirm ? setOpenConfirm(false) : setOpenConfirm(true);
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
                            <Tooltip title="ย้อนกลับ">
                                <UndoIcon />
                            </Tooltip>
                        </ToggleButton>
                        <ToggleButton onClick={handleClear}>
                            <Tooltip title="ล้าง">
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
                            <Tooltip title="ลบ">
                                <BackspaceIcon />
                            </Tooltip>
                        </ToggleButton>
                        <ToggleButton value="pen" onClick={() => setButtonOpen(!buttonOpen)} >
                            <Tooltip title="วาด">
                                <DrawIcon />
                            </Tooltip>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Paper>
                {buttonOpen && <ColorPalette color={color} setColor={setColor} setButtonOpen={setButtonOpen} />}
                <Dialog
                    open={openConfirm}
                >
                    <DialogTitle>
                        {"คุณแน่ใจหรือไม่?"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            คุณแน่ใจหรือไม่ที่จะลบทุกอย่าง?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClear}>ยกเลิก</Button>
                        <Button onClick={() => {
                            clear();
                            setOpenConfirm(false);
                        }} autoFocus>
                            แน่ใจ
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }