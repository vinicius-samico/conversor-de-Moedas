const convertButton = document.querySelector("button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    const inputcurrencyValue = document.querySelector(".input-currency")
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    console.log(currencySelect.value)
    const dolarToday = 5.1
    const euroToday = 6.2

    inputcurrencyValue / dolarToday


    if (currencySelect.value == "dolar") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputcurrencyValue / dolarToday)

    }
    else if (currencySelect.value == "euro") {

        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputcurrencyValue / euroToday)
    }


    currencyValueToConvert.innerHTML.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputcurrencyValue)


}


function chanceCurrency() {


    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "dolar americano"
        currencyImage.src = "./assets/estados-unidos (1) 1.png"
    }
 
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    convertValues()
}




currencySelect.addEventListener("change", chanceCurrency)

convertButton.addEventListener("click", convertValues)
