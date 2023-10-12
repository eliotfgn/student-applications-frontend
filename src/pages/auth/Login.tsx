import React, { useContext } from 'react';
import FormInput from '../../components/FormInput/FormInput.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../../components/Button/Button.tsx';
import { Link, useNavigate } from 'react-router-dom';
import { usePost } from '../../hooks/api/usePost.ts';
import Loader from '../../components/Loader/Loader.tsx';
import { AuthContext, AuthContextType } from '../../contexts/AuthContext.tsx';

interface LoginRequest {
    email: string;
    password: string;
}

function Login(): React.JSX.Element {
    const navigate = useNavigate();
    const { post, isLoading } = usePost();
    const authContext = useContext<AuthContextType | undefined>(AuthContext);

    const { register, handleSubmit } = useForm<LoginRequest>();

    const onSubmit: SubmitHandler<LoginRequest> = async (data: LoginRequest) => {
        post({ url: '/auth/login', data: data }).then((response) => {
            if (response.data.success) {
                console.log(response);
                localStorage.setItem('token', response.data.data.token);
                authContext?.login(response.data.data.user, response.data.data.token);
                navigate('/applications');
            }
        });
    };

    return (
        <>
            <div className={'mt-10 flex flex-col rounded-3xl px-10 py-10 shadow-lg shadow-md'}>
                <h2 className={'text-center text-3xl font-bold text-emerald-600'}>Sign in</h2>
                <div className={'mt-7 w-80'}>
                    <form className={'flex flex-col gap-5'} onSubmit={handleSubmit(onSubmit)}>
                        <FormInput register={register} name={'email'} label={'Email'} />
                        <FormInput
                            register={register}
                            name={'password'}
                            label={'Password'}
                            type={'password'}
                        />

                        <Button className={'my-5'}>{isLoading ? <Loader /> : 'Sign in'}</Button>
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
