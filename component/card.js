class card extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `<div class="card-container">
            <div class="header">
              <h2>Title</h2>
            </div>
            <div class="card">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos,
                architecto nam deserunt asperiores eius, excepturi est quidem
                obcaecati error, expedita labore?
              </p>
            </div>
          </div>`
  }
}

customElements.define("card-note", card)
