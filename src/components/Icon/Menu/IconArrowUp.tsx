import { FC } from 'react';
import Sidebar from '../../Layouts/Sidebar';

interface IconArrowDownProps {
    className?: string;
    opValor: string;
    width: string;
    height: string;
}

const IconArrowDown: FC<IconArrowDownProps> = ({ className, opValor, width, height }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}  fill="#00991a" viewBox="0 0 16 14" className={className} >
            <path
                opacity={opValor}
                d="M11.4954 6.7056H0L5.7476 0l5.7478 6.7056z" />
            <path
                opacity={opValor}
                d="M3.8222 5.6423H7.654v5.7476H3.8222z" />
        </svg >

    );
};

export default IconArrowDown;
