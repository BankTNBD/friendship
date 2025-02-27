"use client";

import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import { useState } from "react";
import { redirect } from 'next/navigation'

export default function Page() {
    const [message, setMessage] = useState("To แบงก์");
    const MySwal = withReactContent(Swal)

    const handleSend = async () => {
        if (!message.trim()) {
            MySwal.fire({
                icon: "error",
                title: "อุ้ย!!",
                text: "กรุณาระบุข้อความ",
            });
            return;
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/send-message`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message }),
            });

            const data = await res.json();
            if (res.ok) {
                MySwal.fire({
                    icon: "success",
                    title: "ส่งข้อความสำเร็จ",
                    text: "ขอบคุณน้าาา จะร้องไห้ 🥹",
                }).then(() => {
                    redirect('/');
                });
            } else {
                MySwal.fire({
                    icon: "error",
                    title: "ส่งข้อความไม่ได้อ่า",
                    text: "ทักมาบอกที",
                });
            }
        } catch (error) {
            MySwal.fire({
                icon: "error",
                title: "ส่งข้อความไม่ได้อ่า",
                text: "ทักมาบอกที",
            });
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-auto mt-10">
            <TextField
                id="outlined-multiline-static"
                label="ข้อความ"
                multiline
                rows={20}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-10/12 m-5"
            />
            <Button variant="contained" color="success" onClick={handleSend}>
                ส่ง
            </Button>
        </div>
    );
}