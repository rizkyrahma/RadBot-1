let handler = function (m) {
	this.sendContact(m.chat, '6285888083107', 'Owner AlamBotz :)', m)
}

handler.customPrefix = ['Owner BOT'] 
handler.command = new RegExp

module.exports = handler
