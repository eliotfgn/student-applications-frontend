import React from 'react';
import Button from '../../components/Button/Button.tsx';

function Applications(): React.JSX.Element {
    return <>
        <header className={'w-full flex items-center justify-between'}>
            <h3 className={'text-2xl text-emerald-600 font-medium'}>Hi, Eliot !</h3>
            <Button>New application</Button>
        </header>

        <section className={'mt-12'}>
            <h2 className={'text-3xl font-bold text-emerald-600'}>My Applications</h2>
            
        </section>
    </>;
}

export default Applications;
