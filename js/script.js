console.log("running")
$("#button").click(function(){
  var user = $("#input").val();
  var result = compare( user,computerChoice())
  $("#Result").html(result);
});

var compare = function(me, opponent) {
console.log(me,opponent)
  if(me === 'rock') {
    
      if(opponent === 'rock') {
          return 'Tie';
      } else if (opponent === 'paper') {
        return 'My rock lost to paper :(';
      } else if (opponent === 'scissors') {
        return 'My rock crushed scissors! >:)';
      }
    
  } else if (me === 'paper') {
    
      if(opponent === 'paper') {
        return 'Tie';
      } else if (opponent === 'rock') {
        return 'My paper beat rock :)';
      } else if (opponent === 'scissors') {
        return 'My paper got cut by scissors! >:)';
    }
  } else if (me === 'scissors') {
    
      if(opponent === 'scissors') {
        return 'Tie';
      } else if (opponent === 'paper') {
        return 'My scissor beat paper :(';
      } else if (opponent === 'rock') {
        return 'My scissor got crushed! >:)';
    }
  } else {
    return "That doesn't make any sense!"
  }
};
var computerChoice = function() {
        var random = Math.random();
        if (random < 0.333) {
	      return  'rock';
        } else if(random < 0.67777) {
	      return 'paper';
        } else {
	      return 'scissors';
        } 
};