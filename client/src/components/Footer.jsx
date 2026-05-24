import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-outline py-8 px-6 md:px-12">
      <div className="max-w-container mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo */}

        <h2 className="text-2xl font-display font-bold">SAYON.DEV</h2>

        {/* Text */}

        <p className="text-textSecondary font-mono text-sm text-center">
          © 2026 SAYON MITRA — ENGINEERED WITH PRECISION
        </p>

        {/* Links */}

        <div className="flex gap-6">
          <a
            href="https://github.com/sayonmitra-69"
            className="font-mono text-sm text-textSecondary hover:text-primary transition"
          >
            GITHUB
          </a>

          <a
            href="https://www.linkedin.com/in/sayon-mitra-378278198/"
            className="font-mono text-sm text-textSecondary hover:text-primary transition"
          >
            LINKEDIN
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
