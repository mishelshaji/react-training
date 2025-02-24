import {Link, Outlet} from "react-router-dom";

function AdminLayout(){
    return (
        <div className="flex h-screen bg-gray-100">
            <aside className="w-64 bg-gray-800 text-white">
                <div className="p-4">
                    <h2 className="text-lg font-bold">Admin Panel</h2>
                </div>
                <nav className="mt-6">
                    <ul>
                        <li>
                            <Link to="/dashboard" className="block p-4 hover:bg-gray-700">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/users" className="block p-4 hover:bg-gray-700">Users</Link>
                        </li>
                        <li>
                            <Link to="/settings" className="block p-4 hover:bg-gray-700">Settings</Link>
                        </li>
                    </ul>
                </nav>
            </aside>
            <div className="flex-1 flex flex-col">
                <header className="bg-gray-800 text-white p-4">
                    <h1 className="text-lg font-bold">Admin Dashboard</h1>
                </header>
                <main className="flex-1 p-6 bg-white">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <p className="mt-4">Welcome to the admin panel!</p>
                    <Outlet/>

                </main>
            </div>
        </div>
    )
}

export default AdminLayout
