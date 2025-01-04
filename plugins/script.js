/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ＰＲＯＪＥＣＴ ＮＡＭＥ:

 🤍✨𝐂 𝐘 𝐁 𝐄 𝐑-𝐑 𝐀 𝐉 𝐈 𝐁✨🤍
     ╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/ 






const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🎉",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*⟣━━━━━━━━━━━━━━━━━━━⟢*
   👨‍💻   *BOT OWNER:*
 
> *𝐌𝐝 𝐉𝐚𝐡𝐢𝐝 𝐇𝐚𝐬𝐚𝐧 𝐑𝐚𝐣𝐢𝐛*

   🔗   *CYBER REPO:*
 
> *https://github.com/islamickcyberchat/ISLAMICK-CYBER-WHAT-S-UP-BOT*

   🎀  *SUPPORT GROUP:* 🎀
 
> *https://chat.whatsapp.com/ILPujzXlPw34VIebncoVS1*

  🔎  *DEVELOPER NUMBER:*
 
> *wa.me/+8801859551262/*

*⟣━━━━━━━━━━━━━━━━━━━⟢*
> *🤍✨𝐂 𝐘 𝐁 𝐄 𝐑-𝐑 𝐀 𝐉 𝐈 𝐁✨🤍*
*⟣━━━━━━━━━━━━━━━━━━━⟢*
`
/*await conn.sendMessage(
            from,
            {
                image: { url: `https://i.postimg.cc/yNf7rQFw/prn.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363304325601080@newsletter',
                        newsletterName: '🤍✨𝐂 𝐘 𝐁 𝐄 𝐑-𝐑 𝐀 𝐉 𝐈 𝐁✨🤍',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio //https://github.com/cyberrajib999/DATABASE/raw/main/audios/menu.mp3

        await conn.sendMessage(from, { //https://github.com/cyberrajib999/DATABASE/raw/main/audios/menu.mp3
            audio: { url: 'https://github.com/cyberrajib999/DATABASE/raw/main/audios/menu.mp3' },//https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/sigma.m4a
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });*/
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});




//  CYBER-RAJIB
