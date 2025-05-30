// const mobileBtn = document.getElementById('mobile-btn');
// const close = document.getElementById('close');
const navBar = document.getElementById('nav-bar')
const open = document.getElementById("ham")
// mobileBtn.addEventListener('click', function() {
//     mobileBtn.classList.toggle('hidden');
//     navBar.classList.toggle('hidden');
//     close.classList.toggle('hidden')
// });

// close.addEventListener('click', function(){
//     navBar.classList.toggle('hidden');
//     mobileBtn.classList.toggle('hidden');
//     close.classList.toggle('hidden')
// })

open.addEventListener("click", function (){
        navBar.classList.toggle('hidden');
})