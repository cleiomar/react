
import IconMenuInstagram from '../Icon/Menu/IconMenuInstagram';
import IconMenuInstaUsers from '../Icon/Menu/IconMenuInstaUsers';
import IconMenuInstaLogs from '../Icon/Menu/IconMenuInstaLogs';
import IconMenuAutoActivity from '../Icon/Menu/IconMenuAutoActivity';
import IconMenuAutoPost from '../Icon/Menu/IconMenuAutoPost';
import IconMenuAutoDirect from '../Icon/Menu/IconMenuAutoDirect';
import IconMenuComments from '../Icon/Menu/IconMenuComments';
import IconMenuAddUser from '../Icon/Menu/IconMenuAddUser';
import IconMenuRemoveUser from '../Icon/Menu/IconMenuRemoveUser';
import IconMenuFollowBack from '../Icon/Menu/IconMenuFollowBack';
import IconMenuRepost from '../Icon/Menu/IconMenuRepost';
import IconMenuDeleteMedia from '../Icon/Menu/IconMenuDeleteMedia';
import IconMenuViews from '../Icon/Menu/IconMenuViews';
import { useState, useEffect } from 'react';


interface LogsBoxProps {
    nameAction: string;
    img: string;
    link: string;
    datantime: string;
    onUpdateType: number;
}

function LogsBox({ nameAction, onUpdateType, img, link, datantime }: LogsBoxProps) {

    const [type, setType] = useState([]);
    const updateType = (value) => setType(value);

    function calculateTimeDifference(dateTimeString) {
        const targetDate = new Date(dateTimeString);
        const currentDate = new Date();

        const timeDifference = currentDate - targetDate;

        let minutesAgo = Math.floor(timeDifference / (1000 * 60));
        const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
        const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

        let data: string = '';
        (minutesAgo === 0) ? minutesAgo = 1 : minutesAgo;
        if (minutesAgo != 0) {
            let minutes: string = '';
            if (minutesAgo > 1) {
                minutes = ' minutes '
            }
            else if (minutesAgo === 1) {
                minutes = ' minute '
            }
            const resto = minutesAgo % 60;
            data = resto + minutes;
        }

        if (hoursAgo != 0) {
            let hours: string = '';
            if (hoursAgo > 1) {
                hours = ' hours '
            }
            else if (hoursAgo === 1) {
                hours = ' hour '
            }

            const resto = hoursAgo % 24;
            data = resto + hours + data;
        }

        if (daysAgo != 0) {
            let days: string = '';
            if (daysAgo > 1) {
                days = ' days '
            }
            else if (daysAgo === 1) {
                days = ' day '
            }

            data = daysAgo + days;
        }

        return data + 'ago';
    }
    const timeDifference = calculateTimeDifference(datantime);

    return (
        <>
            <div className="panel p-0 bg-primary-light shadow-primary">
                <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 grid-cols-2">
                    <div className="justify-self-start text-xsm w-28 h-28 sm:w-[200px] sm:h-[150px] grid dark:border-[#1b2e4b]">
                        <div className='p-2'>{timeDifference}</div>
                        <div className='p-2 action-bottom'>{nameAction.slice(0, -1)}
                            <div>{link}</div></div>
                    </div>
                    <div className="justify-self-end w-28 h-28 sm:w-[150px] sm:h-[150px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
                        <div className='pos-icon'>
                            {(nameAction == 'Likes') ? <IconMenuAutoActivity /> :
                                (nameAction == 'Follows') ? <IconMenuAddUser /> :
                                    (nameAction == 'Views') ? <IconMenuViews /> :
                                        (nameAction == 'Comments') ? <IconMenuComments /> :
                                            (nameAction == 'Unfollows') ? <IconMenuRemoveUser /> :
                                                (nameAction == 'Directs') ? <IconMenuAutoDirect /> :
                                                    (nameAction == 'Posts') ? <IconMenuAutoPost /> :
                                                        (nameAction == 'Reposts') ? <IconMenuRepost /> :
                                                            (nameAction == 'Follow Backs') ? <IconMenuFollowBack /> : < IconMenuAutoActivity />
                            }
                        </div>
                        <img className='fitting-image rounded-lg mx-auto' src={img} />
                    </div>
                </div>
            </div>

        </>
    );
}

export default LogsBox;