import { FC } from 'react';

interface IconLidoProps {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width: string;
    height: string;
}

const IconLido: FC<IconLidoProps> = ({ width, height, className, fill = false, duotone = true }) => {
    return (
        <>
            <svg height={50} width={50} viewBox="3.117 1.114 495.547 132.383" xmlns="http://www.w3.org/2000/svg">
  <path d="M 3.117 133.497 L 114.426 1.707 L 402.494 1.114 L 498.664 133.348 L 3.117 133.497 Z" transform="matrix(0.9999999999999999, 0, 0, 0.9999999999999999, 0, 0)"/>
</svg>
        </>
    );
};

export default IconLido;
