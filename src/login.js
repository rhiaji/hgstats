function login() {
    var username
    username = document.getElementById("username").value;
    console.log(username);

    if (username.length == 0){

        alert("please input hive username")

    } else {

        hive_keychain.requestSignBuffer(username.toLowerCase(), 'Hive Games Statistics', 'memo', function(response) {
    

            if (response.success) {
                user_account = username.toLowerCase();
                document.location.href = "splinterlands.html";
        
                sessionStorage.setItem('username', user_account);
            
            } else console.error("invalid hive username") 
        
        })
    }


  

}