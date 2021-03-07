var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "Discord Dev / Designer",
state: "Discord Mod / Manager",
assets : {
large_image : "discord_large",
large_text : "DM for the following services!",
small_image : "discord",
small_text : "The Master Bot ©2021"
},
buttons : [{label : "My Social Medias" , url : "https://linktr.ee/ADK2618"},{label : "Join Ultimate Community" , url : "https://discord.gg/E2zrAT5vY7"},{label : "Invite The Master",url : "https://discord.com/api/oauth2/authorize?client_id=795669849820889119&permissions=8&scope=bot%20applications.commands"}]
}
})
})
client.login({ clientId : "810269127385022464" }).catch(console.error);