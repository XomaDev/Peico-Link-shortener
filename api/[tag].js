const fetch = require('node-fetch');

//code from https://stackoverflow.com/questions/190852
function getExtension(path) {
    var basename = path.split(/[\\/]/).pop(),  // extract file name from full path ...
                                               // (supports `\\` and `/` separators)
        pos = basename.lastIndexOf(".");       // get last position of `.`

    if (basename === "" || pos < 1)            // if file name is empty or ...
        return "";                             //  `.` not found (-1) or comes first (0)

    return basename.slice(pos + 1);            // extract extension ignoring `.`
}


 module.exports = async (req, res) => {
  
  const tag = req.query.tag;
   const ua = req.headers['user-agent'];
     
if(ua.includes("TelegramBot") || ua.includes("WhatsAppBot") || ua.includes("TwitterBot") || ua.includes("WhatsApp")){
      res.setHeader("Social", "true");
      res.status(200).send('<meta property="og:title" content="Metatags Made On the fly ;)"/><meta property="og:description" content="Rickroll you"/><meta property="og:image" content="https://vem.vercel.app/favicon.png"/>');
}
    
        if (tag != null) {
        var url = "https://script.google.com/macros/s/AKfycbyxUhUuSDlhW3j7SBfknwb6L7t_6Z-GhpACJ5yCoG2_nVZ8oXE/exec?tag=" + tag;
            var request = await fetch(url);
            var response = await request.text();
            if(response != null && response != "FAILED"){
               var filetype = getExtension(response);
               if(filetype === "exe" || filetype === "zip" || filetype === "tar" || filetype === "gz" || filetype === "sfx" || filetype === "bat" || filetype === "dll" || filetype === "apk" || filetype === "ipa" || filetype === "vb" || filetype === "vps" || filetype === "msi"){
      res.setHeader('Cache-Control', 's-maxage=3155695200000')
      res.setHeader("Dangerous", "true");
      res.status(200).send("This Shortlink Leads To A URL that is programed to download a dangerous file type, it may infect your PC with Malware, Proceed At your own risk <br/> " + response);
  } else {
             res.setHeader('Cache-Control', 's-maxage=3155695200000')
             res.setHeader("Location", response);
             res.status(308).send(); 
  }
            } else {
               res.send("Failed To Find Link");
            }
        }
}
