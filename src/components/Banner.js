import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "is a contrator for buildings, Roads",
    "is a contrator for all civil engineering works.",
    "means lion",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">
                    Welcome to Ecicuncu Co. Limited
                  </span>
                  <h1>
                    {`Hi! Ecicuncu`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate="[ ]"
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Ecicuncu is mainly a civil and construction company that has
                    built a strong reputation for delivering quality services in
                    time and at a fairly competitive price. Our ultimate goal is
                    to be leaders in the coonstruction sector just like the lion
                    with the jungle.
                    <br /> <br />
                    Overtime, we have acquired vast and sufficient experience to
                    successfully undertake most of the works in the civil and
                    construction fields. Our employees are skilled and are
                    always further trained to ensure that we offer the best
                    service to our clients. The company has acquired extensive
                    knowledge of the construction industry and we are
                    established major players in the industry. Our commitment to
                    research, innovation and excellence greatly results into
                    successful completion of our projects for our clientele. We
                    always develop a cordial relationship with our clients to
                    achieve/ implement their vision and dreams while solving any
                    challenges that may accrue during the project.
                    <br />
                    <br />
                    Ecicuncu Co Ltd, we are passionate and goal driven to
                    continue achieving high levels of customer satisfaction.
                    This has been achieved for the last years and is still
                    ongoing.The company undertakes a variety of projects for a
                    wide range of clients from private to government projects.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
