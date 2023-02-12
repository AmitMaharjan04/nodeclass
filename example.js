(async()=>{


const { response } = require("express");

const orders = [
    {fruits:"mango",qty:10},
    {fruits:"orange",qty:10},
    {fruits:"banana",qty:10},
]
// function order (){
//     setTimeout( () => {
//         console.log(orders)
//     }, 3000);
// }
// function addNewItem(getOrderItems){      // using callback function to fix settimeout errors
//     setTimeout(()=>{
//         orders.push({fruits:"apple",qty:5})
//         getOrderItems();
//     }, 5000);
// }
//addNewItem(getOrderItems);

function getOrderItems(){
    console.log("getOrderItems ==",orders)
}
              //promise to fix error
// function addNewItem(){  
//     return new Promise((resolve,reject) => {
//         const err= false;
//         setTimeout(()=>{
//         orders.push({fruits:"apple",qty:5})
//         if(err)
//         reject()
//         resolve(true);
//     }, 5000);
//     })
// }
// addNewItem().then(response =>{  
//     console.log("response success ===")
//     getOrderItems();
// }).catch((err)=>{
//     console.log("err ===")
// });

async function addNewItem(){
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            orders.push({fruits:"apple",qty:5})
            resolve(true)
        }, 5000);
    })
}
// await addNewItem();
const updateOrder= await addNewItem();
if(updateOrder){
    const orderList=await getOrderItems();
}
// if(orderUpdate)
//     await 
// getOrderItems();
// addNewItem(getOrderItems);
// getOrderItems();

})()