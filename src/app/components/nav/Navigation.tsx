"use client"
import { useCart } from "@/app/context/cartContext";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Cart - Quick Ecomm",
};

export default function Navigation() {
  const { getCartCount } = useCart();
  return (
    <div className="d-flex space-between mt-2">
      <ul className="nav nav-underline">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" href="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/products">
            Products
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/about-us">
            About Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/contact-us">
            Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link position-relative" href="/carts">
            Cart
            {getCartCount() > 0 && (
              <span className="position-absolute top-3 start-100 translate-middle badge rounded-pill bg-danger">
                {getCartCount()}
                <span className="visually-hidden">items in cart</span>
              </span>
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
}

// import React from "react";

// export default function Navigation() {
//   return (
//     <div>
//       <ul className="nav nav-underline">
//         <li className="nav-item">
//           <a className="nav-link" aria-current="page" href="/">
//             Home
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/products">
//             Products
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/about-us">
//             About Us
//           </a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/contact-us">
//             Contact Us
//           </a>
//         </li>
//       </ul>
//     </div>
//   );
// }
