console.clear()

function print(msg) {
	console.log(msg)
}

function delay(func, timeInMs){
	return function() {
  	setTimeout(() => func.apply(this, arguments), timeInMs)
  }
}

let delay1000 = delay(print, 1000)
let delay1500 = delay(print, 1500)

delay1500("1500")
delay1000("1000")