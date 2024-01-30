"use client"
import React from 'react';
import Link from 'next/link';
import { useForm } from "react-hook-form";
import {PersonOutline, EmailOutlined, LockOutlined} from "@mui/icons-material"

const Form = ({ type }) => {
    const{
        register,
        handleSubmit,
        watch,
        formState:{ errors },
    } = useForm();
    const onSubmit = async (data) => {console.log(data)}
  return (
    <div className='auth'>
    <div className='content'>
    <img src="/assets/logo.png" alt="form_image_logo" className='logo'/>
     <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {type === "register" && (
        <div>
            <div className="input">
            <input 
            defaultValue=""
            {...register("username", {
            required :"Username is required", 
            
        })}
            type="text" 
            placeholder='Username'
            className='input-field'/>
            <PersonOutline sx={{color: "#737373"}}/>
            </div>
            {errors.username && (
                <p className='text-red-500'>{errors.username.message}</p>
            )}
           </div> 
        )}

        <div>
        <div className="input">
            <input 
            defaultValue=""
            {...register("email", {
                required :"email is required", 
            })}
            type="email" 
            placeholder='Email'
            className='input-field'/>
            <EmailOutlined sx={{color: "#737373"}}/>
        </div>
        {errors.email && (
                <p className='text-red-500'>{errors.email.message}</p>
            )}
        </div>
        <div>
        <div className="input">
            <input 
            defaultValue=""
            {...register("password", {
                required :"password is required", 
                validate: (value) => {
                if (value.length < 5 || !value.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/)){
                    return "password must be atleast 5 characters"
                }
                },
            })}
            type="password" 
            placeholder='Password'
            className='input-field'/>
            <LockOutlined sx={{color: "#737373"}}/>
        </div>
        {errors.password && (
                <p className='text-red-500'>{errors.password.message}</p>
            )}
        </div>
        <button className="button" type="submit">{type === "register"?"Join Free" : "Let's Chat"}</button>


     </form>
     {type === "register" ? (
        <Link href ="/" className="link">
            <p className="text-center">Already have an account? Sign in Here</p>
        </Link>
     ):(
        <Link href ="/register" className="link">
            <p className="text-center">Dont have an account? Register Here</p>
        </Link>
     )
    }
    </div>
    </div>
  )
}

export default Form