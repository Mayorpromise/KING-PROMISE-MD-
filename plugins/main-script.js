import { promises } from 'fs';
import { join } from 'path';
import axios from 'axios'; 

let handler = async function (m, { conn, __dirname }) {
  const githubRepoURL = 'https://github.com/Mayorpromise/KING-PROMISE-MD-';

  try {
  
    const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

    const response = await axios.get(`https://api.github.com/repos/${username}/${repoName}`);

    if (response.status === 200) {
      const repoData = response.data;

      // Format the repository information with emojis
      const formattedInfo = `
    ─────《 ＫＩＮＧ－ＰＲＯＭＩＳＥ ＭＤ 》─────⊷
 📂 *ᏴϴͲ ΝᎪᎷᎬ:* _${repoData.name}_
📝 *ᎠᎬՏᏟᎡᏆᏢͲᏆϴΝ:* _Ꭺ ᏔᎻᎪͲՏᎪᏢᏢ ᏴϴͲ ᎡᎬᏟϴᎡᎠᎬᎠ ᏴᎽ MAYOR... ᏔᏆͲᎻ ᏞϴͲՏ ϴҒ ᎡᏆᏟᎻ ҒႮΝᏟͲᏆϴΝՏ.... 
👤 *ᎠᎬᏙᎬᏞϴᏢᎬᎡ:* _MAYOR PROMISE_
⭐ *ՏͲᎪᎡՏ:* _${repoData.stargazers_count}_ 
🔭*QR SCAN🔭:* https://xcelsama-web-qr-star-md-v2-31a7165329db.herokuapp.com/
🧤*PAIR CODE:*🧤 https://replit.com/@mayorpromise66/KING-PROMISE-MD-V1-PAIR-CODE?s=app
🍴 *ҒϴᎡᏦՏ:* _${repoData.forks_count}_ 
⚔️ *ᘜᖇOᑌᑭ:* https://chat.whatsapp.com/KInxpNajPC3J6sm6n6cZca
📡 *ᑭᑌᗷᒪIᑕ ᏀᖇOᑌᑭ:* https://chat.whatsapp.com/KInxpNajPC3J6sm6n6cZca
💻 *ᑕᕼᗩᑎᑎᗴᒪ ᒪIᑎK:* https://whatsapp.com/channel/0029VabKDye3bbV4Fu13US2N 
🌐 *ႮᎡᏞ:* ${repoData.html_url}
🌠 *ΝϴᏔ ᎠᎬᏢᏞϴᎽ*:-https://dashboard.heroku.com/new?template=https://github.com/Mayorpromise/KING-PROMISE-MD-' 

 `.trim();

      // Send the formatted information as a message
      await conn.relayMessage(m.chat,  {
        requestPaymentMessage: {
          currencyCodeIso4217: 'INR',
          amount1000: 99999,
          requestFrom: m.sender,
          noteMessage: {
          extendedTextMessage: {
          text: formattedInfo,
          contextInfo: {
          externalAdReply: {
          showAdAttribution: true
          }}}}}}, {})
    } else {
      // Handle the case where the API request fails
      await conn.reply(m.chat, 'Unable to fetch repository information.', m);
    }
  } catch (error) {
    console.error(error);
    await conn.reply(m.chat, 'An error occurred while fetching repository information.', m);
  }
};

handler.help = ['script'];
handler.tags = ['main'];
handler.command = ['sc', 'repo', 'script'];

export default handler;
