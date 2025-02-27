const home = {
    header: {
        title: "My Friendship",
        subtitle: "สวัสดีทุกคน 😚",
        description: "อยากให้ทุกคนมาเขียน Friendship กันเยอะๆน้าค้าบ"
    },
    cards: [
        {
            title: "วาดรูป",
            subtitle: "Drawing",
            description: "ใครอยากวาดอะไรให้ วาดมาได้เลยน้า",
            button: "เริ่มวาด",
            link: "/canvas"
        },
        {
            title: "เขียนข้อความ",
            subtitle: "Writing",
            description: "ใครอยากเขียนอะไรให้ เขียนมาได้เลยน้า",
            button: "เริ่มเขียน",
            link: "/write"
        }
    ]
};

const canvas = {
    button: "ส่ง",
    alert: {
        success: {
            title: "ส่ง friendship สำเร็จ",
            text: "ขอบคุณน้าาา จะร้องไห้ 🥹"
        },
        error: {
            title: "ส่งข้อความไม่ได้อ่า",
            text: "ทักมาบอกที"
        }
    }
};

const write = {
    default: "To แบงก์",
    button: "ส่ง",
    label: "ข้อความ",
    alert: {
        success: {
            title: "ส่ง friendship สำเร็จ",
            text: "ขอบคุณน้าาา จะร้องไห้ 🥹"
        },
        error: {
            title: "ส่งข้อความไม่ได้อ่า",
            text: "ทักมาบอกที"
        },
        empty: {
            title: "อุ้ย!!",
            text: "เขียนข้อความก่อนน้าาา"
        }
    }
};

const tools = {
    undo: "ย้อนกลับ",
    clear: "ล้าง",
    eraser: "ลบ",
    pen: "วาด",
    alert: {
        confirm: {
            title: "ล้าง",
            text: "แน่ใจว่าจะล้างทั้งหมดหรือไม่?"
        }
    }
};

const nav = {
    home: "หน้าหลัก",
    canvas: "วาด",
    write: "ข้อความ"
};

export { home, canvas, write, tools, nav };