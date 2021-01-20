import { Carousel } from 'react-bootstrap';

export default function Cover(){
  return(
    <Carousel id="home" as={'section'} className={"section-mainpage"}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={require("../../../assets/cover1.jpg").default}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src={require("../../../assets/cover2.jpg").default}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={require("../../../assets/cover3.jpg").default}
          alt="Third slide"
        />
       {/*  <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  ) ; 
}