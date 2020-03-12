import { LitElement, html, property } from '@polymer/lit-element';
import './dropdown';

// imperative way to interact with web component
const dropdown = document.querySelector('x-dropdown');
dropdown.title = 'custom dropdown';
dropdown.addEventListener('visibleChange', (e) => console.log(e));


// Declarative template binding to interact with web component
class XApp extends LitElement {
  customTitle = 'Custom Title!';

  render() {
    return html`
      <x-dropdown @visibleChange=${(e) => this.log(e)} .title="${this.customTitle}">
        Hello From Lit-HTML!
      </x-dropdown>
    `;
  }

  log(e) {
    console.log(e);
  }
}

customElements.define('x-app', XApp);