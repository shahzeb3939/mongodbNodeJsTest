const { doesNotMatch } = require('assert')
const assert = require('assert')
const MarioChar = require('../models/mariochar')

describe('Saving Records', function(){
    it('Should save record in database', function(done){
        
        const charOne = new MarioChar({
            name: 'khanMario',
            weight: 10
        })
        charOne.save().then(() => {
            assert(charOne.isNew === false);
            done();
        })

    })
})