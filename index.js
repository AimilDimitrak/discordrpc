var rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })
client.on('ready', () => {
client.request('SET_ACTIVITY', {
pid: process.pid,
activity : {
details : "2nd Text shown in presence",
state: "3rd Text shown in the presence",
assets : {
large_image : "Asset for the Large image",
large_text : "Large image's text",
small_image : "Asset for Small Image",
small_text : "Small image's text"
},
buttons : [{label : "1st Button Name" , url : "1st Button URL"},{label : "2nd Button Name",url : "2nd Button URL"}]
})
})
client.login({ clientId : "Your App's Client ID (will have the assets)" }).catch(console.error);
