import { useEffect, useState } from "react";
import React, { useLayoutEffect } from 'react';
interface InstaSpeedProps {
    name: string;
    userid: number;
    optionid: number;
    selected: number;
    id: number;
    options: string[];
}

function InstaSpeed({ name, options, userid, id, selected }: InstaSpeedProps) {
    const [changeSelected, setChangeSelected] = useState(0);

    const handleSelectChange = async (index) => {
        setChangeSelected(index)
        const data = await fetch('http://localhost:3000/api/changespeed?id=' + userid + '&option=' + index + '&todo=' + id)
        const response = await data.json()
    }

    useEffect(() => {        
        setChangeSelected(selected)
      }, [selected]);



    return (

        <div className="panel pb-4 bg-primary-light flex justify-between shadow-primary">
            <div className="min-h-[10px]">
                <div className="flex justify-center">
                    <div className="ltr:ml-2 rtl:mr-2 text-base">{name}
                    </div>
                </div>
            </div>
            <div>
                <select name={id} value={changeSelected} onChange={(e) => {
                    const selectedIndex = parseInt(e.target.value, 10);
                    handleSelectChange(selectedIndex);
                }} className="form-select form-select-sm text-white-dark w-100">
                    {options.map((option, index) => (
                        <option key={index + 1} value={index + 1}>
                            {option}
                        </option>
                    ))}
                </select >
            </div>
        </div>
    );
};

export default InstaSpeed;