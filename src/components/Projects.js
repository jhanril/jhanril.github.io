import { Container, Row, Col, Tab } from "react-bootstrap";
// import { Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projnespresso from "../assets/img/project-nespresso.png";
import projlearninglift from "../assets/img/project-learninglift.png";
import projaljt from "../assets/img/project-aljt.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
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
    },
    {
      title: "Learning Lift",
      description: "Build react app using react, bootstrap, and third party api",
      github: "https://github.com/jhanril/learning-lift",
      livelink: "https://learninglift.netlify.app/",
      imgUrl: projlearninglift,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      github: "https://github.com/jhanril/aljtrealty",
      livelink: "https://jhanril.github.io/aljtrealty/",
      imgUrl: projaljt,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      github: "test",
      livelink: "testlink",
      imgUrl: projnespresso,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      github: "test",
      livelink: "testlink",
      imgUrl: projlearninglift,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projaljt,
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
                  <h2>Projects</h2>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
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
