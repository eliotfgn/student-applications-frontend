import React from 'react';
import FormInput from '../../components/FormInput/FormInput.tsx';
import { useForm } from 'react-hook-form';
import Eye from '../../components/icons/Eye.tsx';
import Button from '../../components/Button/Button.tsx';
import { Link } from 'react-router-dom';

function Login(): React.JSX.Element {
    const { register } = useForm();

    return (
        <>
            <div className={'mt-10 flex flex-col rounded-3xl px-10 py-10 shadow-lg shadow-md'}>
                <h2 className={'text-center text-3xl font-bold text-emerald-600'}>Sign in</h2>
                <div className={'mt-7 w-80'}>
                    <form className={'flex flex-col gap-5'}>
                        <FormInput register={register} name={'email'} label={'Email'} />
                        <FormInput
                            register={register}
                            name={'password'}
                            label={'Password'}
                            icon={<Eye />}
                        />

                        <Button className={'my-5'}>Sign in</Button>
                    </form>
                </div>
            </div>
            <p className={'mt-10'}>
                Don't have an account?{' '}
                <Link to={'../register'} className={'font-semibold text-emerald-600 underline'}>
                    Register
                </Link>
            </p>
        </>
    );
}

export default Login;
