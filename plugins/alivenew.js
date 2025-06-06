//========= alive command ===========

const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👋",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let des = `*👋 Hello ${pushname}*

| 🌟 *Dilshan MD - WhatsApp MultiDevice Bot* 🌟  

🛡️ 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 𝐂𝐇𝐀𝐍𝐍𝐄𝐋
🔗 https://whatsapp.com/channel/0029Vb5nAex2UPBGW79XCX1T

👥 𝐎𝐅𝐅𝐈𝐂𝐈𝐀𝐋 𝐆𝐑𝐎𝐔𝐏
🔗 https://chat.whatsapp.com/GOZ6NVJYSvXKWj7m7hmruQ

⚡ *Powered by DILSHAN MD*
🔧 Version: 2.0.0 Beta  
🌐 Platform: Replit / MultiDevice  
👑 Developer: Dilshan Ashinsa
 
> 📍©POWERD BY DILSHAN ASHINSA📍
`
return await conn.sendMessage(from,{image: {url: "https://i.ibb.co/zgCFFCX/SulaMd.jpg"},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
