import { useState, useRef, useEffect } from 'react';

interface InstaOptionsProps {
    name: string;
    userid: number;
    status: string;
    id: string;
}


function InstaOptions({
    name,
    userid,
    id,
    status,
    onUpdateVar1,
    onUpdateVar2,
    onUpdateVar3,
    onUpdateVar4
}: InstaOptionsProps) {

    const handleChange = (id, newValue) => {
        if (newValue === true || newValue === 1) {
            newValue = 1;
        }
        else {
            newValue = 0;
        }
        if (id == 'DoHashtag') {
            onUpdateVar1(newValue);
        }
        else if (id == 'DoLocation') {
            onUpdateVar2(newValue);
        }
        else if (id == 'DoUsername') {
            onUpdateVar3(newValue);
        }
        else if (id == 'DoComment') {
            onUpdateVar4(newValue);
        }
    };


    let stat: boolean;
    if (status == '1') {
        stat = true;
    }
    else {
        stat = false;
    }

    const initialStates = {
        'DoLike': false,
        'DoFollow': false,
        'DoView': false,
        'DoUnfollow': false,
        'DoFollowBack': false,
        'DoDirect': false,
        'DoPost': false,
        'DoRepost': false,
        'DoHashtag': false,
        'DoLocation': false,
        'DoUsername': false,
        'DoComment': false
    };

    const changeStatus = async () => {
        if (!states[id] === false) {
            status = 0
        }
        else {
            status = 1
        }

        handleChange(id, status)

        const data = await fetch('http://localhost:3000/api/changestatus?id=' + userid + '&status=' + status + '&todo=' + id)
        const response = await data.json()
    }


    const [states, setStates] = useState(initialStates);

    const handleCheckboxChange = (name) => {
        setStates((prevState) => ({
            ...prevState,
            [name]: !prevState[name],
        }));
        changeStatus();
    };



    const handleChangeAll = (id) => {
        setStates((prevState) => ({
            ...prevState,
            [id]: (stat === true) ? true : false,
        }));
        handleChange(id, stat)
    }

    useEffect(() => {
        handleChangeAll(id)
    }, [status]);



    return (

        <div className="panel pb-4 bg-primary-light flex justify-between shadow-primary">
            <div className="min-h-[10px]">
                <div className="flex justify-center">
                    <div className="ltr:ml-2 rtl:mr-2 text-base">{name}
                    </div>
                </div>
            </div>
            <label className="w-12 h-6 relative">
                <input type="checkbox" name={id} checked={states[id]} onClick={() => handleCheckboxChange(id)} className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" />
                <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
            </label>

        </div>
    );
};

export default InstaOptions;