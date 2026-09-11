import { useState } from "react";

type Page = "home" | "list" | "product" | "cart" | "signin" | "signup" | "otp";

// ─── Icons ────────────────────────────────────────────────────────────────────

function HomeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  );
}

function CartIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

function SearchIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function LogoutIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" y1="12" x2="9" y2="12" />
    </svg>
  );
}

function TrashIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="3 6 5 6 21 6" />
      <path d="M19 6l-1 14H6L5 6" />
      <path d="M10 11v6M14 11v6" />
      <path d="M9 6V4h6v2" />
    </svg>
  );
}

function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "#c9a227" : "none"} stroke="#c9a227" strokeWidth="2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function ChevronRight({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.1a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.26h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.71 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.97-.97a2 2 0 0 1 2.11-.45c.91.35 1.85.58 2.81.71A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

// ─── Shared Components ────────────────────────────────────────────────────────

function Navbar({
  page,
  setPage,
  cartCount = 3,
  loggedIn = false,
}: {
  page: Page;
  setPage: (p: Page) => void;
  cartCount?: number;
  loggedIn?: boolean;
}) {
  return (
    <header className="sticky top-0 z-50 bg-[#1a2744] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center gap-6">
        {/* Logo */}
        <button
          onClick={() => setPage("home")}
          className="flex items-center gap-2 mr-4"
        >
          <div className="w-8 h-8 rounded-full bg-[#c9a227] flex items-center justify-center text-[#1a2744] font-bold text-sm">
            U
          </div>
          <span className="font-bold text-base tracking-wide">UMAK Co-op</span>
        </button>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-5 text-sm flex-1">
          <button
            onClick={() => setPage("home")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors ${page === "home" ? "bg-white/15 text-white" : "text-white/70 hover:text-white hover:bg-white/10"}`}
          >
            <HomeIcon size={16} /> Home
          </button>
          <button
            onClick={() => setPage("list")}
            className={`px-3 py-1.5 rounded-md transition-colors ${page === "list" ? "bg-white/15 text-white" : "text-white/70 hover:text-white hover:bg-white/10"}`}
          >
            Products
          </button>
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3 ml-auto">
          {/* Cart */}
          <button
            onClick={() => setPage("cart")}
            className="relative p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <CartIcon size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 rounded-full bg-[#c9a227] text-[#1a2744] text-[10px] font-bold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {loggedIn ? (
            <button
              onClick={() => setPage("signin")}
              className="p-2 rounded-md text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              title="Logout"
            >
              <LogoutIcon size={18} />
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={() => setPage("signin")}
                className="text-sm px-3 py-1.5 text-white/80 hover:text-white transition-colors"
              >
                Sign in
              </button>
              <button
                onClick={() => setPage("signup")}
                className="text-sm px-4 py-1.5 bg-[#c9a227] text-[#1a2744] font-semibold rounded-full hover:bg-[#d4b040] transition-colors"
              >
                Sign up
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1a2744] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-[#c9a227] flex items-center justify-center text-[#1a2744] font-bold text-sm">
              U
            </div>
            <span className="font-bold text-base">UMAK Co-op</span>
          </div>
          <p className="text-white/60 text-sm leading-relaxed">
            The premier student-centered platform for affordable academic essentials at the University of Makati.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3 text-[#c9a227]">Contact Us</h3>
          <ul className="space-y-2 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <PhoneIcon /> 63+ 9232456189
            </li>
            <li className="flex items-center gap-2">
              <MailIcon /> support@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <MessageIcon /> 63+ 9348294157
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-3 text-[#c9a227]">Follow Us</h3>
          <div className="flex gap-3">
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
          <p className="text-white/50 text-xs mt-3">
            @UMAK.Co-op &bull; @UMAK_Co-op
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 text-center py-3 text-white/40 text-xs">
        © 2026 UMAK Co-op. All rights reserved.
      </div>
    </footer>
  );
}

// ─── Product card ─────────────────────────────────────────────────────────────

type Category = "Uniform" | "Lanyard" | "Toga" | "School Supplies" | "Merchandise";

const PRODUCTS: {
  id: number;
  name: string;
  category: Category;
  subFilter: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
}[] = [
  // Uniforms — sub-filter by department
  { id: 1,  name: "CCIS Uniform (Polo)",        category: "Uniform",        subFilter: "CCIS",  price: 450,  image: "photo-1434389677669-e08b4cac3105", rating: 4.8, reviews: 32 },
  { id: 2,  name: "CCAPS Uniform (Blazer)",      category: "Uniform",        subFilter: "CCAPS", price: 520,  image: "photo-1594938298603-c8148c4b4d43", rating: 4.6, reviews: 19 },
  { id: 3,  name: "SOL Uniform (Barong)",        category: "Uniform",        subFilter: "SOL",   price: 680,  image: "photo-1507003211169-0a1dd7228f2d", rating: 4.7, reviews: 27 },
  { id: 4,  name: "CTHM Uniform (Chef Coat)",    category: "Uniform",        subFilter: "CTHM",  price: 590,  image: "photo-1556909114-f6e7ad7d3136", rating: 4.5, reviews: 14 },
  // Lanyards — sub-filter by department
  { id: 5,  name: "CCIS ID Lanyard",             category: "Lanyard",        subFilter: "CCIS",  price: 120,  image: "photo-1612817288484-6f916006741a", rating: 4.5, reviews: 84 },
  { id: 6,  name: "CCAPS ID Lanyard",            category: "Lanyard",        subFilter: "CCAPS", price: 120,  image: "photo-1612817288484-6f916006741a", rating: 4.4, reviews: 61 },
  { id: 7,  name: "SOL ID Lanyard",              category: "Lanyard",        subFilter: "SOL",   price: 120,  image: "photo-1612817288484-6f916006741a", rating: 4.6, reviews: 45 },
  { id: 8,  name: "CTHM ID Lanyard",             category: "Lanyard",        subFilter: "CTHM",  price: 120,  image: "photo-1612817288484-6f916006741a", rating: 4.3, reviews: 38 },
  // Toga — sub-filter by department
  { id: 9,  name: "CCIS Academic Toga",          category: "Toga",           subFilter: "CCIS",  price: 1800, image: "photo-1523050854058-8df90110c9f1", rating: 4.9, reviews: 17 },
  { id: 10, name: "CCAPS Academic Toga",         category: "Toga",           subFilter: "CCAPS", price: 1800, image: "photo-1523050854058-8df90110c9f1", rating: 4.9, reviews: 12 },
  { id: 11, name: "SOL Academic Toga",           category: "Toga",           subFilter: "SOL",   price: 1800, image: "photo-1523050854058-8df90110c9f1", rating: 4.8, reviews: 9  },
  { id: 12, name: "CTHM Academic Toga",          category: "Toga",           subFilter: "CTHM",  price: 1800, image: "photo-1523050854058-8df90110c9f1", rating: 4.9, reviews: 7  },
  // School Supplies — sub-filter by item type
  { id: 13, name: "Ballpen Set (10pc)",          category: "School Supplies", subFilter: "Pen",    price: 85,  image: "photo-1583485088034-697b5bc54ccd", rating: 4.4, reviews: 210 },
  { id: 14, name: "Highlighter Pack (5 colors)", category: "School Supplies", subFilter: "Pen",    price: 120, image: "photo-1596461404969-9ae70f2830c1", rating: 4.6, reviews: 134 },
  { id: 15, name: "Pad Paper (500 sheets)",      category: "School Supplies", subFilter: "Paper",  price: 95,  image: "photo-1531346878377-a5be20888e57", rating: 4.3, reviews: 188 },
  { id: 16, name: "Notebook Set (5pc)",          category: "School Supplies", subFilter: "Paper",  price: 180, image: "photo-1531346878377-a5be20888e57", rating: 4.5, reviews: 120 },
  { id: 17, name: "Heavy-duty Stapler",          category: "School Supplies", subFilter: "Staples", price: 245, image: "photo-1611532736597-de2d4265fba3", rating: 4.2, reviews: 67  },
  { id: 18, name: "Staple Wire Set (3 boxes)",   category: "School Supplies", subFilter: "Staples", price: 60,  image: "photo-1611532736597-de2d4265fba3", rating: 4.4, reviews: 93  },
  { id: 19, name: "30 cm Ruler",                 category: "School Supplies", subFilter: "Ruler",  price: 35,  image: "photo-1583485088034-697b5bc54ccd", rating: 4.1, reviews: 155 },
  { id: 20, name: "Scientific Calculator",       category: "School Supplies", subFilter: "Calculator", price: 980, image: "photo-1611532736597-de2d4265fba3", rating: 4.7, reviews: 43 },
  { id: 21, name: "Scissors (stainless)",        category: "School Supplies", subFilter: "Scissors", price: 75, image: "photo-1583485088034-697b5bc54ccd", rating: 4.3, reviews: 88 },
  // Merchandise — sub-filter by clothing type
  { id: 22, name: "UMAK Logo T-Shirt",           category: "Merchandise",    subFilter: "T-Shirt", price: 350, image: "photo-1521572163474-6864f9cf17ab", rating: 4.7, reviews: 97  },
  { id: 23, name: "UMAK Varsity T-Shirt",        category: "Merchandise",    subFilter: "T-Shirt", price: 380, image: "photo-1529374255404-311a2a4f1fd9", rating: 4.5, reviews: 74  },
  { id: 24, name: "UMAK Zip-up Hoodie",          category: "Merchandise",    subFilter: "Jacket",  price: 850, image: "photo-1556821840-3a63f15732ce", rating: 4.8, reviews: 55  },
  { id: 25, name: "UMAK Windbreaker",            category: "Merchandise",    subFilter: "Jacket",  price: 990, image: "photo-1591047139829-d91aecb6caea", rating: 4.6, reviews: 31  },
  { id: 26, name: "UMAK Snapback Cap",           category: "Merchandise",    subFilter: "Cap",     price: 280, image: "photo-1588850561407-ed78c282e89b", rating: 4.5, reviews: 62  },
  { id: 27, name: "UMAK Dad Hat",                category: "Merchandise",    subFilter: "Cap",     price: 250, image: "photo-1588850561407-ed78c282e89b", rating: 4.4, reviews: 48  },
  { id: 28, name: "UMAK Tote Bag",               category: "Merchandise",    subFilter: "Bag",     price: 220, image: "photo-1553062407-98eeb64c6a62", rating: 4.3, reviews: 83  },
  { id: 29, name: "UMAK Backpack",               category: "Merchandise",    subFilter: "Bag",     price: 1200, image: "photo-1553062407-98eeb64c6a62", rating: 4.7, reviews: 29  },
];

function ProductCard({
  product,
  onView,
}: {
  product: (typeof PRODUCTS)[0];
  onView: () => void;
}) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
      <div
        className="relative h-44 bg-gray-100 cursor-pointer overflow-hidden"
        onClick={onView}
      >
        <img
          src={`https://images.unsplash.com/${product.image}?w=400&h=300&fit=crop&auto=format`}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-2 right-2 bg-[#1a2744]/80 text-white text-xs px-2 py-0.5 rounded-full backdrop-blur-sm">
          {product.subFilter}
        </span>
      </div>
      <div className="p-4">
        <h3
          className="font-semibold text-gray-900 text-sm cursor-pointer hover:text-[#1a2744] transition-colors mb-1 line-clamp-1"
          onClick={onView}
        >
          {product.name}
        </h3>
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <StarIcon key={i} filled={i <= Math.floor(product.rating)} />
          ))}
          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-[#1a2744]">₱{product.price.toLocaleString()}</span>
          <div className="flex gap-1">
            <button
              onClick={onView}
              className="text-xs px-3 py-1.5 bg-[#1a2744] text-white rounded-lg hover:bg-[#243563] transition-colors"
            >
              View
            </button>
            <button className="p-1.5 rounded-lg border border-gray-200 text-gray-600 hover:border-[#c9a227] hover:text-[#c9a227] transition-colors">
              <CartIcon size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Pages ────────────────────────────────────────────────────────────────────

function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  const [search, setSearch] = useState("");
  const categories = [
    { label: "Uniform", icon: "👔", dept: "CCIS / CCAPS / SOL / CTHM" },
    { label: "Lanyard", icon: "🎗️", dept: "All Departments" },
    { label: "Academic Toga", icon: "🎓", dept: "Graduating Students" },
    { label: "School Supplies", icon: "📚", dept: "All Departments" },
    { label: "Merchandise", icon: "🛍️", dept: "General" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
      {/* Hero */}
      <section className="relative bg-[#1a2744] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1400&h=600&fit=crop&auto=format"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <p className="text-[#c9a227] text-sm font-semibold tracking-widest uppercase mb-3">University of Makati</p>
          <h1
            className="text-4xl md:text-5xl font-bold mb-4 leading-tight"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Your Campus Store,<br />Now Online
          </h1>
          <p className="text-white/70 max-w-lg mx-auto mb-8 text-base leading-relaxed">
            Uniforms, lanyards, togas, supplies and more — delivered to you affordably and quickly.
          </p>
          {/* Search bar */}
          <div className="max-w-xl mx-auto relative">
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for products…"
              className="w-full pl-5 pr-12 py-3.5 rounded-full bg-white text-gray-900 text-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-[#c9a227]"
            />
            <button
              onClick={() => setPage("list")}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-[#c9a227] text-[#1a2744] rounded-full hover:bg-[#d4b040] transition-colors"
            >
              <SearchIcon size={18} />
            </button>
          </div>
          <button
            onClick={() => setPage("list")}
            className="mt-6 inline-flex items-center gap-2 bg-[#c9a227] text-[#1a2744] font-semibold px-6 py-2.5 rounded-full hover:bg-[#d4b040] transition-colors"
          >
            Browse All Products <ChevronRight />
          </button>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-6 py-14 w-full">
        <h2
          className="text-2xl font-bold text-[#1a2744] mb-1"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Shop by Category
        </h2>
        <p className="text-gray-500 text-sm mb-6">Everything you need for your academic journey</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categories.map((cat) => (
            <button
              key={cat.label}
              onClick={() => setPage("list")}
              className="flex flex-col items-center gap-2 p-5 bg-white rounded-2xl border border-gray-100 hover:border-[#c9a227] hover:shadow-md transition-all group"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">{cat.icon}</span>
              <span className="font-semibold text-sm text-[#1a2744]">{cat.label}</span>
              <span className="text-xs text-gray-400 text-center leading-tight">{cat.dept}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="max-w-7xl mx-auto px-6 pb-14 w-full">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2
              className="text-2xl font-bold text-[#1a2744] mb-1"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Featured Products
            </h2>
            <p className="text-gray-500 text-sm">Top picks from UMAK Co-op</p>
          </div>
          <button
            onClick={() => setPage("list")}
            className="text-sm text-[#1a2744] font-medium flex items-center gap-1 hover:text-[#c9a227] transition-colors"
          >
            View all <ChevronRight />
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {PRODUCTS.filter((p) => [1, 5, 22, 28].includes(p.id)).map((p) => (
            <ProductCard key={p.id} product={p} onView={() => setPage("product")} />
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-[#1a2744] text-white">
        <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-2">Our Mission</p>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Ease and Convenience for Every Student
            </h2>
            <p className="text-white/70 text-sm leading-relaxed">
              The UMAK Co-op mission is to provide ease and convenience to customers — making academic essentials accessible to every member of our university community, at prices that don't create barriers.
            </p>
          </div>
          <div>
            <p className="text-[#c9a227] text-xs font-semibold tracking-widest uppercase mb-2">Our Vision</p>
            <h2
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Premier Student-Centered Digital Ecosystem
            </h2>
            <p className="text-white/70 text-sm leading-relaxed">
              To be the premier student-centered digital ecosystem that removes financial barriers to academic success by delivering affordable, high-quality course essentials instantly to every member of our university community.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const CATEGORY_TABS: { label: string; value: Category | "All"; icon: string }[] = [
  { label: "All",            value: "All",            icon: "🛍️" },
  { label: "Uniform",        value: "Uniform",        icon: "👔" },
  { label: "Lanyard",        value: "Lanyard",        icon: "🎗️" },
  { label: "Toga",           value: "Toga",           icon: "🎓" },
  { label: "School Supplies",value: "School Supplies",icon: "📚" },
  { label: "Merchandise",    value: "Merchandise",    icon: "🧢" },
];

const SUB_FILTERS: Record<string, string[]> = {
  All:            [],
  Uniform:        ["CCIS", "CCAPS", "SOL", "CTHM"],
  Lanyard:        ["CCIS", "CCAPS", "SOL", "CTHM"],
  Toga:           ["CCIS", "CCAPS", "SOL", "CTHM"],
  "School Supplies": ["Pen", "Paper", "Staples", "Ruler", "Calculator", "Scissors"],
  Merchandise:    ["T-Shirt", "Jacket", "Cap", "Bag"],
};

function ListPage({ setPage }: { setPage: (p: Page) => void }) {
  const [activeTab, setActiveTab] = useState<Category | "All">("All");
  const [activeSubFilters, setActiveSubFilters] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  const handleTabChange = (tab: Category | "All") => {
    setActiveTab(tab);
    setActiveSubFilters([]);
    setCurrentPage(1);
  };

  const toggleSub = (f: string) => {
    setActiveSubFilters((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    );
    setCurrentPage(1);
  };

  const subOptions = SUB_FILTERS[activeTab] ?? [];

  const filtered = PRODUCTS.filter((p) => {
    const matchTab = activeTab === "All" || p.category === activeTab;
    const matchSub = activeSubFilters.length === 0 || activeSubFilters.includes(p.subFilter);
    return matchTab && matchSub;
  });

  const PER_PAGE = 6;
  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
      {/* Page header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <nav className="text-xs text-gray-500 mb-2 flex items-center gap-1.5">
            <button onClick={() => setPage("home")} className="hover:text-[#1a2744]">Home</button>
            <ChevronRight size={12} />
            <span className="text-[#1a2744] font-medium">Products</span>
          </nav>
          <h1
            className="text-2xl font-bold text-[#1a2744] mb-5"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            All Products
          </h1>

          {/* Category tabs */}
          <div className="flex gap-1 overflow-x-auto pb-px scrollbar-none">
            {CATEGORY_TABS.map((tab) => (
              <button
                key={tab.value}
                onClick={() => handleTabChange(tab.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-t-xl text-sm font-medium whitespace-nowrap border-b-2 transition-all ${
                  activeTab === tab.value
                    ? "border-[#1a2744] text-[#1a2744] bg-[#1a2744]/5"
                    : "border-transparent text-gray-500 hover:text-[#1a2744] hover:bg-gray-50"
                }`}
              >
                <span>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8 w-full flex gap-8 flex-1">
        {/* Sidebar — only shown when a tab with sub-filters is active */}
        {subOptions.length > 0 && (
          <aside className="w-48 shrink-0 hidden md:block">
            <div className="bg-white rounded-2xl border border-gray-100 p-5 sticky top-24">
              <div className="flex items-center gap-2 mb-4">
                <FilterIcon />
                <span className="font-semibold text-sm text-[#1a2744]">
                  {activeTab === "Uniform" || activeTab === "Lanyard" || activeTab === "Toga"
                    ? "Department"
                    : "Type"}
                </span>
              </div>
              <div className="space-y-2.5">
                {subOptions.map((f) => (
                  <label key={f} className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={activeSubFilters.includes(f)}
                      onChange={() => toggleSub(f)}
                      className="w-4 h-4 rounded accent-[#1a2744]"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-[#1a2744] transition-colors">
                      {f}
                    </span>
                  </label>
                ))}
              </div>
              {activeSubFilters.length > 0 && (
                <button
                  onClick={() => setActiveSubFilters([])}
                  className="mt-4 text-xs text-[#c9a227] hover:underline"
                >
                  Clear filters
                </button>
              )}
            </div>
          </aside>
        )}

        {/* Grid */}
        <div className="flex-1">
          {/* Active sub-filter pills (mobile / quick view) */}
          {activeSubFilters.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {activeSubFilters.map((f) => (
                <button
                  key={f}
                  onClick={() => toggleSub(f)}
                  className="flex items-center gap-1 px-3 py-1 bg-[#1a2744] text-white text-xs rounded-full"
                >
                  {f} ×
                </button>
              ))}
              <button
                onClick={() => setActiveSubFilters([])}
                className="text-xs text-gray-500 hover:text-[#1a2744] underline"
              >
                Clear all
              </button>
            </div>
          )}

          <p className="text-sm text-gray-500 mb-5">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}
            {activeTab !== "All" && (
              <span className="ml-1 text-gray-400">in {activeTab}</span>
            )}
          </p>

          {paginated.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              No products match the selected filters.
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
              {paginated.map((p) => (
                <ProductCard key={p.id} product={p} onView={() => setPage("product")} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-10">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="w-9 h-9 rounded-lg text-sm font-medium bg-white border border-gray-200 text-gray-600 hover:border-[#1a2744] hover:text-[#1a2744] disabled:opacity-40 transition-colors"
              >
                ‹
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  onClick={() => setCurrentPage(n)}
                  className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                    n === currentPage
                      ? "bg-[#1a2744] text-white"
                      : "bg-white border border-gray-200 text-gray-600 hover:border-[#1a2744] hover:text-[#1a2744]"
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="w-9 h-9 rounded-lg text-sm font-medium bg-white border border-gray-200 text-gray-600 hover:border-[#1a2744] hover:text-[#1a2744] disabled:opacity-40 transition-colors"
              >
                ›
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

function ProductPage({ setPage }: { setPage: (p: Page) => void }) {
  const [color, setColor] = useState("Navy");
  const [variant, setVariant] = useState("Type 1");
  const [qty, setQty] = useState(1);
  const product = PRODUCTS[0];

  const comments = [
    { name: "Maria Santos", text: "Great quality uniform, fits true to size!", rating: 5, date: "Sep 3, 2026" },
    { name: "Jose Reyes", text: "Fast delivery, very satisfied with the purchase.", rating: 4, date: "Aug 28, 2026" },
    { name: "Ana Cruz", text: "The fabric is comfortable for long school days.", rating: 5, date: "Aug 15, 2026" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
      <div className="max-w-7xl mx-auto px-6 py-8 w-full flex-1">
        {/* Breadcrumb */}
        <nav className="text-xs text-gray-500 mb-6 flex items-center gap-1.5">
          <button onClick={() => setPage("home")} className="hover:text-[#1a2744]">Home</button>
          <ChevronRight size={12} />
          <button onClick={() => setPage("list")} className="hover:text-[#1a2744]">Products</button>
          <ChevronRight size={12} />
          <span className="text-[#1a2744] font-medium">{product.name}</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden bg-gray-100 shadow-sm aspect-[4/3]">
            <img
              src={`https://images.unsplash.com/${product.image}?w=700&h=500&fit=crop&auto=format`}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Details */}
          <div>
            <span className="text-xs font-semibold text-[#c9a227] uppercase tracking-widest">{product.category}</span>
            <h1
              className="text-3xl font-bold text-[#1a2744] mt-1 mb-2"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              {product.name}
            </h1>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => <StarIcon key={i} filled={i <= Math.floor(product.rating)} />)}
              </div>
              <span className="text-sm text-gray-500">{product.rating} ({product.reviews} reviews)</span>
            </div>
            <p className="text-2xl font-bold text-[#1a2744] mb-6">₱{product.price.toLocaleString()}</p>

            {/* Color */}
            <div className="mb-5">
              <p className="text-sm font-semibold text-gray-700 mb-2">Color: <span className="text-[#1a2744]">{color}</span></p>
              <div className="flex gap-2">
                {["Navy", "White", "Gray"].map((c) => (
                  <button
                    key={c}
                    onClick={() => setColor(c)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                      color === c
                        ? "border-[#1a2744] bg-[#1a2744] text-white"
                        : "border-gray-200 text-gray-700 hover:border-[#1a2744]"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Variant */}
            <div className="mb-5">
              <p className="text-sm font-semibold text-gray-700 mb-2">Variant: <span className="text-[#1a2744]">{variant}</span></p>
              <div className="flex gap-2">
                {["Type 1", "Type 2"].map((v) => (
                  <button
                    key={v}
                    onClick={() => setVariant(v)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                      variant === v
                        ? "border-[#1a2744] bg-[#1a2744] text-white"
                        : "border-gray-200 text-gray-700 hover:border-[#1a2744]"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            {/* Qty */}
            <div className="mb-7">
              <p className="text-sm font-semibold text-gray-700 mb-2">Quantity</p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-lg text-gray-700 hover:border-[#1a2744] hover:text-[#1a2744] transition-colors"
                >
                  −
                </button>
                <span className="w-10 text-center font-semibold text-gray-900">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-9 h-9 rounded-lg border border-gray-200 flex items-center justify-center text-lg text-gray-700 hover:border-[#1a2744] hover:text-[#1a2744] transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button
                onClick={() => setPage("cart")}
                className="flex-1 flex items-center justify-center gap-2 bg-[#1a2744] text-white font-semibold py-3 rounded-xl hover:bg-[#243563] transition-colors"
              >
                <CartIcon size={18} /> Add to Cart
              </button>
              <button
                onClick={() => setPage("cart")}
                className="flex-1 flex items-center justify-center gap-2 bg-[#c9a227] text-[#1a2744] font-semibold py-3 rounded-xl hover:bg-[#d4b040] transition-colors"
              >
                Check Out
              </button>
            </div>
          </div>
        </div>

        {/* Comments */}
        <div className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h2
              className="text-xl font-bold text-[#1a2744]"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Customer Reviews
            </h2>
            <span className="text-sm text-gray-500">{comments.length} reviews</span>
          </div>
          <div className="space-y-4">
            {comments.map((c, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-full bg-[#1a2744]/10 flex items-center justify-center text-[#1a2744]">
                    <UserIcon />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{c.name}</p>
                    <p className="text-xs text-gray-400">{c.date}</p>
                  </div>
                  <div className="flex ml-auto">
                    {[1, 2, 3, 4, 5].map((s) => <StarIcon key={s} filled={s <= c.rating} />)}
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{c.text}</p>
              </div>
            ))}
          </div>
          <button className="mt-5 text-sm text-[#1a2744] font-medium flex items-center gap-1 hover:text-[#c9a227] transition-colors">
            Show more reviews <ChevronRight />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function CartPage({ setPage }: { setPage: (p: Page) => void }) {
  const [items, setItems] = useState([
    { id: 1, name: "UMAK Uniform (CCIS)", color: "Navy", variant: "Type 1", qty: 1, price: 450, image: "photo-1434389677669-e08b4cac3105" },
    { id: 2, name: "ID Lanyard", color: "Red", variant: "Standard", qty: 2, price: 120, image: "photo-1612817288484-6f916006741a" },
    { id: 3, name: "Notebook Set (5pc)", color: "N/A", variant: "Lined", qty: 1, price: 180, image: "photo-1531346878377-a5be20888e57" },
  ]);

  const removeItem = (id: number) => setItems((prev) => prev.filter((i) => i.id !== id));
  const changeQty = (id: number, delta: number) =>
    setItems((prev) =>
      prev.map((i) => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i)
    );

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const shipping = 80;
  const total = subtotal + shipping;

  return (
    <div className="flex flex-col min-h-screen bg-[#f8f7f4]">
      <div className="max-w-7xl mx-auto px-6 py-8 w-full flex-1">
        <nav className="text-xs text-gray-500 mb-6 flex items-center gap-1.5">
          <button onClick={() => setPage("home")} className="hover:text-[#1a2744]">Home</button>
          <ChevronRight size={12} />
          <span className="text-[#1a2744] font-medium">Cart</span>
        </nav>

        <h1
          className="text-2xl font-bold text-[#1a2744] mb-8"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Shopping Cart <span className="text-base font-normal text-gray-500">({items.length} items)</span>
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-4 border border-gray-100 flex gap-4">
                <div className="w-24 h-24 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                  <img
                    src={`https://images.unsplash.com/${item.image}?w=200&h=200&fit=crop&auto=format`}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-sm text-gray-900 mb-0.5">{item.name}</h3>
                      <p className="text-xs text-gray-500">{item.color} · {item.variant}</p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1.5 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                    >
                      <TrashIcon size={16} />
                    </button>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => changeQty(item.id, -1)}
                        className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-sm hover:border-[#1a2744] transition-colors"
                      >
                        −
                      </button>
                      <span className="text-sm font-medium w-5 text-center">{item.qty}</span>
                      <button
                        onClick={() => changeQty(item.id, 1)}
                        className="w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center text-sm hover:border-[#1a2744] transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-bold text-[#1a2744]">₱{(item.price * item.qty).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}

            {items.length === 0 && (
              <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
                <CartIcon size={40} />
                <p className="text-gray-500 mt-3">Your cart is empty</p>
                <button
                  onClick={() => setPage("list")}
                  className="mt-4 text-sm text-[#1a2744] font-medium hover:text-[#c9a227] transition-colors"
                >
                  Continue shopping →
                </button>
              </div>
            )}
          </div>

          {/* Summary */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 h-fit sticky top-24">
            <h2 className="font-bold text-gray-900 mb-5">Order Summary</h2>
            <div className="space-y-3 text-sm mb-5">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({items.reduce((s, i) => s + i.qty, 0)} items)</span>
                <span>₱{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>₱{shipping}</span>
              </div>
              <div className="border-t border-gray-100 pt-3 flex justify-between font-bold text-gray-900">
                <span>Total</span>
                <span className="text-[#1a2744] text-base">₱{total.toLocaleString()}</span>
              </div>
            </div>
            <button
              onClick={() => setPage("signin")}
              className="w-full bg-[#c9a227] text-[#1a2744] font-bold py-3 rounded-xl hover:bg-[#d4b040] transition-colors"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={() => setPage("list")}
              className="w-full mt-2 text-sm text-center text-gray-500 hover:text-[#1a2744] transition-colors py-2"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function AuthCard({ children, title }: { children: React.ReactNode; title: string }) {
  return (
    <div className="min-h-screen bg-[#f8f7f4] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-12 h-12 rounded-full bg-[#1a2744] flex items-center justify-center text-[#c9a227] font-bold text-xl mx-auto mb-3">
            U
          </div>
          <h1
            className="text-2xl font-bold text-[#1a2744]"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            {title}
          </h1>
          <p className="text-gray-500 text-sm mt-1">UMAK Co-op</p>
        </div>
        {children}
      </div>
    </div>
  );
}

function InputField({
  label,
  type = "text",
  placeholder,
}: {
  label: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-600 mb-1.5 uppercase tracking-wide">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2744]/20 focus:border-[#1a2744] transition-all"
      />
    </div>
  );
}

function SignInPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <AuthCard title="Sign In">
      <div className="space-y-4">
        <InputField label="Gmail Account" type="email" placeholder="you@gmail.com" />
        <InputField label="Password" type="password" placeholder="••••••••" />
        <button
          onClick={() => setPage("otp")}
          className="w-full bg-[#1a2744] text-white font-semibold py-3 rounded-xl hover:bg-[#243563] transition-colors mt-2"
        >
          Sign In
        </button>
        <button
          onClick={() => setPage("otp")}
          className="w-full bg-[#2187fb] text-white font-semibold py-3 rounded-xl hover:bg-[#1a6fd4] transition-colors"
        >
          Continue with Google
        </button>
      </div>
      <p className="text-center text-sm text-gray-500 mt-6">
        Don't have an account?{" "}
        <button
          onClick={() => setPage("signup")}
          className="text-[#1a2744] font-semibold hover:text-[#c9a227] transition-colors"
        >
          Create Account
        </button>
      </p>
    </AuthCard>
  );
}

function SignUpPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <AuthCard title="Create Account">
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <InputField label="First Name" placeholder="Maria" />
          <InputField label="Middle Name" placeholder="(optional)" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <InputField label="Last Name" placeholder="Santos" />
          <InputField label="Extension" placeholder="Jr., Sr., III" />
        </div>
        <InputField label="Contact Number" type="tel" placeholder="+63 9XX XXX XXXX" />
        <InputField label="Gmail Account" type="email" placeholder="you@gmail.com" />
        <InputField label="Password" type="password" placeholder="••••••••" />
        <InputField label="Re-enter Password" type="password" placeholder="••••••••" />
        <button
          onClick={() => setPage("otp")}
          className="w-full bg-[#2187fb] text-white font-semibold py-3 rounded-xl hover:bg-[#1a6fd4] transition-colors mt-2"
        >
          Create Account
        </button>
      </div>
      <p className="text-center text-sm text-gray-500 mt-5">
        Already have an account?{" "}
        <button
          onClick={() => setPage("signin")}
          className="text-[#1a2744] font-semibold hover:text-[#c9a227] transition-colors"
        >
          Sign In
        </button>
      </p>
    </AuthCard>
  );
}

function OtpPage({ setPage }: { setPage: (p: Page) => void }) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleOtp = (i: number, val: string) => {
    if (!/^\d?$/.test(val)) return;
    const next = [...otp];
    next[i] = val;
    setOtp(next);
    if (val && i < 5) {
      const el = document.getElementById(`otp-${i + 1}`);
      el?.focus();
    }
  };

  return (
    <AuthCard title="OTP Verification">
      <p className="text-sm text-gray-600 text-center mb-6 -mt-4">
        Enter the 6-digit code sent to your Gmail account
      </p>
      <div className="flex gap-2 justify-center mb-7">
        {otp.map((v, i) => (
          <input
            key={i}
            id={`otp-${i}`}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={v}
            onChange={(e) => handleOtp(i, e.target.value)}
            className="w-11 h-12 text-center text-lg font-bold border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1a2744]/20 focus:border-[#1a2744] transition-all"
          />
        ))}
      </div>
      <div className="space-y-3">
        <button
          onClick={() => setPage("home")}
          className="w-full bg-[#2187fb] text-white font-semibold py-3 rounded-xl hover:bg-[#1a6fd4] transition-colors"
        >
          Submit
        </button>
        <button className="w-full border border-gray-200 text-gray-700 font-medium py-3 rounded-xl hover:border-[#1a2744] hover:text-[#1a2744] transition-colors text-sm">
          Re-send OTP
        </button>
      </div>
      <p className="text-center text-xs text-gray-400 mt-5">
        Didn't get a code?{" "}
        <button className="text-[#2187fb] hover:underline">Check spam folder</button>
      </p>
    </AuthCard>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const isAuth = page === "signin" || page === "signup" || page === "otp";

  return (
    <div className="min-h-screen flex flex-col">
      {!isAuth && <Navbar page={page} setPage={setPage} cartCount={3} />}

      {page === "home" && <HomePage setPage={setPage} />}
      {page === "list" && <ListPage setPage={setPage} />}
      {page === "product" && <ProductPage setPage={setPage} />}
      {page === "cart" && <CartPage setPage={setPage} />}
      {page === "signin" && <SignInPage setPage={setPage} />}
      {page === "signup" && <SignUpPage setPage={setPage} />}
      {page === "otp" && <OtpPage setPage={setPage} />}
    </div>
  );
}
