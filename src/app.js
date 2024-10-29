import "./component/form.js"
import "./component/navbar.js"
import "./component/footer.js"
import { notesData } from "./data/notes.js"

const addNote = document.getElementById("btnAdd")
const cancelBtn = document.getElementById("btnCancel")
const plusCont = document.querySelector(".plus")
const formNote = document.getElementById("form")
const formSubmit = document.querySelector("form")
const titleInput = document.querySelector("input#title")
const descriptionInput = document.querySelector("textarea")
const dateInput = document.querySelector("input#date")
const archieveInput = document.querySelector("input#archieve")
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

  notesData.forEach((item, i) => {
    const el = document.createElement("div")
    el.className = "card-container"
    el.id = `${i}`
    el.innerHTML = `
    <div class="header">
      <h2 id="title" title="${item.title}">${item.title}</h2>
    </div>
    <div class="info">
      <p><img src="/src/assets/icon-time.svg" width="15" height="15"/> ${convertDate(
        item.createdAt
      )}</p>
      ${
        item.archived
          ? '<img src="/src/assets/icon-folder.svg" width="15" height="15"/>'
          : ""
      }
    </div>
    <div class="card">
      <p id="description">
        ${item.body}
      </p>
    </div>`

    container.appendChild(el)
  })
})

formSubmit.addEventListener("submit", (e) => {
  e.preventDefault()

  const title = titleInput.value
  const description = descriptionInput.value
  const date = dateInput.value
  const archieve = archieveInput.value
  const newEl = document.createElement("div")
  newEl.className = "card-container"
  newEl.id = container.childElementCount.toString()
  newEl.innerHTML = `
    <div class="header">
      <h2 id="title" title="${title}">${title}</h2>
    </div>
    <div class="info">
      <p><img src="/src/assets/icon-time.svg" width="15" height="15"/> ${convertDate(
        date
      )}</p>
      ${
        archieve
          ? '<img src="/src/assets/icon-folder.svg" width="15" height="15"/>'
          : ""
      }
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
  if (e.target.value.length > 61) {
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

const convertDate = (date) => {
  const d = new Date(date)
  return `${d.getDate()}-${d.getMonth() + 1}-${d.getFullYear()} `
}
