async function getCotacao() {
  let valor = document.getElementById("valor").value;
  let moeda = document.getElementById("moeda").value;
  let template = document.getElementById("conversoes");

  const profileResponse = await fetch(
    `https://economia.awesomeapi.com.br/json/${moeda}`
  );

  let data = await profileResponse.json();

  let valorConv = valor * data[0].bid;

  if (moeda == "EUR") {
    var urlImage =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKwjz3BLojUAJEp_BFJp6X1oWQ3ufESdjDeNvsfLCpaXIgGELQ";
  } else if (moeda == "USD") {
    var urlImage =
      "https://st2.depositphotos.com/1756445/12090/i/950/depositphotos_120901800-stock-photo-usd-american-dollar-symbol-us.jpg";
  } else if (moeda == "GBP") {
    var urlImage =
      "https://www.marketpulse.com/wp-content/uploads/2016/07/Pound-Symbol-Textured.jpg";
  } else {
    var urlImage =
      "https://denarium.com/wp-content/uploads/2018/08/Denarium-1-2-BTC-Gold-2018-front.jpg";
  }

  template.innerHTML = `
			<div class="card" style="width: 18rem;">
			  <img class="card-img-top" width="80" src="${urlImage}" alt="Card image cap">
			  <div class="card-body">
			    <h5 class="card-title">${moeda} > BRL</h5>
			    <p class="card-text">R$ ${numberParaReal(valorConv)}</p>
			    
			  </div>
			</div>
  `;
}

function numberParaReal(numero) {
  var formatado = numero
    .toFixed(2)
    .replace(".", ",")
    .toLocaleString("pt-BR");
  return formatado;
}
