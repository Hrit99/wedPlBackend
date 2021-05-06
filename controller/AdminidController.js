
const adminid = require('../model/Adminid')
const admin = require('../model/Admin')

const loadUserIds = () => {
    adminid.deleteMany({}).then(() => {
        
        admin.find()
        .then(response => {
            response.forEach(element => {
                let newAdminid = new adminid({
                    adminId: element['username']
                });
                newAdminid.save().then( () => {
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

    adminid.findOneAndRemove({adminId : req.body.adminId}).then((response) => {
        console.log(response['adminId']);
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