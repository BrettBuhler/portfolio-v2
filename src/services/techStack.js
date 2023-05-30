import reactIcon from '../images/icons8-react-80.png'
import javaScriptIcon from '../images/icons8-javascript-100.png'
import typeScriptIcon from '../images/icons8-typescript-100.png'
import expressIcon from '../images/icons8-express-js-96.png'
import mongoDBIcon from '../images/icons8-mongodb-96.png'
import nodeIcon from '../images/icons8-node-js-96.png'
import htmlIcon from '../images/icons8-html-128.png'
import cssIcon from '../images/icons8-css-100.png'
import googleCloudPlatformIcon from '../images/icons8-google-cloud-platform-96.png'

class Tech {
    constructor(name, image){
        this.name = name
        this.image = image
    }
}

const react = new Tech ('React.js', reactIcon)
const javaScript = new Tech ('JavaScript', javaScriptIcon)
const typeScript = new Tech ('TypeScript', typeScriptIcon)
const express = new Tech ('Express.js', expressIcon)
const mongoDB = new Tech ('MongoDB', mongoDBIcon)
const node = new Tech ('Node.js', nodeIcon)
const html = new Tech ('HTML', htmlIcon)
const css = new Tech ('CSS', cssIcon)
const gCP = new Tech ('Google Cloud', googleCloudPlatformIcon)
const techArray = [javaScript, typeScript, node, react, express, mongoDB, html, css, gCP]

export default techArray