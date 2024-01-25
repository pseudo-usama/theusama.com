import linkedinIcon from '../Assets/linkedin.svg'
import githubIcon from '../Assets/github.svg'
import twitterIcon from '../Assets/twitter.svg'
import resumeIcon from '../Assets/resume.svg'
import './home.scss'

export default function Home() {
    return <>
        <div id="home-page">
            <h1>Usama Iftikhar Butt</h1>

            {/* <p className="text-xl">
                    As a Machine learning professional, I bring expertise
                    in <u>Generative modeling</u> and <u>Computer Vision</u>.
                    My forte lies in fine-tuning existing machine learning tools such
                    as <u>Stable Diffusion, transformers and Yolo</u>.
                    I possess a proven track record of delivering innovative and
                    efficient solutions.
            </p> */}

            <p className="text-xl">
                I am a Machine Learning professional with expertise
                in <u>Generative Modeling</u>, specializing
                in <u>Natural Language</u> and <u>Computer Vision</u>.
                I specialize in fine-tuning existing machine learning tools,
                including <u>GPT-3</u>, <u>BERT</u>, <u>Stable Diffusion</u>, <u>transformers</u> and <u>YOLO</u>.
                I have a proven track record of delivering innovative and efficient solutions,
                such as improving sentiment analysis using GPT-3,
                optimizing image recognition with YOLO and
                enhancing text classification with BERT.
            </p>

            <nav>
                <CustomLink link="https://www.linkedin.com/in/usama-butt/" icon={linkedinIcon} text="Linkedin" newTab />
                <CustomLink link="https://twitter.com/UsamaIftikharB1" icon={twitterIcon} text="Twitter" newTab />
                <CustomLink link="https://github.com/pseudo-usama" icon={githubIcon} text="Github" newTab />
                <CustomLink link="/usama-cv.pdf" icon={resumeIcon} text="Resume" />
            </nav>
        </div>
    </>
}


function CustomLink({ link, icon, text, newTab }) {
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
