const { Technologies, Certificates } = require("../db")

const getAllTechnologies = async () => {
    const response = await Technologies.findAll({ include: Certificates });
    return response;
}

const postTechnology = async (data)=>{
    const {name, description, date, certificate} = data;
    const response = await Technologies.create(name, description, date);
    if(Array.isArray(certificate)){
        
    }
}
module.exports = {
    getAllTechnologies,
    postTechnology
}