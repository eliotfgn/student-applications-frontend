import React, { HTMLProps } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface FormInputProps extends HTMLProps<HTMLInputElement> {
    name: string;
    register: UseFormRegister<FieldValues>;
    icon?: React.JSX.Element;
}

function FormInput(props: FormInputProps): React.JSX.Element {
    return (
        <div className={'flex w-full flex-col gap-1'}>
            <label htmlFor={props.name}>{props.label}</label>
            <div className={'flex w-full rounded-full bg-gray-100 px-5 py-2'}>
                <input
                    type={props.type}
                    className={
                        'w-full bg-transparent outline-none ring-transparent focus:outline-none focus:ring-transparent'
                    }
                    {...props.register(props.name)}
                />
                {props.icon && <div>{props.icon}</div>}
            </div>
        </div>
    );
}

export default FormInput;
