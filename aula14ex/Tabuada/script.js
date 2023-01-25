function gerar() {
  let num =document.getElementById("txtn");
  let tab = document.getElementById("seltab");
  let n = Number(num.value); 
  
  if (num.value.length == 0) {
    window.alert("Digite um número");
  } else {       
   tab.innerHTML = "";
    for (let c = 1; c <= 10; c++) {
      let item = document.createElement("option");
      item.text = `${n} x ${c} = ${n * c}`;
      tab.appendChild(item);
    }
     
  }
}
