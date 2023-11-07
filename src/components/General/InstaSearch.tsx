
import Search from '../../components/General/Search'
import Select from 'react-select';

interface InstaSearchProps {
    onUpdateType: number;
    amount: number;
}
function InstaSearch({ onUpdateType, amount }: InstaSearchProps) {
    const update = (value) => {
        onUpdateType(value);
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
    return (
        <div className="panel pb-4 bg-primary-light shadow-primary">
            <div className="min-h-[40px]">
                <div className='grid 2xl:grid-cols-4 lg:grid-cols-4 pb-3 sm:grid-cols-1 grid-cols-1 justify-around gap-8'>
                    <Search
                        profile='cleiomar'
                        profileID='123142'
                    />
                    <div>
                        <Select defaultValue={options[0]} onChange={(e) => update(e.value)} className='mt-2 selectHidden' options={options} isSearchable={false} />
                    </div>
                    <center><div className="font-bold text-lg justify-self-end pt-3 text-gray-500">{amount} Results</div></center>
                    <center><div className="font-bold text-lg justify-self-end pt-3 text-gray-500">35 Accounts</div></center>

                </div>
            </div>
        </div>

    );
};

export default InstaSearch;