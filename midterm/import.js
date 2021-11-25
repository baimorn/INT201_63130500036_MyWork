//ประกาศ import เพื่อเรียกใช้งาน wordStaked function จากไฟล์ function.js
import { wordStaked } from './function.js';
//สร้างตัวแปร sentence เพื่อเรียกใช้งานและเก็บค่า return จาก wordStaked
let sentence = wordStaked("the first parameter");
//ค่าที่เก็บอยู่ใน sentence มีแค่ส่วน return Arrow function ของ wordStaked เท่านั้น
//ดังนั้น sentence("second"); จึงเป็นการกำหนด parameter ของ Arrow function (str1)
document.getElementById("test").innerHTML = sentence("second");
document.getElementById("test1").innerHTML = sentence(" , third");
document.getElementById("test2").innerHTML = sentence(" , fourth");