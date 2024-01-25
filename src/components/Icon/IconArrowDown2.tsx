import { FC } from 'react';

interface IconArrowDown2Props {
    className?: string;
    fill?: boolean;
    duotone?: boolean;
    width: string;
    height: string;
}

const IconArrowDown2: FC<IconArrowDown2Props> = ({ width, height, className, fill = false, duotone = true }) => {
    return (
        <>
            <svg fill="#808080" height={width} width={height} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512.027 512.027">
                <g>
                    <g>
                        <path d="M479.114,283.84c-1.707-3.947-5.547-6.507-9.813-6.507h-128V10.667C341.3,4.8,336.5,0,330.633,0H181.3
			c-5.867,0-10.667,4.8-10.667,10.667v266.667h-128c-5.867,0-10.667,4.8-10.56,10.773c0,2.773,1.067,5.44,3.093,7.36L248.5,508.907
			c4.16,4.16,10.88,4.16,15.04,0l213.333-213.44C479.86,292.373,480.82,287.893,479.114,283.84z M255.967,486.293L68.34,298.667
			H181.3c5.867,0,10.667-4.8,10.667-10.667V21.333h128V288c0,5.867,4.8,10.667,10.667,10.667h112.96L255.967,486.293z"/>
                    </g>
                </g>
            </svg>
        </>
    );
};

export default IconArrowDown2;
