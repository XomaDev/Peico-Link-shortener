const fetch = require('node-fetch');

 module.exports = async (req, res) => {
  const tag = req.query.tag;
  const murl = req.query.url;

        if (tag != null) {
        var url = "https://script.google.com/macros/s/AKfycbzM1oZleq9tCEfMO_AtXu69JwkycT41252ihP6uCqQDb0WsYAq3/exec?TAG=" + tag + "&URL=" + murl;
            var request = await fetch(url);
            var response = await request.text();
            if(response != null && response != "FAILED" ){
               res.send("200");
            } else {
               res.send("Failed To Add Link");
            }
        }
}
