import jobHuntMain from '../images/jobHuntMain.PNG'
import OpeningMaster from '../images/OpeningMaster.PNG'
import dash from '../images/dash.PNG'

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

const jobHunt = new Project ('Job Hunt', 'Job Hunt is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application created to simplify the process of creating professional cover letters for job seekers. The application leverages AI technology to generate customized cover letters within seconds. The project aimed to achieve two primary objectives: integrating TypeScript into a React application and exploring the integration of AI into web applications.', 'https://job-hunt-385520.uc.r.appspot.com/', 'https://github.com/BrettBuhler/job-hunt', jobHuntMain)
const openingMaster = new Project ('Opening Master', 'Opening Master is a full-stack MERN application designed to assist chess enthusiasts in improving their opening strategies. The app features a chess board component that allows users to practice their openings, receive feedback on their moves, and save their progress. Users can save their openings to a database, enabling them to access their practice sessions from any device with internet access. By providing a user-friendly and engaging platform, Opening Master offers a valuable resource for chess enthusiasts seeking to enhance their skills and knowledge.', 'https://brettbuhler.github.io/opening/', 'https://github.com/BrettBuhler/opening', OpeningMaster)
const reactDash = new Project ('React Dash', 'React-Dash is a Front-End React application that I built to develop my skills in Front-End development, React knowledge, UI design, Component Libraries knowledge, and Data visualization abilities. To achieve this, I utilized production-ready components from Material-UI, FullCalendar, and Nivo.\n\nReact-Dash is a modern, well-designed, and efficient React application that demonstrates my proficiency in Front-End development.', 'https://brettbuhler.github.io/react-dash/', 'https://github.com/BrettBuhler/react-dash', dash)
const projectArray = [jobHunt, openingMaster, reactDash]

export default projectArray