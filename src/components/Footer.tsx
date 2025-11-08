const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0F4C29] via-green-950 to-[#1a7a42] text-white text-center py-14 border-t border-white/10">
      <div className="flex flex-col items-center gap-4">
        <img
          src="https://hc-academy.de/wp-content/uploads/2025/02/hca-logo-white.webp"
          alt="HC Academy Logo"
          className="h-20 w-auto opacity-90 hover:opacity-100 transition-opacity"
        />

        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} <span className="font-semibold">HC Academy</span> –{" "}
          <span className="text-white font-medium">Leads für Coaches</span>
        </p>

        <p className="text-gray-300 text-sm">
          <a
            href="https://leads.hc-academy.de"
            className="hover:text-green-800 transition-colors underline underline-offset-4"
          >
            leads.hc-academy.de
          </a>{" "}
          |{" "}

          <a
            href="mailto:info@hc-academy.de"
            className="hover:text-green-800 transition-colors underline underline-offset-4"
          >
            info@hc-academy.de
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
