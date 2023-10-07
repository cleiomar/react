import { FC } from 'react';

interface IconMenuDashboardProps {
    className?: string;
}

const IconMenuDashboard: FC<IconMenuDashboardProps> = ({ className }) => {
    return (
        <svg width="40" height="40" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path
                opacity="0.5"
                d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
                fill="currentColor"
            />
        </svg>
    );
};

export default IconMenuDashboard;
