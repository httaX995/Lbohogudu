const config = require('../config')
const { cmd, commands } = require('../command')

cmd({
  pattern: "vv",
  alias: ["vvinf"],
  react: "👀",
  desc: "Get bot info",
  category: "main",
  filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    let vvMessage = `VV Plugin Activated! 👋`
    await conn.sendMessage(from, { text: vvMessage }, { quoted: mek })
  } catch (e) {
    console.log(e)
    reply(`${e}`)
  }
})
