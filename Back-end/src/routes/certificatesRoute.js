const certificatesRoute = ((require("express"))).Router();
const {getCertificates, deleCertificate, posteoCertificate} = require("../handlers/certificatesHandler")

certificatesRoute.get("/",getCertificates );

certificatesRoute.post("/new",posteoCertificate);

certificatesRoute.delete("/delete",deleCertificate);


module.exports = {certificatesRoute}