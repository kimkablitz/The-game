$(document).ready(function () {
    //initialize firebase
    var config = {
        apiKey: "AIzaSyCk7GISyvQoN1Pvn4btNZ2bD0t5RD8okD0",
        authDomain: "rpg-homework.firebaseapp.com",
        databaseURL: "https://rpg-homework.firebaseio.com",
        projectId: "rpg-homework",
        storageBucket: "rpg-homework.appspot.com",
        messagingSenderId: "793152663298"
      };
    firebase.initializeApp(config);
    var database = firebase.database();
    // Adding players'names
    var player1;
    var player2;

    // Setup win states
    var winStates = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    }

    // Setup listenersfor usernames
    document.getElementById('player1').addEventListener('keypress', userDataSubmitted);
    document.getElementById('player2').addEventListener('keypress', userDataSubmitted);

    // Blueprint for Player
    function Player(name, id){
        this.name = name;
        this.id = id;
    }

    // Blueprint for GameState
    function GameState(playerCount){
        this.playerCount = playerCount;
    }
    
    // Error function
    function errorMessage(reason) {
        console.log("The read failed: " + reason);
    }

    // Username listener for players
    function userDataSubmitted(e) {
        if (e.which == 13) {
            // Add user to firebase
            const inputName = '#' + e.currentTarget.id;
            var player = new Player($(inputName).val(), e.currentTarget.id);
            writeUserData(player).then(() => {
                 // Save player to global variable.
                player1 ? player1 = player : player2 = player;

                // Set name on the UI
                const selectorName = '#' + player.id + '-name';
                $(selectorName).text(player.name);

                // Clear input
                const inputName = '#' + player.id;
                $(inputName).val('');
            }).catch((reason) => errorMessage(reason));
        }
    }

    // Add new user to firebase
    function writeUserData(playerObject) {
        return database.ref().push(playerObject);
    }

    //get Game state data

    //control the players

    // waiting for players response (timer)


    //set up the game


   //convo    

    
});

//