/** Callenge 2  */

var numberOfGames = 3;
// Johan team as team1 and mike team as team2
// 1.
var team1AvgScore = (89 + 120 + 103)/numberOfGames ;

console.log('The average score of John\'s team is ' +team1AvgScore );
// 2.
var team2AvgScore = (116 +94 + 123)/numberOfGames;

console.log('The average score of Mike\'s team is ' +team2AvgScore );

// 3.
if(team1AvgScore > team2AvgScore){
    console.log('John\'s team is winner');
}
if(team1AvgScore < team2AvgScore){
    console.log('Mike\'s team is winner');
}
else{
    if(team1AvgScore == team2AvgScore){
        console.log('Match is draw! No one is winner or looser');
    }
}

// Extra --Mary team as team3
//4.
var team3AvgScore = (97 + 134 + 105 )/numberOfGames;
console.log('The average score of Mary\'s team is ' +team3AvgScore );

if(team1AvgScore > team2AvgScore && team1AvgScore > team3AvgScore){
    console.log('John\'s team is winner');
}
if(team2AvgScore > team1AvgScore && team2AvgScore > team3AvgScore){
    console.log('Mike\'s team is winner');
}
if(team3AvgScore > team1AvgScore && team3AvgScore > team2AvgScore){
    console.log('Mary\'s team is winner');
}
else
{
    if(team3AvgScore = team1AvgScore = team2AvgScore){
        console.log('Match is draw! No one is winner or looser');
    }
}

