import { FC } from 'react';
import Sidebar from '../../Layouts/Sidebar';

interface IconMenuViewsProps {
    className?: string;
    opValor: string;
    width: string;
    height: string;
}

const IconMenuViews: FC<IconMenuViewsProps> = ({ className, opValor, width, height }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" viewBox="0 0 18 18" className={className} >
            <path
                opacity={opValor}
                d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
            <path
                opacity={opValor}
                d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
        </svg >

    );
};

export default IconMenuViews;
