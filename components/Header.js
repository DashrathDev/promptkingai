"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ArrowUpRight, ChevronDown } from "lucide-react";
import Brand from "./Brand";
import { PLAY_STORE_URL } from "@/lib/site";

const aboutSubLinks = [
  ["About Us", "/about"],
  ["Privacy Policy", "/privacy-policy"],
  ["Terms & Conditions", "/terms"],
  ["Disclaimer", "/disclaimer"],
  ["Cookie Policy", "/cookie-policy"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef(null);

  useEffect(() => {
    setOpen(false);
    setMobileAboutOpen(false);
  }, [pathname]);

  useEffect(() => {
    function close(e) {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    if (open) window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  const isAboutActive = aboutSubLinks.some(([_, url]) => pathname === url);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/" aria-current={pathname === "/" ? "page" : undefined}>
            Home
          </Link>
          <Link href="/category/trending" aria-current={pathname === "/category/trending" ? "page" : undefined}>
            Trending
          </Link>
          <Link href="/category/festival" aria-current={pathname === "/category/festival" ? "page" : undefined}>
            Festival
          </Link>
          <Link href="/category/couple" aria-current={pathname === "/category/couple" ? "page" : undefined}>
            Couple
          </Link>
          <Link href="/category/girls" aria-current={pathname === "/category/girls" ? "page" : undefined}>
            Girls
          </Link>
          <Link href="/blog" aria-current={pathname.startsWith("/blog") ? "page" : undefined}>
            Guides
          </Link>

          {/* About Us with Sub-Categories Dropdown */}
          <div className="nav-dropdown-wrapper">
            <button
              className="nav-dropdown-trigger"
              aria-current={isAboutActive ? "page" : undefined}
            >
              About Us <ChevronDown size={14} />
            </button>
            <div className="nav-dropdown-menu">
              {aboutSubLinks.map(([name, url]) => (
                <Link
                  key={url}
                  href={url}
                  className={pathname === url ? "active-sublink" : ""}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>
            Contact
          </Link>
        </nav>

        <div className="header-actions">
          <a href={PLAY_STORE_URL} className="button small header-download">
            Download App <ArrowUpRight size={16} />
          </a>
          <button
            ref={toggle}
            className="icon-button menu-toggle"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        <Link href="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link href="/category/trending" onClick={() => setOpen(false)}>
          Trending Prompts
        </Link>
        <Link href="/category/festival" onClick={() => setOpen(false)}>
          Festival Prompts
        </Link>
        <Link href="/category/couple" onClick={() => setOpen(false)}>
          Couple Prompts
        </Link>
        <Link href="/category/girls" onClick={() => setOpen(false)}>
          Girls Prompts
        </Link>
        <Link href="/blog" onClick={() => setOpen(false)}>
          AI Photo Guides
        </Link>
        <Link href="/categories" onClick={() => setOpen(false)}>
          All Categories
        </Link>

        {/* Mobile About Us with Sub-Categories */}
        <div className="mobile-dropdown-section">
          <button
            type="button"
            className="mobile-dropdown-btn"
            onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
          >
            <span>About Us</span>
            <ChevronDown
              size={17}
              style={{
                transform: mobileAboutOpen ? "rotate(180deg)" : "none",
                transition: "transform 0.2s ease",
              }}
            />
          </button>
          {mobileAboutOpen && (
            <div className="mobile-dropdown-sublinks">
              {aboutSubLinks.map(([name, url]) => (
                <Link
                  key={url}
                  href={url}
                  onClick={() => setOpen(false)}
                  className={pathname === url ? "active-mobile-sublink" : ""}
                >
                  {name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link href="/contact" onClick={() => setOpen(false)}>
          Contact Us
        </Link>
        <a href={PLAY_STORE_URL}>
          Download Android app <ArrowUpRight size={17} />
        </a>
      </nav>
    </header>
  );
}
