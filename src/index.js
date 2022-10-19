// ---------------------------- SPLINTERLANDS PLAYER DATA ----------------------------- //
var username = sessionStorage.getItem('username')

fetch('https://api.splinterlands.io/players/details?name=' + username)
.then(response => response.json())
.then(playerdata => {


    sessionStorage.setItem('guild_id_' + username ,playerdata.guild.id);
    sessionStorage.setItem('username', username);

    if(playerdata.league == 1){
        league = "Novice"
    }
    if(playerdata.league == 2){
        league = "bronze"
    }
    if(playerdata.league == 3){
        league = "silver"
    }
    if(playerdata.league == 4){
        league = "gold"
    }
    if(playerdata.league == 5){
        league = "diamond"
    }
    if(playerdata.league == 6){
        league = "champion"
     }


    document.getElementById("name").innerText = playerdata.name;
    document.getElementById("collection_power").innerText = playerdata.collection_power;
    document.getElementById("guild").innerText = playerdata.guild.name;
    document.getElementById("league").innerText = league;
    document.getElementById("rating").innerText = playerdata.rating;
    document.getElementById("highest_rating").innerText = playerdata.max_rating ;
    document.getElementById("wins").innerText = playerdata.wins + playerdata.modern_wins;
    document.getElementById("battles").innerText = playerdata.battles + playerdata.modern_battles;
        
})


function optionleague(){

    var x = document.getElementById("option_league");
    var i = x.selectedIndex;
    
    fetch('https://api.splinterlands.io/players/details?name=' + username)
    .then(response => response.json())
    .then(playerdata => {


    
    if (x.options[i].text == "wild") {

        if(playerdata.modern_league == 0){
            league = "No Rank!"
        }
        if(playerdata.league == 1 ){
            league = "Novice"
        }
        if(playerdata.league == 2 ){
            league = "bronze"
        }
        if(playerdata.league == 3 ){
            league = "silver"
        }
        if(playerdata.league == 4 ){
            league = "gold"
        }
        if(playerdata.league == 5 ){
            league = "diamond"
        }
        if(playerdata.league == 6 ){
            league = "champion"
         }

        document.getElementById("league").innerText = league;

    } else if (x.options[i].text == "modern") {

        if(playerdata.modern_league == 0){
            league = "No Rank!"
        }
        if(playerdata.modern_league == 1){
            league = "Novice"
        }
        if(playerdata.modern_league == 2){
            league = "bronze"
        }
        if(playerdata.modern_league == 3){
            league = "silver"
        }
        if(playerdata.modern_league == 4){
            league = "gold"
        }
        if(playerdata.modern_league == 5){
            league = "diamond"
        }
        if(playerdata.modern_league == 6){
            league = "champion"
         }

        document.getElementById("league").innerText = league;
    }

})
    
}


function optionrating(){

    var x = document.getElementById("option_rating");
    var i = x.selectedIndex;
    
    fetch('https://api.splinterlands.io/players/details?name=' + username)
    .then(response => response.json())
    .then(playerdata => {

        
    
    if (x.options[i].text == "wild") {
        document.getElementById("rating").innerText = playerdata.rating;
    } else if (x.options[i].text == "modern") {
        document.getElementById("rating").innerText = playerdata.modern_rating;
    }

})
    
}



// ---------------------------- SPLINTERLANDS PLAYER DATA ----------------------------- //


// ---------------------------- SPLINTERLANDS PLAYER GUILD DATA ----------------------------- //

var guildid = sessionStorage.getItem('guild_id_' + sessionStorage.getItem('username'));


fetch('https://api2.splinterlands.com/guilds/members?guild_id=' + guildid)
.then((playerstats)=>{
return playerstats.json();
    
}).then((result)=>{


    let i =0


    while( i < result.length){

    var table1 = document.getElementById('members');
    var rowrow =  document.createElement('tr');

        
    var cell1  =  document.createElement('td');
    var text1 = document.createTextNode(result[i].player);

    var cell2  =  document.createElement('td');
    var text2 = document.createTextNode(result[i].rating);
            
    cell1.appendChild(text1);
    rowrow.appendChild(cell1);
            
    cell2.appendChild(text2);
    rowrow.appendChild(cell2);

       

    i++;
      
    table1.appendChild(rowrow);

    if (result.length < i){
        break;
        }
    }
        
})

fetch('https://api.splinterlands.io/players/details?name=' + username)
.then(response => response.json())
.then(playerdata => {
    
    document.getElementById("guild_name").innerText = playerdata.guild.name;
    document.getElementById("guild_level").innerText = playerdata.guild.level;
    document.getElementById("guild_crowns").innerText = playerdata.guild.crowns;

})
// ---------------------------- SPLINTERLANDS PLAYER GUILD DATA ----------------------------- //


// ---------------------------- RISINGSTAR PLAYER GUILD DATA ----------------------------- //

fetch('https://risingstargame.com/playerstats.asp?player=' + username)
.then(response => response.json())
.then(risingstardata => {
    
    document.getElementById("rsg_name").innerText = risingstardata[0].name;
    document.getElementById("rsg_level").innerText = risingstardata[0].level;
    document.getElementById("rsg_missions").innerText = risingstardata[0].missions;
    document.getElementById("rsg_nfts").innerText = risingstardata[0].totalnfts;
    document.getElementById("rsg_modifier").innerText = risingstardata[0].cardsim;
    document.getElementById("rsg_ego").innerText = risingstardata[0].missionego;
    document.getElementById("rsg_fans").innerText = risingstardata[0].cardsfans;
    document.getElementById("rsg_skill").innerText = risingstardata[0].cardskill;
    document.getElementById("rsg_lesson").innerText = risingstardata[0].lessonskill;
    document.getElementById("rsg_luck").innerText = risingstardata[0].cardsluck;

})
    

    