const router = require('express').Router();
const {certificatesRoute} = require("./certificatesRoute");
const {contactsRoute} = require("./contactsRoute");
const {projectsRoute} = require("./projectsRoute");
const {technologiesRoute} = require("./technologiesRoute");

router.use("/certificates", certificatesRoute);

router.use("/contacts", contactsRoute);

router.use("/projects", projectsRoute);

router.use("/technologies", technologiesRoute);

module.exports = {
    router
}