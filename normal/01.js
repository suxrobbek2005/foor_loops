
let result = 0
let lenght = 0

for(let i = 1; i <= 100; i++){
    lenght += 1
    if (i % 2 == 0){
       result += i
    }
}

console.log(`${lenght} ta soning yig'indisi = ${result}`)