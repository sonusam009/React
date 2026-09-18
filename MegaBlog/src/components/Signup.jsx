import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { login } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Signup(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [error, setError] = useState("");

    const create = async (data) => {
        setError("");
        try{
            const userData = await authService.createAccount(data);
            if(userData) {
                const currentUser = await authService.getCurrentUser();
                if(currentUser) {
                    dispatch(login(currentUser))
                    navigate("/")
                }
            }
        }
        catch(error) 
        {
            setError(error.message);
        }
    }

    return (
        <div className="flex items-center justify-center">
            <div className={`mx-auto w-full max-w-lg bg-gray-500 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full">
                        <Logo width="100%"></Logo>
                    </span>
                </div>
            
            <h2 className="text-center text-2xl font-bold leading-tight">
                Sign up to create your account
            </h2>
            <p className="mt-2 text-center text-base text-black/50">
                Already have an account ?
                <Link to="/login" className="font-medium text-primary transition-all duration-200 hover:underline"
                >Sign in</Link>
            </p>
            {
                error && <p className="text-red-500 text-center mt-8">
                    {error}
                </p>
            }
            <form onSubmit={handleSubmit(create)}>
                <div className="space-y-5">
                    <Input
                        label="Full Name : "
                        placeholder="Enter your full name"
                        {...register("Name", {
                            required: true
                        })}
                    ></Input>
                    <Input
                        label="Email : "
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value) => {
                                     /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address"
                                }
                            }
                        })}
                    ></Input>
                    <Input
                        label="Password : "
                        placeholder="Enter your password"
                        type="password"
                        {...register("password", {
                            required: true
                        })}
                    ></Input>
                    <Button
                        type="submit"
                        children="Sign Up"
                    ></Button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default Signup
