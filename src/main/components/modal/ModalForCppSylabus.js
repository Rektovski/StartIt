import {Button, Modal} from "react-bootstrap";

export default function ModalForCppSylabus(props) {
    return (
        <Modal {...props} size={'xl'}>
            <Modal.Header closeButton>
                <Modal.Title>
                    C++ კურსის სილაბუსი
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ul>
                    <li>ცვლადი, ცვლადთა ტიპები: char, short, int, long long, bool, double, float; ნიშნიანი და უნიშნო ცვლადები</li>
                    <li>პროცესორის ენა: ორობითი</li>
                    <li>User input - გამშვები კოდების შესწავლა. არაფორმატიანი/ნელი შეტანა გამოტანის მეთოდები</li>
                    <li>User input - გამშვები კოდების შესწავლა. ფორმატიანი/სწრაფი შეტანა გამოტანის მეთოდები</li>
                    <li>სიმბოლო</li>
                    <li>სიტყვები</li>
                    <li>ფუნქცია</li>
                    <li>მათემატიკური მოქმედებები და ლოგიკური ოპერაციები</li>
                    <li>პირობითი ოპერატორები</li>
                    <li>ციკლები</li>
                    <li>რეკურსია</li>
                    <li>მასივი</li>
                    <li>სიმრავლე და მულტისიმრავლე</li>
                    <li>ასოცირებული მასივი</li>
                    <li>სტეკი, რიგი, შებრუნებული რიგი</li>
                    <li>მარტივი რიცხვები</li>
                    <li>უსგ/უსჯ</li>
                    <li>ბიტური ოპერაცები</li>
                    <li>მატრიცა</li>
                    <li>ბინარული ახარისხება</li>
                </ul>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={'outline-success'}>კურსის ყიდვა</Button>
            </Modal.Footer>
        </Modal>
    )
}