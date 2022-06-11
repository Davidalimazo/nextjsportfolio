import FooterStyles from '../styles/Footer.module.css'
import { FaTwitterSquare, FaLinkedin, FaReact, FaDatabase, FaFacebookSquare } from 'react-icons/fa'; 
const Footer = () => {
    return (
    <div className={FooterStyles.footer}>
    <h2>Alimazoya David</h2>
    <div className={FooterStyles.socials}>
    <a href='https://twitter.com/AlimazoyaD/status/1306910909496004610'><FaTwitterSquare /></a> <a href='https://www.linkedin.com/in/alimazoya-david/'><FaLinkedin /></a> <a href='https://web.facebook.com/david.alimazoya/'><FaFacebookSquare /></a> 
    </div>
    <div className={FooterStyles.copyright}>
    Copyright &copy;2022 | All rights reserved</div>
    </div>
     );
}
 
export default Footer;