//Js run sequentially , but there is asynchrounous js , event is a part of it
//Events get activated when an activity invoked like mouse click etc
document.querySelector('#images').addEventListener('click',function(e){
    console.log("images clicked")
},false)//by default the event propogation is false 

//EVENT BUBBLING
// when the value is false event bubbling happens it means the evnet will activate in smaller to bigger order 
// here river is inside images so first we see river clicked then images clicked 

//EVENT CAPTURING
// when the value is true even capturing happens it means the capturing happens from top to bottom 
// here if the value is true then we will see first images clicked then river clicked
document.querySelector('#river').addEventListener('click',function(e){
    console.log("river clicked")
    // e.stopPropagation()//it will stop bubbling up and do what is in this function told
},false)

document.getElementById('google').addEventListener('click',function(e){
    e.preventDefault()
})
document.querySelector('#images').addEventListener('click',function(e){
    console.log(e.target.tagName)//tagname gives tagname when clicking on image it will IMG
    if(e.target.tagName === 'IMG'){
        let removeit = e.target.parentNode
        removeit.remove()
    }
})