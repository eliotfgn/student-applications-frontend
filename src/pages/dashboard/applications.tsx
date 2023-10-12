import React, { useContext, useEffect, useState } from 'react';
import Button from '../../components/Button/Button.tsx';
import NewApplicationModal from '../../components/Application/NewApplicationModal.tsx';
import { useGet } from '../../hooks/api/useGet.ts';
import { AuthContext } from '../../contexts/AuthContext.tsx';
import Loader from '../../components/Loader/Loader.tsx';
import Application from '../../types/models/application';
import ApplicationItem from '../../components/Application/ApplicationItem.tsx';

function Applications(): React.JSX.Element {
    const [modalOpened, setModalOpened] = useState<boolean>(false);
    const [applications, setApplications] = useState<Application[]>([]);

    const authContext = useContext(AuthContext);
    const { isLoading, get } = useGet();

    const handleModal = () => {
        setModalOpened(!modalOpened);
    };

    useEffect(() => {
        get({
            url: `/users/${authContext?.auth.user?.id.toString()}/applications`,
            headers: { Authorization: `Bearer ${authContext?.auth.token}` },
        }).then((response) => {
            setApplications(response.data.data);
        });
    }, []);

    return (
        <>
            <header className={'flex w-full items-center justify-between'}>
                <h3 className={'text-2xl font-medium text-emerald-600'}>Hi, Eliot !</h3>
                <Button onClick={handleModal}>New application</Button>
            </header>

            <section className={'mt-12'}>
                <h2 className={'text-3xl font-bold text-emerald-600'}>My Applications</h2>

                <div className={'my-10'}>
                    {isLoading && <Loader dark={true} />}
                    {!isLoading && applications.length < 1 ? (
                        <p>No application yet.</p>
                    ) : (
                        applications.map((application) => (
                            <ApplicationItem key={application.id} application={application} />
                        ))
                    )}
                </div>
            </section>

            <NewApplicationModal isOpen={modalOpened} setIsOpen={setModalOpened} />
        </>
    );
}

export default Applications;
