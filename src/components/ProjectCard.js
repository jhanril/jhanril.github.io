import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, github, livelink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" style={{height: "217px", objectFit: "cover"}} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          {github ? (
            <>
            <span><a href={github} className="text-dark" target="_blank">Source code</a></span> <br />
            </>
          ) : null}
          {livelink ? (
            <span><a href={livelink} className="text-warning" target="_blank">Live link</a></span> 
          ) : null}

        </div>
      </div>
    </Col>
  )
}
