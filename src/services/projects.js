import jobHuntMain from '../images/jobHuntMain.PNG'
import OpeningMaster from '../images/OpeningMaster.PNG'
import dash from '../images/dash.PNG'
import wordle from '../images/wordle.PNG'
import codeWarsBackground from '../images/codeWars.PNG'
import portfolioBackground from '../images/portfolioHome.PNG'

class Project  {
    static colorIndex = 0
    static pastel = ['#6DBFD1','#5C7EAB','#FF7D63','#FFAC63']
    constructor (name, description, liveLink, gitHubLink, background){
        this.name = name
        this.description = description
        this.liveLink = liveLink
        this.gitHubLink = gitHubLink
        this.background = background
        this.color = Project.pastel[Project.colorIndex]
        if (Project.colorIndex < Project.pastel.length - 1){
            Project.colorIndex++
        } else {
            Project.colorIndex = 0
        }
    }
}

const jobHunt = new Project ('Job Hunt', 'Introducing Job Hunt: a cutting-edge, full-stack MERN application revolutionizing cover letter creation for job seekers. Powered by AI technology, it generates personalized cover letters in seconds. Our project seamlessly integrates TypeScript into React, while pushing the boundaries of AI integration in web applications.', 'https://job-hunt-385520.uc.r.appspot.com/', 'https://github.com/BrettBuhler/job-hunt', jobHuntMain)
const openingMaster = new Project ('Opening Master', 'Opening Master is a full-stack MERN application that empowers chess enthusiasts to enhance their opening strategies. With a user-friendly chess board component, users can practice, receive feedback, and save their progress. Accessible from any device with internet connectivity, Opening Master offers a valuable resource for improving chess skills.', 'https://brettbuhler.github.io/opening/', 'https://github.com/BrettBuhler/opening', OpeningMaster)
const reactDash = new Project ('React Dash', 'React-Dash is a sleek and efficient Front-End React application that demonstrates my expertise in development, React, UI design, and data visualization. Leveraging components from Material-UI, FullCalendar, and Nivo, it showcases my proficiency in creating modern user experiences.', 'https://brettbuhler.github.io/react-dash/', 'https://github.com/BrettBuhler/react-dash', dash)
const wordlePlus = new Project ('Wordle Plus', 'Wordle Plus is a captivating game where players guess mystery words using custom-built components. Developed with React and jQuery, it showcases my software development skills. Enjoy an upgraded version with sleek graphics, intuitive controls, and unlimited daily gameplay.', 'https://brettbuhler.github.io/wordle-plus/', 'https://github.com/BrettBuhler/wordle-plus', wordle)
const codeWars = new Project ('Code Wars', 'I enhance my programming skills through Code Wars challenges, mastering data structures and algorithms. Using GitHub for version control, I track progress and rank in the top 1% on the leaderboards, validating my commitment to improvement.', 'https://www.codewars.com/users/BrettBuhler', 'https://github.com/BrettBuhler/Code-Wars', codeWarsBackground)
const portfolio = new Project('Portfolio', 'Thank you for visiting my portfolio! I appreciate your interest. Please feel free to reach out to me by clicking the contact button in the top bar. I look forward to connecting with you!','www.google.com','www.google.com', portfolioBackground)
const projectArray = [jobHunt, openingMaster, reactDash, wordlePlus, codeWars, portfolio]

export default projectArray