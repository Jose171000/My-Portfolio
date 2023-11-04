const { Certificates, Technologies } = require("../db");


const getAllCertificates = async () => {
    const allCertificates = await Certificates.findAll({ include: Technologies });
    return allCertificates;
};

const postCertificate = async (data) => {
    const { name, image, description, technology } = data;
    const createdCertificate = await Certificates.create({ name, image, description });
    if(Array.isArray(technology)){
        if (technology.length === 1) {
            const oneTechnology = await Technologies.findAll({ where: { name: technology[0] } });
            await createdCertificate.addTechnologies(oneTechnology.id);
        } else if (technology.length > 1) {
            for (let tech of technology) {
                const oneTechnology = await Technologies.findOne({ where: { name: tech } });
                await createdCertificate.addTechnologies(oneTechnology.id);
            }
        }
    }
    let newCertificate = await Certificates.findByPk(createdCertificate.id);
    if (technology.length) newCertificate = await Certificates.findByPk(createdCertificate.id, { include: Technologies });
    return newCertificate;
}

const deleteCertificate = async (id) => {
    const response = await Certificates.destroy({
        where: {
            id
        }
    });
    return response;
}

module.exports = {
    getAllCertificates,
    postCertificate,
    deleteCertificate

}