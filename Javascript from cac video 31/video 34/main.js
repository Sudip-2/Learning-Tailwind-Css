function addLi(langName){
    const newLi = document.createElement('li')
    newLi.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(newLi)
}
addLi("python")
function addopti(langName){
    const newli = document.createElement('li')
    newli.appendChild(document.createTextNode(`${langName}`))
    document.querySelector('.language').appendChild(newli)
}
addopti("Hello sudip")

// Edit 
const secondlang = document.querySelector('li:nth-child(2)')
// console.log(secondlang)
// secondlang.innerHTML = "chup be"

const newli2 = document.createElement('li')
newli2.appendChild(document.createTextNode("Hello UWU"))
secondlang.replaceWith(newli2)

// Edit 
const firstlang = document.querySelector('li:first-child') 
// console.log(firstlang)
firstlang.outerHTML = '<li>hi</li>'

// Remove
const last_lang = document.querySelector('li:last-child') 
// last_lang.remove()