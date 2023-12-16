import {Button, Modal} from "react-bootstrap";
import {useState} from "react";
import ContactModal from "./ContactModal";
import "../../design/modalForCppSylabus.css";

export default function ModalForCppSylabus(props) {
    const [show, setShow] = useState(false);

    return (
        <Modal {...props} size={'xl'}>
            <Modal.Header closeButton>
                <Modal.Title>
                    C++ კურსის სილაბუსი
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul>
                    <li>Processor 0110010...</li>
                    <li>Variable/Typology</li>
                    <li>User Control I/O</li>
                    <li>Char</li>
                    <li>String</li>
                    <li>Function</li>
                    <li>Math && Logical Operators</li>
                    <li>ElseIF Operators</li>
                    <li>Cycle</li>
                    <li>Recursion</li>
                    <li>Array</li>
                    <li>Set Multiset</li>
                    <li>Map</li>
                    <li>Stack, Queue, Deque</li>
                    <li>Prime Numbers</li>
                    <li>LCM/GDM</li>
                    <li>Bitwise Operators</li>
                    <li>Double Dimensional Arrays/Matrix</li>
                    <li>Binary Powering</li>
                    <li>და ა.შ რაც დაგვჭირდება</li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button
                    variant={'primary'}
                    onClick={() => {
                        setShow(!show);
                        console.log("gavxseni")
                    }}
                >აბა გინდა ჩემი მოწაფეობა, მოწაფევ!?</Button>
            </Modal.Footer>

            <ContactModal
                show={show}
                onHide={() => {
                    setShow(false)
                }}
            />
        </Modal>
    )
}