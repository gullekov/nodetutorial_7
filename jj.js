const data = require('./data.json')


console.log(data.adress.city)
console.log(data.name)
console.log(data.surname)
console.log(data.welayatlar[2])
data.welayatlar.push("Maral")
data.welayatlar.pop("BAr")

console.log(data.welayatlar)



console.log(data.welayatlar)


data.welayatlar.unshift("BIT")
console.log(data.welayatlar)

console.log(data.welayatlar.length)





const bir = data.sanlar.map((gosmak)=>{
    return gosmak + 3;
})

console.log(bir)















