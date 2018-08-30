//In Express, routes are wrapped in a function which takes Express instance and db as arguments
module.exports = function(app, db) {
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