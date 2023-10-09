import { FC } from 'react';
import Sidebar from '../../Layouts/Sidebar';

interface IconMenuRemoveUserProps {
    className?: string;
    opValor: string;
    width: string;
    height: string;
}

const IconMenuRemoveUser: FC<IconMenuRemoveUserProps> = ({ className, opValor, width, height }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" viewBox="0 0 18 18" className={className} >
            <path
                opacity={opValor}
                d="M11 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z" />
            <path
                opacity={opValor}
                d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
        </svg >

    );
};

export default IconMenuRemoveUser;
