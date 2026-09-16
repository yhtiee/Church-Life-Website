import { Link } from 'react-router';
import { site, mailto, whatsappUrl } from '../config/site';
import logo from '../assets/images/logo.jpg';

export function Footer() {
  const year = new Date().getFullYear();
  const supportMail = mailto(site.supportEmail, `${site.appName} support`);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <Link to="/" className="brand">
              <img src={logo} alt="" width={38} height={38} />
              {site.appName}
            </Link>
            <p className="footer__about">{site.description}</p>
          </div>

          <div>
            <h3>App</h3>
            <ul>
              <li><Link to="/#features">Features</Link></li>
              <li><Link to="/#parishes">For parishes</Link></li>
              <li><Link to="/#download">Download</Link></li>
              <li><Link to="/#faq">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3>Legal</h3>
            <ul>
              <li><Link to="/privacy">Privacy policy</Link></li>
              <li><Link to="/terms">Terms of use</Link></li>
              <li><Link to="/delete-account">Delete your account</Link></li>
            </ul>
          </div>

          <div>
            <h3>Get help</h3>
            <ul>
              <li><Link to="/support">Support centre</Link></li>
              <li>
                {supportMail ? <a href={supportMail}>{site.supportEmail}</a> : <span>{site.supportEmail}</span>}
              </li>
              <li>
                <a href={whatsappUrl()} target="_blank" rel="noreferrer">
                  WhatsApp {site.whatsapp}
                </a>
              </li>
              <li>{site.supportHours}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>
            © {year} {site.legalOwner}. All rights reserved.
          </span>
          <span>Made for Catholic parishes and the people in them.</span>
        </div>
      </div>
    </footer>
  );
}
