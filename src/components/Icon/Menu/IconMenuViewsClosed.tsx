import { FC } from 'react';
import Sidebar from '../../Layouts/Sidebar';

interface IconMenuViewsProps {
    className?: string;
    opValor: string;
    width: string;
    height: string;
}

const IconMenuViewsClosed: FC<IconMenuViewsClosedProps> = ({ className, opValor, width, height }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" viewBox="0 0 22 22" className={className} >
            <path
                opacity={opValor}
                d="M16.0106 4.974l3.7465-3.6047c.2106-.2028.2925-.4982.2159-.7748s-.302-.4928-.5892-.5669-.5948.0044-.8055.2073L.2447 17.8771c-.3255.3136-.3255.8207 0 1.134s.8535.3133 1.1786 0l4.0764-3.9222c1.4118.6251 2.947.949 4.5005.9503 4.2044 0 8.0028-2.3229 9.9157-6.0621.1137-.223.1137-.4848 0-.708-.8838-1.739-2.2312-3.2217-3.9053-4.2951zm-6.0104 8.6594c-.816-.0011-1.6132-.2341-2.2923-.6694l1.2196-1.1738c.3342.1562.7007.2383 1.0727.2385 1.3802-.0004 2.5-1.0775 2.5005-2.4056-.0002-.3581-.0845-.7113-.248-1.0333l1.2199-1.1727c.8487 1.2284.9254 2.8081.2 4.1088s-2.1375 2.1097-3.6724 2.1075zM.0862 9.9771a.77.77 0 0 1 0-.708C1.9991 5.5302 5.798 3.208 10.0002 3.208c.9284.0003 1.8528.1175 2.7511.3464l-2.1832 2.1003c-1.2926-.1814-2.599.2354-3.5228 1.1245s-1.3575 2.145-1.1682 3.39l-3.2256 3.103C1.5913 12.3381.72 11.2202.0862 9.9771z"/>
        </svg >

    );
};

export default IconMenuViewsClosed;