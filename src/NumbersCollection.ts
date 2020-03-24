export class NumbersCollection {
  constructor(public data: number[]) {}

  get length(): number {
    return this.data.length;
  }

  compare(left: number, right: number): boolean {
    return this.data[right] < this.data[left];
  }

  swap(left: number, right: number): void {
    [this.data[right], this.data[left]] = [this.data[left], this.data[right]];
  }
}
