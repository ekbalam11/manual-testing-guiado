# El testing manual

Vamos a realizar dos ejercicios con un enfoque de testing manual.

## Ejecicio 1A: Descuento en tienda

Zara Online ha implementado una nueva política por lo que si gastas *1000€ o más* en una compra te calcula un 10% sobre el valor total. Implementa la función _calculateDiscount_

![](https://oscarm.tinytake.com/media/16bfa8d?filename=1728291957607_TinyTake07-10-2024-11-06-00_638638887617288914.png&sub_type=thumbnail_preview&type=attachment&width=1198&height=115)

Cuando te funcione respondete a las siguientes preguntas:

- ¿Te resulta esclarecedor lo que ves por pantalla?
- ¿Crees que habría alguna otra pruena interesante a realizar para verificar si nuestra función hace lo que se espera?

## Ejercicio 1B: Un descuento menor

Amancio Ortega va que la cosa funciona: un descuento hace a la gente gastar mucho más de lo que se pensaba. Quieren **añadir** una nueva funcionalidad. Si el valor de compra es mayor de **500 euros**, entonces le aplicaremos un **5%** de descuento. **Importante:** ¡los descuentos no deben acumularse!. Es decir, solo debemos aplicar uno a la vez.

Para probarlo _substituye_ los _console.log_ por:

```
console.log(calculateDiscount(750)); // 37.95
```

![](https://oscarm.tinytake.com/media/16bfa91?filename=1728292005690_TinyTake07-10-2024-11-06-49_638638888099553106.png&sub_type=thumbnail_preview&type=attachment&width=1195&height=204)

Cuando te funcione respondete a las siguientes preguntas:

- ¿Sigue funcionando bien tu código para compras de 1000 euros o más?

## Ejercicio 1C: Los cupones de descuento

En la útlima camapaña de verano, Zara Online estuvo distribuyendo cheques con descuentos de 10€ y 20€ para futuras compras. Crea una nueva función que calcule **el precio final** que debe pagar el cliente después de aplicar todos los descuentos y cheques. Primero se debe aplicar el cheque descuento, y luego el % de descuento. ADEMÁS, hay que añadir 5€ de gastos de envío.

**Crea** en el fichero  _exercise-1-discount.js_ una función con las siguientes con las siguientes características:

```
- basePrice: Siempre va a ser un number positivo
- voucher: Puede ser 0, 10 o 20. (es el cheque descuento). SIEMPRE va a ser alguno de estos 3 valores.

function calculateTotal(basePrice, voucher) {

}
```

### Ejemplos

1. Un chico que hace una compra de 750€ y no tiene cheque descuento. Se le debería aplicar un 5% de descuento sobre el precio final. deberíamos obtener 712.5 + 5€ de gastos de envío = 717.5 

2. Una chica que hace una compra de 1500€ y tiene un cheque de descuento de 10€. Debería pagar al final 1341 €  5€ de gastos de envío = 1346

```

console.log("Compra de 750€ sin cheque descuento se le debería aplicar un 5% de descuento", calculateTotal(750)) // 717.5

console.log("Compra de 1500 con un cheque descuento de 10€. Se le debería aplicar un 10% de descuento", calculateTotal(1500)) // 1346
```

![](https://oscarm.tinytake.com/media/16bfad0?filename=1728292684764_TinyTake07-10-2024-11-18-06_638638894884055784.png&sub_type=thumbnail_preview&type=attachment&width=1197&height=295)

## Ejercicio 2A: Escribir las pruebas primero

Mystery Box sigue implementando su software para canjear sus cupones de premio. Lee la docmentación sobre la función del _exercise-2-coupons.js_
y entiende cómo funciona. Fíjate que también hay una variable global de nombre **coupons** que funciona de base de datos de cupones.

Luego, NO CODIFIQUES todavía la función. Escribe todos los console.log (las pruebas) con las entradas que quieres probar tu función. Cómo programador y humano sabes que valor debe devolver la función dado un código de cuòn en concreto. Mira el primer ejemplo.

Escribe por lo menos **3 pruebas más** antes de pasar a implementar la función, una para cada caso que el cupón pueda ser inválido

### Ejercicio 2B: Implementar la función

Ahora pasa a implementar la función. Ten en cuenta dos cosas 

1. Los métodos de array te ayudarán mucho
2. Es un **array de objetos**. 