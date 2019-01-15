let valueInput = document.querySelector(".initial__value");
let outputCurrency = document.querySelector(".outputCurrency").value;
let calkbtn = document.querySelector(".calkbtn");



let calculateCurrency = () => {
  
  const init = valueInput.value;
  if (outputCurrency = document.querySelector(".outputCurrency").value === 'USD'){
    let wynik = init * 3.7668;
    document.querySelector(".initial__value").value = wynik;

  }
    if(outputCurrency = document.querySelector(".outputCurrency").value === 'EUR'){
      let wynik = init * 4.2853;
      document.querySelector(".initial__value").value = wynik;
      
  }
};



calkbtn.addEventListener("click", calculateCurrency );



