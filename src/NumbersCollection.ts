export class NumbersCollection {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  compare(right: number, left: number): boolean {
    return this.data[right] < this.data[left];
  }

  swap(right: number, left: number): void {
    [this.data[right], this.data[left]] = [this.data[left], this.data[right]];
  }
}
