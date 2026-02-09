import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Inicio", path: "/" },
  { name: "Menú", path: "/menu" },
  { name: "Catering (Próximamente)", path: "/catering" },
  { name: "Nosotros", path: "/about" },
  { name: "Galería", path: "/gallery" },
  { name: "Reseñas (Próximamente)", path: "/reviews" },
  { name: "Contacto", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile Banner */}
      <div className="2xl:hidden fixed top-0 left-0 right-0 z-50 bg-background px-4 py-3">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="px-4 py-2 bg-[#002868] border-2 border-[#bf0a30] rounded-full text-center shadow-lg"
        >
          <p className="text-sm font-black text-white uppercase tracking-wider flex items-center justify-center gap-2">
            <span className="text-[#ffd700]">★</span> Propiedad y Operado por Veterano <span className="text-[#ffd700]">★</span>
          </p>
        </motion.div>
      </div>

      <header className="fixed top-14 left-0 right-0 z-40 bg-background/95 backdrop-blur-md shadow-sm 2xl:top-0 2xl:z-50">
        <div className="container-custom 2xl:max-w-screen-2xl">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Ms. Emmett's Soul Food" className="h-16 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`link-underline text-sm font-semibold transition-colors ${location.pathname === link.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                    }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden xl:flex items-center gap-4">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="hidden 2xl:block px-4 py-2 bg-[#002868] border-2 border-[#bf0a30] rounded-full shadow-md"
              >
                <p className="text-xs font-black text-white uppercase tracking-wider flex items-center gap-2">
                  <span className="text-[#ffd700]">★</span> Propiedad de Veterano
                </p>
              </motion.div>
              <a href="tel:+16152308868" className="hidden 2xl:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4" />
                (615) 230-8868
              </a>
              <Button variant="soul" asChild>
                <Link to="/contact">Contactar Ahora</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-background border-t border-border overflow-hidden"
            >
              <nav className="container-custom py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-lg font-semibold py-2 ${location.pathname === link.path
                      ? "text-primary"
                      : "text-foreground"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-border flex flex-col gap-3">
                  <a href="tel:+16152308868" className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="w-5 h-5" />
                    (615) 230-8868
                  </a>
                  <Button variant="soul" size="lg" asChild className="w-full">
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contactar Ahora</Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
