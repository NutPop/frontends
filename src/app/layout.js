// app/layout.js
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';
import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          {/* ... (Navbar เหมือนเดิม แต่ใช้ Link component) ... */}
        </nav>

        {children} 

        <footer className="bg-light py-5">
  <div className="container">
    <div className="row">
      {/* ... (ส่วนอื่นๆ ของ footer เหมือนเดิม) ... */}
      <div className="col-md-3">
        <h5>Links</h5>
        <ul className="list-unstyled">
          <li>
            <Link className="nav-link active" aria-current="page" href="/">Home</Link>
          </li>
          <li>
            <Link className="nav-link" href="/about">About</Link>
          </li>
          <li>
            <Link className="nav-link" href="/service">Service</Link>
          </li>
          <li>
            <Link className="nav-link" href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      {/* ... (ส่วนอื่นๆ ของ footer เหมือนเดิม) ... */}
    </div>
  </div>
</footer>


      </body>
    </html>
  );
}
