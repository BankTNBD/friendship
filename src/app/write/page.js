"use client";

import { useState } from "react";
import { redirect } from 'next/navigation';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content';

import { write } from "@/app/resources/content";

export default function Page() {
    const [message, setMessage] = useState(write.default);
    const MySwal = withReactContent(Swal);

    const handleSend = async () => {
        if (!message.trim()) {
            MySwal.fire({
                icon: "error",
                title: write.alert.empty.title,
                text: write.alert.empty.text,
            });
            return;
        }

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/send-message`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message }),
            });

            if (res.ok) {
                MySwal.fire({
                    icon: "success",
                    title: write.alert.success.title,
                    text: write.alert.success.text,
                }).then(() => {
                    redirect('/');
                });
            } else {
                MySwal.fire({
                    icon: "error",
                    title: write.alert.error.title,
                    text: write.alert.error.text,
                });
            }
        } catch (error) {
            MySwal.fire({
                icon: "error",
                title: write.alert.error.title,
                text: write.alert.error.text,
            });
        }
    };

    return (
        <div className="p-5">
            <div className="flex flex-col justify-center items-center text-center w-full">
                <TextField
                    id="outlined-multiline-static"
                    label={write.label}
                    multiline
                    rows={20}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-10/12 m-10"
                />
                <Button variant="contained" color="success" onClick={handleSend} className="m-5">{write.button}</Button>
            </div>
        </div>
    );
}