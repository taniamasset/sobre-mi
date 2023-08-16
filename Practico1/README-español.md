# Calculadora Simple

¡Bienvenido a la Calculadora Simple! Esta es una herramienta en línea que te permite realizar operaciones matemáticas básicas de manera rápida y sencilla. Ya no tienes que preocuparte por hacer los cálculos manualmente, ¡nuestra calculadora se encarga de eso por ti!

## Cómo Usar

1. Ingresa el primer número en el campo "Operando 1".
2. Ingresa el segundo número en el campo "Operando 2".
3. Selecciona la operación que deseas realizar en el menú desplegable "Operación".
4. Haz clic en el botón "Calcular" para obtener el resultado.
5. Si deseas realizar otro cálculo, puedes hacerlo sin problemas. También puedes limpiar los campos haciendo clic en el botón "Limpiar".

## Operaciones Disponibles

La Calculadora Simple te permite realizar las siguientes operaciones:

- Sumar (+)
- Restar (-)
- Multiplicar (*)
- Dividir (/)

## Implementación Detallada

Esta calculadora está desarrollada utilizando tecnologías web estándar: HTML, CSS y JavaScript. Aquí hay una descripción general de las características implementadas:

- Interfaz atractiva: La calculadora tiene un diseño limpio y agradable que facilita la entrada de números y la selección de operaciones.

- Validación de entrada: Se verifica que los operandos ingresados sean números válidos. Si no es así, se muestra una alerta.

- Manejo de división por cero: Se previene la división por cero y se muestra una alerta si intentas hacerlo.

- Resultado formateado: El resultado se redondea a dos decimales y se muestra en la interfaz, con manejo de resultados demasiado grandes o pequeños.

- Función "Limpiar": Puedes borrar los campos y el resultado en cualquier momento con el botón "Limpiar".

## Pruebas
#### Prueba de funcionamiento básico
Se ingresaron guiones en los campos de operando1 y operando2.
Se verificó la alerta: 'Por favor, ingrese números válidos en los operandos.'

#### Prueba de suma
Caso de prueba 1:

Operandos: 5 y 3
Operación: Sumar (+)
Se verificó el resultado esperado: 5 + 3 = 8

Caso de prueba 2:

Operandos: -2 y 7
Operación: Sumar (+)
Se verificó el resultado esperado: -2 + 7 = 5

#### Prueba de resta
Caso de prueba 1:

Operandos: 10 y 4
Operación: Restar (-)
Se verificó el resultado esperado: 10 - 4 = 6

Caso de prueba 2:

Operandos: 3 y 8
Operación: Restar (-)
Se verificó el resultado esperado: 3 - 8 = -5

#### Prueba de multiplicación
Caso de prueba 1:

Operandos: 6 y 3
Operación: Multiplicar (*)
Se verificó el resultado esperado: 6 * 3 = 18

Caso de prueba 2:

Operandos: -5 y 4
Operación: Multiplicar (*)
Se verificó el resultado esperado: -5 * 4 = -20

#### Prueba de división
Caso de prueba 1:

Operandos: 15 y 3
Operación: Dividir (/)
Se verificó el resultado esperado: 15 / 3 = 5

Caso de prueba 2:

Operandos: 7 y 0
Operación: Dividir (/)
Se verificó el resultado esperado: Se muestra un mensaje de error ("Error, no se puede dividir por cero.").

#### Prueba de números grandes y pequeños
Se ingresaron operandos muy grandes (por ejemplo, 1e15) y se realizaron operaciones de suma, resta, multiplicación y división. Se verificó que se muestra el mensaje de resultado "es demasiado grande".
Se ingresaron operandos muy pequeños (por ejemplo, 1e-15) y se realizaron operaciones de suma, resta, multiplicación y división. Se verificó que se muestra el mensaje de resultado "es demasiado pequeño".

#### Prueba de limpiar campos
Se ingresaron algunos operandos y se seleccionó una operación.
Luego se hizo clic en el botón "Limpiar" y se verificó que los campos de entrada y el área de resultado se borran correctamente.


## Nota

Esta calculadora está diseñada para realizar cálculos simples y no pretende ser una solución avanzada. Si tienes preguntas o comentarios, no dudes en ponerte en contacto con nosotros.

¡Disfruta calculando de manera más fácil y rápida con la Calculadora Simple!