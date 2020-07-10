let btn = document.getElementById('button')
let share = document.getElementById('share-div')
let textDiv = document.getElementById('text')
let profile = document.getElementsByClassName('profile')[0]


function respondToClick() {
    if (screen.width <= 375) {
        profile.style.display = 'none'
        share.classList.remove('show')
    }
}
btn.addEventListener('click', respondToClick)


// let dontMatch = '.profile'
// function removeShare(event){
//     if(!event.target.matches(dontMatch)){
//         share.classList.add('show')
//     }
// }

// document.addEventListener('click', removeShare)