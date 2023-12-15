import {Container} from "react-bootstrap";
import "../../design/mainStyle.css";
import Header from "./Header";
import Body from "./Body";
import SoundPlayer from "../other/SoundPlayer";
import Footer from "./Footer";

export default function Main() {
    return (
        <div className={'mainSpace'}>
            <Container >
                <SoundPlayer />
                <Header/>
                <Body/>
                <Footer/>
            </Container>
        </div>
    )
}
