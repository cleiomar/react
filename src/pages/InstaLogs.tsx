import LogsBox from '../components/Dashboard/LogsBox';
import IconMenuInstaUsers from '../components/Icon/Menu/IconMenuInstaUsers';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect, useRef } from 'react';
import InstaSearch from '../components/General/InstaSearch';
import { useLocation } from 'react-router-dom';
const InstaLogs = () => {

    const location = useLocation();
    const params = location.state;
    const userid = params.userid;
    const buttons = ['All', 'Likes', 'Follows', 'Views', 'Comments', 'Unfollows', 'Directs', 'Posts', 'Reposts', 'Follows Back'];

    const [activeButton, setActiveButton] = useState<number | null>(0);

    const updateType = (value) => setType(value);
    const updateProfiles = (value) => setProfiles(value);
    const [data, setData] = useState([]);
    const [type, setType] = useState('');
    const [amount, setAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [profiles, setProfiles] = useState([]);
    let profilesv = '';
    let typev = 0;
    let limit = 0;

    const fetchApiActions = async (type, profiles, limit) => {
        try {
            const dados = new FormData();

            dados.append('type', type);
            dados.append('profiles', profiles);
            dados.append('limit', limit);

            const url = 'http://localhost:3000/api/logs';

            const options: RequestInit = {
                method: 'POST',
                body: dados,
            };

            const response = await fetch(url, options);

            if (response.ok) {
                const responseData = await response.json();
                setData(prevData => [...prevData, ...responseData]);
                setAmount(prevAmount => prevAmount + responseData.length)
                typev = type;
                profilesv = profiles;


            } else {
                throw new Error('Erro na solicitação POST');
            }
        } catch (error) {
            console.error('Erro ao enviar a solicitação POST:', error);
            throw error;
        }
    };



    const fetchApiTotallogs = async (type, profiles) => {
        try {
            const dados = new FormData();

            dados.append('type', type);
            dados.append('profiles', profiles);

            const url = 'http://localhost:3000/api/totallogs';

            const options: RequestInit = {
                method: 'POST',
                body: dados,
            };

            const response = await fetch(url, options);

            if (response.ok) {
                const responseData = await response.json();
                setTotalAmount(responseData.length)
            } else {
                throw new Error('Erro na solicitação POST');
            }
        } catch (error) {
            console.error('Erro ao enviar a solicitação POST:', error);
            throw error;
        }
    };


    useEffect(() => {
        profilesv = profiles;
        typev = type;
        setData([]);
        setAmount(0)
        fetchApiActions(type, profiles, 0);
        fetchApiTotallogs(type, profiles)
        console.log(type+profiles)
    }, [type, profiles]);

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





    const containerRef = useRef(null);


    const handleScroll = () => {
        const container = containerRef.current;
        if (container) {
            const scrollTop = container.scrollTop;
            const scrollHeight = container.scrollHeight;
            const clientHeight = container.clientHeight;

            if (scrollTop + clientHeight >= scrollHeight) {
                limit = limit + 24;
                fetchApiActions(typev, profilesv, limit);
                console.log(profilesv)
            }
        }
    }

    useEffect(() => {
        const container = containerRef.current;
        if (container) {
            container.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);


    const { t } = useTranslation();
    return (
        <>
            <div className="container">
                <ul className="flex space-x-2 rtl:space-x-reverse pb-5">
                    <li>
                        <Link to="/" className="text-primary hover:underline">
                            {t('Instagram')}
                        </Link>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                        <span>Logs</span>
                    </li>
                </ul>
                <div className="flex gap-5 relative sm:h-[calc(100vh_-_150px)] h-full">
                    <div ref={containerRef} className="panel flex-1 overflow-auto h-full">
                        <div className="sm:min-h-[300px] min-h-[400px] p-5">
                            <InstaSearch
                                onUpdateType={updateType}
                                onUpdateProfiles={updateProfiles}
                                amount={amount}
                                totalAmount={totalAmount}
                                userid={userid}
                            />
                            <div className='grid 2xl:grid-cols-10 lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-8 mt-5'>
                                {buttons.map((button, index) => (
                                    <button
                                        key={index}
                                        name={button}
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
