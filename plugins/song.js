const config = require('../config')
const { cmd, commands } = require('../command')
const ytdl = require('ytdl-core')
const fs = require('fs')
const axios = require('axios')

cmd({
  pattern: "song",
  alias: ["music", "play"],
  react: "🎵",
  desc: "Play a song",
  category: "media",
  filename: __filename
}, async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
  try {
    if (!args[0]) return reply("Please provide a song name or YouTube link")

    let songName = args.join(" ")
    let url = await getYouTubeUrl(songName)

    if (!url) return reply("Song not found")

    let info = await ytdl.getInfo(url)
    let audioStream = ytdl(url, { filter: 'audioonly', quality: 'highestaudio' })

    await conn.sendMessage(from, { audio: { url: audioStream }, mimetype: 'audio/mpeg', caption: `> 🚀©POWERED BY DILSHAN MD👈` }, { quoted: mek })
  } catch (e) {
    console.log(e)
    reply(`${e}`)
  }
})

async function getYouTubeUrl(songName) {
  let url = `https:                                                                                                               
  let response = await axios.get(url)
  let videoId = response.data.items[0].id.videoId
  return `//www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(songName)}&key=YOUR_YOUTUBE_API_KEY`
  let response = await axios.get(url)
  let videoId = response.data.items[0].id.videoId
  return `https://www.youtube.com/watch?v=${videoId}`
}
