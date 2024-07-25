let multiply= function(x,y){
    console.log(x*y);
}

let multiplybytwo=multiply.bind(this,3);
multiplybytwo(3);

let multiplybythree=multiply.bind(this,3);
multiplybytwo(3);

let multi=function(x){
    return function(y){
        console.log(x*y)
    }
}
let multibytwo=multi(2)(2);
// multibytwo(3);