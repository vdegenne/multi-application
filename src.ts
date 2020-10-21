import { css, customElement, LitElement, property } from 'lit-element';
import { html } from 'lit-html';

@customElement('multi-application')
class MultiApplication extends LitElement {

  protected min = 5;
  protected max = 110;
  protected difficulty = 1;
  protected a = 1;
  protected b = 1;

  @property()
  protected state = 'problem';

  feedback = '';

  static styles = css`
  :host {
    display: block;
    padding: 50px;
    background-color: lightgrey;
    font-size: 22px;
    cursor: pointer;
  }`;

  constructor() {
    super();
    this.shuffle();

    this.addEventListener('click', () => {
      if (this.state === 'problem') {
        this.state = 'solution';
      } else {
        this.difficulty++;
        this.shuffle();
        this.state = 'problem';
      }
    })
  }

  render() {
    if (this.state === 'problem') {
      this.feedback = `${this.a} x ${this.b}`;
    }
    else {
      this.feedback = `= ${this.a * this.b}`;
    }

    return html`${this.feedback}`;
  }

  shuffle () {
    const min = this.min + this.difficulty;
    const max = this.max + this.difficulty;

    this.a = Math.floor(Math.random() * (max - min)) + min;
    this.b = Math.floor(Math.random() * (max - min)) + min;
  }
}

// customElements.define('multi-application', MultiApplication);