import homeStyles from '../styles/Home.module.css'
import Image from 'next/image'
import {FontAwesomeIcon} from '../component/fontawesome'
import { FaTwitterSquare, FaLinkedin, FaReact, FaDatabase, FaFacebookSquare } from 'react-icons/fa'; 
import { BsTelephoneInbound } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { MdManageAccounts } from 'react-icons/md';
import { DiGoogleAnalytics } from 'react-icons/di';
import {SiConsul, SiJavascript, SiNodedotjs, SiMongodb, SiSqlite, SiWordpress, SiNextdotjs, SiMicrosoftexcel, SiPhp, SiMicrosoftword} from 'react-icons/si';
import {useState, useEffect, useCallback} from 'react'
import Head from 'next/head';

function HomePage() {

const names =['Developer', 'Economist', 'Data Analyst']
  
  const [portfolio, setPortfolio] = useState('');
  const shuffle = useCallback(()=>{let index = Math.floor(Math.random() * names.length)
  setPortfolio(names[index])
},[])
useEffect(()=>{
  const interval = setInterval(shuffle, 1000);
  return ()=> clearInterval(interval)
}, [shuffle])

  return (
    <>
    <Head>
    <title>Alimazoya David | Portfolio Website</title>
    <meta name="description" content="Alimazoya david Portfolio Website" />
    <meta name="keywords" content="Alimazoya david Portfolio Website webdevelopment React NodeJs NextJS Freelancer" />
    <meta name="author" content="Alimazoya david" />
    </Head>
    <div className={homeStyles.home}>
    <div className={homeStyles.homeText}>
    <div className={homeStyles.textContainer}>
    <h3>Hi! there</h3>
    <h2>I am Alimazoya David</h2>
    <p>A top notch {portfolio}</p>
    <div className={`ico-color ${homeStyles.ico}`}>
    <a href='#'><FaTwitterSquare/></a>
    <a href='#'><FaLinkedin/></a>
    </div>
    </div>
    </div>
    <div className={homeStyles.homeImage}>
    <Image src='/images/ayd_bg.png' alt='' height={500} width={400} />
    </div>
    </div>
    <div className={homeStyles.about} id='about'>
    <h2>About Me</h2>
    <div>I am an expert Full Stack Developer | Data Analyst | Economist | Statistician who loves to Provide IT solutions that drive brand loyalty and promote customer satisfaction
    <p className={`ico-color ${homeStyles.ico}`}>
    <a href='https://twitter.com/AlimazoyaD/status/1306910909496004610'><FaTwitterSquare/></a>
    <a href='https://www.linkedin.com/in/alimazoya-david/'><FaLinkedin/></a>
    </p></div>
    </div>
    <div className={homeStyles.skills}>
    <h2>My Skills</h2>
      <p>Here are a few of my skills</p>
      <div className={homeStyles.skillGrid}>
      <div className={homeStyles.firstGrid}>
        <div className={homeStyles.react}>
        <i><SiJavascript/></i>
        <div className='skill-cont'>
        <label for="file">Javascript</label>
        <progress id="file" value="85" max="100"> 82% </progress> 
        </div>
        </div>
 
      <div className={homeStyles.react}>
      <i><FaReact/></i>
      <div className='skill-cont'>
      <label for="file">React</label>
      <progress id="file" value="89" max="100"> 82% </progress> 
      </div>
      </div>

    <div className={homeStyles.react}>
    <i><SiNodedotjs/></i>
    <div className='skill-cont'>
    <label for="file">NodeJS</label>
    <progress id="file" value="83" max="100"> 82% </progress> 
    </div>
    </div>
    <div className={homeStyles.react}>
    <i><SiNextdotjs/></i>
    <div className='skill-cont'>
    <label for="file">NextJS</label>
    <progress id="file" value="88" max="100"> 82% </progress> 
    </div>
    </div>
   
    <div className={homeStyles.react}>
    <i><SiPhp/></i>
    <div className='skill-cont'>
    <label for="file">PHP</label>
    <progress id="file" value="70" max="100"> 82% </progress> 
    </div>
    </div>
  </div>
      <div className={homeStyles.firstGrid}>
      <div className={homeStyles.react}>
      <i><SiMongodb/></i>
      <div className='skill-cont'>
      <label for="file">MongoDB</label>
      <progress id="file" value="86" max="100"> 82% </progress> 
      </div>
      </div>

    <div className={homeStyles.react}>
    <i><SiSqlite/></i>
    <div className='skill-cont'>
    <label for="file">SQL</label>
    <progress id="file" value="90" max="100"> 82% </progress> 
    </div>
    </div>

  <div className={homeStyles.react}>
  <i><SiWordpress/></i>
  <div className='skill-cont'>
  <label for="file">WordPress</label>
  <progress id="file" value="90" max="100"> 82% </progress> 
  </div>
  </div>
  <div className={homeStyles.react}>
    <i><SiMicrosoftexcel/></i>
    <div className='skill-cont'>
    <label for="file">Microsoft Excel</label>
    <progress id="file" value="90" max="100"> 82% </progress> 
    </div>
    </div>
    <div className={homeStyles.react}>
    <i><SiMicrosoftword/></i>
    <div className='skill-cont'>
    <label for="file">Microsoft Word</label>
    <progress id="file" value="98" max="100"> 82% </progress> 
    </div>
    </div>
      </div>
      </div>
    </div>
    <div className={homeStyles.service} id='services'>
    <h2 className={homeStyles.serviceh2}>Services I Render</h2>
    <p className={homeStyles.servicep}>Below are a list of services that i render, i am costantly learning and researching to deliver the best cutting edge solutions</p>
    <div className={homeStyles.serviceGrid}>
      <div className={homeStyles.serviceBox}>
      <i><HiOutlineDesktopComputer/></i>
      <h2>Responsive Web Development</h2>
      <p>I design responsive websites that renders optimally on all devices </p>
      </div>
      <div className={homeStyles.serviceBox}>
      <i><FaDatabase/></i>
      <h2>Database Management</h2>
      <p>I provide database design and maintenance</p>
      </div>
      <div className={homeStyles.serviceBox}>
      <i><DiGoogleAnalytics/></i>
      <h2>Data Analysis</h2>
      <p>I help you make sense of your business data inorder to gain better insight and hence take better business decisons</p>
      </div>
      <div className={homeStyles.serviceBox}>
      <i><SiConsul/></i>
      <h2>IT Consulting</h2>
      <p>Are you planning on purchasing IT gadgets, onboarding your business technologically, or bringing a technology solution to your business, I can provide you with the right guide for a token fee. </p>
      </div>
      <div className={homeStyles.serviceBox}>
      <i><FontAwesomeIcon icon='pencil-ruler'/></i>
      <h2>Technical Writing</h2>
      <p>Are you looking to put together a tech write-up for presentation, then you are in the write place, as i can write all sorts of technical papers that will earn you your next deal</p>
      </div>
      <div className={homeStyles.serviceBox}>
      <i><MdManageAccounts/></i>
      <h2>Resource Management</h2>
      <p>My team and I can help manage your resource wether tangible or intangible, owing to my degree in economics i am well suited to manage your resources optimally </p>
      </div>
      <div className={homeStyles.serviceBox}>
      <i><FontAwesomeIcon icon='microchip'/></i>
      <h2>Software Testing</h2>
      <p>We provide Software testing services to remove bugs and code breaks from your software </p>
      </div>
      <div className={homeStyles.serviceBox}>
      <i><FontAwesomeIcon icon='diagnoses'/></i>
      <h2>Tech Training</h2>
      <p>My team and i provide traing on variety of programming languages and IT topics, to bring you or your firm upto speed in the tech industry</p>
      </div>
      <div className={homeStyles.serviceBox}>
      <i><FontAwesomeIcon icon='code'/></i>
      <h2>Software Development</h2>
      <p>Do you have an idea of the next revolutionary software, my team and i can bring that software to life.</p>
      </div>
    </div>
    </div>
    <div className={homeStyles.projects} id='projects'>
    <h2>Project Milestones</h2>
    <p>Here are some projects that i have worked on</p>
      <div className={homeStyles.first_part}>
      <div className={homeStyles.fproject1}>
      <img src='/images/ayd.png' alt='' />
      </div>
      <div className={homeStyles.fproject2}>
      <img src='/images/surge.png' alt='' />
      </div>
      <div className={homeStyles.fproject3}>
      <img src='/images/bizjournal.png' alt='' />
      </div>
      
      <div className={homeStyles.fproject4}>
      <img src='/images/etranzact.png' alt='' />
      <img src='/images/davidekeng.png' alt='' />
      </div>
      <div className={homeStyles.fproject6}>
      <img src='/images/custom.png' alt='' />
      </div>
      </div>
    </div>
    <div className={homeStyles.testimonies} id='testimonials'>
    <div className={homeStyles.testimony_title}>
    <div>
    Testimonies &
    <p> Recommendation</p> 
    </div>
    </div>
    <div className={homeStyles.testifiers}>
        <div className={homeStyles.testifier1}>
          <img src="/images/avatar.png" alt="" />
          <p className={homeStyles.testifier_name}>Kunle Akintola</p>
          <p className={homeStyles.message}><q>Alimazoya is so hard working, His tech solutions has being very helpful for my business </q> </p>
        </div>
        <div className={homeStyles.testifier1}>
        <img src="/images/avatar.png" alt="" />
        <p className={homeStyles.testifier_name}>Binta Ojodu</p>
        <p className={homeStyles.message}><q>This guy listens proper, takes the project as if, it is his life work and deliver the best solutions</q> </p>
      </div>
      <div className={homeStyles.testifier1}>
      <img src="/images/avatar.png" alt="" />
      <p className={homeStyles.testifier_name}>Peter wood</p>
      <p className={homeStyles.message}><q>Resource full stack developer, who developed my landing page</q> </p>
    </div>
    <div className={homeStyles.testifier1}>
    <img src="/images/avatar.png" alt="" />
    <p className={homeStyles.testifier_name}>Li Park</p>
    <p className={homeStyles.message}><q>This man is very good at what he does, he fixed all the bug on my website</q> </p>
  </div>
    </div>
    </div>
    <div className={homeStyles.contact} id='contact'>
    <div className={homeStyles.contact_title}>
    <div>
    <h2>Get in touch</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    <p className={homeStyles.contact_icons}><a href='https://web.facebook.com/david.alimazoya/'><FaFacebookSquare/></a><a href='https://www.linkedin.com/in/alimazoya-david/'><FaLinkedin/></a></p>
   <div>
   <p className={homeStyles.contact_icons}><a href='mailto:davidalimazo@gmail.com'><AiOutlineMail /></a> Davidalimazo@gmail.com</p>
   <p className={homeStyles.contact_icons}><a href='tel:09039503369'><BsTelephoneInbound /></a> 090-395-033-69</p>
   </div>
    </div>
    </div>
    <div className={homeStyles.contact_form}>
        <div className={homeStyles.contact_d}>
          <h1>Need A Service?</h1>
          <h2>Send us a message</h2>
          <form action="">
          <div className={homeStyles.name}>
          <input type="text" name='name' placeholder='Enter your full name'/>
          </div>
          <div className={homeStyles.name}>
          <input type="text" name='email' placeholder='Enter your email address'/>
          </div>
          <div className={homeStyles.name}>
         <textarea name="message" id="" cols="30" rows="6" placeholder='Enter your message'></textarea>
          </div>
          <div className={homeStyles.name}>
          <button className={homeStyles.submit}>Send Message</button>
           </div>
          </form>
        </div>
    </div>
    </div>
    </>
  )
}

export default HomePage
