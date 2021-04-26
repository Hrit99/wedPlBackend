
const userid = require('../model/UserId')
const user = require('../model/User')

const loadUserIds = () => {
    userid.deleteMany({}).then(() => {
        
        user.find()
        .then(response => {
            response.forEach(element => {
                let newUserid = new userid({
                    userId: element['username']
                });
                newUserid.save().then( () => {
                    console.log("saved" + element['username'])
                }
                ).catch(
                    error => {
                        console.log("1")
                    }
                )
            });
            return true
        })
        .catch(error => {
            console.log("12")
            return false
        })

    }).catch((_) => {
        console.log("13")
        return false
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