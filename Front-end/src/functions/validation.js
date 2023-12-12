export default function validation (user){
    /*gender: "",
        name:"",
        email:"",
        cellphone:0,
        description:"" */
    const errors = {}
    if(!/^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ\s]+$/.test(user.name) && user.name !== ""){
        errors.name = "Please, only write letters without numbers";
    }
    if(user.name.length > 20){
        errors.name = "Name is too long";
    }
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(user.email) && user.email !== ""){
        errors.email = "Your email is wrong, please fix that";
    }
    if(user.email.length>25){
        errors.email = "Your email is too long";
    }
    if(!/^[0-9]{7,15}$/.test(user.cellphone)){
        errors.cellphone = "Your cellphone is wrong, please fix it"
    }

    return errors;
}