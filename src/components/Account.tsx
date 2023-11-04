import React from 'react';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import IconMenuInstaUsers from './Icon/Menu/IconMenuInstaUsers';
import { useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';


interface AccountProps {
    profile: string;
    profileID: string;
}

function Account({ profile, profileID }: AccountProps) {

    const [data, setData] = useState([]);


    const [getLike, setGetLike] = useState(0);
    const [getFollow, setGetFollow] = useState(0);
    const [getView, setGetView] = useState(0);
    const [getUnfollow, setGetUnfollow] = useState(0);
    const [getDirect, setGetDirect] = useState(0);
    const [getPost, setGetPost] = useState(0);
    const [getRepost, setGetRepost] = useState(0);
    const [getComment, setGetComment] = useState(0);
    const [sumActivity, setSumActivity] = useState(0);


    const [montlhyData, setMontlhyData] = useState(0);
    const get_monthlydata = async (id) => {
        const response = await fetch('http://localhost:3000/api/monthlyhistory?id=' + id);
        const all = await response.json();
        setMontlhyData(all.length)
    }

    const get_data = async (id) => {
        const response = await fetch('http://localhost:3000/api/activity_data?id=' + id);
        const accounts = await response.json();
        accounts.map((item) => {

            setGetLike(item.likes_today)
            setGetFollow(item.follow_today)
            setGetComment(item.comment_today)
            setGetView(item.views_today)
            setGetUnfollow(item.unfollow_today)
            setGetDirect(item.direct_today)
            setGetPost(item.post_today)
            setGetRepost(item.repost_today)
            
        })
    }

    useEffect(() => {
        get_monthlydata(profileID)
        get_data(profileID);
    }, [])

    useEffect(() => {
        setSumActivity(getLike+getFollow+getComment+getView+getUnfollow+getDirect+getPost+getRepost)
    }, [getRepost])

    const [isAddTaskModal, setIsAddTaskModal] = useState(false);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/InstaUserSettings', { state: { texto: profile, id: profileID } });
    };


    return (
        <>


            <div className="panel h-full shadow-primary p-0 border-0 overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-[#ee43c7] to-[#8c05a1] min-h-[190px]">
                    <div className="flex justify-between items-center mb-6">
                        <div className="bg-black/50 rounded-full p-1 ltr:pr-3 rtl:pl-3 flex items-center text-white font-semibold">
                            <img className="w-8 h-8 rounded-full border-2 border-white/50 block object-cover ltr:mr-1 rtl:ml-1" src="/assets/images/profile-34.jpeg" alt="avatar" />
                            {profile}
                        </div>
                    </div>
                    <div className="text-white flex justify-between items-center">
                        <p className="text-xl">Total Interactions</p>
                        <h5 className="ltr:ml-auto rtl:mr-auto text-2xl">
                            <span className="text-xl text-white-light">{montlhyData}</span>
                        </h5>
                    </div>
                </div>
                <div className="-mt-12 px-8 grid grid-cols-2 gap-2">
                    <div className="bg-white rounded-md shadow px-4 py-2.5 dark:bg-[#060818]">
                        <span className="flex justify-between items-center mb-4 dark:text-white">
                            Today
                            <IconMenuInstaUsers className="w-4 h-4 text-success rotate-180" />
                        </span>
                        <div className="btn w-full  py-1 text-base shadow-none border-0 bg-[#ebedf2] dark:bg-black text-[#515365] dark:text-[#bfc9d4]">{getLike}</div>
                    </div>
                    <div className="bg-white rounded-md shadow px-4 py-2.5 dark:bg-[#060818]">
                        <span className="flex justify-between items-center mb-4 dark:text-white">
                            Monthly
                            <IconMenuInstaUsers className="w-4 h-4 text-danger" />
                        </span>
                        <div className="btn w-full  py-1 text-base shadow-none border-0 bg-[#ebedf2] dark:bg-black text-[#515365] dark:text-[#bfc9d4]">{sumActivity}</div>
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
                                <span className="font-semibold">{getLike}</span>
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-[#515365] text-base font-semibold">Follows</p>
                            <p className="">
                                <span className="font-semibold ">{getFollow}</span>
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-[#515365] text-base font-semibold">Unfollows</p>
                            <p className="">
                                <span className="font-semibold ">{getUnfollow}</span>
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-[#515365] text-base font-semibold">Views</p>
                            <p className="">
                                <span className="font-semibold ">{getView}</span>
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-[#515365] text-base font-semibold">Comments</p>
                            <p className="">
                                <span className="font-semibold ">{getComment}</span>
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-[#515365] text-base font-semibold">Directs</p>
                            <p className="">
                                <span className="font-semibold ">{getDirect}</span>
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-[#515365] text-base font-semibold">Posts</p>
                            <p className="">
                                <span className="font-semibold ">{getPost}</span>
                            </p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-[#515365] text-base font-semibold">Reposts</p>
                            <p className="">
                                <span className="font-semibold ">{getRepost}</span>
                            </p>
                        </div>
                    </div>

                    <div className="text-center px-2 flex justify-around"><div className="relative inline-flex align-middle">
                        <button type="button" className="btn btn-success ltr:rounded-r-none rtl:rounded-l-none">
                            Start
                        </button>
                        <button type="button" onClick={handleClick} className="btn btn-dark rounded-none btn-lg-config">
                            Settings
                        </button>
                        <button type="button" className="btn btn-danger ltr:rounded-l-none rtl:rounded-r-none">
                            Stop
                        </button>
                    </div>
                    </div>
                </div>
            </div>




            {/* add task modal */}
            <Transition appear show={isAddTaskModal} as={Fragment}>
                <Dialog as="div" open={isAddTaskModal} onClose={() => setIsAddTaskModal(false)} className="relative z-50">
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        <div className="fixed inset-0 bg-[black]/60" />
                    </Transition.Child>
                    <div className="fixed inset-0 z-[999] overflow-y-auto">
                        <div className="flex items-center justify-center min-h-screen px-4">
                            <Dialog.Panel className="panel border-0 p-0 rounded-lg overflow-hidden w-full max-w-lg text-black dark:text-white-dark">
                                <button onClick={() => setIsAddTaskModal(false)} type="button" className="absolute top-4 ltr:right-4 rtl:left-4 text-white-dark hover:text-dark">

                                </button>
                                <div className="text-lg font-medium bg-[#fbfbfb] dark:bg-[#121c2c] ltr:pl-5 rtl:pr-5 py-3 ltr:pr-[50px] rtl:pl-[50px]">Task</div>
                                <div className="p-5">
                                    <form>
                                        <div className="grid gap-5">
                                            <div>
                                                <label htmlFor="taskTitle">Name</label>
                                                <input id="title" type="text" className="form-input" placeholder="Enter Name" />
                                            </div>
                                            <div>
                                                <label htmlFor="taskTag">Tag</label>
                                                <input id="tags" type="text" className="form-input" placeholder="Enter Tag" />
                                            </div>
                                            <div>
                                                <label htmlFor="taskdesc">Description</label>
                                                <textarea
                                                    id="description"
                                                    className="form-textarea min-h-[130px]"
                                                    placeholder="Enter Description"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="flex justify-end items-center mt-8">
                                            <button onClick={() => setIsAddTaskModal(false)} type="button" className="btn btn-outline-danger">
                                                Cancel
                                            </button>
                                            <button type="submit" className="btn btn-primary ltr:ml-4 rtl:mr-4">Add
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </Dialog.Panel>
                        </div>
                    </div>
                </Dialog>
            </Transition>


        </>
    );
}

export default Account;