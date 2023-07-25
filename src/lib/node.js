export class Node {
  constructor({
    frequencyCharacter = null,
    character = null,
    readed = false,
    leftChildren = null,
    rightChildren = null,
  }) {
    this.frequencyCharacter = frequencyCharacter;
    this.character = character;
    this.readed = readed;
    this.leftChildren = leftChildren;
    this.rightChildren = rightChildren;
  }

  isBigger(node) {
    const { frequencyCharacter } = this;
    if (frequencyCharacter > node?.frequencyCharacter) {
      return true;
    }
    return false;
  }

  isSmaller(node) {
    const { frequencyCharacter } = this;
    if (frequencyCharacter < node?.frequencyCharacter) {
      return true;
    }
    return false;
  }
}
