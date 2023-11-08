import { useEffect, useState } from 'react';
import Search from '../../components/General/Search'
import Select from 'react-select';

interface InstaSearchProps {
    onUpdateType: number;
    onUpdateProfiles: string,
    amount: number;
    totalAmount: number;
    userid: number;
}
function InstaSearch({ onUpdateType, onUpdateProfiles, amount, totalAmount, userid }: InstaSearchProps) {
    const update = (value) => {
        onUpdateType(value);
    }

    const updateSearch = (value) => {
        const profiles = value.map(item => item.value);
        onUpdateProfiles(profiles);
    }
    const options = [
        { value: '0', label: 'All' },
        { value: '1', label: 'Likes' },
        { value: '2', label: 'Follows' },
        { value: '3', label: 'Comments' },
        { value: '4', label: 'Views' },
        { value: '5', label: 'Unfollows' },
        { value: '6', label: 'Directs' },
        { value: '7', label: 'Posts' },
        { value: '8', label: 'Reposts' },
        { value: '9', label: 'Follow Backs' }
    ];


    const [profiles, setProfiles] = useState([]);
    const fetchApiProfiles = async (id) => {
        const data = await fetch('http://localhost:3000/api/activity_profiles?id=' + id)
        const response = await data.json()
        setProfiles(response);
    }

    useEffect(() => {
        fetchApiProfiles(userid);
    }, []);
    
    const mappedData = profiles.map(item => ({
            value: item.ID,
            label: item.Login
        }));

    
    return (
        <div className="panel pb-4 bg-primary-light shadow-primary">
            <div className="min-h-[40px]">
                <div className='grid 2xl:grid-cols-3 lg:grid-cols-3 pb-3 sm:grid-cols-1 grid-cols-1 justify-around gap-8'>
                        <Select placeholder="Select an profile" onChange={(e) => updateSearch(e)} options={mappedData} isMulti isSearchable={false} />
                    <div>
                        <Select defaultValue={options[0]} onChange={(e) => update(e.value)} className='mt-2 selectHidden' options={options} isSearchable={false} />
                    </div>
                    <div className="font-bold text-lg justify-self-end pt-3 text-gray-500 center">{amount} of {totalAmount} Results</div>
                    </div>
            </div>
        </div>

    );
};

export default InstaSearch;