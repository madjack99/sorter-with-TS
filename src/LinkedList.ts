class Node {
  next: Node | null = null;

  constructor(public data: number) {}
}

export class LinkedList {
  head: Node | null = null;

  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) return 0;

    let length = 1;
    let node = this.head;
    while (node.next) {
      length += 1;
      node = node.next;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error('The index is out of bound');
    }

    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error('The index is out of bound');
  }

  compare(left: number, right: number): boolean {
    if (!this.head) {
      throw new Error('The list is empty');
    }

    return this.at(left).data > this.at(right).data;
  }

  swap(left: number, right: number): void {
    const leftNodeVal = this.at(left).data;
    const rightNodeVal = this.at(right).data;
    this.at(left).data = rightNodeVal;
    this.at(right).data = leftNodeVal;
  }

  print(): void {
    if (!this.head) return;

    let node: Node | null = this.head;
    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
