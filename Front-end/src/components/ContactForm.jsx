import { useState } from "react";
import { onChange } from "../functions/severalFunctions";

function Form() {
    const [user, setUser] =  useState({
        gender: "",
        name:"",
        email:"",
        cellphone:0,
        description:""
    })
    const [errors, setErrors] =  useState({
        gender: "",
        name:"",
        email:"",
        cellphone:0
    })

    return (
        <form action="">
            <label htmlFor="gender">Gender</label>
            <div>
                <input type="radio" name="gender" id="male" value={user.gender} onChange={(event)=>{
                    event.preventDefault();
                    onChange(event, setUser, user, setErrors);
                }}/>
                <label htmlFor="male">Male</label>
            </div>
            <div>
                <input type="radio" name="gender" id="female" value={user.gender}/>
                <label htmlFor="female">Female</label>
            </div>
            <div>
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" value={user.name} required onChange={(event)=>{
                    event.preventDefault();
                    onChange(event, setUser, user, setErrors);
                }}/>
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={user.email} required onChange={(event)=>{
                    event.preventDefault();
                    onChange(event, setUser, user, setErrors);
                }}/>
                {errors.email && <p>{errors.email}</p>}
            </div>
            <div>
                <label htmlFor="cellphone">Cellphone Number</label>
                <input type="tel" name="cellphone" id="cellphone" value={user.cellphone} required onChange={(event)=>{
                    event.preventDefault();
                    onChange(event, setUser, user, setErrors);
                }}/>
            </div>
            <div>
                <label htmlFor="description">Tell how can I help you</label>
                <textarea name="description" id="description" cols="30" rows="10" placeholder="Describe some of your programming troubles to do the meet more understandable" value={user.description} required onChange={(event)=>{
                    event.preventDefault();
                    onChange(event, setUser, user, setErrors);
                }}></textarea>
            </div>

            <input type="submit" value="Send your petition" />
        </form>
    )
}

export default Form;