class form extends HTMLElement {
  constructor() {
    super()
    this.innerHTML = `<form>
            <div class="form-control">
              <label for="title">Title</label>
              <input id="title" type="text" name="title" maxlength="60" required/>
              <p id="invalid-title" class="invalid-fb"></p>
            </div>
            <div class="form-control">
              <label for="description">Description</label>
              <textarea
                id="description"
                type="text"
                name="description"
                rows="2"
                required></textarea>
                <p id="invalid-textarea" class="invalid-fb"></p>
            </div>
            <div class="form-control">
              <label for="date">Date</label>
              <input id="date" type="date" name="date" required/>
              <p id="invalid-date" class="invalid-fb"></p>
            </div>
            <div>
              <p class="archieve">Archieve</p>
              <input id="archieve" type="radio" name="isarchieve" value="true" checked="true/>
              <label for="archieve">True</label>
              <input id="no_archieve" type="radio" name="isarchieve" value="false"/>
              <label for="no_archieve">False</label>
            </div>
            <div class="btn-wrap">
              <button id="btnCancel" class="btn-cancel" type="button">Cancel</button>
              <button class="btn-confirm" type="submit">Add</button>
            </div>
          </form>`
  }
}

customElements.define("form-note", form)
