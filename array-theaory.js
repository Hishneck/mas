const names = ['Владилен', 'Елена','Игорь', 'Ксения']

// names.push('Алена')
// names.unshift('Алена')

// const firstName = names.shift()
// const lastName = names.pop()

// console.log('Names:', names)

// const letters = ['a','c','d','b','e']
// console.log(letters.toSorted())
// console.log(letters)

// console.log(names.splice(2, 1))
// console.log(names.toSpliced(2, 1))
// console.log(names)

// const greateWoman = 'Елена'
// const index = names.indexOf(greateWoman)
// console.log(index)
// names.with(index)
// console.log(names[index])

// const capitalNames = names.map(function(name, index){
//     // const newName = name + '!'
//     // return name.toUpperCase()
//     if (index === 1){
//         return 'Елена Великая'
//     }
//     return name
// })
// console.log(capitalNames)

// console.log(names.includes('Игорь'))
// console.log(names.indexOf('Игорь') !== -1)

// const people = [
//     {name: 'Владилен', budget: 4200},
//     {name: 'Елена', budget: 14100},
//     {name: 'Игорь', budget: 300},
//     {name: 'Ксения', budget: 7520},
// ]
 
// console.log(people.indexOf({}))

// let findedPerson

// for (let person of people){
//     if(person.budget==7520){
//         findedPerson=person
//     }
// }
// const findedPerson = people.find(function(person){
//     return person.budget==7520
//     // if(person.budget==7520){
//     //     return true
//     // }
// })

// const finded = people.findIndex(function(person){
//     return person.budget==7520
// })

// // const finded = people.find((p) => p.budget ===7520)
// console.log(people[finded])


// let sumBudget = 0
// const filtered = people.filter(function(p){
//     return p.budget >5000
// })
// console.log(filtered)
// filtered.forEach(function(p){
//     sumBudget = sumBudget + p.budget
// })
// console.log(sumBudget)
// const byBudjet = (p) => p.budget>5000
// const pickBudjet = (p) => p.budget

// const sumBudget = people
//     .filter(byBudjet)
//     .map(pickBudjet)
//     .reduce((acc, p)=>acc + p, 0)

// console.log(sumBudget)

const string = 'Привет, как дела?'
const reversed = string.split('').toReversed().join('!').split('').filter((c)=>c!=='!').join('')

console.log(reversed)