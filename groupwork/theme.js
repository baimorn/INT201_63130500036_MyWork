//ปรับสีที่หน้าจอให้เป็นธีม 2 ธีม คือ สว่าง กับ มืด เอาไปใช้งานหน้า productlist 
export class Theme {
    static light() { 
        let bg = document.querySelector('body')
        bg.style.backgroundColor = '#D3D3D3';
        light.style.backgroundColor = '#000000'
        localStorage.setItem("theme", "light")
    }

    static dark() {
        let bg = document.querySelector('body')
        bg.style.backgroundColor = '#444444';
        dark.style.backgroundColor = '#currentColor';
        localStorage.setItem("theme", "dark");
    }
}