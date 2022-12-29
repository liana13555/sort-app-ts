"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
/* --- Refactoring with abstract class --- */
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
/* --- Refactoring with interface --- */
// interface Sortable {
//     length: number
//     compare(leftIndex: number, rightIndex: number): boolean
//     swap(leftIndex: number, rightIndex: number): void
// }
// export class Sorter {
//     constructor(public collection: Sortable) { }
//     sort(): void {
//         const { length } = this.collection
//         for (let i = 0; i < length; i++) {
//             for (let j = 0; j < length - i - 1; j++) {
//                 if (this.collection.compare(j, j + 1)) {
//                 this.collection.swap(j, j + 1)
//                 }
//             }
//         }
//     }
// }
// class Sorter {
//     constructor(public collection: numbers[] | string) { }
//     sort(): void {
//         const { length } = this.collection
//         for (let i = 0; i < length; i++) {
//             for (let j = 0; j < length - i - 1; j++) {
//                 // If collection is an array of numbers
//                 // if (this.collection instanceof Array) {    // (this.collection instanceof Array) - Type Guard               
//                 if (this.collection[j] > this.collection[j + 1]) {
//                     const leftHand = this.collection[j]
//                     this.collection[j] = this.collection[j + 1]   
//                     this.collection[j + 1] = leftHand
//                 }
//                 // If collection is a string do this logic instead
//                 // ~~logic to compare and swap characters in a string
//                 if (typeof this.collection === 'string') {        
//                 }
//             }            
//         }
//     }
// }
