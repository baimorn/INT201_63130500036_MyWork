function random() {
    return Math.floor(Math.random()*10)+1;

} 
const Valueran = random(); //เลข random
let userplay = 2; //ค่าที่รับมาจากผู้เล่น
if (Valueran >= 1 && Valueran <= 10) {
    if (Valueran > userplay) {
        console.log("Too low , the random num is : " + Valueran);
    } else if (Valueran < userplay) {
        console.log("Too High , the random num is : " + Valueran );
    } else {
        console.log("You WIN!!!");
    }
}


