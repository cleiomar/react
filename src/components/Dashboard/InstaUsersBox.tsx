interface InstaUsersBoxProps {
    nameAction: string;
    quantActions: number;
}

function InstaUsersBox({ nameAction, quantActions }: InstaUsersBoxProps) {

    return (
        <>
            <div className="panel pb-4 bg-primary-light shadow-primary">
                <div className="min-h-[40px]">
                    <div className="flex justify-between">
                        <div className="ltr:ml-2 rtl:mr-2"></div>
                        <div className="grid 1xl:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-6 mt-5">
        <button type="button" className="btn btn-outline-primary">Primary</button></div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default InstaUsersBox;