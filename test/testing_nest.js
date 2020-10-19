// const mongoose = require('mongoose')
// const assert = require('assert')
// const Author = require('../models/author')

// describe('Testing Author Model/Collection', () => {

//     it('Should create an author with nested documents', () => {
        
//         const authorOne = new Author({
//             name: 'secondAuthor',
//             age: 16,
//             books: [
//                 {
//                     title: 'first book title',
//                     pages: 59
//                 },
//                 {
//                     title: 'second book',
//                     pages: 475
//                 }
//             ]
//         })
//         authorOne.save()

//     })

//     it('Should add a book to firstAuthor', async () => {
//         await Author.findOne({ name: 'firstAuthor'}).then((doc) => {
//             doc.books.push({
//                 title: 'third book of firstAuthor',
//                 pages: 200
//             })
//             doc.save()
//         })
//     })

//     it('Should update the age of secondAuthor', async () => {
//         await Author.findOne({ name: 'secondAuthor'}).then((doc) => {
//             doc.age = 9;
//             doc.save()
//         })
//     })

// })