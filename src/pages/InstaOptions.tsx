import React from 'react';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import { useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface InstaOptionsProps {
    name: string;
}

function InstaOptions({ name }: InstaOptionsProps) {

    return (
        
                            <div className="panel pb-4 bg-primary-light flex justify-between shadow-primary">
                                <div className="min-h-[10px]">
                                    <div className="flex justify-center">
                                        <div className="ltr:ml-2 rtl:mr-2 text-base pt-1">{name}
                                        </div>
                                    </div>
                                </div>
                                <label className="w-12 h-6 relative">
                                    <input type="checkbox" className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" />
                                    <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
                                </label>
                            </div>
    );
};

export default InstaOptions;