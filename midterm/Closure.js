//Closure
// ทำเป็น function การต่อ String หรือบวกเลข โดยเป็นแบบที่ใช้ Closure เพื่อ Fix ค่าของข้อมูล

function plusType(a){ //สร้าง function ที่เป็น Outer function โดยรับ parameter 1 ตัว
    function sumElement(b){ //สร้าง function ที่เป็น Nested โดยรับ parameter 1 ตัว
        return a + b; //เอา parameter ทั้งสอง function มาบวกกัน
    }
    return sumElement; 
}

const addFirst = plusType('Java '); //สร้าง function addFirst เพื่อกำหนดค่าตัวแรกที่ต้องการบวก
const addFirst2 = plusType('Aj.'); //สร้าง function addFirst2 เพื่อกำหนดค่าตัวแรกที่ต้องการบวกอีกชุด

console.log(addFirst('script')); //ใส่ค่าที่ต้องการจะนำมาบวกกัน
console.log(addFirst2('Umaporn'));//ใส่ค่าที่ต้องการจะนำมาบวกกันอีกชุด

//   ในบรรทัด 15 กับ 16 มันจะเอาค่า parameter ที่เราใส่ไป ไปใส่ที่ตัวแปร b เพราะว่าพอเราเรียกใช้ function plusType แล้วเราใส่ค่า
//parameter ที่เป็นตัวแรกให้กับ function addFirst ไปมันจะไปเรียก function sumElement เนื่องจากเรา return มันออกมา
//เราก็เลยสามารถใส่ค่า parameter ผ่านตัว addFirst ได้

//ตัวอย่างการบวกเลข
const addNumber = plusType(20);
 console.log(addNumber(14)); // 34