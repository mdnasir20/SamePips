
var pips1 = Math.round((Math.random() * 5) + 1);
var pips2 = Math.round((Math.random() * 5) + 1);
var count = 1; 
while(pips1 != pips2) {
    pips1 = Math.round((Math.random() * 5) + 1);
    pips2 = Math.round((Math.random() * 5) + 1); 
    count++
}
document.getElementById("answer").innerHTML = "Same dice pips: "+pips1+" and "+pips2+ '<br/>' + "There were " + count+ " randomization rounds untill we got the same pips. ";
