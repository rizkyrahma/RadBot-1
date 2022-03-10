let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*────────「 DONATE 」 ────────*

╭═══════════════
║╭─── [ DONASI ] ───
║│➸ _*UMOBILE*_✅ : 
║│- 6285888083107
║│
║│➸ _*DIGI*_✅: 
║│- 6285814079819
║│
║│➸ _*Owner bot*_
║│- wa.me/6285888083107
║╰────────────
╰═══════════════
`.trim(), 'Donasi jan asal mencet', 'Owner Bot💌', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
