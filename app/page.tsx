import './page.css';
import { SiJavascript, SiHtml5, SiCss3, SiNextdotjs, SiBootstrap, SiReact } from 'react-icons/si';

interface WrapperProps {
  num: number;
  text: string;
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

export default function Home() {
  return (
    <>
    <div className="home container p-2 px-lg-5">
      <h6 className='intro pt-3'>Hi, my name is</h6>
      <h1 className="">George Oluwatobiloba</h1>
      <h1 className="sub-text">I Construct things for the web.</h1>
      <h6 className='col-lg-6 pt-2 pt-lg-3'>I am a <span className='intro'>frontend developer</span> that specializes in building awesome and wonderful interfaces and i also create interactive experiences for people using <span className='intro'>modern web technology.</span></h6>
    </div>
    <div id='About' className='container m-5 pt-5'>
      <div className="row mx-2 mx-lg-5 pt-5 px-lg-5">
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
    <div id='Skills' className='container mt-5 pt-5'>
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
          <h5>Bootstrap <SiBootstrap className='icon'/></h5>
          <div className='box-item'>
            <p>
              Bootstrap is an open-source front-end framework for building responsive, mobile-first websites with pre-designed CSS classes, a grid system, and ready-to-use UI components.
            </p>
          </div>
        </div>

        <label htmlFor="show-more" className='show-more-label rounded'></label>
        
      </div>

    </div>
    </>
  );
}
