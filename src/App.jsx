import linkedinIcon from './Assets/linkedin.svg'
import githubIcon from './Assets/github.svg'
import twitterIcon from './Assets/twitter.svg'
import resumeIcon from './Assets/resume.svg'
import './app.scss'

function App() {
  return <>
    <div id="home-page">
      <h1>
        Usama Iftikhar Butt
      </h1>
      <p
        className="text-xl"
      >
        As a Machine learning professional, I bring expertise
        in <u>Generative modeling</u> and <u>Computer Vision</u>.
        My forte lies in fine-tuning existing machine learning tools such
        as <u>Stable Diffusion, transformers and Yolo</u>.
        I possess a proven track record of delivering innovative and
        efficient solutions.
      </p>
      <nav>
        <Link link="https://www.linkedin.com/in/usama-butt/" icon={linkedinIcon} text="Linkedin" newTab />
        <Link link="https://twitter.com/UsamaIftikharB1" icon={twitterIcon} text="Twitter" newTab />
        <Link link="https://github.com/pseudo-usama" icon={githubIcon} text="Github" newTab />
        <Link link="/usama-cv.pdf" icon={resumeIcon} text="Resume" />
      </nav>
    </div>
    <hr />
  </>
}


function Link({ link, icon, text, newTab }) {
  return (
    <a href={link} target={newTab ? '_blank' : '_self'}>
      <img
        width={30}
        src={icon}
        alt={text}
        title={text}
      />
    </a>
  )
}


export default App
