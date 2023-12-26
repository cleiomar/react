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
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}  fill="#00991a" viewBox="0 0 26 24" className={className} >

            <g transform="matrix(26.6 0 0 26.6 540 504.05)"  >
                <polygon vector-effect="non-scaling-stroke" points="12.53,-7.81 2.16,-5.99 4.94,-3.2 0.28,1.46 -4.69,-3.51 -12.53,4.33 -9.36,7.51 -4.69,2.84 0.28,7.81 8.12,-0.03 10.71,2.56 " />
            </g>
        </svg>

    );
};

export default IconArrowDown;
