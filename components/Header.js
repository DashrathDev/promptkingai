"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, Search, ArrowUpRight } from "lucide-react";
import Brand from "./Brand";
import { PLAY_STORE_URL } from "@/lib/site";
export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggle = useRef(null);
  useEffect(() => {
    setOpen(false);
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
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Brand />
        <nav className="desktop-nav" aria-label="Main navigation">
          {[
            ["Explore", "/explore"],
            ["Categories", "/categories"],
            ["Latest", "/latest"],
            ["Blog", "/blog"],
            ["About", "/about"],
          ].map(([name, url]) => (
            <Link
              key={url}
              href={url}
              aria-current={pathname === url ? "page" : undefined}
            >
              {name}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link
            href="/explore#search"
            className="icon-button"
            aria-label="Search prompts"
          >
            <Search size={21} />
          </Link>
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
        {[
          ["Explore", "/explore"],
          ["Categories", "/categories"],
          ["Latest", "/latest"],
          ["Blog", "/blog"],
          ["About", "/about"],
        ].map(([name, url]) => (
          <Link key={url} href={url} onClick={() => setOpen(false)}>
            {name}
          </Link>
        ))}
        <a href={PLAY_STORE_URL}>
          Download Android app <ArrowUpRight size={17} />
        </a>
      </nav>
    </header>
  );
}
