import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="bg-black pt-16 pb-6 text-yellow-500 relative">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* LOGO + ABOUT */}
          <div>
            <h2 className="text-2xl font-bold text-primary mb-3">
              <FontAwesomeIcon icon={faUtensils} className="text-yellow-400" />
              Mama Kitchen</h2>
            <p className="text-white leading-relaxed">
              Your number one kitchen for delicious, homemade Nigerian meals. 
              We bring the taste of home straight to your plate—fresh, flavourful, and satisfying.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 mt-5">
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 transition shadow">
                <FontAwesomeIcon icon={faFacebook} className="text-yellow-400" />
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 transition shadow">
                <FontAwesomeIcon icon={faInstagram} className="text-yellow-400" />
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-full bg-primary text-white hover:bg-primary/90 transition shadow">
                <FontAwesomeIcon icon={faWhatsapp} className="text-yellow-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-500 mb-4">Quick Links</h3>
            <ul className="space-y-3 text-white">
              <li className="hover:text-primary transition cursor-pointer">Home</li>
              <li className="hover:text-primary transition cursor-pointer">Menu</li>
              <li className="hover:text-primary transition cursor-pointer">About Us</li>
              <li className="hover:text-primary transition cursor-pointer">Order Now</li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-500 mb-4">Customer Support</h3>
            <ul className="space-y-3 text-white">
              <li className="hover:text-primary transition cursor-pointer">FAQs</li>
              <li className="hover:text-primary transition cursor-pointer">Delivery Information</li>
              <li className="hover:text-primary transition cursor-pointer">Return Policy</li>
              <li className="hover:text-primary transition cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-yellow-500 mb-4">Contact Us</h3>
            <ul className="space-y-3 text-white">
              <li>
                <i className="fa fa-map-marker text-primary mr-2"></i>
                Lagos, Nigeria
              </li>
              <li>
                <i className="fa fa-phone text-primary mr-2"></i>
                +234 80 000 0000
              </li>
              <li>
                <i className="fa fa-envelope text-primary mr-2"></i>
                support@mamakitchen.com
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-300"></div>

        {/* Copyright */}
        <div className="text-center text-white">
          © {new Date().getFullYear()} <span className="text-primary font-medium">Mama Kitchen</span>.  
          All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}
