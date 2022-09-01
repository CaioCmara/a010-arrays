const minhaArray = [1, 3, 9, 4]
const stringArray = ["caio", "teste", "bola"]
const mistoArray = [1, "foguete", false]

const minhaArrayCopia =  minhaArray.slice()
const stringArrayCopia = stringArray.slice()
const mistoArrayCopia =  mistoArray.slice()

minhaArrayCopia.push(12) 
stringArrayCopia.pop()
mistoArrayCopia.splice(1,1)

console.log (minhaArray, minhaArrayCopia)
console.log (stringArray, stringArrayCopia)
console.log (mistoArray, mistoArrayCopia)