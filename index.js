// var a = prompt('number1');
// var b = prompt('number2');
// var hasil = alert(parseInt(a) + parseInt(b));
// alert('Hasil Bagi:' + hasilbagi )

// // const usiaAyah = 60
// // const usiaibu = 50
// // console.log('USIA adalah',  usiaAyah - usiaibu)

// // let tahun = prompt("Tahun Berapa Indonesia Merdeka");
// // if (tahun < 1945) {
// //   alert('Belom Merdeka');
// // } else if (tahun > 1945) {
// //   alert('Sudah Merdeka');
// // } else {
// //   alert('Pas Merdeka');
// }

// const score = true;
// const attendance = false;
// const attitude = false;

// const result = attendance || attitude || score;
// console.log(result);

// if (score == false) {
//   console.log("lulus");
// } else {
//   console.log("Tidak Lulus");
// }

// const cars = ['ayla', 'sigra', 'avanza', 'cayla' ]
// console.log('MOBIL', cars)

// console.log('index ke 0', cars[0])
// console.log('index ke 0', cars[1])
// console.log('JUMLAH DATA', cars.length())
// console.log('REVERSE', cars.reverse())
// console.log('SORT', cars.sort())
// console.log('POP', cars.pop())


// for (let i = 1 ; i <= cars.length; i++){
//     console.log(cars[i - i])
// }


// function logger(name, age){
//     console.log(name, age )
// }
// logger('Owl', 37)
// logger('Gerald', 17)

const logger = function(name, age){
    const result = `Nama : ${name}  dan usia ${age}`
    return result
}
const input = logger('Dewa', 20)
console.log(input)


const logger2 = (name, age) => {
    const result = `Name : ${name} dan usia ${age}`
    return result 
}
console.log(logger2('Dwi', 37))


const checkAge = (born) => {
    const now = 2022 
    const result = now - born 
    return result  
}
document.write(checkAge(2006))