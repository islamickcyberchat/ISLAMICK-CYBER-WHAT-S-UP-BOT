/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ＰＲＯＪＥＣＴ ＮＡＭＥ:

 🤍✨𝐂 𝐘 𝐁 𝐄 𝐑-𝐑 𝐀 𝐉 𝐈 𝐁✨🤍
╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/


const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

async function shannzCdn(path) {
  const form = new FormData();

  const fileStream = fs.createReadStream(path);
  form.append("file", fileStream);

  try {
    const response = await axios.post("https://endpoint.web.id/server/upload", form, {
      headers: {
        ...form.getHeaders(), 
      },
    });

    return response.data
  } catch (error) {
    return error.message
  }
}

module.exports = { shannzCdn }
