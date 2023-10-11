import React from 'react';
import FormInput from "../../components/FormInput/FormInput.tsx";
import {useForm} from "react-hook-form";
import Eye from "../../components/icons/Eye.tsx";
import Button from "../../components/Button/Button.tsx";

function Login(): React.JSX.Element {
    const {register} = useForm();

    return (
        <div className={'py-10 px-10 rounded-3xl shadow-md shadow-xl flex flex-col'}>
            <h2 className={'text-3xl text-center text-emerald-600 font-bold'}>Sign in</h2>
            <div className={'mt-7 w-80'}>
                <form className={'flex flex-col gap-5'}>
                    <FormInput register={register} name={'email'} label={'Email'}/>
                    <FormInput register={register} name={'password'} label={'Password'} icon={<Eye/>} />

                    <Button className={'my-5'}>Sign in</Button>
                </form>
            </div>
        </div>
    );
}

export default Login;