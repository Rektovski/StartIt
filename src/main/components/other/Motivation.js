import "../../design/motivationStyle.css";
import {FaBookReader as BookIcon} from 'react-icons/fa';
import {FcStatistics as SkillIcon} from 'react-icons/fc';
import {RiFootprintLine as StepIcon} from 'react-icons/ri';
import {AiOutlineTeam as TeamIcon} from 'react-icons/ai';
import {FaRegSmileWink as SmileIcon} from 'react-icons/fa';
import motImage from "../../assets/giphy.gif";
import ContactModal from "../modal/ContactModal";
import {useState} from "react";

export default function Motivation() {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className={'motivation'}>
                <div className={'motivationImageSpace'}>
                    <img className={'motivationImage'} src={motImage} alt={'motImage'}/>
                </div>
                <div className={'motivationContainerSpace'}>
                    <div className={'motivationContainer'} onClick={() => setShow(!show)}>
                        <BookIcon size={80} color={'red'} className={'me-3'} />
                        ისწალვე პროგრამირების საფუძვლები!
                    </div>
                    <div className={'motivationContainer'} onClick={() => setShow(!show)}>
                        <StepIcon size={80} color={'yellow'} className={'me-3'} />
                        გადადგი პირველი ნაბიჯები ახალ სამყაროში
                    </div>
                    <div className={'motivationContainer'} onClick={() => setShow(!show)}>
                        <TeamIcon size={80} color={'lightgreen'} className={'me-3'} />
                        გასწავლი რა გჭირდება უნივერსტიტეტისთვის
                        <SmileIcon size={80} className={'mx-2'} />
                    </div>
                    <div className={'motivationContainer'} onClick={() => setShow(!show)}>
                        <SkillIcon size={80} color={'yellow'} className={'me-3'} />
                        აკრიფე ფუნდამენტური უნარები
                    </div>
                </div>

                <ContactModal
                    show={show}
                    onHide={() => {
                        setShow(false)
                    }}
                />
            </div>
        </>
    )
}