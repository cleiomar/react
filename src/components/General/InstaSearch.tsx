
import Search from '../../components/General/Search'
import Select from 'react-select';


const InstaSearch = () => {

    const options = [
        { value: '0', label: 'All' },
        { value: '1', label: 'Follows' },
        { value: '2', label: 'Likes' },
        { value: '3', label: 'Comments' },
        { value: '4', label: 'Views' },
        { value: '5', label: 'Follow Back' },
        { value: '6', label: 'Posts' },
        { value: '7', label: 'Directs' },
        { value: '8', label: 'Unfollows' }
    ];
    return (
        <div className="panel pb-4 bg-primary-light shadow-primary">
            <div className="min-h-[40px]">
                <div className='grid 2xl:grid-cols-3 lg:grid-cols-3 pb-3 sm:grid-cols-1 grid-cols-1 justify-around gap-8'>
                    <Search
                        profile='cleiomar'
                        profileID='123142'
                    />
                    <div>
                        <Select defaultValue={options[0]} className='mt-2 selectHidden' options={options} isSearchable={false} />
                    </div>
                    <div className="font-bold text-lg justify-self-end pt-3 text-gray-500">35 Accounts
                    </div>
                </div>
            </div>
        </div>

                            );
                        };

export default InstaSearch;