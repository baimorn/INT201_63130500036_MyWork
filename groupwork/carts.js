// export let cartEven = {
//     productadded: [],
//     add: function (product) {
//         cartEven.productadded = localStorage.getItem('cart');
//         if(cartEven.productadded == undefined || cartEven.productadded.length === 0 ) {
//             cartEven.productadded = [];
//         }else {
//             cartEven.productadded = JSON.parse(cartEven.productadded);}
//         let foundIndex = -1;
//         foundIndex = cartEven.productadded.findIndex(
//             (product) => {
//                 product.id === product.id ;
//             });
//         if (foundIndex === -1){
//             cartEven.productadded.push({Id: product.id,qty: 1});
//         }else {
//             cartEven.productadded[foundIndex].qty += 1
//         }
//         localStorage.setItem('cart' , JSON.stringify(cartEven.productadded));
//     }
// }
export class Cart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
        this.itemIdIncart = [];
        this.totalQty = 0;
    }
    clear() {  //ใช้ในการเคลียตะกร้าสินค้าให้เป็น 0
        this.items = [];
        this.totalPrice = 0;
        this.itemIdIncart = [];
        this.totalQty = 0;
    }
    addItem(p) { //เพิ่มสินค้าเข้าไป
        if (!this.itemIdIncart.includes(p.id)) { //เช็คจากเลข id ก่อนว่ามีซ้ำไหม ถ้าไม่ไปต่อ
            this.itemIdIncart.push(p.id);
            this.items.push({ product: p, qty: 0 }) //ให้มี qty เป็น 0
        }
        this.totalPrice = 0; 
        this.totalQty = 0;
        this.items.forEach((pc) => {
            pc.product.id == p.id ? pc.qty++ : pc.qty;
            this.totalPrice += pc.product.price * pc.qty;
            this.totalQty += pc.qty;
        })
    }
    removeItem(p) { //เอาสินค้าออกแล้วเอา id ที่ตรงกันออก (จะเอาไปทำปุ่มลบ ไม่ได้ไปต่อ)
        this.totalPrice = 0;
        this.totalQty = 0;
        this.items.forEach((pc) => {
            pc.product.id == p.id ? pc.qty-- : pc.qty;
            this.totalPrice += pc.product.price * pc.qty;
            this.totalQty += pc.qty;
        })
    }
    static toCart(obj) { //รับ obj เข้ามา
        let cart = new Cart(); 
        cart.items = obj.items;
        cart.totalPrice = obj.totalPrice;
        cart.itemIdIncart = obj.itemIdIncart;
        cart.totalQty = obj.totalQty;
        return cart; //ให้ obj กลายเป็น Cart ทั้งหมด 
    }
}