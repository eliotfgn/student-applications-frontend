import React, { useContext } from 'react';
import FormInput from '../../components/FormInput/FormInput.tsx';
import Button from '../../components/Button/Button.tsx';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { usePost } from '../../hooks/api/usePost.ts';
import Loader from '../../components/Loader/Loader.tsx';
import { AuthContext, AuthContextType } from '../../contexts/AuthContext.tsx';

interface CreateUser {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

function Register(): React.JSX.Element {
    //const [showPassword, setShowPassword] = useState<boolean>(false);
    const navigate = useNavigate();
    const authContext = useContext<AuthContextType | undefined>(AuthContext);

    const { post, isLoading } = usePost();

    const { register, handleSubmit } = useForm<CreateUser>();

    const onSubmit: SubmitHandler<CreateUser> = (data: CreateUser) => {
        post({ url: '/auth/register', data: data }).then((response) => {
            if (response.data.success) {
                console.log(response);
                localStorage.setItem('token', response.data.data.token);
                localStorage.setItem('user', JSON.stringify(response.data.data.user));
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
                        <FormInput register={register} name={'firstname'} label={'Firstname'} />
                        <FormInput register={register} name={'lastname'} label={'Lastname'} />
                        <FormInput register={register} name={'email'} label={'Email'} />
                        <FormInput
                            register={register}
                            name={'password'}
                            label={'Password'}
                            type={'password'}
                            /*icon={<Eye onClick={() => {
                                setShowPassword(!showPassword);
                            }} />}*/
                        />

                        <Button className={'my-5'}>{isLoading ? <Loader /> : 'Sign up'}</Button>
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
