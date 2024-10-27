import "./component/card.js"
import "./component/form.js"

const addNote = document.getElementById("btnAdd")
const cancelBtn = document.getElementById("btnCancel")
const plusCont = document.querySelector(".plus")
const formNote = document.getElementById("form")
let isForm = false

addNote.addEventListener("click", () => {
  hideShowForm()
})

cancelBtn.addEventListener("click", () => {
  hideShowForm()
})

document.addEventListener("DOMContentLoaded", () => {
  if (isForm) {
    formNote.style.display = "block"
    plusCont.style.display = "none"
  } else {
    formNote.style.display = "none"
    plusCont.style.display = "block"
  }
})

const hideShowForm = () => {
  isForm = !isForm
  formNote.style.display = isForm ? "block" : "none"
  plusCont.style.display = isForm ? "none" : "block"
}
