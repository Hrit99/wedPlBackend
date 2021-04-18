
const userid = require('../model/UserId')
const user = require('../model/User')

const loadUserIds = (req, res, next) => {
    userid.deleteMany({}).then(() => {
        
        user.find()
        .then(response => {
            console.log(response)
            response.forEach(element => {
                let newUserid = new userid({
                    userId: element['_id']
                });
                newUserid.save().then( () => {
                    console.log("saved" + element['_id'])
                }
                ).catch(
                    error => {
                        console.log("1")
                    }
                )
            });
            res.json({
                load: true
            })
        })
        .catch(error => {
            console.log("12")
            res.json({
                load: false
            })
        })

    }).catch((_) => {
        console.log("13")
        res.json({
            load: false
        })
    })
    
}

const reloadCheck = (req, res, next) => {

    userid.findOneAndRemove({userId : req.body.userId}).then((response) => {
        console.log(response['userId']);
        res.json({
            reload: true
        })
    }).catch((_) => {
        res.json({
            reload: false
        })
    })
    // var flag = false;
    // userIds.forEach(element => {
    //     if (req.body.userId == element) {
    //         flag = true;
    //         userIds.splice(userIds.indexOf(element), 1)
    //         res.json({
    //             reload: true
    //         })
    //     }
    // }
    // );
    // if(!flag)
    // res.json({
    //     reload: false
    // });
}


module.exports = {
   loadUserIds, reloadCheck
}