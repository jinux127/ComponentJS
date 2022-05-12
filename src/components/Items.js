import Component from '../Component.js';

export default class Items extends Component {
  setup() {
    this.$state = { items: ['item1', 'item2'] };
  }
  template() {
    const { items } = this.$state;
    return `
            <ul>
                ${items
                  .map(
                    (item, key) => `
                <li>${item}</li>
                <button class="deleteButton" data-index="${key}">삭제</button>
                `
                  )
                  .join('')}
            </ul>
            <button class="addButton">추가</button>
        `;
  }

  setEvent() {
    this.$target.addEventListener('click', ({ target }) => {
      const items = [...this.$state.items];

      if (target.classList.contains('addButton')) {
        this.setState({ items: [...items, `items${items.length + 1}`] });
      }

      if (target.classList.contains('deleteButton')) {
        items.splice(target.dataset.index, 1);
        this.setState({ items });
      }
    });
  }
}
