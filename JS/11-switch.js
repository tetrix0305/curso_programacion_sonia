// IF sobre valores discretos de una sola variable
// if (x> 5)
// if (x= 2&& y == 3)

let cargo // Gerente, Seniro, Junior, Becario
cargo = 'Gerente'
// cargo = 'Senior'
// cargo = 'Junior'
let bonus

switch (cargo.toLowerCase()){
    case 'Director':
    case 'gerente':
        bonus = 10000        
        break;
    case 'Senior':
        bonus = 1000
    default:
        bonus = 0
        break
}





console.log (´Como eres $ {cargo}, Tu bonus es $ {bonus}€´)

// En Java, C#..
// String name = 'Pepe'
// String namehay = UpperCase(name)

let array = []
array.push ()


let name = 'Pepe'
let nameMin = name.toLowerCase () /*esto es para que lo convierta en minuscula*/
let nameMay = name.toUpperCase () /*esto es para que lo convierta en mayuscula*/

console.log (name, nameMay, nameMay)