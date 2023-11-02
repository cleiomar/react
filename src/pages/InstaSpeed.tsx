interface InstaSpeedProps {
    name: string;
    userid: number;
    optionid: number;
    id: number;
    options: string[];
}

function InstaSpeed({ name, options, userid, id }: InstaSpeedProps) {

    const handleSelectChange = async (index) => {

        const data = await fetch('http://localhost:3000/api/changespeed?id=' + userid + '&option=' + index + '&todo=' + id)
        const response = await data.json()
    }
    return (

        <div className="panel pb-4 bg-primary-light flex justify-between shadow-primary">
            <div className="min-h-[10px]">
                <div className="flex justify-center">
                    <div className="ltr:ml-2 rtl:mr-2 text-base">{name}
                    </div>
                </div>
            </div>
            <div>
                <select name={id} selected={options[id]} onChange={(e) => {
                    const selectedIndex = parseInt(e.target.value, 10);
                    handleSelectChange(selectedIndex + 1);
                    }} className="form-select form-select-sm text-white-dark w-100">
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