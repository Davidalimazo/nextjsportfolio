
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'
import {FontAwesomeIcon} from './fontawesome'



function Navbar() {
  
  return (
    <div className='header'>
    <div className="logo"><Link href='/'><a>Alimazoya David</a></Link></div>
<input type="checkbox" name="chk" id="chk" />
<label htmlFor='chk' className="show"> <i className='ico-color'><FontAwesomeIcon icon="bars" /></i></label>
   <div className="menu">
    <Link href="#about"><a className="menu-item na">About</a></Link>
    <Link href="#services" ><a className="menu-item na">Services</a></Link>
    <Link href="#projects" ><a className="menu-item na">Project</a></Link>
    <Link href="#testimonials" ><a className="menu-item na">Testimonials</a></Link>
    <Link href="#contact" ><a className="menu-item na">Contact Me</a></Link>
    <label htmlFor='chk' className="na hide"><i className='ico-color'><FontAwesomeIcon icon="times" /></i> </label>
   </div>
</div>

  );
}

export default Navbar;
