import React from 'react';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import { useState, Fragment, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';

interface InstaSpeedProps {
    name: string;
    options: string[];
}

function InstaSpeed({ name, options }: InstaSpeedProps) {

    return (

        <div className="panel pb-4 bg-primary-light flex justify-between shadow-primary">
            <div className="min-h-[10px]">
                <div className="flex justify-center">
                    <div className="ltr:ml-2 rtl:mr-2 text-base">{name}
                    </div>
                </div>
            </div>
            <div>
                <select className="form-select form-select-sm text-white-dark w-100">
                    {options.map((option, index) => (
                        <option key={index} value={index}>
                            {option}
                        </option>
                    ))}
                </select >
            </div>
        </div>
    );
};

export default InstaSpeed;