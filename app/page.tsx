import './page.css';
import { SiJavascript, SiHtml5, SiCss3, SiNextdotjs, SiBootstrap, SiReact, SiGithub, SiFacebook, SiX, SiLinkedin, SiVite } from 'react-icons/si';
import { FaFolder } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

interface WrapperProps {
  num: number;
  text: string;
}

interface ProjectProps {  
  title: string;
  smallText: string;
  mainText: string;
  githubLink: string;
  siteLink: string;
}

export function Wrapper ({num, text} :WrapperProps) {
  return (
    <div className="about-line-wrapper">
    <div className='about'>
      <span className='number'>0{num}.</span>
      {text}
    </div>
    <div className='line'></div>
  </div>
  )
}

export function Project ({title, mainText, smallText, githubLink, siteLink} :ProjectProps) {
  return (
    <div className="project-box">
      <div className='row text-end m-3 p-2'>
        <div className='col-2'><FaFolder className='icon'/></div>
        <div className='col-8'><a className='icon-box' href={githubLink}><SiGithub className='icon'/></a></div>
        <div className='col-2'><a className='icon-box' href={siteLink}><FiSend className='icon'/></a></div>
      </div>
      <h3 className='ms-3 ps-2'>{title}</h3>
      <p className='ms-3 ps-2'>{mainText}</p>
      <p className='ms-3 ps-2'>
        <small>{smallText}</small>
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <>
    <section id='home' className='pt-5'>
      <div className="home container pb-5 px-lg-5" data-aos='zoom-in'>
        <h6 className='intro pt-5'>Hi, my name is</h6>
        <h1 className="">George Oluwatobiloba</h1>
        <h1 className="sub-text">I Construct things for the web.</h1>
        <h6 className='col-lg-6 pt-2 pt-lg-3'>I am a <span className='intro'>frontend developer</span> that specializes in building awesome and wonderful interfaces and i also create interactive experiences for people using <span className='intro'>modern web technology.</span></h6>
      </div>
    </section>
    
    <section id='About' className='pt-5'>
      <div className='container my-5' data-aos="fade-up">
        <div className="row mx-lg-5 pt-5 px-lg-5">
          <div className="col-12 mb-4">
            <Wrapper 
            num={2}
            text={`About Me`}
            />
          </div>
          <div className="col-12">
            <div className="about-img-wrapper row gx-5">
              <div className='col-lg-8'>
                <p className='text'>
                  I am a self motivated individual who is able to work in a busy environment and produce high standards of work. I am an excellent team worker and build up good working relationships with my colleagues. I am flexible, reliable and adaptive to all challenging situations. I am able to work well both in a team environment as well as using own initiative. I love challenges. I like to tackle problems on my own first before seeking help.
                </p>
              </div>
              <div className='col-lg-4 mt-2'>
                <img className='profile img-fluid rounded' src="profile.jpg" alt="Profile" />
              </div>
            </div>        
          </div>
        </div>
      </div>
    </section>

    <section id='Skills' className='pt-5'>
      <div className='container mt-5'data-aos="fade-up" >
      <div className="row mb-4 pt-5 px-lg-5">
        <div className="col-12">
          <Wrapper 
          num={3}
          text={`Core Techs`}
          />
        </div>
      </div>
      <div className="row g-4 p-2 px-lg-5">
        <div className="col-md-6">
          <h5>JavaScript <SiJavascript className='icon'/></h5>
          <div className='box-item'>
            <p>A programming language that is one of the core technologies of the World Wide Web.</p>
          </div>
        </div>
        <div className="col-md-6">
          <h5> HTML 5 <SiHtml5 className='icon' /></h5>
          <div className='box-item'>
            <p>
              A standardized system for tagging text files to achieve font, colour, graphic, and hyperlink effects on World Wide Web.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <h5> CSS <SiCss3 className='icon'/></h5>
          <div className="box-item">
            <p>
              Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <h5>React <SiReact className='icon'/></h5>
          <div className='box-item'>
            <p>
              A free and open-source front-end JavaScript library for building user interfaces based on UI components.
            </p>
          </div>
        </div>
        <input type="checkbox" id='show-more' className='show-more-checkbox' />
        
        <div className="col-md-6 extra">
          <h5>NEXTJs <SiNextdotjs className='icon'/></h5>
          <div className='box-item'>
            <p>
              Next.js is a React framework for building server-rendered and statically generated web applications with features like routing, API routes, and optimized performance.
            </p>
          </div>
        </div>

        <div className="col-md-6 extra">
          <h5>Vite <SiVite className='icon'/></h5>
          <div className='box-item'>
            <p>
              Vite is a modern frontend build tool that provides fast development and optimized production builds using native ES modules.
            </p>
          </div>
        </div>

        <div className="col-12 extra">
          <h5>Bootstrap <SiBootstrap className='icon'/></h5>
          <div className='box-item'>
            <p>
              Bootstrap is an open-source front-end framework for building responsive, mobile-first websites with pre-designed CSS classes, a grid system, and ready-to-use UI components.
            </p>
          </div>
        </div>

        <label htmlFor="show-more" className='show-more-label rounded mt-md-3'></label>
        
      </div>

      </div>
    </section>

    <section id='project' className='pt-5'>
      <div  className="container mt-5" data-aos="fade-up">
        <div className="row">
          <div className="col-12 mb-4">
            <Wrapper 
            num={4}
            text={`Projects`}
            />
          </div>
        </div>
        <div className="row g-3 row-cols-1 row-cols-md-3 my-5">
          <div className="col">
            <Project
            title='SOL Nonprofit website'
            mainText='A nonprofit website that helps people learn about the organization and get involved.'
            smallText='React + Vite'
            githubLink='https://github.com/Xlr8th/react_app'
            siteLink='https://xlr8th.github.io/react_app/' 
            />
          </div>

          <div className="col">
            <Project
            title='Hazel&Chestnut Blog'
            mainText='A blog site that offers information in various categories.'
            smallText='Nextjs + Bootstrap'
            githubLink='https://github.com/Xlr8th/Hazel-Chestnut'
            siteLink='https://hazel-chestnut.vercel.app/'
            />
          </div>

          <div className="col">
            <Project
            title='Springs of Life'
            mainText='A Nonprofite website that educates visitors about the organization and encourages meaningful support.'
            smallText='Html + Css + Javascript'
            githubLink='https://github.com/Xlr8th/SpringsOfLifeWebsite'
            siteLink='https://solmissions.org/'
            />
          </div>

          <input type="checkbox" id='show-more-project' className='show-more-checkbox-project' />

          <div className="col extra-project">
            <Project
            title='Project Portfolio'
            mainText='My portfolio website which contains my projects and other information about me'
            smallText='Nextjs + Bootstrap'
            githubLink='https://github.com/Xlr8th/NextJs-Project'
            siteLink='https://next-js-project-er5c.vercel.app/'
            />
          </div>

          <div className="col extra-project">
            <Project
            title='St.George'
            mainText='A Real Estate website'
            smallText='Html + Bootstrap + Javascript'
            githubLink='https://github.com/Xlr8th/real-estate'
            siteLink='https://xlr8th.github.io/real-estate/'
            />
          </div> 
          <div className="col extra-project">
            <Project
            title='Portfolio'
            mainText='My portfolio website which contains my projects and other information about me'
            smallText='Html + css + javascript'
            githubLink='https://github.com/Xlr8th/portfolio-website'
            siteLink='https://xlr8th.github.io/portfolio-website/'
            />
          </div> 

          <label htmlFor="show-more-project" className='show-more-label-project rounded'></label>         
          
        </div>
      </div>
    </section>

    <section id='contact' className='pt-5'>
      <div  className="container my-5 pb-5" data-aos="fade-up">
        <div className="row mb-5">
          <div className="col-12 mb-4">
            <Wrapper 
            num={5}
            text={`Satisfied?`}
            />
          </div>
          <div className="text-center ">
            <h1 className='fw-bold'>
              Get in Touch
            </h1>
            <p className=' w-75 auto-margin '>
              I am currently looking for job opportunities. Very much available if you want to hire me or ask me any questions concerning any of my projects or collaborations.
            </p>
          </div>
          <div className='text-center position-relative'>
            
            <a className='resume text-decoration-none rounded me-3' href="https://drive.google.com/uc?export=download&id=1vp5FQQcP0ZFreCtgtbXKqzH8IGNpR_Ze" download>
            Resume
            </a>
            
            <label htmlFor="hire-me" className='hire-label rounded'> Hire me</label>
            <input type="checkbox" id='hire-me' className='checkbox-hire' />
            <div className='hire-extra'>
              <a className='resume-hire text-decoration-none rounded' href="mailto:saintgeorge.001@gmail.com">saintgeorge.001@gmail.com</a>
              <div>
                <a className='text-decoration-none hire-number' href="tel:+2348060669825">
                  +234 806 066 9825
                </a>
              </div>
            </div>
                     

          </div>

        </div>
      </div>
    </section>
    
    

    <footer className='text-center mt-2 pt-5 mb-3'>
      <small> © Copyright Georige 2025 </small>
      <div>
        <SiGithub className='icon-footer'/>
        <SiFacebook className='icon-footer'/>
        <SiX className='icon-footer'/>
        <SiLinkedin className='icon-footer'/>
      </div>
      
    </footer>
    </>
  );
}
