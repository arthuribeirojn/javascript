function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById("txtano");
  var res = document.getElementById("res");
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert("[ERRO] Verifique a data!");
  } else {
    var fsex = document.getElementsByName("radsex");
    var idade = ano - Number(fano.value);
    var genero = "";
    if (fsex[0].checked) {
      genero = "Homem";
      if (idade >= 0 && idade < 10) {
        img.setAttribute("src", "criançaM.png");
      } else if (idade < 21) {
        img.setAttribute("src", "jovemM.png");
      } else if (idade < 50) {
        img.setAttribute("src", "adultoM.png");
      } else {
        img.setAttribute("src", "idosoM.png");
      }
    } else if (fsex[1].checked) {
      genero = "Mulher";
      if (idade >= 0 && idade < 10) {
        //Criança
      } else if (idade < 21) {
        //jovem
      } else if (idade < 50) {
        //adulto
      } else {
        //idoso
      }
    }
    res.style.textAlign = "center";
    res.innerHTML = `Detectamos ${genero} com ${idade}`;
    res.appendChild(img)
  }
}
