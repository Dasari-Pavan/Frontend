document.writeln("pavan")

const arr=[1,2,3,4,5];

function double(x)
{
    return x*2;
}

function binary(x)
{
    return x.toString(2);
}

// const output=arr.map(binary);
// console.log(output);

// const output=arr.map(function double(x)
// {
//     return x*2;
// });
// console.log(output);

// const output=arr.map((x)=>{
//     return x*2;
// });
// console.log(output);

// const ma=arr.map((x)=>x.toString(2));
// console.log(ma);


// filter
// const arr1=[1,2,34,5]

// const filter=arr1.filter((x)=> x>2);
// console.log(filter);


// reduce

// find sum
// const arr1=[1,2,3,4,5];
// function findsum(arr1){
//     let sum=0;
//     for(let i=0;i<arr1.length;i++){
//         sum=sum+arr1[i];
//     }
//     console.log(sum);
// }
// findsum(arr1);


// const max=arr1.reduce(function (acc,curr){
//     acc=acc+curr;
//     return acc;
// },0);
// console.log(max);


const arr2=[1,2,3,4,5];
//-- let res=function finndmax(arr2){
//     let max=0;
//     for(let i=0;i<arr2.length;i++)
//     {
//         if(arr2[i]>max)
//         {
//             max=arr2[i]
//         }
        
//     }
//     return max;
// }
// console.log(res(arr2));


// const res=arr2.reduce((acc,curr)=>{
//     if(curr>acc)
//     {
//         acc=curr;
//     }
//     return acc;
// },0)
// console.log(res);


const users=[

    {first:"pavan",last:"dasari",age:35},
    {first:"swathi",last:"dasari",age:22},
    {first:"manish",last:"dasari",age:25}
];

// const out=users.map((x)=>x.first+x.last);
// console.log(out);

// const out=users.reduce((acc,curr)=>{
//   if(acc[curr.age])
//   {
//     acc[curr.age]=++acc[curr.age];
//   }else{
//     acc[curr.age]=1;
//   }
//   return acc;
// },{});
// console.log(out);


// const out=users.filter((x)=>{
//     if(x.age<30){
//         return x.first;            
//     }
// }).map((x)=>x.first);
// console.log(out);


const out=users.reduce(function(acc,curr){
    if(curr.age<30)
    {
        acc.push(curr.first);
    }
    return acc;
},[]);
console.log(out);