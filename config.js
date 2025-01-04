/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ＰＲＯＪＥＣＴ ＮＡＭＥ:

 🤍✨𝐂 𝐘 𝐁 𝐄 𝐑-𝐑 𝐀 𝐉 𝐈 𝐁✨🤍
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

//--------------------------CYBER-RAJIB--------------------------------------
module.exports = {
    SESSION_ID: process.env.SESSION_ID || "DFRGFY6B#hmwkgyBOhJZFYSMo2X9_SaRMXaGKcGIKFw6p3RICoPU",
    CAPTION: process.env.CAPTION || "*©  Gᴇɴᴇʀᴀᴛᴇᴅ Bʏ ɪsʟᴀᴍɪᴄᴋ-ᴄʏʙᴇʀ-ᴄʜᴀᴛ*",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false", // Added auto-read configuration
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    CURRENT_STATUS: process.env.CURRENT_STATUS || "false",
    MODE: process.env.MODE || "public",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/5tsJvjjV/received-583147497311518.jpg",
    ALIVE_MSG: process.env.ALIVE_MSG || "ɪsʟᴀᴍɪᴄᴋ-ᴄʏʙᴇʀ-ᴄʜᴀᴛ ɪs ᴏɴʟɪɴᴇ 🛰️",
    ANTI_LINK: process.env.ANTI_LINK || "true",
    ANTI_BAD: process.env.ANTI_BAD || "true",
    PREFIX: process.env.PREFIX || "/",
    FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
    AUTO_REACT: process.env.AUTO_REACT || "false",
    HEART_REACT: process.env.HEART_REACT || "false",
    OWNER_REACT: process.env.OWNER_REACT || "false",
    BOT_NAME: process.env.BOT_NAME || "『 𝐂 𝐘 𝐁 𝐄 𝐑 』",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
    AUTO_STATUS__MSG: process.env.AUTO_STATUS__MSG || "`Status Seen By ✨🤍Islamick cyber chat bot 🕋✨ `",
    OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
//--------------MADE BY CYBER RAJIB 2025 Jan---------------->-
