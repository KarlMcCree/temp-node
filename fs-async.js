const { readFileSync , writeFileSync, readFile } = require('fs')

readFile('./content/first.txt','utf8', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const first = result ;
    readFile('.content/second.txt','utf8',(err, result) =>{
        if (err) {
            console.log(err);
            return
        }
        const second = result 
    })
})
//Difference between the asyncronous and the Non Blocking code