import React from 'react';
import FormInput from "../../components/FormInput/FormInput.tsx";
import {useForm} from "react-hook-form";
import Eye from "../../components/icons/Eye.tsx";

function Login(): React.JSX.Element {
    const {register} = useForm();

    return (
        <div className={'py-10 px-5 rounded-lg shadow-md flex flex-col'}>
            <h2 className={'text-3xl text-center text-emerald-600 font-bold'}>Sign in</h2>
            <div className={'mt-7'}>
                <form className={'flex flex-col gap-5'}>
                    <FormInput register={register} name={'email'} label={'Email'}/>
                    <FormInput register={register} name={'password'} label={'Password'} icon={<Eye/>} />
                </form>
            </div>
        </div>
    );
}

export default Login;