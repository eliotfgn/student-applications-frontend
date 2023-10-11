import React, { useState } from 'react';
import Button from '../../components/Button/Button.tsx';
import NewApplicationModal from '../../components/Application/NewApplicationModal.tsx';

function Applications(): React.JSX.Element {
    const [modalOpened, setModalOpened] = useState<boolean>(false);

    const handleModal = () => {
        setModalOpened(!modalOpened);
    };

    return <>
        <header className={'w-full flex items-center justify-between'}>
            <h3 className={'text-2xl text-emerald-600 font-medium'}>Hi, Eliot !</h3>
            <Button onClick={handleModal}>New application</Button>
        </header>

        <section className={'mt-12'}>
            <h2 className={'text-3xl font-bold text-emerald-600'}>My Applications</h2>

            <div className={'my-10'}>

            </div>
        </section>

        <NewApplicationModal isOpen={modalOpened} setIsOpen={setModalOpened} />
    </>;
}

export default Applications;
