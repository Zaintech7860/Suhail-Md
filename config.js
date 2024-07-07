const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "";
global.gurl  =process.env.GURL  || "";
global.website=process.env.GURL || "" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923046753968" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923046753968";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "true", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "false";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923046753968,923354427315";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_11_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDgxLFxuICAgICAgICAxOTksXG4gICAgICAgIDgzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICA0NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAxLFxuICAgICAgICA0NCxcbiAgICAgICAgODcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTQxLFxuICAgICAgICA3OSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMixcbiAgICAgICAgMyxcbiAgICAgICAgMjA4LFxuICAgICAgICA3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODgsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxLFxuICAgICAgICA3MCxcbiAgICAgICAgMjAyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5NCxcbiAgICAgICAgOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDksXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc4LFxuICAgICAgICA5MixcbiAgICAgICAgMjI1LFxuICAgICAgICA3MixcbiAgICAgICAgODQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNzIsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjMzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MixcbiAgICAgICAgMTUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzMsXG4gICAgICAgIDg5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTI0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDQwLFxuICAgICAgICA5OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgODQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTI5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDUzLFxuICAgICAgICA0NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDY5LFxuICAgICAgICAzMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDg5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyOSxcbiAgICAgICAgOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDc0LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIi9aMEZGOXMyRzJEa1VRakpnaWdkcHdPb1diRE1za0VhK1JQVTRDUHBYdU09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlZVckFKYWYwUXBXVHF3cTRLOHN1TUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmQ1NWM5MzAtZDYwNi00Y2ZkLThjZjgtOTEwN2IyOTVhN2NkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQyLFxuICAgICAgMTgsXG4gICAgICAxNixcbiAgICAgIDgxLFxuICAgICAgMTc4LFxuICAgICAgMzksXG4gICAgICAxNjYsXG4gICAgICAxOTUsXG4gICAgICA5NyxcbiAgICAgIDE5MixcbiAgICAgIDI0NSxcbiAgICAgIDIxNSxcbiAgICAgIDEzMyxcbiAgICAgIDE0OSxcbiAgICAgIDE3OSxcbiAgICAgIDEwLFxuICAgICAgOTMsXG4gICAgICAxNDQsXG4gICAgICAxOTIsXG4gICAgICAyOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTEsXG4gICAgICAxODUsXG4gICAgICAyMDIsXG4gICAgICAyMDQsXG4gICAgICAxNTAsXG4gICAgICAyMTQsXG4gICAgICA2NSxcbiAgICAgIDEwMyxcbiAgICAgIDY2LFxuICAgICAgOTAsXG4gICAgICAxNzAsXG4gICAgICAyMSxcbiAgICAgIDE4OSxcbiAgICAgIDEyNCxcbiAgICAgIDYsXG4gICAgICAxNDAsXG4gICAgICAyMzQsXG4gICAgICAxMzEsXG4gICAgICA2NyxcbiAgICAgIDQzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIldLUjY3SEE0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMwNDY3NTM5Njg6MjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NjAxMjA3NzMzMDQ0MToyMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJdmhwOUlCRU82T3FMUUdHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkp4Vk56eXg2Q2QxbFZJWEY1U0RzZ0NOWDlzcjVzdVVPV1VxMGdFakEybmc9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSHNoVDB1UUlOYUpSL1RVZFVsSHFMdEFCR3hTUnV6aEJyRXRwT21LQndpanRqWGxsek84TnNYWjA3WEhVQUV6cFpsNm5FOTFhRnZJWk1VVTJEMmdhRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiT1NuWFFLdzhSOTlrRlNSeWlFalltRFhXTmRTUWc1SjNLRnVUNHdneGR6MldLZDkzYXUrazd4OFkxb2VFMkpZRlRGMnZnMXlBNFVyM2VXUk12N3dNZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDQ2NzUzOTY4OjIwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDMyMTkwNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpEK1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkQrLmpzb24iOiAie1wia2V5RGF0YVwiOlwibzlSVmF5Y3YxK29nSEFwRW1vTHhGZnBMakVtUWs4QStRY0NxT0lRU0ZaYz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo0NDEwNTMzMjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNjQ1MjA2NDYzN1wifSIKfQ==" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.HANDLERS  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Zain-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "𝐙𝐚𝐢𝐧_𝐌𝐃",
  ownername:process.env.OWNER_NAME|| "It's 𝐙𝐚𝐢𝐧",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "ZAIN"  ).toUpperCase(),



};

























global.rank = "updated"
 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
