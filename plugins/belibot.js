let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 Minggu* :      *Rp 5.000*
╠➥ *2 Minggu* :      *Rp 10.000*
╠➥ *3 Minggu* : *Rp 15.000*
╠➥ *1 Bulan* :   *Rp 20.000*
║https://github.com/rizkyrahma/RadBot-1
╠═〘 𝐏𝐄𝐌𝐁𝐀𝐘𝐀𝐑𝐀𝐍 〙 ═
╠➥ Topup/Pin
║
╠═  ©2022 Rpg wabot-aq
╠═ Scrip original by Nurutomo
╠➥Klil Button Di Bawah
║
╠═〘 ALAM BOT 〙 ═`.trim(), '©AlamBotz', 'Digi', '#viadigi', 'Umobile', '#viaumobile', m)
}

handler.command = /^sewabot$/i

module.exports = handler
