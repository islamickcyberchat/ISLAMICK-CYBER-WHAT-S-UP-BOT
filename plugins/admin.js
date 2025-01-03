/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ＰＲＯＪＥＣＴ ＮＡＭＥ:

 🤍✨𝐂 𝐘 𝐁 𝐄 𝐑-𝐑 𝐀 𝐉 𝐈 𝐁✨🤍
 ╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/



const config = require('../config');


const {cmd , commands} = require('../command')
cmd({
    pattern: "admin",
    alias: ["CYBER-RAJIB"],
    react: "😍",
    desc: "get owner dec",
    category: "admin",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `━━━━━━━━━━━━━━━━━━━━━━━━

*আসসালামু আলাইকুম-!!🖤💫 ${pushname}*\n\n *I AM CYBER-RAJIB*\n
I am  WhatsApp Based Multi Device Bot.\nMy sole purpose is to remove the burden or cost of purchusing data bundle to download Songs, Apps, Videos & Movies by  using whatsapp  bundles.

━━━━━━━━━━━━━━━━━━━━━━━━

 ❤️᭄ | ༆-✿ Github Fork..!!༊࿐
•—»✨ https://github.com/islamickcyberchat/ISLAMICK-CYBER-WHAT-S-UP-BOT

  
 🩷᭄ | ༆-✿FOLLOW OWNER .!!༊࿐
•—»✨ https://github.com/islamickcyberchat

🧡᭄ | ༆-✿OWNER'S WHATSAPP..!!༊࿐
> https://wa.me/+8801859551262/?text=Rajib+Fan+Here


💜᭄ | ༆-✿SUPPORT GROUP .!!༊࿐
•—»✨ https://chat.whatsapp.com/ILPujzXlPw34VIebncoVS1

💙᭄ | ༆-✿FOLLOW FACEBOOK .!!༊࿐
•—»✨ https://www.facebook.com/cyberrajib

💖᭄ | ༆-✿FOLLOW FB PAGE .!!༊࿐
•—»✨ https://www.facebook.com/profile.php?id=100081939442749

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 *[*RELEASE DATE* - *1 January  2025*]*
 
>✮͢ꓸ⃟ꓸ⃟ꓸ✮͢🩷CYBER-RAJIB ≛⃝🪽⃪𝄞⋆⃝

━━━━━━━━━━━━━━━━━━━━━━━━
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
