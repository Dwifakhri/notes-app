class navbar extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `<nav id="nav">
        <div class="content">
          <h2>Notes App</h2>
        </div>
      </nav>`
  }
}

customElements.define("nav-bar", navbar)
