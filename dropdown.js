import { LitElement, html, property } from '@polymer/lit-element';

class XDropdown extends LitElement {
  // If using TypeScript or Babel compile
  // steps advanced decorators are available
  // @property()
  // visible = false;
  // @property()
  // title = 'dropdown';

  static get properties() {
    return {
      visible: false,
      title: 'dropdown',
    }
  }

  render() {
    return html`
      <style>
        .dropdown div {
          border: 1px solid #ccc;
          padding: 12px;
        }
      </style>
      <div class="dropdown">
        <button @click="${(e) => this.toggle(e)}">${this.title}</button>
        ${this.visible ?
          html`
            <div>
              <slot></slot>
            </div>`
          : '' }
      </div>
    `;
  }

  toggle() {
    this.visible = !this.visible;
    this.dispatchEvent(new CustomEvent('visibleChange', { detail: this.visible }));
  }
}

customElements.define('x-dropdown', XDropdown);