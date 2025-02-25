
let massiv = ([-1, 2, 3, -4, 5, -6, 7, 8, -9, -10])
console.log("Dastlabki holati",massiv)
let list = []

console.log("Massivdagi faqat musbat sonlar qatori")
for (let i = 0; i < massiv.length; i++) {
    if(massiv[i] > 0){
        list.push(i)
    }
}

console.log(list.join(" "))