import { Container, Row, Col, Tab } from "react-bootstrap";
// import { Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projnespresso from "../assets/img/project-nespresso.png";
import projlearninglift from "../assets/img/project-learninglift.png";
import projaljt from "../assets/img/project-aljt.png";
import projmanagelandingpage from "../assets/img/project-managelandingpage.png";
import projcapstone from "../assets/img/project-capstone.png";
import projoldflio from "../assets/img/project-oldfolio.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Nespresso PH",
      description: "Work with the team to build ecommerce website using magento 2",
      github: "",
      livelink: "https://www.nespresso.ph/",
      imgUrl: projnespresso,
      bcolor: "rgb(255 228 0)",
    },
    {
      title: "Learning Lift",
      description: "Frontend practice build LMS(learning management system) using react, bootstrap, and third party api",
      github: "https://github.com/jhanril/learning-lift",
      livelink: "https://learninglift.netlify.app/",
      imgUrl: projlearninglift,
      bcolor: "#0abed5",
    },
    {
      title: "Business Startup",
      description: "Build a react app realstate website",
      github: "https://github.com/jhanril/aljtrealty",
      livelink: "https://jhanril.github.io/aljtrealty/",
      imgUrl: projaljt,
      bcolor: "#0abed5",
    },
    {
      title: "Manage Landing Page",
      description: "Frontend practice from frontend mentor challenge",
      github: "https://github.com/jhanril/manage-langding-page",
      livelink: "https://jhanril.github.io/manage-langding-page/",
      imgUrl: projmanagelandingpage,
      bcolor: "#0abed5",
    },
    {
      title: "Happy Island",
      description: "Build a fullstack web app using laravel and react for KodeGo Bootcamp Capstone",
      github: "https://github.com/jhanril/capstone-project",
      livelink: "",
      imgUrl: projcapstone,
      bcolor: "#0abed5",
    },
    {
      title: "My old portfolio",
      description: "My old personal website portfolio",
      github: "https://github.com/jhanril/portfolio-jhanold",
      livelink: "https://jhanril.github.io/portfolio-jhanold/",
      imgUrl: projoldflio,
      bcolor: "#0abed5",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects & Mini Projects</h2>
                  <p>Cards with a <span style={{ color: "rgb(255 228 0)" }}>gold</span> glowing border is a project from my work experience and <span style={{ color: "#0abed5" }}>blue</span> is my mini project. </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav> */}
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2} alt=""></img> */}
    </section>
  )
}
