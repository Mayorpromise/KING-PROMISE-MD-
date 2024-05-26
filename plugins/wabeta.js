import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
  try {
    let res = await fetch('https://api.maher-zubair.tech/details/wabetainfo');
    if (!res.ok) throw await res.text();
    let json = await res.json();
    if (!json.news) throw json;

    let wabeta = `•───── ୨❀୧ ─────•
    ❖ 𝑺𝑻𝑨𝑻𝑼𝑺: Online... 
    ㋡ 𝑪𝑹𝑬𝑨𝑻𝑶𝑹: EXCEL
    ☞ 𝑵𝑬𝑾𝑺: ${json.news}
      •───── ୨❀୧ ─────•
    `;

    conn.sendFile(m.chat, json.thumbnail, 'thumbnail.jpg', wabeta, m);


    m.react(done);
  } catch (e) {

    m.react(error);
  } 
}
handler.help = ['wabeta'];
handler.tags = ['news'];
handler.command = ['wabeta'];

export default handler;