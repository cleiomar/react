import DashBox from '../components/Dashboard/DashBox';
import IconMenuInstaUsers from '../components/Icon/Menu/IconMenuInstaUsers';
import IconSettings from '../components/Icon/IconSettings';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Account from '../components/Account';
import { useState, Fragment, useEffect } from 'react';
import IconSearch from '../components/Icon/IconSearch';


const InstaUsers = () => {
    const { t } = useTranslation();

    const [selectedTask, setSelectedTask] = useState<any>(null);
    const [isAddProjectModal, setIsAddProjectModal] = useState(false);


    /*const Dashboard = () => {
        const [accounts, setAccounts] = useState([
          {
            profile: "Cleiomar",
            profileId: 78475,
          },
        ]);
      
        const handleAddAccount = () => {
          // Adiciona uma nova conta ao array
        };*/

    // Declarando uma variável como array
    const accounts = [];

    // Adicionando conteúdo ao array
    accounts.push({
        profile: "Cleiomar",
        profileId: "78475",
    }, {
        profile: "Cleiomar2",
        profileId: "7823",
    }, {
        profile: "Cleiomar3",
        profileId: "4142",
    }, {
        profile: "Cleiomar",
        profileId: "78475",
    }, {
        profile: "Cleiomar2",
        profileId: "7823",
    }, {
        profile: "Cleiomar3",
        profileId: "4142",
    }, {
        profile: "Cleiomar",
        profileId: "78475",
    }, {
        profile: "Cleiomar2",
        profileId: "7823",
    }, {
        profile: "Cleiomar3",
        profileId: "4142",
    }, {
        profile: "Cleiomar",
        profileId: "78475",
    }, {
        profile: "Cleiomar2",
        profileId: "7823",
    }, {
        profile: "Cleiomar3",
        profileId: "4142",
    });

    return (
        <>
            <div className="container">
                <ul className="flex space-x-2 rtl:space-x-reverse pb-5">
                    <li>
                        <Link to="/" className="text-primary hover:underline">
                            {t('Accounts')}
                        </Link>
                    </li>
                    <li className="before:content-['/'] ltr:before:mr-2 rtl:before:ml-2">
                        <span>Instagram</span>
                    </li>
                </ul>
                <div className="flex gap-5 relative sm:h-[calc(100vh_-_150px)] h-full">
                    <div className="panel flex-1 overflow-auto h-full">
                        <div className="sm:min-h-[300px] min-h-[400px] p-5">
                            <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pb-5 gap-8">
                            <div className="panel pb-4 bg-primary-light flex justify-between shadow-primary">
                                    <div className="min-h-[40px]">
                                        <div className="flex justify-center">
                                            <div className="ltr:ml-2 rtl:mr-2">
                                                <IconMenuInstaUsers
                                                    opValor='0.3'
                                                    width='60'
                                                    height='60'
                                                />
                                            </div>
                                            <div className="ltr:ml-1 rtl:mr-1 w-[250px] self-end-baseline">
                                                <div className="font-bold text-lg font-general text-gray-500">Accounts</div>
                                                <div className="font-num font-semibold text-gray-500 ">35</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel pb-4 bg-primary-light justify-between shadow-primary">
                                    <div className="min-h-[40px]">
                                    <div className="relative mt-2">
                                        <input type="text" placeholder="Search Contacts" className="form-input py-2 ltr:pr-11 rtl:pl-11 peer"/>
                                        <button type="button" className="absolute ltr:right-[11px] rtl:left-[11px] top-1/2 -translate-y-1/2 peer-focus:text-primary">
                                            <IconSearch className="mx-auto" />
                                        </button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="font-bold ft titulo text-gray-500 pb-10 pt-0">
                                <li>
                                    {t('accounts')}
                                </li>
                            </ul>
                            <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
                                {accounts.map((account, index) => (
                                    <Account
                                        key={index}
                                        profile={account.profile}
                                        profileID={account.profileId}
                                    />
                                ))}

                            </div>


                        </div>
                    </div>
                </div>

                <div className='flex justify-center pt-10'>
                    <ul className="inline-flex items-center space-x-1 rtl:space-x-reverse m-auto">
                        <li>
                            <button
                                type="button"
                                className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                            >
                                Prev
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                            >
                                1
                            </button>
                        </li>
                        <li>
                            <button type="button" className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-primary text-white dark:text-white-light dark:bg-primary">
                                2
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                            >
                                3
                            </button>
                        </li>
                        <li>
                            <button
                                type="button"
                                className="flex justify-center font-semibold px-3.5 py-2 rounded transition bg-white-light text-dark hover:text-white hover:bg-primary dark:text-white-light dark:bg-[#191e3a] dark:hover:bg-primary"
                            >
                                Next
                            </button>
                        </li>
                    </ul>
                </div>
            </div>


        </>
    );
};

export default InstaUsers;
