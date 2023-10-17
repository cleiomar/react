import DashBox from '../components/Dashboard/DashBox';
import IconMenuInstaUsers from '../components/Icon/Menu/IconMenuInstaUsers';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Dashboard = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="container">
                <ul className="flex space-x-2 rtl:space-x-reverse pb-5">
                    <li>
                        <Link to="/" className="text-primary hover:underline">
                            {t('dashboard')}
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
                                        <div className="flex justify-center">
                                            <div className="ltr:ml-2 rtl:mr-2">
                                                <IconMenuInstaUsers
                                                    opValor='0.3'
                                                    width='60'
                                                    height='60'
                                                />
                                            </div>
                                            <div className="ltr:ml-2 rtl:mr-2 w-[150px] self-end-baseline">
                                                <div className="font-bold text-lg font-general text-gray-500">Accounts</div>
                                                <div className="font-num font-semibold text-gray-500 ">35</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="font-bold ft titulo text-gray-500 pb-10 pt-16">
                                <li>
                                    {t('activity_report')}
                                </li>
                            </ul>
                            <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">

                                <DashBox
                                    nameAction={'Likes'}
                                    quantActions={2874}
                                />
                                <DashBox
                                    nameAction={'Comments'}
                                    quantActions={274}
                                />
                                <DashBox
                                    nameAction={'Follows'}
                                    quantActions={165}
                                />
                                <DashBox
                                    nameAction={'Follow Back'}
                                    quantActions={35}
                                />
                                <DashBox
                                    nameAction={'Unfollows'}
                                    quantActions={314}
                                />
                                <DashBox
                                    nameAction={'Repost'}
                                    quantActions={307}
                                />
                                <DashBox
                                    nameAction={'Delete Media'}
                                    quantActions={10}
                                />
                                <DashBox
                                    nameAction={'Views'}
                                    quantActions={274}
                                />
                                <DashBox
                                    nameAction={'Comments'}
                                    quantActions={274}
                                />
                                <DashBox
                                    nameAction={'Comments'}
                                    quantActions={274}
                                />
                            </div>
                            <ul className="font-bold ft titulo text-gray-500 pb-10 mt-20">
                                <li>
                                    {t('post_report')}
                                </li>
                            </ul>
                            <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14">

                                <DashBox
                                    nameAction={'Process'}
                                    quantActions={2874}
                                />
                                <DashBox
                                    nameAction={'Sucess'}
                                    quantActions={274}
                                />
                                <DashBox
                                    nameAction={'Failure'}
                                    quantActions={274}
                                />
                                <DashBox
                                    nameAction={'Processing'}
                                    quantActions={274}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
