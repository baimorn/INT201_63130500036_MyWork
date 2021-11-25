//higher order function
//ฟังก์ชั่นที่รับฟังก์ชั่นเป็นพารามิเตอร์ หรือคืนค่าเป็นฟังก์ชั่น
function rectangle(width,length,fn){ //ไม่กำหนดที่ชื่อ แต่คาดหวังที่จะส่งออกมาเป้น function
    return fn(width,length); //fn = syntax function
}
function multiple(width,length){ //function multiple จะถูกส่งไปให้กับ fn
    return width * length
}
let rectangle1 = rectangle(5,10,multiple) // 5 = width / 10 = length / multiple = function
console.log(`Rectangle Area : ${rectangle1} `)

//Closure
//ฟังก์ชันสามารถจดจำและเข้าถึงขอบเขตคำศัพท์ได้แม้ว่าฟังก์ชันนั้นจะดำเนินการนอกขอบเขตคำศัพท์ก็ตาม
function outer() {
let firstname = "Mark" ;
    function inner() {
        let lastname = "Zuckerberg"
        console.log(`You Name is : ${firstname} ${lastname}`)
    }
    return inner
}
const myInner = outer() // -> fn inner
myInner() // -> 5