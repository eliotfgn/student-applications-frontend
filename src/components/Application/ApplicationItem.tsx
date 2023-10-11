import React from 'react';
import Application from '../../types/models/application';

interface ApplicationItemProps {
    application: Application
}

function ApplicationItem({ application }: ApplicationItemProps): React.JSX.Element {
    return (
        <div className={'px-10 py-5 bg-green-100 w-full rounded-lg'}>
            <span className={'text-xl font-medium'}>{application.course.name}, {application.course.university.name}</span>
        </div>
    );
}

export default ApplicationItem;
