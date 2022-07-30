import {Accordion, Button, Card, Container} from "react-bootstrap";
import "../../style/cppStyle.css";
import cppProfileImage from "../../image/cppMentorImage.png";
import ModalForCppSylabus from "../modal/ModalForCppSylabus";
import {useState} from "react";

export default function CppPage() {
    const [show, setShow] = useState(false);

    return (
        <Container>
            <Card>
                <Card.Header className={'text-center'}>
                    <Card.Title>C++</Card.Title>
                </Card.Header>
                <Card.Body>
                    <div className={'d-flex justify-content-center'}>
                        <div className={'p-2 border profile-place'}>
                            <div className={'p-2 d-flex justify-content-center'}>
                                <img className={'profile-image'} src={cppProfileImage}
                                     alt={`If you see this it means you can't see mentor's face`}/>
                            </div>
                            <div className={'text-center'}>
                                <a
                                    className={'link'}
                                    href={"https://fb.com/OtexRektovski"} target={'_blank'} rel={"noreferrer"}>ოთარ
                                    მურმანიშვილი</a>
                            </div>
                        </div>
                    </div>
                    <Accordion className={'my-5 '}>
                        <Accordion.Item eventKey={'0'} className={'accordionStyle'}>
                            <Accordion.Header>მენტორის შესახებ</Accordion.Header>
                            <Accordion.Body>
                                <ol>
                                    <li>
                                        CPA - C++ სერტიფიცირებული ასოცირებული პროგრამისიტი
                                    </li>
                                    <li>
                                        საინჟინრო ფიზიკის მაგისტრი
                                    </li>
                                    <li>
                                        1 წლიანი გამოცდილების მქონე მენტორი C++-ში
                                    </li>
                                    <li>
                                        ჯუნიორ ფრონტ-ენდ დეველოპერი
                                    </li>
                                    <li>
                                        მრავალი მიმართულების მრავალი საერთაშორისო სერტიფიკატების მფლობელი - <a
                                        href={'https://www.facebook.com/gtu.ge/posts/3540623606015672'}
                                        target={'_blank'} rel={'noreferrer'}>
                                        სტატია
                                    </a>
                                    </li>
                                    <li>
                                        პროგრამირების საერთაშორისო საოლიმპიადო ანგარიში Top ~200 - <a
                                        href={"https://www.eolymp.com/en/users/OtarMurmanishvili"} target={'_blank'}
                                        rel={'noreferrer'}>
                                        User
                                    </a></li>
                                    <li>
                                        პერსონალურ მონაცემთა დაცვის კონკურსის გამარჯვებული და წიგნის თანაავტორი - <a
                                        href={"https://www.seu.edu.ge/uploads/files/News/kompiuteruli%20teqnologiebi%20(1).pdf"}
                                        target={'_blank'} rel={"noreferrer"}>
                                        ელექტრონული ვერსია
                                    </a>
                                    </li>
                                </ol>
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
                                    <li>ჩართვები დისტანციურად Zoom-ის პლატფორმაზე</li>
                                    <li>საოლიმპიადო ამოცანებზე დაყრდნობით თეორიების პრაქტიკული დამუშავება</li>
                                    <li>ამოცანებზე წვდომა გვექნება უკრაინულ საიტ <a href={'https://eolymp.com'}
                                                                                    target={'_blank'}
                                                                                    rel={"noreferrer"}>eolymp.com</a>-ზე
                                    </li>
                                    <ul>
                                        <li>თვეში 8, კვირაში 2 შეხვედრა სტუდენტის არჩევით</li>
                                        <li>
                                            ნელი კურსი: 4 თვე, თვეში 200 ლარი.
                                        </li>
                                        <li>
                                            <div>სწრაფი კურსი: 2 თვე, თვეში 400 ლარი</div>
                                            <div><b>შენიშვნა</b>: სწრაფი კურსის არჩევის შემთხვევაში დამწყებს უნდა
                                                ჰქონდეს დამაკმაყოფილებელი მათემატიკური უნარები. ამის შესამოწმებლად
                                                ჩატარდება მისაღები გამოცდა დისტანციურად. სტუდენტი, რომელიც 5-დან 4 ამოცანას ან მეტს ამოხსნის მიეცემა სრწაფი კურსის გავლის საშუალება 300 ლარად.
                                            </div>
                                        </li>
                                    </ul>
                                </ul>
                                <ul>
                                    კურსის დამთავრებისას გეცოდინებათ:
                                    <li>C++-ის საფუძვლები</li>
                                    <li>ობიექტზე ორიენტირებული დაპროგრამება</li>
                                </ul>
                                <ul>
                                    გაგიადვილდებათ:
                                    <li>სხვა ენების შესწავლა</li>
                                    <li>სამსახურის პოვნა</li>
                                </ul>
                                <ul>
                                    წარმატებული კურსდამთავრებული მიიღებს სერტიფიკატს StartIt -ისგან.
                                </ul>
                                <div className={'d-flex justify-content-end'}>
                                    <Button variant={'outline-primary'} onClick={()=>{setShow(true)}}>კურიკულუმის ნახვა</Button>
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <ModalForCppSylabus
                        show={show}
                        onHide={()=>{setShow(false)}}
                    />
                </Card.Body>
            </Card>
        </Container>
    )
}
