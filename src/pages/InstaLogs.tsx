import LogsBox from '../components/Dashboard/LogsBox';
import IconMenuInstaUsers from '../components/Icon/Menu/IconMenuInstaUsers';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Search from '../components/General/Search'
import React, { useState, useRef } from 'react';
import Select from 'react-select';

const InstaLogs = () => {
    const buttons = ['All', 'Follows', 'Likes', 'Comments', 'Views', 'Follows Back', 'Posts', 'Directs', 'Unfollows'];

    const [activeButton, setActiveButton] = useState<number | null>(null);


    const handleClick = (index: number) => {
        setActiveButton(index);
    };

    const options = [
        { value: '0', label: 'All' },
        { value: '1', label: 'Follows' },
        { value: '2', label: 'Likes' },
        { value: '3', label: 'Comments' },
        { value: '4', label: 'Views' },
        { value: '5', label: 'Follow Back' },
        { value: '6', label: 'Posts' },
        { value: '7', label: 'Directs' },
        { value: '8', label: 'Unfollows' }
    ];


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

                            <div className="grid 1xl:grid-cols-4 lg:grid-cols-1 sm:grid-cols-1 grid-cols-1 gap-5 pb-5 ">
                                <div className="panel pb-4 bg-primary-light shadow-primary">
                                    <div className="min-h-[40px]">
                                        <div className='grid 2xl:grid-cols-3 lg:grid-cols-3 pb-3 sm:grid-cols-1 grid-cols-1 justify-around gap-8'>
                                            <Search
                                                profile='cleiomar'
                                                profileID='123142'
                                            />
                                            <div>
                                                <Select defaultValue={options[0]} className='mt-2 selectHidden' options={options} isSearchable={false} />
                                            </div>
                                            <div className="font-bold text-lg justify-self-end pt-3 text-gray-500">35 Accounts
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='grid 2xl:grid-cols-9 lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-8 '>
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

                                    <LogsBox
                                        nameAction={'Likes'}
                                        quantActions={2874}
                                    />

                                    <LogsBox
                                        nameAction={'Likes'}
                                        quantActions={2874}
                                    />

                                    <LogsBox
                                        nameAction={'Likes'}
                                        quantActions={2874}
                                    />

                                    <LogsBox
                                        nameAction={'Likes'}
                                        quantActions={2874}
                                    />

                                    <LogsBox
                                        nameAction={'Likes'}
                                        quantActions={2874}
                                    />

                                    <LogsBox
                                        nameAction={'Likes'}
                                        quantActions={2874}
                                    />

                                    <LogsBox
                                        nameAction={'Likes'}
                                        quantActions={2874}
                                    />

                                    <LogsBox
                                        nameAction={'Likes'}
                                        quantActions={2874}
                                    />

                                    <LogsBox
                                        nameAction={'Likes'}
                                        quantActions={2874}
                                    />
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
