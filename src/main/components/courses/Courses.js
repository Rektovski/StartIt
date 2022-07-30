import {Card, Container} from "react-bootstrap";
import "../../style/coursesCardStyle.css";
import cppImage from "../../image/ISO_C++_Logo.svg.png";

export default function Courses() {
    return (
        <div>
            <Container className={'d-flex justify-content-center'}>
                <Card
                    onClick={() => {
                        setTimeout(() => {
                            window.location.replace('http://localhost:3000/c++')
                        }, 1000)
                    }}
                    className={'text-center border border-info d-grid align-items-center justify-content-center hovering'}
                >
                    <Card.Body>
                        <img
                            src={cppImage}
                            alt={`You cant see c++'s logo`}
                            className={'imageStyle'}
                        />
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}