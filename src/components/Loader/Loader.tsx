import React from 'react';
import './Loader.css';
import cn from '../../utils/cn.ts';

function Loader({ dark }: { dark?: boolean }): React.JSX.Element {
    return <div className={cn('loader', dark ? 'green' : 'white')}></div>;
}

export default Loader;
