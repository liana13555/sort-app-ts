import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([50, 3, -5, 0])
numbersCollection.sort()
console.log(numbersCollection.data)

const charactersCollection = new CharactersCollection('Xraba')
charactersCollection.sort()
console.log(charactersCollection.data);

const linkedList = new LinkedList('Xraba')
linkedList.add(500)
linkedList.add(-10)
linkedList.add(-3)
linkedList.add(4)
linkedList.sort()
linkedList.print()

// const numbersCollection = new NumbersCollection([50, 3, -5, 0])
// const sorter = new Sorter(numbersCollection)
// sorter.sort()
// console.log(numbersCollection.data)

// const linkedList = new LinkedList('Xraba')
// linkedList.add(500)
// linkedList.add(-10)
// linkedList.add(-3)
// linkedList.add(4)
// const sorter = new Sorter(linkedList)
// sorter.sort()
// linkedList.print()
