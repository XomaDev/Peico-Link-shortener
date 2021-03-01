async function generate() {
       var text = document.getElementById("text").value;

       if(text.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) !== null && text != "") {

         var tag = '';
         var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
         var charactersLength = characters.length;

         for ( var i = 0; i < 5; i++ ) {
         tag += characters.charAt(Math.floor(Math.random() * charactersLength));
         }

         var request = "https://script.google.com/macros/s/AKfycbzM1oZleq9tCEfMO_AtXu69JwkycT41252ihP6uCqQDb0WsYAq3/exec?TAG=" + tag + "&URL=" + text;

         fetch(request).then(function(response){
         response.text().then(function(data) {
         console.log(data);
         if(data == '200') {
            document.getElementById("text").value = "https://vem.vercel.app/" + tag;
         }
         });
         }).catch(function(error) {
         console.log('Fetch Error:', error);
         });
       } 
    }
