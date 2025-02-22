function Dashboard(){
    const data = {
        totalProducts: 120,
        totalCategories: 15,
        totalTags: 30,
        totalUsers: 250,
    };

    return (
        <div className="p-6 bg-white rounded-lg shadow-md">
            <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-blue-500 text-white p-4 rounded-lg shadow">
                    <h2 className="text-xl">Total Products</h2>
                    <p className="text-3xl font-bold">{data.totalProducts}</p>
                </div>
                <div className="bg-green-500 text-white p-4 rounded-lg shadow">
                    <h2 className="text-xl">Total Categories</h2>
                    <p className="text-3xl font-bold">{data.totalCategories}</p>
                </div>
                <div className="bg-yellow-500 text-white p-4 rounded-lg shadow">
                    <h2 className="text-xl">Total Tags</h2>
                    <p className="text-3xl font-bold">{data.totalTags}</p>
                </div>
                <div className="bg-red-500 text-white p-4 rounded-lg shadow">
                    <h2 className="text-xl">Total Users</h2>
                    <p className="text-3xl font-bold">{data.totalUsers}</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
