require("./global")

const mess = {
   wait: "*`Sabar Kak`*",
   success: "*`Berhasil Kak!!!`*",
   on: "*`[ On Feature ]` - Sudah Aktif*", 
   off: "*`[ Off Feature ]` - Sudah Off*",
   query: {
       text: "*`Long Textnya Mana Maniss`*",
       link: "*`Linknya Mana Etdah`*",
   },
   error: {
       fitur: "*`Mohon Maaf Kak Fitur Eror Silahkan Chat Developer Bot Agar Bisa Segera Diperbaiki`*",
   },
   only: {
       group: "*`Fitur Nya Di Grub Doang Ya Kakk!!!`*",
       private: "`Fitur Nya Di Privat Chat Ya Kakk!!!`",
       owner: "*`Kakak Bukan Owner,Owner Saya Kaizen Ganteng!!!`*",
       admin: "*`Fitur Ini Hanya Untuk Etmin Tercintaa!!!`*",
       badmin: "*`Tak Boleh Bot Harus Jadi Etmin Dulu!!!`*",
       premium: "*`Cuman Bisa Untuk Premium Only Ya Kakk!!!`*",
       murbug: "*`Cuman Bisa Untuk Murbug Only Ya Kakk!!!`*", 
   }
}

global.mess = mess

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})