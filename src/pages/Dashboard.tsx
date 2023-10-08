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
                                        nameAction={'Likes'}
                                        quantActions={2874}
                                    />
                                    <DashBox
                                        nameAction={'Comments'}
                                        quantActions={274}
                                    />
                                    <DashBox
                                        nameAction={'Follows'}
                                        quantActions={165}
                                    />
                                    <DashBox
                                        nameAction={'Follow Back'}
                                        quantActions={35}
                                    />
                                    <DashBox
                                        nameAction={'Unfollow'}
                                        quantActions={314}
                                    />
                                    <DashBox
                                        nameAction={'Report'}
                                        quantActions={307}
                                    />
                                    <DashBox
                                        nameAction={'Delete Media'}
                                        quantActions={10}
                                    />
                                    <DashBox
                                        nameAction={'Comments'}
                                        quantActions={274}
                                    />
                                    <DashBox
                                        nameAction={'Comments'}
                                        quantActions={274}
                                    />
                                    <DashBox
                                        nameAction={'Comments'}
                                        quantActions={274}
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
