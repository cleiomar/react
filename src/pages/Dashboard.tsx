import DashBox from '../components/Dashboard/DashBox';

const Dashboard = () => {
    return (
        <>
                <div className="container">
                    <div className="flex gap-5 relative sm:h-[calc(100vh_-_150px)] h-full">
                    <div className="panel flex-1 overflow-auto h-full">
                            <div className="sm:min-h-[300px] min-h-[400px] p-5">
                                <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
                                <DashBox
                                    />
                                    <DashBox
                                    />
                                    <DashBox
                                    />
                                    <DashBox
                                    /><DashBox
                                    />
                                    <DashBox
                                    />
                                    <DashBox
                                    />
                                    <DashBox
                                    /><DashBox
                                    />
                                    <DashBox
                                    />
                                    <DashBox
                                    />
                                    <DashBox
                                    /><DashBox
                                    />
                                    <DashBox
                                    />
                                    <DashBox
                                    />
                                    <DashBox
                                    />
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
