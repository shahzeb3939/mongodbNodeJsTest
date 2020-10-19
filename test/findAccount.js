// const assert = require('assert')

// describe('Database Testing', function(){

    // it('Should save record in database', async function(){
        
    //     const charOne = new MarioChar({
    //         name: 'oneMario',
    //         weight: 13
    //     })
    //     await charOne.save().then(() => {
    //         assert(charOne.isNew === false);
    //     })
    // })

    // it('Should search for an account with email: shahzeb@company.com and print to the console', async () => {
    //     await MarioChar.findOne({ name: 'twentyMario' }).then((res) => {
    //         assert(res.name, 'twoMario');
    //     })
    // })

    // it('Should find document by Id', async () => {
    //     await MarioChar.findOne({ _id: '5f82eac009e55b3f90cd02d3' }).then((res) => {
    //         assert(res.name, 'khanMario')
    //     })
    // })

    // it('Should delete element form the database', async () => {
    //     await MarioChar.remove({ name: 'threeMario' }).then(() => {
    //         assert(MarioChar.findOne({ name: 'threeMario' }), undefined);
    //     })
    // })

    // it('Should check if element is not present in database', () => {
    //         assert(MarioChar.findOne({ name: 'threeMario' }), null);
    // })

    // it('Should update the documents in the database', async () => {
    //     await MarioChar.updateOne({ name: 'twoMario' }, { name: 'twentyMario' });
    // })

// })