const Emp = require('../model/emp')

const mongoose = require("mongoose")


function create(req,res){

    let employeeName = req.body.empName;
    let employeeEmail = req.body.empEmail;
    let employeeMobile = req.body.empMobile 
    let objEmp = new Emp({

        empName : employeeName,
        empEmail : employeeEmail,
        empMobile: employeeMobile,
    })
    objEmp.save()
    .then((data)=> res.send(data)
    )
    .catch((err)=>console.log(err))

}
    function read(req,res){

        Emp.find({})
        .then((data)=> res.send(data))
    }

    function update(req,res){


        Emp.findByIdAndUpdate(req.params.id,req.body,(err,emp)=>{
            if(err){

                return res.status(500).send(
                    {
                        msg : "not able to update the emp details",
                        error : err
                    }
                )

            }
            res.status(200).send({
                msg : "ok"
    
                })
        })
    }
    function delte(req,res){


        Emp.findByIdAndDelete(req.params.id,(err,emp)=>{

            if(err){

                return res.status(500).send(
                    {
                        msg : "not able to delte",
                        error : err
                    }

                )
                    
            }
            res.status(200).send({
                msg : "ok"
            })
        })
    }


module.exports.read = read
module.exports.create = create
module.exports.update = update
module.exports.delte = delte