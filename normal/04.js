
let list = []

let massiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log("Dastlabki holati", massiv)

for (let i = 1; i <= 10; i++) {
    let result = i
    result = result * i * i
    list.push(result) 
}

console.log("1 dan 10 gacha bo'gan sonlarning kubi\n",list.join(" "))
