
function kilometerToMeter(k){
    var m = k * 1000;
    return m;
}
function budgetCalculator(cl, ph, la){
    var clv = cl * 50;
    var phv = ph * 100;
    var lav = la * 500;
    var t= clv+ phv + lav;
    return t;
}
function hotelCost(day){
    var tk1 = 0;
    var tk2 = 0;
    var tk3 = 0;
    if(day<=10){
        tk1 = day * 100;
    }
    else if(day<=20){
        tk1 = 10 * 100;
        tk2 = (day-10) * 80;
    }
    else{
        tk1 = 10 * 100;
        tk2 = 10 * 80;
        tk3 = (day-20) * 50;
    }
    var tk = tk1 + tk2 + tk3;
    return tk;
}
function megaFriend(name){
    var big = name[0];
    for(var i=1; i<name.length; i++){
        if(name[i].length>big.length){
            big = name[i];
        }
    }
    return big;
}

var km = 5;
var r1 = kilometerToMeter(km);
console.log(r1);

var r2 = budgetCalculator(3, 9, 5);
console.log(r2);

var day = 35;
var r3 = hotelCost(day);
console.log(r3);

var r4 = megaFriend(["sami", "tema", "kublak", "rinvi", "chiam", "delu"]);
console.log(r4);