require("./all/module")


//============== [  Dann BACK Share Sc BOT ⚡ ] ================\\
global.storename = "-"
global.dana = "085718281578"
global.qris = "https://telegra.ph/file/b5dd1c172f8a3ec0d0205.jpg"
global.owner = "Always Anan"
global.namabot = "Always Anan"
global.nomorbot = "Always Anan"
global.namaCreator = "Always Anan"
global.linkyt = "https://youtube.com/@alwaysanan"
global.autoJoin = false
global.antilink = false
global.versisc = '2.0'
global.delayjpm = 5500
global.codeInvite = ""
global.imageurl = ''
global.isLink = 'https://whatsapp.com/channel/0029Vb1QmfwFcowBSFMgLU32'
global.packname = "Sticker By Anan"
global.author = "- - \n\n\n\n\n\n"
global.jumlah = "5"
//============== [  AlwaysAnan ⚡ ] ================\\














//============== [  𝙈𝙚𝙭𝙯𝙓𝘿 ⚡ ] ================\\





















//============== [  𝙈𝙚𝙭𝙯𝙓𝘿 ⚡ ] ================\\







let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})