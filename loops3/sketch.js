function setup(){

let x = 2
let y = 1
let z = 0

do{

    if(y <= 10){
        z = x*y
        y++
        alert(z)
    }

else{
    x++
    y = 1
}

}while (x <= 10)

}