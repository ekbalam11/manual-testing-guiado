
/**
 * 
 * @param {number} totalPrice El valor total de la compra 
 * @returns {number} Devuelve los euros que le podemos aplicar de descuento 
 */
function calculateDiscount(price) {
    let discount = 0

    if(price >= 1000){
    discount = price * .10 ;
    return discount;

    } if(price >= 500) {
    return discount = price * .05;
    } else {
        return 0
    }
}
// console.log(calculateDiscount(1000)); // 100 , pues 100 es el 10% de 1000
// console.log(calculateDiscount(5467.12)); // 100 , pues 100 es el 10% de 1000
// console.log(calculateDiscount(-12.12)); // 100 , pues 100 es el 10% de 1000
// console.log(calculateDiscount(750)); // 100 , pues 100 es el 10% de 1000
// console.log(calculateDiscount(100)); // 0, pues no llegamos al mínimo para obtener un descuento
// console.log(calculateDiscount(99.99)); // 0, pues no llegamos al mínimo para obtener un descuento


function calculateTotal(basePrice, voucher) {
    let total = basePrice;
    const gastosEnvio = 5;
    const validVouchers = [0, 10, 20];

    if(!validVouchers.includes(voucher)) {
        throw new Error('Voucher inválido! Debe ser 0, 10 o 20 euros de descuento...')
    };
    
    total -= voucher;

    return total - calculateDiscount(total) + gastosEnvio; // Agregar gastos de envío
  };

  try {
console.log("Compra de 750€ sin cheque descuento se le debería aplicar un 5% de descuento", calculateTotal(750, 0)) // 717.5

console.log("Compra de 1500 con un cheque descuento de 10€. Se le debería aplicar un 10% de descuento", calculateTotal(1500, 10)) // 1346

console.log("Compra de 1500 con un cheque descuento de 10€. Se le debería aplicar un 10% de descuento", calculateTotal(999.99, 15)) // inválido

  } catch (error){
    console.error(error.message); // Voucher inválido. Debe ser 0, 10 o 20.
  }