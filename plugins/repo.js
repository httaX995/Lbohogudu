const {cmd , commands} = require('../command')

cmd({
    pattern: "repo",
    desc: "repo the bot",
    category: "main",
    react: "📡",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `╭━━━〔 ⚙️ DILSHAN MD - REPOSITORY INFO ⚙️ 〕━━━╮
┃ 📛 Bot Name   : DILSHAN MD
┃ 👤 Owner      : Dilshan Ashinsa
┃ 📞 Number     : +94 772 194 789
┃ 🧩 Version     : 2.0.0 BETA
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

🚫 Sorry, the repository link is currently unavailable!
🛠️ This project is still under development or private.

🔔 Stay tuned for updates...
🔗 Official repo will be shared soon!

╭━━━━〔 📢 OFFICIAL CHANNEL 〕━━━━╮
┃ 🔗 Join Now: https://whatsapp.com/channel/0029Vb5nAex2UPBGW79XCX1T
┃ 🌟 Get updates, features & news!
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

╭━━━━〔 💡 POWERED BY 〕━━━━╮
┃ 🔥 DILSHAN MD 🔥
╰━━━━━━━━━━━━━━━━━━━━━━━╯
`
await conn.sendMessage(from,{image:{url: `https://files.catbox.moe/zqu8s7.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
