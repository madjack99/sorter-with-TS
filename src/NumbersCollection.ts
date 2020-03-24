import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

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
