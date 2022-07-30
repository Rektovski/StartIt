import "../../style/mainPageStyle.css";
import {FaBookReader as BookIcon} from 'react-icons/fa';
import {FcStatistics as SkillIcon} from 'react-icons/fc';
import {RiFootprintLine as StepIcon} from 'react-icons/ri';
import {AiOutlineTeam as TeamIcon} from 'react-icons/ai';
import {FaRegSmileWink as SmileIcon} from 'react-icons/fa';
import {Container} from "react-bootstrap";

export default function Main() {
    return (
        <Container className={'my-5'}>
            <div>
                <span className={'d-flex align-items-center span'}>
                    <BookIcon size={50} className={'me-3'}/>
                    Learn Basics of programming!
                </span>
            </div>
            <div>
                <span className={'d-flex align-items-center span'}>
                    <SkillIcon size={50} className={'me-3'}/>
                    Gain fundamental skills!
                </span>
            </div>
            <div>
                <span className={'d-flex align-items-center span'}>
                    <StepIcon size={50} className={'me-3'}/>
                    Make first steps to the new world!
                </span>
            </div>
            <div>
                <span className={'d-flex align-items-center span'}>
                    <TeamIcon size={50} className={'me-3'}/>
                    Our team is your way to juniority!
                <SmileIcon className={'mx-2'}/>
            </span>
            </div>
        </Container>
    )
}