import "../../design/motivationStyle.css";
import {FaBookReader as BookIcon} from 'react-icons/fa';
import {FcStatistics as SkillIcon} from 'react-icons/fc';
import {RiFootprintLine as StepIcon} from 'react-icons/ri';
import {AiOutlineTeam as TeamIcon} from 'react-icons/ai';
import {FaRegSmileWink as SmileIcon} from 'react-icons/fa';

export default function Motivation() {
    return (
        <>
            <div className={'motivation'}>
                <div>
                    <div className={'motivationContainer'}>
                        <BookIcon size={50} color={'red'} className={'me-3'}/>
                        ისწალვე პროგრამირების საფუძვლები!
                    </div>
                    <div className={'motivationContainer'}>
                        <StepIcon size={50} color={'yellow'} className={'me-3'}/>
                        გადადგი პირველი ნაბიჯები ახალ სამყაროში
                    </div>
                    <div className={'motivationContainer'}>
                        <TeamIcon size={50} color={'lightgreen'} className={'me-3'}/>
                        გასწავლი რა გჭირდება უნივერსტიტეტისთვის
                        <SmileIcon className={'mx-2'}/>
                    </div>
                    <div className={'motivationContainer'}>
                        <SkillIcon size={50} color={'yellow'} className={'me-3'}/>
                        აკრიფე ფუნდამენტური უნარები
                    </div>
                </div>
            </div>
        </>
    )
}