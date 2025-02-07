# IBP-BUTTON

## Objetivo
Actualmente desde negocio se nos pide la realización del siguiente componente button https://www.figma.com/design/P5olhzvzgNOm8hPuWfpteZ/Iberia-DS-V0.2.4?node-id=2-723&m=dev. Como se puede ver en el componente está compuesto por dos iconos opcionales, uno a cada lado, y un texto. Todo ello envuelto en un container.

## Problema
Cuando extendemos el componente y queremos realizar un override de la función render no es posible acceder a las variables privadas de la clase padre. Tampoco cuenta con la opción de acceder a ellas mediante getters y setters.

```
ERROR: Private name "#slots" must be declared in an enclosing class
ERROR: Private name "#disabled" must be declared in an enclosing class
```

Para poder solventar este problema solo habría dos opciones, pisar todo el comportamiento de estas variables, lo cual desaconsejaría.

Una segunda opción que fuera realizar una PR al código de PF donde podamos añadir esos getter y setter. Teniendo en cuanta que solo han aceptado 15 PRs en todo el proceso no creo que nos las aprueben. Es por ello que creo que esto supone un bloqueo al uso de esta librería.

## Solución

Entiendo que lo que queremos resolver aquí es que queremos añadir un botón con 2 iconos uno a la derecha y otro a la izquierda y eso es lo que queremos probar

Después de mirar el componente de patternfly y lo que tenemos en figma, no veo que exista ningún problema para poder usar nuestra clase derivada de pf-button y no hace falta realizar ningún opverride ni nada extra, sólo extender el componente base de patternfly.

No hace falta sobreescribir la función render ni tampoco vamos a tener que acceder a las variables privadas de la clase padre.

Básicamente no hay que hacer nada porque el componente de patternfly ya nos permite ese caso de uso directamente usando el slot.

Se ha creado una página de storybook donde se puede ver el componente funcionando.
`ibp-button.stories.ts `

Además aprovechando este caso de uso hw intentado usar el componente que existe de ib-icon pero tampoco extiende de patternfly y además los estilos de este componente no están bien aplicados y nos limita su uso en este caso.

Para mostraros también cómo podrías utilizar el componente de icono de patternfly he utilizado ese componente y os he hecho un ejemplo de cómo usar lso iconos con nuestros propios iconos.

Los iconos tendrían que estar en la librería de estilos y hay que pensar cómo los vamos a consumir.

En resumen para poder usar un botón con dos iconos sólo tendremos que hacer:

```html
 <ibp-button>
    <pf-icon set="iberia" icon="avios" size="md"></pf-icon>
    Botón con iconos
    <pf-icon set="iberia" icon="checkin" size="md"></pf-icon>
  </ibp-button>
```










