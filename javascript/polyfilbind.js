const nam={
    
    first:"pavan",
    last:"Daari",
 
}
let printfullname=function(hometown,state)
{
    console.log(this.first+" "+this.last+" "+"from  "+hometown+" "+state);
}

// nam.printFullName();
printfullname.call(nam,"Nbpadu","Andhra");



let name2={
    first:"swathi",
    last:"dasari",
}
printfullname.apply(name2,["Guntur","Andhra pradesh"]);
// nam.printFullName.call(name2);

let fullname=printfullname.bind(nam,"Nakkabokkalapadu","Andhrapradesh");
console.log(fullname);
fullname();


// Normal bind method using

const sibilings={
    name:"swathi",
    nams:"sravya",
}

let printing=function(){
    console.log(this.name+" "+this.nams);
}

let print=printing.bind(sibilings);
print();


// creating our own bind method
Function.prototype.mybind=function(...args)
{
    let obj=this
    return function(){
        obj.call(args[0])
    }
}

let print2=printing.mybind(sibilings)
print2();