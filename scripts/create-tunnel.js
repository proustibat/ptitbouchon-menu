const ngrok = require("ngrok");
const QRCode = require("qrcode");

(async function () {
  const url = await ngrok.connect({ proto: "http", addr: "3000" });
  console.info(url);

  QRCode.toString(url, { type: "terminal", small: true }, function (err, url) {
    console.log(url);
  });
})();
