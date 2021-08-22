const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';


class Field {
  constructor(field) {
      this.field = field;
      this.x = 0;
      this.y = 0;
  }
  print() {
      let printedField = '';
      for (let i = 0; i < this.field.length; i++) {
          const fieldLine = this.field[i].join('');
          printedField += fieldLine + '\n';
      }
      console.log(printedField);
  }

  askInput(input) {
      input = prompt('Enter W, A, S, or D to navigate: ');
      if (input.toLowerCase === 'w') {
          this.y++;
      } else if (input.toLowerCase === 'a') {
          this.x--;
      } else if (input.toLowerCase === 's') {
          this.y--;
      } else if (input.toLowerCase === 'd') {
          this.x++;
      }
  }

  checkGame() {
      // do something
  }

  isOut() {
      // do something
  }

}

const myField = new Field([
    [pathCharacter, fieldCharacter, hole],
    [fieldCharacter, hole, fieldCharacter],
    [fieldCharacter, hat, fieldCharacter],
  ]);

function playGame() {
    myField.print();
    myField.askInput();
    myField.isOut();
    myField.checkGame();
}

playGame();