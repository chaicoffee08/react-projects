import Link from "next/link";
const Navbar = () => {

    return (
        <div>
            <Link href='/'>
                <button>Home Page</button>
            </Link>
            <Link href='/about'>
                <button>About</button>
            </Link>
            <Link href='/contact'>
                <button>Contact</button>
            </Link>
        </div>
    );
   
};

export default Navbar;
