import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// numbersCollection.sort();
// console.log(numbersCollection.data);

// const charCollection = new CharactersCollection('Xaayb');
// charCollection.sort();
// console.log(charCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
