
let massiv = [1, 2, 3, 4, 79, 6, 7, 123, 9, 10]
console.log("Dastlabki holat",massiv)

let max_number = massiv[0]

for (let i = 0; i < massiv.length; i++){
    if (massiv[i] > max_number){
        max_number = massiv[i]
    }
}

console.log("Massiv ichidagi eng katta element = ",max_number)