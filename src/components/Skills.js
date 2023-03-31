import react from "../assets/img/react.svg";

// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/img/arrow1.svg";
// import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 5
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 3
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 464 },
  //     items: 2
  //   },
  //   mobile: {
  //     breakpoint: { max: 464, min: 0 },
  //     items: 1
  //   }
  // };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technologies and frameworks</h2>
              <p>Currently these are the technologies and frameworks that I have used so far.<br></br> But I am always willing to learn new tech and framework.</p>
              {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider"> */}

              <div className="row row-cols-xxl-3 row-cols-md-auto justify-content-center">
                <div className="col">
                  <div className="item">
                    <img src={react} alt="" />
                    <h5>Laravel</h5>
                  </div>
                </div>
                <div className="col">
                  <div className="item">
                    <img src={react} alt="" />
                    <h5>Magento</h5>
                  </div>
                </div>
                <div className="col">
                  <div className="item">
                    <img src={react} alt="" />
                    <h5>React</h5>
                  </div>
                </div>
                <div className="col">
                  <div className="item">
                    <img src={react} alt="" />
                    <h5>JQuery</h5>
                  </div>
                </div>
                <div className="col">
                  <div className="item">
                    <img src={react} alt="" />
                    <h5>Tailwind</h5>
                  </div>
                </div>
                <div className="col">
                  <div className="item">
                    <img src={react} alt="" />
                    <h5>Bootstrap</h5>
                  </div>
                </div>
              </div>

              {/* </Carousel> */}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  )
}
