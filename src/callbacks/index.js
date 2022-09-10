function suma(a,b){

    return a+b

}

function sumaCallBack(a,b,callback){

        return callback(a,b)


}


console.log(sumaCallBack(1,2,suma))


setTimeout(()=>{

    console.log('Hola Js')

},1000)

function greeting(name){

    console.log(`hola ${name}`)

}

setTimeout(greeting,2000,'San')