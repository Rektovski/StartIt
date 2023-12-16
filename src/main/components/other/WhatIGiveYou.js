import cppProfileImage from "../../assets/profPic.jpg";
import ModalForCppSylabus from "../modal/ModalForCppSylabus";
import {Accordion, Button} from "react-bootstrap";
import {useState} from "react";
import "../../design/whatIGiveYourStyle.css";
import {AiFillSafetyCertificate as VerifyIcon} from "react-icons/ai";
import {GrCertificate as DiplomaIcon, GrArticle as ArticleIcon} from "react-icons/gr";
import {TbBooks as TeacherIcon} from "react-icons/tb";
import { GiChampions as RankingIcon} from "react-icons/gi";
import { MdPictureAsPdf as PdfIcon} from "react-icons/md";

export default function WhatIGiveYou() {
    const [show, setShow] = useState(false);

    return (
        <>
            <div className={'cppPageCardBody'}>

                <Accordion className={'accordionSpace'} defaultActiveKey={'0'}>
                    <Accordion.Item eventKey={'0'} className={'accordionStyle'}>
                        <Accordion.Header>მენტორის შესახებ</Accordion.Header>
                        <Accordion.Body className={'accordionPart1'}>
                            <ol className={'accordionPart1Text'}>
                                <li>
                                    GITA C++ - სერტიფიცირებული - <a
                                    href={'https://drive.google.com/drive/u/0/folders/15eWQlv1gBHVjYpqhNkZKtQAi_LB8tpiY'}>Certificate
                                </a> :
                                    C++ Certified Associate Programmer: <a
                                    href={'https://www.ict.gov.ge/trainings/c-plus-plus-certified-associate-programmer/'}>კურსი</a> -
                                    2022 <VerifyIcon size={30}/>
                                </li>
                                <li>
                                    საინჟინრო ფიზიკის მაგისტრი - 2017/2023 <DiplomaIcon size={30}/>
                                </li>
                                <li>
                                    კერძო C++ მენტორი - 2022 წლიდან <TeacherIcon size={30}/> {/*: მომზადებულ სტუდენტებთა რაოდენობა -<span
                                    style={{fontWeight: "bold", fontStyle: "italic"}}>4</span>*/}
                                </li>
                                <li>
                                    მრავალი მიმართულების მრავალი საერთაშორისო სერტიფიკატების მფლობელი - <a
                                    href={'https://www.facebook.com/gtu.ge/posts/3540623606015672'}
                                    target={'_blank'} rel={'noreferrer'}>
                                    სტატია
                                </a> <ArticleIcon size={30}/>
                                </li>
                                <li>
                                    პროგრამირების საერთაშორისო ანგარიში Top ~200 - <a
                                    href={"https://www.eolymp.com/en/users/OtarMurmanishvili"} target={'_blank'}
                                    rel={'noreferrer'}>
                                    User
                                </a> <RankingIcon size={30}/></li>
                                <li>
                                    პერსონალურ მონაცემთა დაცვის კონკურსის გამარჯვებული და წიგნის თანაავტორი - <a
                                    href={"https://www.seu.edu.ge/uploads/files/News/kompiuteruli%20teqnologiebi%20(1).pdf"}
                                    target={'_blank'} rel={"noreferrer"}>
                                    ელექტრონული ვერსია
                                </a> <PdfIcon size={30}/>
                                </li>
                            </ol>
                            <div className={'profileImageSpace'}>
                                <img className={'profileImage'}
                                     src={cppProfileImage}
                                     alt={`If you see this it means you can't see mentor's face`}
                                />
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey={'1'} className={'accordionStyle'}>
                        <Accordion.Header>ზედაპირული დეტალები</Accordion.Header>
                        <Accordion.Body>
                            <ul>
                                აუცილებელი მოთხოვნები
                                <li>
                                    ინგლისური B1 და მეტი
                                </li>
                                <li>
                                    კომპიუტერი და უწყვეტი ინტერნეტი
                                </li>
                            </ul>
                            <ul>
                                სწავლის პერიოდში:
                                <li>ჩართვები დისტანციურად Google Meet-ის პლატფორმაზე</li>
                                <li>საწყისი და საჭირო თეორიების გავლა</li>
                                <li>საოლიმპიადო ამოცანებზე დაყრდნობით თეორიების პრაქტიკული დამუშავება</li>
                                <li>ამოცანებზე წვდომა გვექნება უკრაინულ საიტ <a href={'https://eolymp.com'}
                                                                                target={'_blank'}
                                                                                rel={"noreferrer"}>eolymp.com</a>-ზე
                                </li>
                                <li>
                                    1 საათი - 40 ლარი : 8 საათი 400 ლარი
                                </li>
                                <li>
                                    საათის მიღება/გადანაწილება დამოკიდებულია ურთიერთშეთანხმებაზე
                                </li>
                            </ul>
                            <ul>
                                ჩემთან სწალვის შემდეგ გეცოდინებათ:
                                <li>C++-ის საფუძვლები</li>
                                <li>წარმატებით გაივლით თქვენი უნივერსიტეტის საგნებს</li>
                            </ul>
                            <ul>
                                სამომავლოდ გაგიადვილდებათ:
                                <li>სხვა ენების შესწავლა</li>
                                <li>სამსახურის პოვნა</li>
                            </ul>
                            <ul>
                                ნიჭიერ ხალხს სამომავლოდ შევთავაზებ კოლეგობას. &#128526;
                            </ul>
                            <div className={'d-flex justify-content-end'}>
                                <Button variant={'outline-primary'} onClick={() => {
                                    setShow(true)
                                }}>კურიკულუმის ნახვა</Button>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <ModalForCppSylabus
                    show={show}
                    onHide={() => {
                        setShow(false)
                    }}
                />
            </div>
        </>
    )
}