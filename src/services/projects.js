import jobHuntMain from '../images/jobHuntMain.PNG'
import OpeningMaster from '../images/OpeningMaster.PNG'
import dash from '../images/dash.PNG'
import wordle from '../images/wordle.PNG'
import codeWarsBackground from '../images/codeWars.PNG'
import portfolioBackground from '../images/portfolioHome.PNG'
import flashStudyBackground from '../images/fs6.PNG'
import myGptBackground from '../images/myGpt.PNG'

class Project  {
    static colorIndex = 0
    static pastel = [  
    "#373A52", // Dark blue
    "#A663FF", // Neon purple
    "#4D4F7E", // Dark lavender
    "#6755E3", // Royal purple
    "#3E3F5F", // Midnight blue
    "#8E7AFF", // Electric purple
    ]
    constructor (name, description, tech, liveLink, gitHubLink, demoLink, background){
        this.name = name
        this.description = description
        this.tech = tech
        this.liveLink = liveLink
        this.gitHubLink = gitHubLink
        this.demoLink = demoLink
        this.background = background
        this.color = Project.pastel[Project.colorIndex]
        if (Project.colorIndex < Project.pastel.length - 1){
            Project.colorIndex++
        } else {
            Project.colorIndex = 0
        }
    }
}

const jobHunt = new Project ('Job Hunt', 'Introducing Job Hunt: a cutting-edge, full-stack MERN application revolutionizing cover letter creation for job seekers. Powered by AI technology, it generates personalized cover letters in seconds. Our project seamlessly integrates TypeScript into React, while pushing the boundaries of AI integration in web applications.', 'Technology: TypeScript, JavaScript, Node.js, Express, React, MongoDB, OAuth, JWT tokens, GAE, GCP, static file server, OpenAI, RESTful API, Axios, CI/CD pipeline', 'https://job-hunt-385520.uc.r.appspot.com/', 'https://github.com/BrettBuhler/job-hunt', 'https://www.youtube.com/watch?v=5n1gPCFy8J8', jobHuntMain)
const openingMaster = new Project ('Opening Master', 'Opening Master is a full-stack MERN application that empowers chess enthusiasts to enhance their opening strategies. With a user-friendly chess board component, users can practice, receive feedback, and save their progress. Accessible from any device with internet connectivity, Opening Master offers a valuable resource for improving chess skills.', 'Techology: JavaScript, MongoDB, Express, React, Node.js, React-Router, MUI, OAuth, Google App Engine', 'https://brettbuhler.github.io/opening/', 'https://github.com/BrettBuhler/opening', 'https://www.youtube.com/watch?v=k055ql_oXhA', OpeningMaster)
const reactDash = new Project ('React Dash', 'React-Dash is a sleek and efficient Front-End React application that demonstrates my expertise in development, React, UI design, and data visualization. Leveraging components from Material-UI, FullCalendar, and Nivo, it showcases my proficiency in creating modern user experiences.', 'Technology: JavaScript, React, React-Router, MUI, Formik, FullCalendar, Nivo HTML, CSS', 'https://brettbuhler.github.io/react-dash/', 'https://github.com/BrettBuhler/react-dash', 'https://www.youtube.com/watch?v=kUrFPNtgRUw', dash)
const wordlePlus = new Project ('Wordle Plus', 'Wordle Plus is a captivating game where players guess mystery words using custom-built components. Developed with React and jQuery, it showcases my software development skills. Enjoy an upgraded version with sleek graphics, intuitive controls, and unlimited daily gameplay.', 'Technology: JavaScript, React, JQuery, HTML, CSS', 'https://brettbuhler.github.io/wordle-plus/', 'https://github.com/BrettBuhler/wordle-plus', 'https://www.youtube.com/watch?v=qyYR3vZWq8I', wordle)
const codeWars = new Project ('Code Wars', 'I enhance my programming skills through Code Wars challenges, mastering data structures and algorithms. Using GitHub for version control, I track progress and rank in the top 1% on the leaderboards, validating my commitment to improvement.', 'Technology: JavaScript, TypeScript, Python, Git', 'https://www.codewars.com/users/BrettBuhler', 'https://github.com/BrettBuhler/Code-Wars', 'https://www.youtube.com/watch?v=ZJcchjapw4g', codeWarsBackground)
const portfolio = new Project('Portfolio', 'Thank you for visiting my portfolio! I appreciate your interest. Please feel free to reach out to me by clicking the contact button in the top bar. I look forward to connecting with you!', 'Technology: React.js JavaScript, Email.js, Node.js, Google Cloud Platform, CI/CD pipeline', 'https://www.brettbuhler.com','https://github.com/BrettBuhler/portfolio-v2', 'https://www.youtube.com/watch?v=QoQFUFq5vn0', portfolioBackground)
const flashStudy = new Project('Flash Study', "Harness OpenAI's cutting-edge technology to generate personalized flashcards on any topic, at any skill level. From exams to language learning and complex subjects, our platform has you covered. Experience the convenience of Flash Study's tailored flashcards. Input articles, textbooks, or your own notes, and watch as our AI extracts key information, creating targeted flashcards in no time.", 'Technology: TypeScript, JavaScript, Node.js, Express, React, MongoDB, Stripe, Passport, GCP, CI/CD pipeline', 'https://flash-study.uc.r.appspot.com/', 'https://github.com/BrettBuhler/flash-study', 'https://www.youtube.com/watch?v=Z50n7F_hAdc', flashStudyBackground)
const myGpt = new Project('My GPT', 'My GPT is the ultimate virtual sandbox for Web Developers. It is a full-stack React Application built with TypeScript that combines the user-friendly interface of Chat GPT with Open AI\'s virtual sandbox. It streamlines the development process by offering a no-code solution for testing and finetuning model parameters.', 'Technology: React.js, Tailwind CSS, JavaScript, TypeScript, Node.js, Express.js, Google Cloud Platform, CI/CD Pipeline', 'https://my-gpt-393516.uc.r.appspot.com/', 'https://github.com/BrettBuhler/my-gpt', 'https://www.youtube.com/watch?v=YXONKSt7b8g', myGptBackground)
const projectArray = [flashStudy, myGpt, jobHunt, openingMaster, reactDash, portfolio]

export default projectArray