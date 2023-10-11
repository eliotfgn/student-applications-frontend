import React from 'react';
import Button from '../Button/Button.tsx';
import { useForm } from 'react-hook-form';
import cn from '../../utils/cn.ts';

function NewApplicationModal({ isOpen, setIsOpen }: {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}): React.JSX.Element {

    const { register } = useForm();

    return (
        <div
            className={cn('fixed h-screen w-screen top-0 left-0 z-20 overflow-hidden bg-opacity-20 bg-black flex justify-center items-center', `${isOpen ? '' : 'hidden'}`)}
            onClick={() => {
                setIsOpen(false);
            }}
        >
            <div className={'relative mx-auto my-auto rounded-xl w-6/12 h-4/6 bg-white z-50 px-8 py-10'}>
                <div className={'flex justify-between items-center'}>
                    <h3 className={'text-2xl font-semibold text-emerald-600'}>Application</h3>
                    <Button>Apply</Button>
                </div>

                <div className={'mt-12 w-full'}>
                    <form className={'flex flex-col gap-5'}>
                        <div className={'flex w-full flex-col gap-2'}>
                            <label className={'text-lg text-emerald-600 font-medium'}
                                   htmlFor={'university'}>{'University'}</label>
                            <div className={'flex w-full rounded-full bg-gray-100 px-5 py-2'}>
                                <select
                                    className={
                                        'w-full bg-transparent outline-none ring-transparent focus:outline-none focus:ring-transparent'
                                    }
                                    {...register('university')}
                                >
                                    <option value={-1}>--None--</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewApplicationModal;