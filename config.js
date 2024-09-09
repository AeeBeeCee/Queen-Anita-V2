//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2347040564274";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0xPWTdpU1VPVmQ5NE1oSUVUL2hYZmRjY0Y0ckFJbjVyQ2UxYWFWeW1VND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY2FFOTF3MkszdENHelBTakRlaWNpbVJLWWhPbUpyeHJseVdFaWQ2Ui9qbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2T3p4UFRLcHJJVHlzN01ZdmFZWVA2VnpWRUhGZTFOT25teDNkK3BGUEdFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkU3doTm1YNGtmTkZGMnNST3VYOTVHRVVUWngvK1lESkFOMFZLN1kzV0FRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFDd1lCSXM1SHR4QUlBdFp5WHVQUXNWY2J3cTVURkZEQUlRUTJybUptR0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVnK0Y0d3VYNlJ0SVI1ZnZEdjlmYTNYTlE2ZzAzT2lnSlpMUGpVcW9QVU09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE55TXMrdzBWSUxCeHhpNCtaMHF2VFhXZzVUcnIxM2wwWkY3ZmVMSzlHVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT3RNeFAvY3lYNFQ5NUM0NFJXVHRveDdGSWRsbTdjL2R0ZTdQUjJMUlpGdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNZbFMwY1ErdHRjNU0xTkhpVE9nZ0dnTGQrWnN4MUFiZFFWd21iczY4ZGk0dkFNb2FyL1lhWU9LamFoSmIrajFYOUJuU3BmSjNLL3B1c1M5RmVYdkR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTYwLCJhZHZTZWNyZXRLZXkiOiJRVWQxeWltQlZJSHo0TlA2ZkZwQUpZZWgvT1V3N2x5MzZhUGlzZU53L1RJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0U2dYYzNja1RoS1RMcTdENVc1VDVnIiwicGhvbmVJZCI6IjcxNmM4MzE3LWE3YWMtNGVlYy04ZjNkLTMzM2QwYTQ2ODJmZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjS0ZzajRVcW9Hbk5ZdjdPRjlyN2tGeXlhTG89In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXF2RE8yZU03bS9WTzB6REhyUFFvZmQyUlA0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IldaUk5XODFWIiwibWUiOnsiaWQiOiIyMzQ3MDQwNTY0Mjc0OjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVGhlIEJlemFsZWVsIENyZWF0aXZlIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMU0dvQXNRK3FEOHRnWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJaY2IzM004TXVjd2tnZGRrbUhyM0R3YnNRL0JJMEJONDNjajFlZVNrLzFnPSIsImFjY291bnRTaWduYXR1cmUiOiJ3d1NxNHJLZGFvUEM3TWlsWjNFZU9oc3NEK2M4c1pHeTRYS1NtcGZvMGJiUW9lSXErOHZxR2dVRU9CTFVZbEJ3YjVZclpYanhJdHJZc1lUazFXdFlDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieUtGN3UyZ0hiZEV1RkM3eXVvVnFUUDBXNzArdCtEckFCbnEzM0ZsQ09NeUVaeDBIVStnZWZINVhYWjNhVGswa0JqMmhoVGZ5TThXUDAzYmloNFBQQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ3MDQwNTY0Mjc0OjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV1hHOTl6UERMbk1KSUhYWkpoNjl3OEc3RVB3U05BVGVOM0k5WG5rcFA5WSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyNTg5NDc5M30=
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
