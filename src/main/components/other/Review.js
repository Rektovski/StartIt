import "../../design/reviewStyle.css";
import {Button, Carousel} from "react-bootstrap";
import {useState} from "react";
import {carouselArray} from "../../helper/carouselArray";
import ContactModal from "../modal/ContactModal";

export default function Review() {
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <div className={'reviewSpace'}>
                <div className={'reviewTitle'}>
                    <div className={'reviewChar'}>F</div>
                    <div className={'reviewChar'}>E</div>
                    <div className={'reviewChar'}>E</div>
                    <div className={'reviewChar'}>D</div>
                    <div className={'reviewChar'}>B</div>
                    <div className={'reviewChar'}>A</div>
                    <div className={'reviewChar'}>C</div>
                    <div className={'reviewChar'}>K</div>
                </div>

                <Carousel activeIndex={index} onSelect={handleSelect}>
                    {
                        carouselArray.map((item, id) => (
                            <Carousel.Item key={id}>
                                <div className={'carouselStudentName'}>{item.name}</div>
                                <div className={'carouselStudentReview'}>{item.text}</div>
                                <div className={'carouselImageSpace'}>
                                    <img className={'carouselImage'} src={item.img} alt={'img'}/>
                                </div>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
                <div className={'reviewStartButton'}>
                    <Button size={'lg'} variant={'outline-light'} onClick={() => {
                        setShow(!show)
                    }}>
                        მზად ხარ?
                    </Button>
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