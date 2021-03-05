const fetch = require('node-fetch');
const lookup = require('safe-browse-url-lookup')({ apiKey: 'AIzaSyDgjoHEfUjfZeIlUGOFEgCRdNKUmGNSlb8' });


 module.exports = async (req, res) => {
  const murl = req.query.url;
  res.setHeader('Access-Control-Allow-Origin', 'https://s.peico.xyz')
  res.setHeader('Access-Control-Allow-Methods', 'GET')

        if (murl != null) {
         lookup.checkSingle(murl)
    .then(async isMalicious => {
          if(isMalicious){
            res.send("This URL seems Evil");
          } else {
            var url = "https://script.google.com/macros/s/AKfycbxEbbbhJFQlKTDSXsQfELqxuFPFeHTaT4AeEw_ETZDcpfYnTcE/exec?URL=" + murl;
            var request = await fetch(url);
            var response = await request.text();
            if(response != null && response != "FAILED" ){
               res.send(response);
            } else {
               res.send("Failed To Add Link");
            }};
    }).catch(err => {
               res.send("Failed To Scan Link");

    })
         

}
 }
