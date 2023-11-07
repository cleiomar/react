import LogsBox from '../components/Dashboard/LogsBox';
import IconMenuInstaUsers from '../components/Icon/Menu/IconMenuInstaUsers';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect, useRef } from 'react';
import InstaSearch from '../components/General/InstaSearch';

const InstaLogs = () => {
    const buttons = ['All', 'Likes', 'Follows', 'Views', 'Comments', 'Unfollows', 'Directs', 'Posts', 'Reposts', 'Follows Back'];

    const [activeButton, setActiveButton] = useState<number | null>(null);

    const updateType = (value) => setType(value);
    const [data, setData] = useState([]);
    const [type, setType] = useState([]);
    const [amount, setAmount] = useState([]);
    const fetchApiActions = async (type) => {
        const data = await fetch('http://localhost:3000/api/logs?type=' + type)
        const response = await data.json()
        setData(response)
        setAmount(response.length)
    }

    useEffect(() => {
        fetchApiActions(type);
    }, [type]);

    const handleClick = (index: number) => {
        setType(index);
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
        { value: '8', label: 'Reposts' },
        { value: '9', label: 'Follow Backs' }
    ];

    const actions = (selectedOption) => {
        switch (selectedOption) {
            case 0:
                return 'All';
            case 1:
                return 'Likes';
            case 2:
                return 'Follows';
            case 3:
                return 'Comments';
            case 4:
                return 'Views';
            case 5:
                return 'Unfollows';
            case 6:
                return 'Directs';
            case 7:
                return 'Posts';
            case 8:
                return 'Reposts';
            case 9:
                return 'Follow Backs';
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
                            <InstaSearch
                                onUpdateType={updateType}
                                amount={amount}
                            />
                            <div className='grid 2xl:grid-cols-10 lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-8 mt-5'>
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
                                            img={e.preview_img_link}
                                            link={e.media_link}
                                            onUpdateType={updateType}
                                            datantime={e.data_time}

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
