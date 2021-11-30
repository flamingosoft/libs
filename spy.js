// функция декоратор, оборачивающая функцию для дальнейшего логирования всех вызовов в func.calls

function spy(func) {
  function wrapper() {
  	wrapper.calls.push([].join.apply(arguments))
    return func.apply(this, arguments)
  }
  wrapper.calls = []
  return wrapper;
}

let lib = {
	test(msg) {
		console.log(msg)
	}
}

lib.test = spy(lib.test)
lib.test("sdf")
lib.test("new props")
console.log("calls: ", lib.test.calls)

for (let item of lib.test.calls) 
  console.log("calls stack: ", item)
