
'use client'

import Div from "@/lib/Div";
import React, { useContext, useState } from "react";
import MyContext from "../../context/MyContext";
import Topheader, { AuthInputBox, BottomText, EyeToggle, MoreLogin, OrComponent, SubmitButton } from "./auth-component";
import { handleError } from "@/lib/utils";
import { fetchRequest } from "@/lib/fetch";
import { SubmitHandler, useForm } from "react-hook-form";
import { SignupDataTypes } from "./auth-types";
import { zodResolver } from "@hookform/resolvers/zod";
import FormError from "../UI/form_error";
import ButtonLoading from "@/Hooks/use-loading";
import { SCHEMA_VALIDATION } from "@/Backend/Middleware/Validation";

const LoginForm = () => {
  const contextdata = useContext(MyContext);
  const [isPasswordSeen, setIsPasswordSeen] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors }, watch } = useForm<Omit<SignupDataTypes, 'name'>>({ resolver: zodResolver(SCHEMA_VALIDATION?.login_schema) })
  const [loading, setLoading] = useState(false);

  const dataSubmit: SubmitHandler<Omit<SignupDataTypes, 'name'>> = async (body) => {
    setLoading(true)
    try {
      const res = await fetchRequest<Omit<SignupDataTypes, 'name'>, { data: any, message: string }>({ url: `/api/v1/auth/login`, method: 'POST', body, popup: true });
      if (res?.data) {
        setLoading(false);
      }
      console.log(res);
      setLoading(false);
    } catch (error) {
      handleError({ error, popup: false });
      setLoading(false);
    }
  }
  return (
    <Div className="w-full h-full px-10 pt-3">
      <form
        action=""
        onSubmit={handleSubmit(dataSubmit)}
        className="w-full"
      >
        <Topheader title="Login Here" subtitle="Welcome back please login here..." />
        <MoreLogin />
        <br />
        <OrComponent />
        <br />
        <Div className="flex flex-col gap-3">
          <div className="relative">

            <AuthInputBox  {...register('email')} name="email" label="Email" placeholder="Email" type="email" />
            {
              errors && <FormError error={errors?.email?.message} />
            }
          </div>
          <Div className="relative">
            <AuthInputBox  {...register('password')} name="password" placeholder="password" label="Password" type={isPasswordSeen ? 'text' : `password`} />
            <EyeToggle isPasswordSeen={isPasswordSeen} setIsPasswordSeen={setIsPasswordSeen} />
            {
              errors && <FormError error={errors?.password?.message} />
            }
          </Div>
        </Div>
        <Div className="flex flex-col relative space-y-1">
          <br />
          <SubmitButton >
            {
              loading ?
                <ButtonLoading className="animate-spin" />
                :
                <span>Submit</span>
            }
          </SubmitButton>          <br />
          <OrComponent />
          <BottomText text="Don't have a account?" type="signup" />
        </Div>
      </form>

    </Div>
  );
};

export default LoginForm;
