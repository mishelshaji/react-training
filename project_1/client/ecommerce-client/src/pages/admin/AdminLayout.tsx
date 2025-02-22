import {Link, Navigate, Outlet} from 'react-router';
import AuthService from "../../common/services/authService.ts";

function AdminLayout() {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md">
                <div className="p-4">
                    <h2 className="text-xl font-bold">Admin Dashboard</h2>
                </div>
                <nav className="mt-4">
                    <ul>
                        <li>
                            <Link to="/admin" className="block p-4 hover:bg-gray-200">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/admin/category" className="block p-4 hover:bg-gray-200">Categories</Link>
                        </li>
                        <li>
                            <Link to="/admin/tag" className="block p-4 hover:bg-gray-200">Tags</Link>
                        </li>
                        <li>
                            <Link to="/admin/product" className="block p-4 hover:bg-gray-200">Products</Link>
                        </li>
                    </ul>
                </nav>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <header className="bg-white shadow-md p-4">
                    <h1 className="text-xl font-semibold">Admin Panel</h1>
                </header>

                {/* Main Area */}
                <main className="flex-1 p-6 bg-gray-50">
                    {AuthService.isInRole('Admin')? <Outlet/>: <Navigate to={'/login'}/>}
                </main>
            </div>
        </div>
    );
}

export default AdminLayout;
