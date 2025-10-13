"use client"
import React from 'react'
import {Button} from "@/components/ui/button";
import {useForm} from "react-hook-form";
import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/InputField";
const SignIn = () => {


    const {
        register,
        handleSubmit,
        formState:{errors,isSubmitting}
    }   =useForm<SignInFormData>({
        defaultValues:{
            email:"",
            password:""
        },mode:"onBlur"
    })

    const onSubmit=async (data:SignInFormData)=>{
        try {
            console.log(data);
        }catch (e){
            console.log(e);
        }
    }


    return (
        <>
            <h1 className="form-title">Welcome back</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <InputField
                    name="email"
                    label="Email"
                    placeholder="contact@developer.com"
                    error={errors.email}
                    register={register}
                    validation={{ required: 'Email name is required', pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: 'Email address is required'
                        } }}
                />

                <InputField
                    name="password"
                    label="Password"
                    placeholder="Enter your password"
                    error={errors.password}
                    register={register}
                    validation={{ required: 'Email name is required', minLength: 8 }}
                    type="password"
                />

                <Button type={"submit"} disabled={isSubmitting}  className="yellow-btn w-full mt-5">
                    {isSubmitting ? 'Signing in' : 'Sign in'}
                </Button>
            </form>
            <FooterLink text="Don't have an account?" linkText="Sign up" href="/sign-up" />
        </>
    )
}
export default SignIn
