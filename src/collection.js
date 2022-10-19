
var username = sessionStorage.getItem('username')

function peakmonsters() {
    

    window.open("https://peakmonsters.com/@" +username + "/cards")
}

function spl() {

    window.open("https://splinterlands.com/?p=collection&a=" + username)
}

function nftmart(){

    
    window.open("https://nftm.art/inventory/star/@" + username)
}

function rsgfam(){

    window.open("https://rsgfam.com")
}

function logout() {
    sessionStorage.removeItem('username')

    document.location.href = "login.html";
}

function guildcheck() {

    document.location.href ="guild.html";

}

function splinterlands(){
    document.location.href = "splinterlands.html";
}

function risingstar(){
    document.location.href = "risingstar.html";
}

