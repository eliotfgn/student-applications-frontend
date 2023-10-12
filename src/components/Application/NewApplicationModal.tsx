import React, { useContext, useEffect, useState } from 'react';
import Button from '../Button/Button.tsx';
import { useForm } from 'react-hook-form';
import cn from '../../utils/cn.ts';
import University from '../../types/models/university';
import { useGet } from '../../hooks/api/useGet.ts';
import Course from '../../types/models/course';
import { usePost } from '../../hooks/api/usePost.ts';
import { AuthContext } from '../../contexts/AuthContext.tsx';
import Loader from '../Loader/Loader.tsx';

function NewApplicationModal({
    isOpen,
    setIsOpen,
    onClose,
}: {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    onClose: any;
}): React.JSX.Element {
    const authContext = useContext(AuthContext);

    const { register } = useForm();
    const [universities, setUniversities] = useState<University[]>([]);
    const [courses, setCourses] = useState<Course[]>([]);

    const [selectedCourseId, setSelectedCourseId] = useState<number>();

    const { get, isLoading } = useGet();
    const postHook = usePost();

    useEffect(() => {
        get({
            url: `/universities/`,
        }).then((response) => {
            setUniversities(response.data.data);
        });
    }, []);

    const fetchCourses = (universityId: number) => {
        get({
            url: `/university/${universityId}/courses`,
        }).then((response) => {
            console.log(response.data.data);
            setCourses(response.data.data);
            console.log(courses);
        });
    };

    const apply = () => {
        postHook
            .post({
                url: '/applications',
                data: {
                    userId: authContext?.auth.user?.id,
                    courseId: selectedCourseId,
                },
                headers: { Authorization: `Bearer ${authContext!.auth.token!}` },
            })
            .then((response) => {
                if (response.data.success) {
                    setIsOpen(false);
                    onClose();
                    setSelectedCourseId(-1);
                }
            });
    };

    const handleUniversityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        fetchCourses(parseInt(event.target.value));
    };

    const handleCourseChoice = (id: number) => {
        setSelectedCourseId(id);
        console.log(selectedCourseId);
    };

    return (
        <div
            className={cn(
                'fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center overflow-hidden bg-black bg-opacity-20',
                `${isOpen ? '' : 'hidden'}`,
            )}
        >
            <div
                className={'absolute left-0 top-0 z-30 h-full w-full'}
                onClick={() => {
                    setIsOpen(false);
                    onClose();
                }}
            ></div>
            <div
                className={
                    'relative z-50 mx-auto my-auto h-4/6 w-6/12 rounded-xl bg-white px-8 py-10'
                }
            >
                <div className={'flex items-center justify-between'}>
                    <h3 className={'text-2xl font-semibold text-emerald-600'}>Application</h3>
                    <Button onClick={apply}>{postHook.isLoading ? <Loader /> : 'Apply'}</Button>
                </div>

                <div className={'mt-12 w-full'}>
                    <form className={'flex flex-col gap-5'}>
                        <div className={'flex w-full flex-col gap-2'}>
                            <label
                                className={'text-lg font-medium text-emerald-600'}
                                htmlFor={'university'}
                            >
                                {'University'}
                            </label>
                            <div className={'flex w-full rounded-full bg-gray-100 px-5 py-2'}>
                                <select
                                    className={
                                        'w-full bg-transparent outline-none ring-transparent focus:outline-none focus:ring-transparent'
                                    }
                                    {...register('university')}
                                    onChange={handleUniversityChange}
                                >
                                    <option value={-1}>--None--</option>
                                    {universities.map((university) => (
                                        <option key={university.id} value={university.id}>
                                            {university.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className={'flex w-full flex-col gap-2'}>
                            <label
                                className={'text-lg font-medium text-emerald-600'}
                                htmlFor={'university'}
                            >
                                Courses
                            </label>
                            {isLoading ? (
                                <Loader />
                            ) : (
                                <div className={'flex w-full flex-wrap gap-3 px-5 py-2'}>
                                    {courses.length > 0 ? (
                                        courses.map((course) => (
                                            <div
                                                key={course.id}
                                                className={cn('flex cursor-pointer flex-col gap-2')}
                                                onClick={() => {
                                                    handleCourseChoice(course.id);
                                                }}
                                            >
                                                <div
                                                    className={cn(
                                                        'flex h-36 w-36 items-center justify-center rounded-md bg-blue-100',
                                                        selectedCourseId === course.id
                                                            ? 'bg-blue-200'
                                                            : 'bg-blue-100',
                                                    )}
                                                >
                                                    <span className={'text-center text-xs'}>
                                                        {course.name}
                                                    </span>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <p>No course available</p>
                                    )}
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default NewApplicationModal;
