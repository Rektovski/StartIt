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
                                <div className={'carouselHeader'}>
                                    <div className={'carouselImageSpace'}>
                                        <img className={'carouselImage'} src={item.img} alt={'img'}/>
                                    </div>
                                    <div>
                                        <div className={'carouselStudentUni'}>{`${item.uni}`}</div>
                                        <div className={'carouselStudentName'}>{`${item.name}`}</div>
                                    </div>
                                </div>
                                <div className={'carouselStudentReview'}>&nbsp;&nbsp;&nbsp;{item.text}</div>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
                <div className={'reviewStartButton'}>
                    <Button style={{fontSize: 30}} size={'lg'} variant={'outline-light'} onClick={() => {
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