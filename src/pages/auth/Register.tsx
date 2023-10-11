import React from 'react';
import FormInput from '../../components/FormInput/FormInput.tsx';
import Eye from '../../components/icons/Eye.tsx';
import Button from '../../components/Button/Button.tsx';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

function Register(): React.JSX.Element {
    const { register } = useForm();

    return (
        <>
            <div className={'mt-10 flex flex-col rounded-3xl px-10 py-10 shadow-lg shadow-md'}>
                <h2 className={'text-center text-3xl font-bold text-emerald-600'}>Sign in</h2>
                <div className={'mt-7 w-80'}>
                    <form className={'flex flex-col gap-5'}>
                        <FormInput register={register} name={'email'} label={'Firstname'} />
                        <FormInput register={register} name={'email'} label={'Lastname'} />
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
            <p className={'my-10'}>
                Already registered?{' '}
                <Link to={'../login'} className={'font-semibold text-emerald-600 underline'}>
                    Login
                </Link>
            </p>
        </>
    );
}

export default Register;
