/*const config = require('../config');
const { cmd, commands } = require('../command');
const os = require('os');
const { runtime } = require('../lib/functions');
const disk = require('disk-space');
const moment = require('moment');

cmd({
pattern: "upt",
react: "⚡",
alias: ["uptime2", "status2", "runtime2", "stats"],
desc: "Display comprehensive system statistics",
category: "main",
filename: __filename
}, async (conn, mek, m, {
from,
quoted,
body,
isCmd,
command,
args,
q,
isGroup,
sender,
senderNumber,
botNumber2,
botNumber,
pushname,
isMe,
isOwner,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmins,
isAdmins,
reply
}) => {
try {
const loadAvg = os.loadavg();
const cpuUsage = process.cpuUsage();
const cpuPercent = ((cpuUsage.user + cpuUsage.system) / (os.cpus().length * 1000000)).toFixed(2);
const networkInterfaces = os.networkInterfaces();
const primaryInterface = Object.values(networkInterfaces)[0][0];
const uptimeTotal = process.uptime();
const uptimeDays = Math.floor(uptimeTotal / (24 * 60 * 60));
const uptimeHours = Math.floor((uptimeTotal % (24 * 60 * 60)) / (60 * 60));
const uptimeMinutes = Math.floor((uptimeTotal % (60 * 60)) / 60);
const diskUsage = await new Promise((resolve) => {
disk.check('/', (err, result) => {
resolve(result || { free: 0, total: 0 });
});
});
const diskTotal = (diskUsage.total / (1024 * 1024 * 1024)).toFixed(2);
const diskFree = (diskUsage.free / (1024 * 1024 * 1024)).toFixed(2);
const diskUsed = (diskTotal - diskFree).toFixed(2);

```let status = `*╭─────── SYSTEM STATUS ───────* 
```
_CYBER BOT STATISTICS_
⏰ _Uptime:_ ${uptimeDays}d ${uptimeHours}h  ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
_Disk Space:_ ${diskUsed}GB used of ${diskTotal}GB
_CPU Load:_ ${cpuPercent}%
_Load Average:_ ${loadAvg[0].toFixed(2)} (1m) ${loadAvg[1].toFixed(2)} (5m)  ${os.type()} ${os.release()}
├ Architecture: ${os.arch()}
├ Platform: ${os.platform()}
├ Hostname: ${os.hostname()}
└ IP: ${primaryInterface.address}
_Bot Info:_
├ Owner: CYBER-RAJIB
├ Last Restart: ${moment().format('YYYY-MM-DD HH:mm:ss')}
├ Node Version: ${process.version}
└ Active Since: ${moment().subtract(uptimeTotal, 'seconds').format('YYYY-MM-DD HH:mm:ss')}
_╰─────────────────_`;

```await conn.sendMessage(from, {
  image: {
    url: config.ALIVE_IMG
  },
  caption: status,
  contextInfo: {
    externalAdReply: {
      title: "CYBER Bot Status",
      body: "System Statistics & Performance Metrics",
      mediaType: 1,
      thumbnail: {
        url: config.ALIVE_IMG
      },
      mediaUrl: config.WEBSITE_URL,
      sourceUrl: config.WEBSITE_URL
    }
  }
}, {
  quoted: mek
});
```
} catch (e) {
console.error('System status error:', e);
reply(`Error fetching system status: ${e.message}`);
}
});
*/
