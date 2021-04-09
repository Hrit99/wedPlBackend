const category = require('../model/Categories')

const getCategories = (req, res, next) => {
    
    category.find()
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'an error occured'
        })
    })
}

const validateCategory = (req, res, next) => {
    let cn = req.body.category
    console.log(cn)
    category.find({category: cn})
    .then(response => {
        console.log(response[0].category)
        if(cn == response[0].category){
            res.json({
                validity: true
            })
        }
        else{
            res.json({
                validity: false
            })
        }
    })
    .catch(error => {
        res.json({
            message: 'false'
        })
    })
}

const storeCategory = (req, res, next) => {
    console.log(req.body.category)
    let newCategory = new category({
        category: req.body.category,
        subcategories: req.body.subcategories,      
    })

    newCategory.save()
    .then( response => {
        res.json({
            stored: true
        })
    })
    .catch(error => {
        res.json({
            stored: false
        })
    })
}

const updateCategory = (req, res, next)=> {
    let categoryId = req.body._id

    let updatedData = {
        category: req.body.category,
        subcategories: req.body.subcategories,    
    }

    category.findByIdAndUpdate(categoryId, {$set: updatedData})
    .then(() => {
        res.json({
            updated: true
        })
    })
    .catch(error => {
        res.json({
            updated: false
        })
    })
}

const destroyCategory = (req, res, next) => {
    let categoryId = req.body._id

    category.findByIdAndRemove(categoryId)
    .then(() => {
        res.json({
            deleted: true
        })
    })
    .catch(error => {
        res.json({
            deleted: false
        })
    })
    
}

const showCategory = (req, res, next) => {
    let cn = req.body.category
    category.find({category: cn})
    .then(response => {
        res.json({
            response
        })
    })
    .catch(error => {
        res.json({
            message: 'an error occured'
        })
    })
}

module.exports = {
    getCategories, validateCategory, storeCategory, updateCategory, destroyCategory, showCategory
}






