const openOthers = document.getElementsByClassName("bi-three-dots-vertical")
const closeOthers = document.getElementsByClassName("bi-x")
const others = document.getElementsByClassName("others-div")

for (let i = 0; i < openOthers.length; i++) {
    openOthers[i].addEventListener("click", function () {
        others[i].style.display ="unset"
    })
}

for (let i = 0; i < closeOthers.length; i++) {
    closeOthers[i].addEventListener("click", function () {
        others[i].style.display ="none"
    })
}
