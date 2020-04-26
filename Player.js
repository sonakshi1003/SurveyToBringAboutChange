class Player {
    constructor(){}
  
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value",function(data){
        playerCount = data.val();
      })
    }
  
    updateCount(count){
          database.ref('/').update({
          playerCount: count
      });
    }
  
    update(name){
      var playerIndex = "player" + playerCount;
      database.ref(playerIndex).set({
        name:name
      });
    }
    updateA1(A1){
      var playerIndex = "player" + playerCount;
      database.ref(playerIndex).set({
        A1:A1
      });
    }
    updateA2(A2){
      var playerIndex = "player" + playerCount;
      database.ref(playerIndex).set({
        A2:A2
      });
    }
    updateA3(A3){
      var playerIndex = "player" + playerCount;
      database.ref(playerIndex).set({
        A3:A3
      });
    }
    updateA4(A4){
      var playerIndex = "player" + playerCount;
      database.ref(playerIndex).set({
        A4:A4
      });
    }
    updateA5(A5){
      var playerIndex = "player" + playerCount;
      database.ref(playerIndex).set({
        A5:A5
      });
    }
  }