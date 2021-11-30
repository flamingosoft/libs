// debounce оборачивает функцию так, чтобы ее нельзя было вызвать чаще, чем timeInMs милисекунд

function print(msg) {
	console.log(msg)
}

function debounce(func, timeInMs){
	function wrapper() {
  	let period = (new Date()).getTime() - wrapper.lastCall
    //console.log("period: ", period, ", interval: ", timeInMs)
    if (period > timeInMs)
    {
      //console.log("run")
      wrapper.lastCall = (new Date()).getTime()
  	  func.apply(this, arguments)
    } else { 
      console.log("breaked with args: ", [].join.apply(arguments))
    }
  }
  wrapper.lastCall = 0;
  return wrapper;
}

console.clear()

let print2000 = debounce(print, 2000)
print2000("раз")
setTimeout(() => print2000("1000"), 1000)
print2000("следом")
setTimeout(() => print2000("3000"), 3000)
setTimeout(() => print2000("4000"), 4000)