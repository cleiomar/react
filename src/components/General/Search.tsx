
import IconSearch from '../Icon/IconSearch';

interface SearchProps {
    profile: string;
    profileID: string;
}

function Search({ profile }: SearchProps) {

    return (
        <>
            <div className="relative mt-2">
                <input type="text" placeholder="Search Profile" className="form-input py-2 ltr:pr-11 rtl:pl-11 peer" />
                <button type="button" className="absolute ltr:right-[11px] rtl:left-[11px] top-1/2 -translate-y-1/2 peer-focus:text-primary">
                    <IconSearch className="mx-auto" />
                </button>
            </div>
        </>
    );
}

export default Search;