/** EXPORT DEFAULT: Tiene dos caracteristicas  
 * 1ra, solo puede haber un EXPORT DEFAUL por archivo
 * 2da. Lo puedes importar y utilizar como se desee
*/

/**export default function multiplicar (n1, n2) {
    return n1 * n2
}*/

const multiplicar = (n1, n2) => n1 * n2
export default multiplicar

export function sumar (n1, n2) {
     return n1 + n2
 }

export const sumar2 = (n1, n2) => n1 + n2



