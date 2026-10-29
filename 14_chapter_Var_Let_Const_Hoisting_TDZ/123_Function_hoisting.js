function getUserStatus(){
    // var status_code; => hoisted
    console.log(status_code); // undefined!
    var status_code = "200";
    console.log(status_code);  // 200
}

getUserStatus();


// Same hoisting concept as in normal var where it will assign undefined


