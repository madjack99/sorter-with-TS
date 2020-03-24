export class CharactersCollection {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(left: number, right: number): boolean {
    return this.data[left].toLowerCase() > this.data[right].toLowerCase();
  }

  swap(left: number, right: number): void {
    const characters = this.data.split('');
    [characters[left], characters[right]] = [
      characters[right],
      characters[left]
    ];

    this.data = characters.join('');
  }
}
