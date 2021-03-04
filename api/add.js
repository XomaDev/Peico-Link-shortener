const fetch = require('node-fetch');
const lookup = require('safe-browse-url-lookup')({ apiKey: 'AIzaSyDgjoHEfUjfZeIlUGOFEgCRdNKUmGNSlb8' });


 module.exports = async (req, res) => {
  const tag = req.query.tag;
  const murl = req.query.url;
  res.setHeader('Access-Control-Allow-Origin', 'https://s.peico.xyz')
  res.setHeader('Access-Control-Allow-Methods', 'GET')

        if (tag != null) {
         lookup.checkSingle(murl)
    .then(async isMalicious => {
          if(isMalicious){
            res.send("This URL seems Evil");
          } else {
            var url = "https://script.google.com/macros/s/AKfycbzM1oZleq9tCEfMO_AtXu69JwkycT41252ihP6uCqQDb0WsYAq3/exec?TAG=" + tag + "&URL=" + murl;
            var request = await fetch(url);
            var response = await request.text();
            if(response != null && response != "FAILED" ){
               res.send("200");
            } else {
               res.send("Failed To Add Link");
            }};
    }).catch(err => {
               res.send("Failed To Scan Link");

    })
         

}
 }
