const fetch = require('node-fetch');
const lookup = require('safe-browse-url-lookup')({ apiKey: 'AIzaSyDgjoHEfUjfZeIlUGOFEgCRdNKUmGNSlb8' });


 module.exports = async (req, res) => {
  const murl = req.query.url;
  console.log(murl);
  res.setHeader('Access-Control-Allow-Origin', 'https://s.peico.xyz')
  res.setHeader('Access-Control-Allow-Methods', 'GET')

        if (murl != null && murl != undefined) {
         if(murl === "https://www.youtube.com/watch?v=dQw4w9WgXcQ" || murl === "https://youtu.be/dQw4w9WgXcQ"){
            var url = "https://script.google.com/macros/s/AKfycbxEbbbhJFQlKTDSXsQfELqxuFPFeHTaT4AeEw_ETZDcpfYnTcE/exec?URL=rickroll";
            var request = await fetch(url);
            var response = await request.text();
            if(response != "FAILED"){
               res.send(response);
            } else {
               res.send("Failed To Add Link");
            }
         }
         lookup.checkSingle(murl)
    .then(async isMalicious => {
          if(isMalicious){
            res.send("This URL seems Evil");
          } else {
            var url = "https://script.google.com/macros/s/AKfycbxEbbbhJFQlKTDSXsQfELqxuFPFeHTaT4AeEw_ETZDcpfYnTcE/exec?URL=" + murl;
            var request = await fetch(url);
            var response = await request.text();
            if(response != "FAILED"){
               res.send(response);
            } else {
               res.send("Failed To Add Link");
            }};
    }).catch(err => {
               res.send("Failed To Scan Link");

    })
         

} else { 
   res.send("Before we fall into the pastly undefined possible error, we would like to tell you <br><h1>THIS IS A API AND NEEDS A VALID QUERRYSTRING, and allows requests from s.peico.xyz</h1>");
}
 }
