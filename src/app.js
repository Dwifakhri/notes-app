import "./component/form.js"
import { notesx } from "./data/notes.js"

const addNote = document.getElementById("btnAdd")
const cancelBtn = document.getElementById("btnCancel")
const plusCont = document.querySelector(".plus")
const formNote = document.getElementById("form")
const formSubmit = document.querySelector("form")
const titleInput = document.querySelector("input")
const descriptionInput = document.querySelector("textarea")
const container = document.querySelector(".container-grid")
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

  notesx.forEach((item, i) => {
    const el = document.createElement("div")
    el.className = "card-container"
    el.id = `${i}`
    el.innerHTML = `
    <div class="header">
      <h2 id="title">${item.title}</h2>
    </div>
    <div class="card">
      <p id="description">
        ${item.description}
      </p>
    </div>`

    container.appendChild(el)
  })
})

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault()

  const title = titleInput.value
  const description = descriptionInput.value
  const newEl = document.createElement("div")
  newEl.className = "card-container"
  newEl.id = container.childElementCount.toString()
  newEl.innerHTML = `
    <div class="header">
      <h2 id="title">${title}</h2>
    </div>
    <div class="card">
      <p id="description">
        ${description}
      </p>
    </div>`
  const firstNote = document.querySelector(".card-container")
  container.insertBefore(newEl, firstNote)
  hideShowForm()
  formSubmit.reset()
})

titleInput.addEventListener("input", (e) => {
  const message = document.getElementById("invalid-title")
  const titleInput = document.querySelector("input")
  if (e.target.value.length < 1) {
    message.style.display = "block"
    titleInput.classList.add = "invalid"
    message.innerText = "The title field is required"
    return
  }
  if (e.target.value.length > 13) {
    message.style.display = "block"
    titleInput.classList.add = "invalid"
    message.innerText = "The title field is maximum 12 character"
    return
  }
  message.style.display = "none"
})

descriptionInput.addEventListener("input", (e) => {
  const message = document.getElementById("invalid-textarea")
  if (e.target.value.length < 1) {
    message.style.display = "block"
    descriptionInput.classList.add = "invalid"
    message.innerText = "The description field is required"
    return
  }
  message.style.display = "none"
})

const hideShowForm = () => {
  isForm = !isForm
  formNote.style.display = isForm ? "block" : "none"
  plusCont.style.display = isForm ? "none" : "block"
}
