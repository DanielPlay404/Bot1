import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `[ ⚠️ ] Los comandos +18 estan desactivados en este grupo, si es administrador de este grupo y desea activarlos escriba #enable modohorny para activar*`
if (!args[0]) throw `𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝙑𝘼𝙇𝙄𝘿𝙊 𝘿𝙀 𝙓𝙉𝙓𝙓, 𝙀𝙅𝙀𝙈𝙋𝙇𝙊: ${usedPrefix + command} https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*`
try {
await delay(6000)
await conn.reply(m.chat, '➤ 𝙀𝙎𝙋𝙀𝙍𝙀 𝙋𝙊𝙍 𝙁𝘼𝙑𝙊𝙍 𝘼 𝙌𝙐𝙀 𝙎𝙀 𝙀𝙉𝙑𝙄𝙀 𝙀𝙇 𝙑𝙄𝘿𝙀𝙊', m)
let res = await xnxxdl(args[0])
let json = await res.result.files
conn.sendMessage(m.chat, { document: { url: json.high }, mimetype: 'video/mp4', fileName: res.result.title }, { quoted: m })
} catch (e) {
m.reply(`${lenguajeGB['smsAvisoFG']()}𝙉𝙊 𝙁𝙐𝙉𝘾𝙄𝙊𝙉𝙊, 𝙐𝙎𝙀 𝙐𝙉 𝙀𝙉𝙇𝘼𝘾𝙀 𝘿𝙀 𝙓𝙉𝙓𝙓, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼 𝙄𝙉𝙏𝙀𝙉𝙏𝘼𝙍`)
}}
handler.command = /^(xnxxdl)$/i
handler.level = 9
handler.money = 1400
handler.register = true
export default handler
const delay = time => new Promise(res => setTimeout(res, time))

async function xnxxdl(URL) {
return new Promise((resolve, reject) => {
fetch(`${URL}`, {method: 'get'}).then(res => res.text()).then(res => {
let $ = cheerio.load(res, { xmlMode: false  });
const title = $('meta[property="og:title"]').attr('content');
const duration = $('meta[property="og:duration"]').attr('content');
const image = $('meta[property="og:image"]').attr('content');
const videoType = $('meta[property="og:video:type"]').attr('content');
const videoWidth = $('meta[property="og:video:width"]').attr('content');
const videoHeight = $('meta[property="og:video:height"]').attr('content');
const info = $('span.metadata').text();
const videoScript = $('#video-player-bg > script:nth-child(6)').html();
const files = {
low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1], };
resolve({ status: 200, result: { title, URL, duration, image, videoType, videoWidth, videoHeight, info, files }})}).catch(err => reject({code: 503, status: false, result: err }))})}
