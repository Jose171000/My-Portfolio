const {getAllCertificates, postCertificate, deleteCertificate} = require("../controllers/certificatesController")

const getCertificates = async (req, res) =>{
    try {
        const response = await getAllCertificates();
        res.status(200).json({rpta: response});
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const posteoCertificate = async (req, res) =>{
    try {
        console.log("estás posteando");
        const data = req.body;
        const response = await postCertificate(data);
        res.status(200).json({rpta: response})
    } catch (error) {
        res.json({error:error.message})
    }
}

const deleCertificate = async (req, res)=>{
    try {
        const {id} = req.query;
        const response = await deleteCertificate(id);
        res.status(200).json({rpta:response});
    } catch (error) {
        res.json({error:error.message});
    }
}

module.exports = {
    getCertificates,
    deleCertificate,
    posteoCertificate
}