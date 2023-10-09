import { FC } from 'react';
import Sidebar from '../../Layouts/Sidebar';

interface IconMenuAutoActivityProps {
    className?: string;
    opValor: number;
    width: number;
    height: number;
}

const IconMenuAutoActivity: FC<IconMenuAutoActivityProps> = ({ className, opValor, width, height }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" viewBox="0 0 18 18" className={className}>
            <path
                opacity={opValor}
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"

                fill="currentColor"
            />

        </svg>

    );
};

export default IconMenuAutoActivity;
