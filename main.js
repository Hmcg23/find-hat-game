const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
  constructor(field) {
      this.field = field;
  }
  print() {
      let printedField = '';
      for (let i = 0; i < this.field.length; i++) {
          const fieldLine = this.field[i].join('');
          printedField += fieldLine + '\n';
      }
      console.log(printedField);
  }

  askInput() {
      const tempInput = prompt('Enter W, A, S, or D to navigate: ');
      const input = tempInput.toLowerCase();
      if (input === 'w') {
          // do something
      } else if (input === 'a') {
          // do something
      } else if (input === 's') {
          // do something
      } else if (input === 'd') {
          // do something
      }
  }

  testWin() {
      // do something
  }

  isOut() {
      // do something
  }

}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

myField.print();