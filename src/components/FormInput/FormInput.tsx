import React, {HTMLProps} from 'react';
import {FieldValues, UseFormRegister} from "react-hook-form";

interface FormInputProps extends HTMLProps<HTMLInputElement>{
    name: string;
    register: UseFormRegister<FieldValues>;
    icon?: React.JSX.Element;
}

function FormInput(props: FormInputProps): React.JSX.Element {
    return (
        <div className={'w-full flex flex-col gap-1'}>
            <label htmlFor={props.name}>{props.label}</label>
            <div className={'w-full py-2 px-5 flex rounded-full bg-gray-100'}>
                <input type={props.type} className={'bg-transparent w-full outline-none ring-transparent focus:ring-transparent focus:outline-none'} {...props.register(props.name)} />
                {props.icon && <div>{props.icon}</div>}
            </div>
        </div>
    );
}

export default FormInput;