const fetch = require('node-fetch');

 module.exports = async (req, res) => {
  const tag = req.query.tag;
        if (tag != null) {
        var url = "https://script.google.com/macros/s/AKfycbyxUhUuSDlhW3j7SBfknwb6L7t_6Z-GhpACJ5yCoG2_nVZ8oXE/exec?tag=" + tag;
            var request = await fetch(url);
            var response = await request.text();
            if(response != null && response != "FAILED"){
             res.setHeader('Cache-Control', 's-maxage=3155695200000')
             res.setHeader("Location", res);
             res.status(200).send();
            } else {
               res.send("Failed To Find Link");
            }
        }
}
