
	var roadPrices = {
    germany : 122.6,
    france : 101.1,
    canada : 82.3,
    usa : 72.0,
    spain : 49.3,
    russia : 41.0,
    finland : 40.6,
    china : 35.0
} 

var result = document.querySelector(".result")
function calculate(form) {
	result.innerHTML ='<span>'+ parseInt((roadPrices[form.Contry.value] * form.Road.value))+'</span>'
	result.style['text-align'] = 'right '
}
