import { FC } from 'react';
import Sidebar from '../../Layouts/Sidebar';

interface IconSquareProps {
    className?: string;
    opValor: string;
    width: string;
    height: string;
}

const IconSquare: FC<IconSquareProps> = ({ className, opValor, width, height }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}  fill="#007fff" viewBox="0 0 36 34" className={className} >
            <path
                opacity={opValor}
                d="M2,20H18a2,2,0,0,0,2-2V2a2,2,0,0,0-2-2H2A2,2,0,0,0,0,2V18A2,2,0,0,0,2,20Z" />
        </svg >

    );
};

export default IconSquare;
