var array = []
var num = document.querySelector('input#iNumber')
var msgErro = document.querySelector('div#msgErro')
var select = document.querySelector('select')
var resultado = document.querySelector('div#resultado')
function adicionar() {
  var numValue = num.value
    if (Number(numValue) >= 1 && Number(numValue) <= 100) {
    if (array.indexOf(Number(numValue)) == -1) {
      array.push(Number(numValue)) 
      var options = document.createElement("option")
      options.innerHTML = `O valor ${Number(numValue)} foi adicionado.`
      select.appendChild(options)
      resultado.style.display = "none"
    } else if (array.indexOf(Number(numValue)) !== -1) {
      msgErro.innerHTML = '<p style="color:red">*O número já foi adicionado!*</p>'
      msgErro.style.display = 'block'
    }
    } else if (numValue.length == 0){
      msgErro.innerHTML = '<p style="color:red">*Por favor, insira um número.*</p>'
      msgErro.style.display = 'block'
    } else {
      msgErro.innerHTML = '<p style="color:red">*Número inválido.*</p>'
      msgErro.style.display = 'block'
    }
}
function puff() {
  msgErro.style.display = "none"
}
function finalizar() {
  function maiorValor() {
    var last = array.length - 1
    var mv1 = array[last]
    return mv1
  }
  function soma() {
    let somar = 0
    for (let i = 0; i < array.length; i++) {
      somar += array[i]
    }
    return somar
  }
  function media() {
    let md = 0
    let somar = 0
    for (let i = 0; i < array.length; i++) {
      somar += array[i]
      md = somar / array.length
    }
    return md
  }
  array.sort((a,b) => a - b)
  var mv = maiorValor()
  var mev = array[0]
  var sm = soma()
  var md = media()
  if (array.length >= 2) {
  resultado.style.display = "block"
  resultado.innerHTML = `<p>Ao todo, temos ${array.length} números cadastrados.</p>
  <p>O maior valor informado foi ${mv}.</p>
  <p>O menor valor informado foi ${mev}.</p>
  <p>Somando todos os valores, temos ${sm}.</p>
  <p>A média dos valores cadastrados é ${md}.</p>`
} else {
  msgErro.innerHTML = '<p style="color:red">*Por favor, insira mais um número.*</p>'
  msgErro.style.display = 'block'
}
}