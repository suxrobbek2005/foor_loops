
let massiv = [1, 2, 3, 4, 5, 6, 7, 8]
console.log("Dastlabki holati", massiv)
let list = []

for(let i = 0; i < massiv.length; i++){
    let result = massiv[i]
    list.push(result * 2)
}
console.log("Massivning har bir elementi ikkiga ko'paytirilgan holati\n",list.join(" "))