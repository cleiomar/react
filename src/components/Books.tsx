import Data from "../Data";
import Book from "./Book";


function Books() {
    return (
        <>
            <div className='row'>
                <Book 
                    books={Data}
                />
            </div>
        </>
    );
}

export default Books;