
const promise = new Promise((resolve,reject)=>{


    resolve('hey')


})



const cows = 15

const countCows = new Promise((resolve,reject)=>{

    if(cows>10){

        resolve(`We have got ${cows} cows in the farm`)

    }else{

        reject('There are not enough cows :(')

    }



})

countCows
    .then(response => console.log(response))
    .catch(error=>console.log(error))
    .finally(()=>console.log('finally'))
    