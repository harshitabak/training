const express=require('express')
const router= express.Router()
const urlController=require('../controller/urlController')






router.post("/test-me", urlController.createUrl)
router.get('/:urlCode',urlController.getUrl)

//---------API for Wrong route-------------
router.all('/*', function(req, res){
    res.status(400).send({status:false, msg: "Path Not Found"})
});


module.exports=router