import { HTMLProps } from 'react';
import cn from '../../utils/cn.ts';

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    children: React.ReactNode;
}

export default function Button(props: ButtonProps): React.JSX.Element {
    return (
        <button
            className={cn(
                'rounded-full border border-emerald-600 bg-emerald-600 px-8 py-1 text-center font-medium text-white transition transition-colors sm:py-2 lg:text-base',
                'hover:bg-transparent hover:text-emerald-600',
                { 'cursor-not-allowed bg-emerald-200 text-black': props.disabled },
                props.className,
            )}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}
