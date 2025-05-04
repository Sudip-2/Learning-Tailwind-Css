const parent = document.querySelector('.parent')
// console.log(parent)
// console.log(parent.children[1].innerHTML)

for (let i = 0;i<parent.children.length;i++){
  // parent.children[i].style.color = "red"
}
const dayone = document.querySelector('.days')
// console.log(dayone)
// console.log(dayone.parentElement)
// console.log(dayone.nextElementSibling)
// console.log(parent.childNodes)

// creating element
const div = document.createElement('div')
console.log(div)
div.className = 'div1'
div.id = 'divid'
div.setAttribute ("title","titlenum1")
div.style.backgroundColor = "red"
// div.innerHTML = "sudip learning js"
const addtext = document.createTextNode ("sudip coder")
div.appendChild(addtext)
div.style.padding = "100px"
document.body.appendChild(div)//when we create a element using dom its in memory so we need to append it in document body