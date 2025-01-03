/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ＰＲＯＪＥＣＴ ＮＡＭＥ:

 🤍✨𝐂 𝐘 𝐁 𝐄 𝐑-𝐑 𝐀 𝐉 𝐈 𝐁✨🤍
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/ 





const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "menu2",
    react: "⚡",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `*┋* ${commands[i].pattern}\n`;
 }
}

let madeMenu = `*▢─────ISLAMICK-CYBER-WHAT-S-UP-BOT*,  ${pushname}*
*▢─────────────────▢*

━━━━━━━━━━━━━━━━━━━━
> CYBER COMMAND LIST 2
━━━━━━━━━━━━━━━━━━━━
 *https://github.com/islamickcyberchat/ISLAMICK-CYBER-WHAT-S-UP-BOT*
━━━━━━━━━━━━━━━━━━━━

*🤍✨𝐂 𝐘 𝐁 𝐄 𝐑-𝐑 𝐀 𝐉 𝐈 𝐁✨🤍*

*▢───────────────▢*
  ◈  *ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅs*
*┕───────────────▢*
*╭───────────────▢*
  ◈ r${menu.download}
*┕───────────────▢*

*╭───────────────▢*
*◈* *ᴍᴀɪɴ ᴄᴏᴍᴍᴀɴᴅs*
*┕───────────────▢*
*╭───────────────▢*
  ◈ ${menu.main}
*┕───────────────▢*

*╭───────────────▢*
*◈* *ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅs*
*┕───────────────▢*

*╭───────────────▢*
  ◈ ${menu.group}
*┕───────────────▢*

*╭───────────────▢*
*◈* *ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅs*
*┕───────────────▢*

*╭───────────────▢*
  ◈ ${menu.owner}
*┕───────────────▢*

*╭───────────────▢*
*◈* *ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅs*
*┕───────────────▢*

*╭───────────────▢*
  ◈ ${menu.convert}
*┕───────────────▢*

*╭─────────────────▢*
*◈* *sᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅs*
*┕─────────────────▢*

*╭───────────────▢*
  ◈  ${menu.search}
*┕───────────────▢*

*▢▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▢*⁠⁠⁠⁠

> *🤍✨𝐂 𝐘 𝐁 𝐄 𝐑-𝐑 𝐀 𝐉 𝐈 𝐁✨🤍*

*▢▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▢
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
