class form extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `<form>
            <div class="form-control">
              <label for="title">Title</label>
              <input id="title" type="text" name="title" />
            </div>
            <div class="form-control">
              <label for="description">Description</label>
              <textarea
                id="description"
                type="text"
                name="description"
                rows="6"></textarea>
            </div>
            <div class="btn-wrap">
              <button id="btnCancel" class="btn-cancel" type="button">Cancel</button>
              <button class="btn-confirm" type="submit">Add</button>
            </div>
          </form>`
  }
}

customElements.define("form-note", form)
