import telegramIcon from '../../../assets/telegramIcon.svg'
import footerIcon2 from '../../../assets/footer-icon-2.svg'
import footerIcon3 from '../../../assets/footer-icon-3.svg'
import footerIcon4 from '../../../assets/footer-icon-4.svg'
import iconX from '../../../assets/iconX.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='mt-20'>
      <footer className="footer grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 p-10 text-base-content">
        {/* Company */}
        <nav className='z-10'>
          <h6 className="footer-title text-white">Company</h6>
          <a className="link link-hover text-[#797E86]">About</a>
          <a className="link link-hover text-[#797E86]">Pricing</a>
          <a className="link link-hover text-[#797E86]">Pivien Status</a>
          <a className="link link-hover text-[#797E86]">Support</a>
          <a className="link link-hover text-[#797E86]">Careers</a>
          <a className="link link-hover text-[#797E86]">Open Source</a>
          <a className="link link-hover text-[#797E86]">Press/Media Kit</a>
        </nav>
        
        {/* Products */}
        <nav className='z-10'>
          <h6 className="footer-title text-white">Products</h6>
          <a className="link link-hover text-[#797E86]">VPN for Windows</a>
          <a className="link link-hover text-[#797E86]">VPN for Mac</a>
          <a className="link link-hover text-[#797E86]">VPN for Android</a>
          <a className="link link-hover text-[#797E86]">VPN for iPhone</a>
          <a className="link link-hover text-[#797E86]">VPN for Chrome</a>
          <a className="link link-hover text-[#797E86]">VPN for Firefox</a>
          <a className="link link-hover text-[#797E86]">VPN for Edge</a>
          <a className="link link-hover text-[#797E86]">VPN for Linux</a>
        </nav>
        
        {/* Other Resources */}
        <nav className='z-10'>
          <h6 className="footer-title text-white">Other Resources</h6>
          <a className="link link-hover text-[#797E86]">What is My IP</a>
          <a className="link link-hover text-[#797E86]">How IP Works</a>
          <a className="link link-hover text-[#797E86]">How Hackers Use IP</a>
          <a className="link link-hover text-[#797E86]">Change My IP</a>
          <a className="link link-hover text-[#797E86]">Hide My IP</a>
          <a className="link link-hover text-[#797E86]">Glossary</a>
          <a className="link link-hover text-[#797E86]">Free Proxy</a>
        </nav>
        
        {/* Legal */}
        <nav className='z-10'>
          <h6 className="footer-title text-white">Legal</h6>
          <a className="link link-hover text-[#797E86]">Imprint</a>
          <a className="link link-hover text-[#797E86]">Privacy Policy</a>
          <a className="link link-hover text-[#797E86]">Terms & Condition</a>
          <a className="link link-hover text-[#797E86]">Transparency Report</a>
          <a className="link link-hover text-[#797E86]">Threat Model</a>
          <a className="link link-hover text-[#797E86]">Report Abuse</a>
        </nav>
        
        {/* Social */}
        <nav className='z-10'>
          <h6 className="footer-title text-white">Social</h6>
          <a className="link link-hover text-[#797E86]">Twitter</a>
          <a className="link link-hover text-[#797E86]">LinkedIn</a>
          <a className="link link-hover text-[#797E86]">Instagram</a>
          <a className="link link-hover text-[#797E86]">Facebook</a>
          <a className="link link-hover text-[#797E86]">Youtube</a>
        </nav>
      </footer>

      {/* Bottom Footer */}
      <footer className="footer px-10 py-4 z-10  text-base-content pb-5">
        <aside className="items-center grid-flow-col">
          
          <p className="text-[#797E86]">
          © 2023 D-VPN. All rights reserved.
          </p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="flex items-center gap-6 ">
            <Link><img src={telegramIcon} alt="telegram"/></Link>
            <Link><img src={footerIcon2} alt="footerIcon2"/></Link>
            <Link><img src={footerIcon3} alt="footerIcon3"/></Link>
            <Link><img src={footerIcon4} alt="footerIcon4"/></Link>
            <Link><img src={iconX} alt="footerIcon5"/></Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
