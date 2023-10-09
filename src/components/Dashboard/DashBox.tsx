
import IconMenuInstagram from '../Icon/Menu/IconMenuInstagram';
import IconMenuInstaUsers from '../Icon/Menu/IconMenuInstaUsers';
import IconMenuInstaLogs from '../Icon/Menu/IconMenuInstaLogs';
import IconMenuAutoActivity from '../Icon/Menu/IconMenuAutoActivity';
import IconMenuAutoPost from '../Icon/Menu/IconMenuAutoPost';
import IconMenuAutoDirect from '../Icon/Menu/IconMenuAutoDirect';
import IconMenuComments from  '../Icon/Menu/IconMenuComments';
import IconMenuAddUser from  '../Icon/Menu/IconMenuAddUser';
import IconMenuRemoveUser from  '../Icon/Menu/IconMenuRemoveUser';
import IconMenuFollowBack from  '../Icon/Menu/IconMenuFollowBack';
import IconMenuRepost from  '../Icon/Menu/IconMenuRepost';
import IconMenuDeleteMedia from  '../Icon/Menu/IconMenuDeleteMedia';
import IconMenuViews from  '../Icon/Menu/IconMenuViews';
import { useState } from 'react';


interface DashBoxProps {
    nameAction: string;
    quantActions: number;
}

function DashBox({ nameAction, quantActions }: DashBoxProps) {

    return (
        <>
            <div className="panel pb-4 bg-primary-light shadow-primary">
                <div className="min-h-[40px]">
                    <div className="flex justify-between">
                        <div className="ltr:ml-2 rtl:mr-2">
                            {nameAction === 'Likes' ? (
                                <IconMenuAutoActivity
                                    opValor='0.3'
                                    width='60'
                                    height='60'
                                />
                            ) : nameAction === 'Follows' ? (
                                <IconMenuAddUser
                                    opValor='0.3'
                                    width='60'
                                    height='60'
                                />
                            ) : nameAction === 'Comments' ? (
                                <IconMenuComments
                                    opValor='0.3'
                                    width='60'
                                    height='60'
                                />
                            ) : nameAction === 'Follow Back' ? (
                                <IconMenuFollowBack
                                    opValor='0.3'
                                    width='60'
                                    height='60'
                                />
                            ) : nameAction === 'Unfollows' ? (
                                <IconMenuRemoveUser
                                    opValor='0.3'
                                    width='60'
                                    height='60'
                                />
                            ) : nameAction === 'Repost' ? (
                                <IconMenuRepost
                                    opValor='0.3'
                                    width='60'
                                    height='60'
                                />
                            ) : nameAction === 'Delete Media' ? (
                                <IconMenuDeleteMedia
                                    opValor='0.3'
                                    width='60'
                                    height='60'
                                />
                            ) : nameAction === 'Views' ? (
                                <IconMenuViews
                                    opValor='0.3'
                                    width='60'
                                    height='60'
                                />
                            ) : nameAction === 'Delete Media' ? (
                                <IconMenuDeleteMedia
                                    opValor='0.3'
                                    width='60'
                                    height='60'
                                />
                            ) : (
                                <IconMenuAutoDirect
                                    opValor='0.3'
                                    width='60'
                                    height='60'
                                />
                            )}
                        </div>
                        <div className="ltr:ml-2 rtl:mr-2 w-[150px] self-end-baseline">
                            <div className="font-bold text-lg font-general text-gray-500">{nameAction}</div>
                            <div className="font-num font-semibold text-sx text-gray-500">{quantActions}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashBox;