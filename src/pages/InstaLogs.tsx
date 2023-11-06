import LogsBox from '../components/Dashboard/LogsBox';
import IconMenuInstaUsers from '../components/Icon/Menu/IconMenuInstaUsers';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect, useRef } from 'react';
import InstaSearch from '../components/General/InstaSearch';

const InstaLogs = () => {
    const buttons = ['All', 'Follows', 'Likes', 'Comments', 'Views', 'Follows Back', 'Posts', 'Directs', 'Unfollows'];

    const [activeButton, setActiveButton] = useState<number | null>(null);

    const [data, setData] = useState([]);
    const [type, setType] = useState([]);
    const fetchApiActions = async () => {
        const data = await fetch('http://localhost:3000/api/logs')
        const response = await data.json()
        console.log(response)
        setData(response)
    }

    useEffect(() => {
        fetchApiActions();
    }, []);

    const handleClick = (index: number) => {
        setActiveButton(index);
    };

    const options = [
        { value: '0', label: 'All' },
        { value: '1', label: 'Likes' },
        { value: '2', label: 'Follows' },
        { value: '3', label: 'Comments' },
        { value: '4', label: 'Views' },
        { value: '5', label: 'Unfollows' },
        { value: '6', label: 'Directs' },
        { value: '7', label: 'Posts' },
        { value: '8', label: 'Repost' },
        { value: '9', label: 'Follow Back' }
    ];

    const actions = (selectedOption) => {
        switch (selectedOption) {
            case 0:
                return 'All Content';
            case 1:
                return 'Likes Content';
            case 2:
                return 'Follows Content';
            case 3:
                return 'Comments Content';
            case 4:
                return 'Views Content';
            case 5:
                return 'Unfollows Content';
            case 6:
                return 'Directs Content';
            case 7:
                return 'Posts Content';
            case 8:
                return 'Repost Content';
            case 9:
                return 'Follow Back Content';
        }
    };

    const { t } = useTranslation();
    return (
        <>
            <div className="container">
                <ul className="flex space-x-2 rtl:space-x-reverse pb-5">
                    <li>
                        <Link to="/" className="text-primary hover:underline">
                            {t('InstaLogs')}
                        </Link>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                        <span>Sales</span>
                    </li>
                </ul>
                <div className="flex gap-5 relative sm:h-[calc(100vh_-_150px)] h-full">
                    <div className="panel flex-1 overflow-auto h-full">
                        <div className="sm:min-h-[300px] min-h-[400px] p-5">
                            <InstaSearch />
                            <div className='grid 2xl:grid-cols-9 lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-8 mt-5'>
                                {buttons.map((button, index) => (
                                    <button
                                        key={index}
                                        className={`button ${activeButton === index ? 'btn btn-primary buttonHidden' : 'btn btn-outline-primary buttonHidden'}`}
                                        onClick={() => handleClick(index)}
                                    >
                                        {button}
                                    </button>
                                ))}
                            </div>
                            <ul className="font-bold ft titulo text-gray-500 pb-10 pt-16">
                                <li>
                                    {t('logs')}
                                </li>
                            </ul>
                            <div>
                                <div className="grid 1xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                                    {data.map((e, index) => (
                                        <LogsBox
                                            key={index}
                                            nameAction={actions(e.type_action)}
                                            quantActions={2874}
                                            img={''}
                                            link={''}
                                            datantime={''}

                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

};

export default InstaLogs;
