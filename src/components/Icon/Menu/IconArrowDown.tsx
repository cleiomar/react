import { FC } from 'react';
import Sidebar from '../../Layouts/Sidebar';

interface IconArrowDownProps {
    className?: string;
    opValor: string;
    width: string;
    height: string;
    fill: string;
}

const IconArrowDown: FC<IconArrowDownProps> = ({ className, opValor, width, height, fill }) => {
    if(fill)
    {
        fill = fill
    }
    else
    {
        fill = "#900";
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}  fill={fill} viewBox="0 0 16 14" className={className} >
            <path
                opacity={opValor}
                d="M0 4.6862h11.5l-5.75 6.7084L0 4.6862z" />
            <path
                opacity={opValor}
                d="M7.6571 5.75H3.8237V0h3.8334z" />
        </svg >

    );
};

export default IconArrowDown;
