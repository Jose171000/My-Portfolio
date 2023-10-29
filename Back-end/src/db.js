require('dotenv').config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const CertificatesModel = require("./models/certificates");
const ProjectsModel = require("./models/projects");
const TechnologiesModel = require("./models/technologies")
const ContactsModel = require("./models/contacts")

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/myportfolio`, {
    logging: false,
    native: false
})
// Sequelize inyection in models
CertificatesModel(sequelize);
ProjectsModel(sequelize);
TechnologiesModel(sequelize);
ContactsModel(sequelize);

const { Technologies, Certificates, Projects } = sequelize.models;

Projects.belongsToMany(Technologies, { through: 'ProjectTechnologies', timestamps:false });
Technologies.belongsToMany(Projects, { through: 'ProjectTechnologies', timestamps:false });

Technologies.belongsToMany(Certificates, { through: 'TechnologyCertificates', timestamps:false });
Certificates.belongsToMany(Technologies, { through: 'TechnologyCertificates', timestamps:false })
console.log(sequelize.models);

console.log(texto.length);
module.exports = {
    sequelize,
    ...sequelize.models
}

