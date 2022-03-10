let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
╭═════════════════
║╭──❉ *𝐁𝐈𝐎𝐃𝐀𝐓𝐀 𝐎𝐖𝐍𝐄𝐑* ❉───
║│➸ *Nama* : Alam 🌱
║│➸ *Umur* : 16
║│➸ *Kelas* :  9 SMP
║│➸ *Status* : "Day" is not important to me
║╰───────────────
╰════════════════
╭════════════════
║╭──❉ *𝐒𝐎𝐒𝐈𝐀𝐋 𝐌𝐄𝐃𝐈𝐀* ❉───
║│➸ *No.Owner* : wa.me/6285814079819
║│➸ *No.Bot* : wa.me/6285888083107
║│➸ *Chanel Youtube* : https://youtube.com/channel/UC2_TYQjXx5yvvXvPEW849mw
║│➸ *Gmail* : Xnxx@gmail.com
║│➸ *Github* : males isi
║╰────────────────
╰═════════════════
_Oke udah itu aja terimakasih_

`.trim()
conn.send3ButtonLoc(m.chat, await (await fetch(fla + 'Raditya')).buffer(), ext, 'Recoded By Raditya', 'Nomor Owner', '.owner', 'Donasi', '.donasi', 'Sewa Bot', '.sewa', m)

}
handler.help = ['infoowner', 'infocreator']
handler.tags = ['info']
handler.command = /^(infoowner|infocreator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
