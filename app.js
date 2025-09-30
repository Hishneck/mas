// ТЕОРИЯ
/*
const array = [1, 2, 3, 5, 20, 42]
// const arrayString = ['a', 'b', 'c', null, 12]
// const array = new Array(1, 2, 3, 5, 20, 42)

// console.log(array.length)
console.log(array[array.length - 1])
*/

const inputElement = document.getElementById('title')
const createBtn= document.getElementById('create')
const listElement = document.getElementById('list')
const confirmWindow = document.getElementById('confirm')
const btnClose = document.getElementById('btn-close')
const btnConfirm = document.getElementById('btn-confirm')


//console.log(inputElement.value)

//const notes = ['записать блок про массивы' , 'рассказать теорию объектов']

// function render(){

//     // for (let i = 0; i < notes.length; i++) {
//     //     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
//     // }
//     for ( let note of notes){
//         listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note))
//     }
// }

// render()

// createBtn.onclick = function () {
//     if (inputElement.value.length === 0){
//         return
//     }
//     // listElement.innerHTML = 
//     listElement.insertAdjacentHTML('beforeend', 
//         getNoteTemplate(inputElement.value)
//     )
//     inputElement.value = ''
// }

// function getNoteTemplate(title){
//     return `
//         <li
//             class="list-group-item d-flex justify-content-between align-items-center"
//         >
//             <span>${title}</span>
//             <span>
//                 <span class="btn btn-small btn-success">&check;</span>
//                 <span class="btn btn-small btn-danger">&times;</span>
//             </span>
//         </li>
//     `
// }

/*
ТЕОРИЯ ОБЪЕКТОВ

const person = {
    firstName: 'Alex',
    lastName: 'Minin',
    year: 1993,
    hasGirlfriend: false,
    language: ['ru', 'en', 'de'],
    getFullname: function(){
        console.log(person.firstName + '' + person.lastName)
    }
}
console.log(person.year)
console.log(person['language'])
const key = 'hasGirlfriend'
console.log(person[key])
person.hasGirlfriend = true
ТЕОРИЯ ОБЪЕКТОВ
*/

const notes = [
    {
        title: 'записать блок про массивы',
        completed: false,
    }, 
    {
        title: 'рассказать теорию объектов',
        completed: true,
    } 
]

function render(){
    listElement.innerHTML = ''
    if (notes.length===0){
        listElement.innerHTML='<p>Нет элементов</p>'
    }
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i))
    }
}

render()

createBtn.onclick = function () {
    if (inputElement.value.length === 0){
        return
    }
    const newNote = {
        title: inputElement.value,
        completed: false,
    }
    notes.push(newNote)
    render()
    inputElement.value = ''
}

listElement.onclick = function(event){
    if (event.target.dataset.index){
        const index = parseInt(event.target.dataset.index)
        const type = event.target.dataset.type
        if(type==='toggle'){
        notes[index].completed = !notes[index].completed
        }else if (type==='remove'){
            confirmOpen(index)
            // notes.splice(index, 1)
        }
        render()
    }
}
const confirmOpen =function(index){
    
    // let activeBtnConfirm = false
    confirmWindow.classList.toggle('active')
    btnClose.onclick = ()=>{
        confirmWindow.classList.remove('active')
    }
    btnConfirm.onclick=()=>{
        confirmWindow.classList.remove('active')
        notes.splice(index, 1)
        render()
        console.log('dsahwodacfawdsa')
    }
    
}

function getNoteTemplate(note, index){
    return `
        <li
            class="list-group-item d-flex justify-content-between align-items-center"
        >
            <span class="${note.completed ? 'text-decoration-line-through' : ''}">${note.title}</span>
            <span>
                <span class="btn btn-small btn-${note.completed ? 'warning' : 'success'}"data-index="${index}" data-type="toggle">&check;</span>
                <span class="btn btn-small btn-danger "data-index="${index}"data-type="remove">&times;</span>
            </span>
        </li>
    `
}

// confirm('Вы действительно хотите удалить заметку?')btn-danger
