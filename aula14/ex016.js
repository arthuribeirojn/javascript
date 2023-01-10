let num = [5, 8, 4];

num.push(1, 4, 2, 6, 4, 222, 55, 44);

/*for (let pos=0; pos<num.length;pos++){
    console.log(`A posição ${pos} está o número ${num[pos]}`)
}*/
for (let pos in num) {
  console.log(`A posição ${pos} está o número ${num[pos]} `)
}

let pos = num.indexOf(10)
if(pos == -1){
    console.log('O valor não foi encontrado')
} else {
console.log(`O valor está na posição ${pos}`)
}