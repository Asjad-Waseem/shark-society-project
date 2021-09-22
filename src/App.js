import './App.css';
import { Col, Container, Row , Image } from 'react-bootstrap';
import  logo from './assets/images/Logo_Shark_Society.png'
import birds from './assets/images/Vector_Smart Object_6.png'
import boat from './assets/images/Layer_4.png'
import waves from './assets/images/Layer_5.png'
import group from './assets/images/Group_1_1.png'
import sharkOne from './assets/images/shark_image_one.png'
import LayerMain from './assets/images/Layer_6.png'
import LayerWhite from './assets/images/Layer_11_copy2.png'
import ImageOne from './assets/images/imageOne.png'
import ImageTwo from './assets/images/ImageTwo.png'
import ImageThree from './assets/images/ImageThree.png'
import ImageFour from './assets/images/ImageFour.png'


function App() {
  return (
    <div className="landing-page">
      <Container>
        <Row>
          <Col className="main-logo">
          <Image src={logo} width="80px"/>
          </Col>
        </Row>
        <Row>
          <Col className="birds">
          <Image src={birds} width="160px"/>
          </Col>
        </Row>
        <Row>
          <Col className="boat">
          <Image src={boat} width="227px"/>
          </Col>
        </Row>
        <Row>
          <Col className="waves">
          <Image src={waves} width="100%"/>
          </Col>
        </Row>
        <Row>
          <Col className="group">
          <Image src={group} width="802px"/>
          </Col>
        </Row>
        <Row>
          <Col className="main-text">
          who we are?
          </Col>
        </Row>
        <Row>
          <Col className="main-text-one">
          ftgvhbjnkml
          </Col>
        </Row>
        <Row>
          <Col className="shark-image">
          <Image src={sharkOne} width="169px"/>
          </Col>
        </Row>
        <Row>
          <Col className="layer-image">
          <Image src={LayerMain} width="100%"/>
          </Col>
        </Row>
        <Row>
          <Col className="layer-white">
          <Image src={LayerWhite} width="100%"/>
          </Col>
        </Row>
        <Row>
          <Col className="image-one">
          <Image src={ImageOne} width="160px"/>
          </Col>
        </Row>
        <Row>
          <Col className="image-two">
          <Image src={ImageTwo} width="160px"/>
          </Col>
        </Row>
        <Row>
          <Col className="image-three">
          <Image src={ImageThree} width="160px"/>
          </Col>
        </Row>
        <Row>
          <Col className="image-four">
          <Image src={ImageFour} width="160px"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
