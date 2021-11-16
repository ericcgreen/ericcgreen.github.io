import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="footer" className="bg-tertiary text-primary py-3 px-6 h-18 text-center flex items-center justify-center">
      Made by Eric &copy; {year}
    </footer>
  )
}