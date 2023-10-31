import { useState, useRef, useEffect } from 'react';

interface InstaOptionsProps {
    name: string;
    userid: number;
    status: string;
    id: string;
}

function InstaOptions({ name, userid, id, status }: InstaOptionsProps) {
    let stat: boolean;
    if (status == '1') {
        stat = true;
    }
    else {
        stat = false;
    }
    const itemRef = useRef(null);

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
        if(!states[id] === false){
            status = 0
        }
        else{
            status=1
        }
        const data = await fetch('http://localhost:3000/api/changestatus?id='+userid+'&status='+status+'&todo='+id)
        const response = await data.json()
        console.log(response)
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
            [id]: (stat === true) ?  true : false,
        }));
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
                <input ref={itemRef} type="checkbox" name={id} checked={states[id]} onClick={() => handleCheckboxChange(id)} className="custom_switch absolute w-full h-full opacity-0 z-10 cursor-pointer peer" />
                <span className="bg-[#ebedf2] dark:bg-dark block h-full rounded-full before:absolute before:left-1 before:bg-white dark:before:bg-white-dark dark:peer-checked:before:bg-white before:bottom-1 before:w-4 before:h-4 before:rounded-full peer-checked:before:left-7 peer-checked:bg-primary before:transition-all before:duration-300"></span>
            </label>

        </div>
    );
};

export default InstaOptions;