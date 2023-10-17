import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import InstaOptions from './InstaOptions';

const ReceberProps: React.FC = () => {

    const location = useLocation();
    const textoRecebido = location.state?.texto || "Nenhum texto recebido";

    const { t } = useTranslation();
    const options = [];
    options.push({
        name: "Like"
    }, {
        name: "Follow"
    }, {
        name: "Comment"
    }, {
        name: "View"
    }, {
        name: "Unfollow"
    }, {
        name: "Follow Back"
    }, {
        name: "Direct"
    }, {
        name: "Post"
    }, {
        name: "Repost"
    });

    return (
        <div className="container">
            <ul className="flex space-x-2 rtl:space-x-reverse pb-5">
                <li>
                    <Link to="/instaUsers" className="text-primary hover:underline">
                        {t('Accounts')}
                    </Link>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>Instagram</span>
                </li>
                <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                    <span>{textoRecebido}</span>
                </li>
            </ul>
            <div className="flex gap-5 relative sm:h-[calc(100vh_-_150px)] h-full">
                <div className="panel flex-1 overflow-auto h-full">
                    <div className="sm:min-h-[300px] min-h-[400px] p-5">
                        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pb-5 gap-8">
                            <img className="w-20 h-20 rounded-full overflow-hidden object-cover" src="/assets/images/profile-12.jpeg" alt="img" />
                        </div>
                        <ul className="font-bold ft titulo text-gray-500 pb-10 pt-0">
                            <li>
                                {t('To Do')}
                            </li>
                        </ul>
                        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pb-5 gap-8">
                        {options.map((option, index) => (
                                    <InstaOptions
                                        key={index}
                                        name={option.name}
                                    />
                                ))}
                        </div>
                        <ul className="font-bold ft titulo text-gray-500 pb-10 pt-16">
                            <li>
                                {t('Targeting')}
                            </li>
                        </ul>
                        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pb-5 gap-8">
                        {options.map((option, index) => (
                                    <InstaOptions
                                        key={index}
                                        name={option.name}
                                    />
                                ))}
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReceberProps;