
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
import { useState } from 'react';


interface LogsBoxProps {
    nameAction: string;
    quantActions: number;
    img: string;
    link: string;
    datantime: string;
}

function LogsBox({ nameAction, quantActions, img, link, datantime }: LogsBoxProps) {

    return (
        <>
            <div className="panel p-0 bg-primary-light shadow-primary">
                <div className="grid 2xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-2 grid-cols-2">
                    <div className="justify-self-start text-xsm w-28 h-28 sm:w-[200px] sm:h-[150px] grid dark:border-[#1b2e4b]">
                     <div className='p-2'>2 minutos atras</div>
                     <div className='p-2 action-bottom'>{nameAction}
                     <div>U7MtQ2Fx9Yyj16</div></div>
                    </div>
                    <div className="justify-self-end w-28 h-28 sm:w-[150px] sm:h-[150px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
                        <div className='pos-icon'>
                            <IconMenuAutoDirect />
                        </div>
                        <img className='fitting-image rounded-lg mx-auto' src='https://images.freeimages.com/images/large-previews/3cb/the-treasure-1203251.jpg' />
                    </div>
                </div>
            </div>

        </>
    );
}

export default LogsBox;