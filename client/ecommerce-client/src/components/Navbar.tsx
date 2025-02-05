import {Link} from "react-router";

function Navbar(){
    return (
        <header className={'flex items-center h-16 bg-slate-800 text-white sticky top-0 w-full px-10'}>
            <span className={'text-2xl'}>EcomApp</span>

            <nav className={'flex gap-4 ml-auto'}>
                <Link to="/admin/category">Category</Link>
                <a href="#">Shop</a>
                <a href="#">Cart</a>
                <a href="#">Account</a>
            </nav>
        </header>
    )
}

export default Navbar
