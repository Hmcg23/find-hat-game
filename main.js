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
      input = prompt('Enter W, A, S, or D to navigate: ').toLowerCase();
      if (input === 'w') {
          this.y--;
      } else if (input === 'a') {
          this.x--;
      } else if (input === 's') {
          this.y++;
      } else if (input === 'd') {
          this.x++;
      }
  }

  gameStatus() {
    if (this.field[this.y][this.x] === hole) {
        return 'hole';
    } else if (this.field[this.y][this.x] === hat) {
        return 'win';
    } else if (this.y <= -1 || this.y >= this.field.length || this.x <= -1 || this.x >= 10) {
        return 'out';
    }
    return 'play';


  }


  generateField() {
    const newField = [];
    const height = 10;
    const width = 20;
    const percentageOfHoles = 50;
    const holeAmount = Math.floor(percentageOfHoles / (width * height) * 100);
    const randY = Math.floor(Math.random() * height);
    const randX = Math.floor(Math.random() * width);
    console.log(percentageAmount);
    // Creates field of play, depending on given width and height
    for (let i = 0; i < height; i++) {
        const heightArr = [];
        newField.push(heightArr);
        for (let j = 0; j < width; j++) {
            newField[i].push(fieldCharacter);
          }
      }
    for (let i = 0; i < holeAmount; i++) {
        const holeY = Math.floor(Math.random() * height);
        const holeX = Math.floor(Math.random() * width);
        if (newField[holeY][holeX] === fieldCharacter) {
            newField[holeY][holeX] === hole;
        }
    }

      // places the hat, and the path character
      newField[randY][randX] = hat;
      newField[0][0] = pathCharacter;
      this.field = newField;
}

  playGame() {
    let gameOver = this.gameStatus();
    while (gameOver === 'play') {
      this.print();
      this.askInput();
      this.gameStatus();
      gameOver = this.gameStatus();
      this.field[this.y][this.x] = pathCharacter;
    }

    if (gameOver === 'hole') {
        console.log('You fell into a hole!');
    } else if (gameOver === 'win') {
        console.log('You win!');
    } else if (gameOver === 'out') {
        console.log('You went out of bounds :/');
    }
}

}

const myField = new Field([
    [pathCharacter, fieldCharacter, hole],
    [fieldCharacter, hole, fieldCharacter],
    [fieldCharacter, hat, fieldCharacter],
  ]);


myField.generateField();
myField.playGame();
