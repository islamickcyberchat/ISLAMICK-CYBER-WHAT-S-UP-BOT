const { cmd } = require("../command");

cmd({
    pattern: "info",
    desc: "All About The Bot admin info",
    category: "fun",
    react: "😽",
    filename: __filename
}, async (conn, mek, m, { reply }) => {
    const familyList = `     *⟣────────────⟢*
 *[ • Developer:RAJIB]*
 *⟣────────────•⟢*
              
      *⟣┈───────────────⟢*
            🗂️ *REPOSITORY*
       https://github.com/islamickcyberchat/ISLAMICK-CYBER-WHAT-S-UP-BOT
      
      *⟣┈───────────────•*
            🔗 *PROJECT NAME*
           𝐈𝐬𝐥𝐚𝐦𝐢𝐜𝐤 𝐂𝐲𝐛𝐞𝐫 𝐂𝐡𝐚𝐭
      
      *⟣┈───────────────•*
             👨‍💻 *DEVELOPER*
     https://github.com/islamickcyberchat
       
      *⟣┈───────────────•*
             🧮 *RELEASE DATE*
            1 January  2025
       
      *⟣┈───────────────•*
            📩 *SUPPORT GROUP* 
      https://chat.whatsapp.com/ILPujzXlPw34VIebncoVS1
    
      *⟣┈───────────────•*
           🎀 *SUPPORT FB* 🎀
      https://www.facebook.com/cyberrajib
        
        ◦🪄  Hit Me Here :wa.me/+8801859551262* 
      *⟝┈───────────────⟞*
        *⟣────────────•⟢*
    `;

    try {
        // Envoi de la réponse avec l'image et la liste de la famille
        await conn.sendMessage(m.chat, {
            image: { url: "https://i.postimg.cc/HkG285Ln/CYBER.jpg" },
            caption: familyList.trim()
        }, { quoted: mek });
    } catch (error) {
        console.error(error);
        reply("❌ *An error occurred while fetching the family list. Please try again.*");
    }
});
