import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, Search } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";



export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart } = useCart();
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");



  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR HEADER */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled ? "bg-black/90 backdrop-blur-lg shadow-lg" : "bg-transparent"}`}
      >
        <nav className="container mx-auto flex items-center justify-between py-4 px-4">

          {/* LOGO */}
          <Link to="/" className="text-2xl font-bold text-yellow-500 flex items-center gap-2">
            <FontAwesomeIcon icon={faUtensils} className="text-yellow-400" />
            Mama's Kitchen
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex space-x-8 text-yellow-500 font-medium">
            <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link to="/offersection" className="hover:text-yellow-400">Offer</Link></li>
            <li><Link to="/menu" className="hover:text-yellow-400">Menu</Link></li>
            <li><Link to="/about" className="hover:text-yellow-400">About</Link></li>
          </ul>

          {/* DESKTOP ICONS */}
          <div className="hidden lg:flex items-center space-x-6 text-yellow-500">
          <Link to="/register" className="relative cursor-pointer">
           <User className="cursor-pointer" />
          </Link>  
         

            {/* CART ICON */}
            <Link to="/cart" className="relative cursor-pointer">
              <FontAwesomeIcon icon={faCartShopping} className="text-yellow-500 w-6 h-6" />

              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5
                rounded-full flex items-center justify-center">
                  {cart.reduce((total, item) => total + item.qty, 0)}
                </span>
              )}
            </Link>

                      {/* SEARCH ICON */}
          <div className="relative">
            <Search
              onClick={() => setShowSearch(!showSearch)}
              className="cursor-pointer"
            />

            <AnimatePresence>
              {showSearch && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-8 right-0 bg-black/90 backdrop-blur-lg p-3 rounded-lg shadow-lg w-64"
                >
                  <div className="flex items-center space-x-2">
                    <input
                      type="text"
                      placeholder="Search meals..."
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          window.location.href = `/menu?search=${query}`;
                          setShowSearch(false);
                        }
                      }}
                      className="flex-1 p-2 rounded bg-white text-black outline-none"
                    />

                    {/* Close Button */}
                    <X
                      size={20}
                      className="text-white cursor-pointer"
                      onClick={() => setShowSearch(false)}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>


            <Link
              to="/order"
              className="bg-yellow-500 text-black px-4 py-2 rounded-full hover:bg-yellow-400"
            >
              Order Online
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className={`lg:hidden ${scrolled ? "text-yellow-500" : "text-yellow-500"}`}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>
        </nav>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-black/95 text-white p-6 space-y-6"
            >
              <Link onClick={() => setOpen(false)} to="/" className="block text-lg">
                Home
              </Link>

              <Link onClick={() => setOpen(false)} to="/offersection" className="block text-lg">
                Offer
              </Link>

              <Link onClick={() => setOpen(false)} to="/menu" className="block text-lg">
                Menu
              </Link>

              <Link onClick={() => setOpen(false)} to="/about" className="block text-lg">
                About
              </Link>

              <Link onClick={() => setOpen(false)} to="/cart" className="block text-lg">
                Cart
              </Link>

              <div className="flex items-center space-x-4 pt-4 border-t border-white/20">
                <User />
                <Search />
                <Link
                  onClick={() => setOpen(false)}
                  to="/order"
                  className="bg-yellow-500 text-black px-4 py-2 rounded-full"
                >
                  Order Online
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Spacer */}
      <div className="h-20"></div>
    </>
  );
}
