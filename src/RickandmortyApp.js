import { LitElement, html, css } from 'lit-element';
import { openWcLogo } from './open-wc-logo.js';
import 'data-fetch/data-fetch';
import 'render-fetch/render-fetch';

export class RickandmortyApp extends LitElement {
    static get properties() {
        return {
            title: { type: String },
            page: { type: String },
            data: { type: Array }
        };
    }

    static get styles() {
        return css `
      :host {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        max-width: 960px;
        margin: 0 auto;
        text-align: center;
      }

      main {
        flex-grow: 1;
      }

      .container {
        display: flex;
        border: 1px solid black;
      }

      .logo > svg {
        margin-top: 36px;
        animation: app-logo-spin infinite 20s linear;
      }

      @keyframes app-logo-spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      .app-footer {
        font-size: calc(12px + 0.5vmin);
        align-items: center;
      }

      .app-footer a {
        margin-left: 5px;
      }
    `;
    }

    constructor() {
        super();
        this.data = [];
    }

    render() {
            return html `
      <data-fetch @info="${this._info}"></data-fetch>
      <h1>Characters of Rick and Morty!!!</h1>
      <div class="container">
      <h1>Characters of Rick and Morty!!!</h1>
        ${this.data.map((item) => html `
      <h1>Characters of Rick and Morty!!!</h1>
          <render-fetch
          .image="${item.image}"
          .id="${item.id}"
          .name="${item.name}"
          .location="${item.location}">
          </render-fetch>
      `)}
      </div>
    `;
    }



    _info(e) {
        this.data = e.detail
            // console.log('detail', e.detail)
        console.log('data', this.data);
    }


}