// Do while vs while

// While // -- While will always check the condition first. 
let a = 10;
while(a < 12){
    console.log(a);
    a++;
}

//do-while // --runs the body first, then checks the condition.

let b=10;
do {
    console.log(b);
    b++;
} while (b<12);