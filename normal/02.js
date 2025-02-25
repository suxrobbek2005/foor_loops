
let text = "salom senga Samarqand"
console.log("Dastlabki holati\n",text)
let len = text.length - 1
let list = []

for (let i = len; i >= 0; i--) {
    list.push(text[i])

}

console.log("Teskari qilingan holat\n",list.join(" "))