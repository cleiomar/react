import DashBox from '../components/Dashboard/DashBox';
import IconMenuInstaUsers from '../components/Icon/Menu/IconMenuInstaUsers';
import IconSettings from '../components/Icon/IconSettings';
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
                            {t('accounts')}
                        </Link>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                        <span>Instagram</span>
                    </li>
                </ul>
                <div className="flex gap-5 relative sm:h-[calc(100vh_-_150px)] h-full">
                    <div className="panel flex-1 overflow-auto h-full">
                        <div className="sm:min-h-[300px] min-h-[400px] p-5">

                        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 pb-5">
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
                            <ul className="font-bold ft titulo text-gray-500 pb-10 pt-0">
                                <li>
                                    {t('accounts')}
                                </li>
                            </ul>
                            <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">

                                <div className="panel h-full p-0 border-0 overflow-hidden">
                                    <div className="p-6 bg-gradient-to-r from-[#ee43c7] to-[#8c05a1] min-h-[190px]">
                                        <div className="flex justify-between items-center mb-6">
                                            <div className="bg-black/50 rounded-full p-1 ltr:pr-3 rtl:pl-3 flex items-center text-white font-semibold">
                                                <img className="w-8 h-8 rounded-full border-2 border-white/50 block object-cover ltr:mr-1 rtl:ml-1" src="/assets/images/profile-34.jpeg" alt="avatar" />
                                                Alan Green
                                            </div>
                                        </div>
                                        <div className="text-white flex justify-between items-center">
                                            <p className="text-xl">Total Interactions</p>
                                            <h5 className="ltr:ml-auto rtl:mr-auto text-2xl">
                                                <span className="text-xl text-white-light">2953</span>
                                            </h5>
                                        </div>
                                    </div>
                                    <div className="-mt-12 px-8 grid grid-cols-2 gap-2">
                                        <div className="bg-white rounded-md shadow px-4 py-2.5 dark:bg-[#060818]">
                                            <span className="flex justify-between items-center mb-4 dark:text-white">
                                                Today
                                                <IconMenuInstaUsers className="w-4 h-4 text-success rotate-180" />
                                            </span>
                                            <div className="btn w-full  py-1 text-base shadow-none border-0 bg-[#ebedf2] dark:bg-black text-[#515365] dark:text-[#bfc9d4]">979</div>
                                        </div>
                                        <div className="bg-white rounded-md shadow px-4 py-2.5 dark:bg-[#060818]">
                                            <span className="flex justify-between items-center mb-4 dark:text-white">
                                                Monthly
                                                <IconMenuInstaUsers className="w-4 h-4 text-danger" />
                                            </span>
                                            <div className="btn w-full  py-1 text-base shadow-none border-0 bg-[#ebedf2] dark:bg-black text-[#515365] dark:text-[#bfc9d4]">530</div>
                                        </div>
                                    </div>
                                    <div className="p-5">
                                        <div className="mb-5">
                                            <span className="bg-[#1b2e4b] text-white text-xs rounded-full px-4 py-1.5 before:bg-white before:w-1.5 before:h-1.5 before:rounded-full ltr:before:mr-2 rtl:before:ml-2 before:inline-block">
                                                Pending
                                            </span>
                                        </div>
                                        <div className="mb-5 space-y-1">
                                            <div className="flex items-center justify-between">
                                                <p className="text-[#515365] text-base font-semibold">Likes</p>
                                                <p className="">
                                                    <span className="font-semibold">135</span>
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-[#515365] text-base font-semibold">Follows</p>
                                                <p className="">
                                                    <span className="font-semibold ">114</span>
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-[#515365] text-base font-semibold">Unfollows</p>
                                                <p className="">
                                                    <span className="font-semibold ">342</span>
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-[#515365] text-base font-semibold">Views</p>
                                                <p className="">
                                                    <span className="font-semibold ">297</span>
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-[#515365] text-base font-semibold">Comments</p>
                                                <p className="">
                                                    <span className="font-semibold ">236</span>
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-[#515365] text-base font-semibold">Directs</p>
                                                <p className="">
                                                    <span className="font-semibold ">751</span>
                                                </p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <p className="text-[#515365] text-base font-semibold">Posts</p>
                                                <p className="">
                                                    <span className="font-semibold ">548</span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="text-center px-2 flex justify-around"><div className="relative inline-flex align-middle">
                                            <button type="button" className="btn btn-success ltr:rounded-r-none rtl:rounded-l-none">
                                                Start
                                            </button>
                                            <button type="button" className="btn btn-dark rounded-none">
                                                Settings
                                            </button>
                                            <button type="button" className="btn btn-danger ltr:rounded-l-none rtl:rounded-r-none">
                                                Stop
                                            </button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
