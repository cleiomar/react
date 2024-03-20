import { FC } from 'react';

interface IconAcaoProps {
	className?: string;
	fill?: boolean;
	duotone?: boolean;
	width: string;
	height: string;
}

const IconAcao: FC<IconAcaoProps> = ({ width, height, className, fill = false, duotone = true }) => {
	return (
		<>
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
				width="800px" height="800px" viewBox="0 0 32 32" enable-background="new 0 0 32 32" xml:space="preserve">
				<g>
					<path fill="#808184" d="M21.5,12c0.276,0,0.5-0.224,0.5-0.5v-6C22,5.224,21.776,5,21.5,5h-16C5.224,5,5,5.224,5,5.5v6
		C5,11.776,5.224,12,5.5,12H21.5z M6,6h15v5H6V6z"/>
					<path fill="#808184" d="M4.5,16.5C4.5,16.776,4.724,17,5,17h16c0.276,0,0.5-0.224,0.5-0.5S21.276,16,21,16H5
		C4.724,16,4.5,16.224,4.5,16.5z"/>
					<path fill="#808184" d="M5,22h16c0.276,0,0.5-0.224,0.5-0.5S21.276,21,21,21H5c-0.276,0-0.5,0.224-0.5,0.5S4.724,22,5,22z" />
					<path fill="#808184" d="M5,26h16c0.276,0,0.5-0.224,0.5-0.5S21.276,25,21,25H5c-0.276,0-0.5,0.224-0.5,0.5S4.724,26,5,26z" />
					<path fill="#808184" d="M30.5,7h-2.104c-0.276,0-0.5,0.224-0.5,0.5S28.12,8,28.396,8H30.5C30.776,8,31,8.225,31,8.5v22
		c0,0.275-0.224,0.5-0.5,0.5H26V1.5C26,0.673,25.327,0,24.5,0h-23C0.673,0,0,0.673,0,1.5v28.359C0,31.04,0.96,32,2.141,32H21
		c0.276,0,0.5-0.224,0.5-0.5S21.276,31,21,31H2.141C1.512,31,1,30.488,1,29.859V1.5C1,1.225,1.224,1,1.5,1h23
		C24.776,1,25,1.225,25,1.5v30c0,0.276,0.224,0.5,0.5,0.5h5c0.827,0,1.5-0.673,1.5-1.5v-22C32,7.673,31.327,7,30.5,7z"/>
				</g>
			</svg>
		</>
	);
};

export default IconAcao;
