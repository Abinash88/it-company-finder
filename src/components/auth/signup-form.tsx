import Div from "@/lib/Div";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Topheader, { AuthInputBox, BottomText, EyeToggle, OrComponent, SubmitButton } from "./auth-component";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignupDataTypes } from "./auth-types";
import FormError from "../UI/form_error";
import { fetchRequest } from "@/lib/fetch";
import { handleError } from "@/lib/utils";
import ButtonLoading from "@/Hooks/use-loading";
import { SCHEMA_VALIDATION } from "@/Backend/Middleware/Validation";
import { toast } from "react-toastify";

const Signup = ({ setCheckEmail }: { setCheckEmail: React.Dispatch<React.SetStateAction<string>> }) => {

  const [isPasswordSeen, setIsPasswordSeen] = useState<boolean>(false);
  const { register, handleSubmit, formState: { errors }, watch } = useForm<SignupDataTypes>({ resolver: zodResolver(SCHEMA_VALIDATION?.signup_schema) })
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const dataSubmit: SubmitHandler<SignupDataTypes> = async (body) => {
    setLoading(true);
    try {
      const res = await fetchRequest<SignupDataTypes, { data: any, message: string, success: boolean }>({ url: `/api/v1/auth/signup`, method: 'POST', body, popup: true });
      if (res?.success) {
        setLoading(false);
        toast.success(res.message);
        setCheckEmail(body.email);
        router.push('/account?type=mailbox');
      }
      setLoading(false);
      console.log(res);
    } catch (error) {
      setLoading(false);
      handleError({ error, popup: false });
    }
  }
  return (
    <Div className="w-[90%] mx-auto  h-full md:px-10 pt-3 ">
      <form
        action=""
        onSubmit={handleSubmit(dataSubmit)}
        className="w-full"
      >
        <Topheader title="Signup Here" subtitle="Welcome back please signup here..." />
        <br />
        <Div className="flex flex-col gap-3">
          <div className="relative">

            <AuthInputBox {...register('name')} name="name" label="User Name" placeholder="User name" type="text" />
            {
              errors && <FormError error={errors?.name?.message} />
            }
          </div>
          <div className="relative">
            <AuthInputBox {...register('email')} name="email" label="Email" placeholder="Enter your Email" type="email" />
            {
              errors && <FormError error={errors?.email?.message} />
            }
          </div>
          <Div className="relative flex items-center">
            <AuthInputBox {...register('password')} name="password" placeholder="Enter your password" label="Password" type={isPasswordSeen ? "text" : "password"} />
            {
              errors && <FormError error={errors?.password?.message} />
            }
            <EyeToggle isPasswordSeen={isPasswordSeen} setIsPasswordSeen={setIsPasswordSeen} />
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
          </SubmitButton>
          <br />
          <OrComponent />
          <BottomText text="Already have a account?" type="login" />
        </Div>

      </form >

    </Div >
  );
};

export default Signup;
