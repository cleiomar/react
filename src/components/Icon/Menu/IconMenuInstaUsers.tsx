import { FC } from 'react';

interface IconMenuInstaUsersProps {
    className?: string;
    opValor: string;
    width: string;
    height: string;
}


const IconMenuInstaUsers: FC<IconMenuInstaUsersProps> = ({ className, opValor,width, height  }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width={width} height={height} fill="none" className={className}>
        <path
        opacity={opValor}
        d="M64,140a7.9,7.9,0,0,1-8,8H12a8.2,8.2,0,0,1-7.2-4.4,8.2,8.2,0,0,1,.8-8.4A67.8,67.8,0,0,1,33,113.5a40,40,0,1,1,66.3-37,8.1,8.1,0,0,1-3.8,8.4,64.3,64.3,0,0,0-27.8,33.8A61.6,61.6,0,0,0,64,140Zm186.4-4.8A67.8,67.8,0,0,0,223,113.5a40,40,0,1,0-66.3-37,8.1,8.1,0,0,0,3.8,8.4,64,64,0,0,1,27.8,33.8A61.6,61.6,0,0,1,192,140a7.9,7.9,0,0,0,8,8h44a8,8,0,0,0,6.4-12.8Zm-93.2,42.9a48,48,0,1,0-58.4,0,72.1,72.1,0,0,0-35.6,34.4,7.8,7.8,0,0,0,.5,7.7,7.8,7.8,0,0,0,6.7,3.8H185.6a7.8,7.8,0,0,0,6.7-3.8,7.8,7.8,0,0,0,.5-7.7A72.1,72.1,0,0,0,157.2,178.1Z"
        fill="currentColor"
        /></svg>
    );
};

export default IconMenuInstaUsers;
