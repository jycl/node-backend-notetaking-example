var ObjectID = require('mongodb').ObjectID;

//In Express, routes are wrapped in a function which takes Express instance and db as arguments
module.exports = function(app, db) {
    //READ route (using GET method and note Id)
    app.get('/notes/:id', (req, res) => {
        //Note that MongoDB requires not just an ID as a string but as an object
        const id = req.params.id;
        const details = { '_id': new ObjectID(id)};
        db.collection('notes').findOne(details, (err, item) => {
            if(err) {
                res.send({'error':'An error has occured'});
            } else {
                res.send(item);
            }
        })
    });

    app.post('/notes', (req, res) => {
        const note = {text: req.body.body, title: req.body.title};
        db.collection('notes').insert(note, (err, result) => {
            if(err) {
                res.send({'error': 'An error has occured'});
            } else {
                res.send(result.ops[0]);
                console.log(result);
            }
        })
        //Note that Express cannot process URL encoded forms on its own
        // console.log(req.body);
        // res.send('Hello');
    });
};