
let object ={
    name:"pavan",
    city:"vij",
    getintro:function(){
        console.log(this.name+" "+this.city);
    }
}

let object2={
    name:"swathi",
    // city:"Delhi"
}

object2.__proto__= object;