const config = require('../config')
const { cmd, commands } = require('../command')
const fs = require('fs')
const { downloadMediaMessage } = require('../lib/msg')

cmd({
  pattern: "sticker",
  alias: ["s", "st"],
  react: "😊",
  desc: "Convert image to sticker",
  category: "converter",
  filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    if (!quoted || !quoted.message.imageMessage) return reply("Please reply to an image")

    let buffer = await downloadMediaMessage(quoted)
    await conn.sendMessage(from, { sticker: buffer }, { quoted: mek })
  } catch (e) {
    console.log(e)
    reply(`${e}`)
  }
})
