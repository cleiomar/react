import { useEffect, FC } from 'react';
import DashBox from '../../Dashboard/DashBox';

interface IconMenuAutoDirectProps {
    className?: string;
    opValor: number;
    width: number;
    height: number;
}

const IconMenuAutoDirect: FC<IconMenuAutoDirectProps> = ({ className, opValor,width, height }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} width={width} height={height} fill="currentColor" viewBox="0 0 16 16">
            <path
                opacity={opValor}
                d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z"

            /> </svg>
    );
};

export default IconMenuAutoDirect;
