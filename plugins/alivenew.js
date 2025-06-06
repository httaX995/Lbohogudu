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

| ┏━━━❖•ೋ°🩵 *DILSHAN-MD BOT* 🩵°ೋ•❖━━━┓  
🤖 *Multidevice WhatsApp Bot | V2.0.0 (Beta)*  🚀
┏━━━━━━━━━━━━━━━━━┓  
┃ 👑 𝙊𝙬𝙣𝙚𝙧 : *Dilshan Ashinsa*  
┃ 🌐 𝙋𝙡𝙖𝙩𝙛𝙤𝙧𝙢 : *Replit | Node.js*  
┃ 📟 𝙏𝙮𝙥𝙚 : *Public MultiDevice*  
┗━━━━━━━━━━━━━━━━━┛  

📌 *Official Links:*  
╭───────────────╮  
│📣 𝙅𝙤𝙞𝙣 𝙊𝙪𝙧 𝘾𝙝𝙖𝙣𝙣𝙚𝙡  
│🔗 https://whatsapp.com/channel/0029Vb5nAex2UPBGW79XCX1T  
│👥 𝙅𝙤𝙞𝙣 𝙊𝙪𝙧 𝙂𝙧𝙤𝙪𝙥  
│🔗 https://chat.whatsapp.com/GOZ6NVJYSvXKWj7m7hmruQ  
╰───────────────╯    

🔌 *Powered By* — *DILSHAN MD*
`
return await conn.sendMessage(from,{image: {url: "https://files.catbox.moe/uod3xi.jpg"},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
