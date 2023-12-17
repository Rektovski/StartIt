import {Alert, Button, Modal, Spinner} from "react-bootstrap";
import React, {useState} from "react";
import {FiSend as SendIcon} from "react-icons/fi";
import "../../design/contactStyle.css";
import {FaFacebookF as FbIcon} from "react-icons/fa";

export default function ContactModal(props) {
    const [loading, setLoading] = useState(false);
    const [alertSuccess, setAlertSuccess] = useState(false);
    const [subject, setSubject] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");


    const sendEmail = async () => {
        if (subject !== "" && email !== "" && text !== "") {
            setAlertSuccess(true);
            setLoading(true);
            setTimeout(() => {
                setSubject("");
                setEmail("");
                setText("");
                setAlertSuccess(false);
                setLoading(false);
            }, 3000);
        }
    };

    return (
        <Modal {...props} size={'fullscreen'}>
            <Modal.Header closeButton>
                <Modal.Title>
                    ვერ'ი ველლ! &#128519; აბა ვნახოთ რა გაგჭირვებია?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    alertSuccess ?
                        <Alert key={"success"} variant={"success"}>
                            <Alert.Heading>Nice to hear you.</Alert.Heading>
                            როგორც კი ვნახავ შენს მონაწერს ეგრევე გიპასუხებ ❤️
                        </Alert>
                        : ""
                }
                <form onSubmit={sendEmail}
                      action={"https://formspree.io/f/mlevqjav"}
                      method={"POST"}
                >

                    <div className={'formPart'}>
                        <input
                            className={'formInput'}
                            onChange={(event) => {
                                setSubject(event.target.value)
                            }}
                            value={subject}
                            type={'text'} name={'name'}
                            placeholder='რა გქვია?'
                            required/>
                    </div>

                    <div className={'formPart'}>
                        <input
                            className={'formInput'}
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }}
                            value={email} type={'email'} name={'email'}
                            placeholder='ელ-ფოსტა'
                            required/>
                    </div>

                    <div className={'formPart'}>
                        <input
                            className={'formLabelText'}
                            onChange={(event) => {
                                setText(event.target.value)
                            }}
                            value={text} style={{minHeight: "50px", maxHeight: "150px"}}
                            type={'textarea'} name={'textarea'}
                            placeholder='გრძელი სიტყვა მოკლედ ითქმის შაირია ამად კარგი' required/>
                    </div>

                    <div className={"d-flex justify-content-end"}>
                        {
                            loading ?
                                <div className={"d-flex align-items-center"}>
                                    <Spinner style={{color: "lightgray"}} className={'me-2'}
                                             animation="grow"
                                             role="status"></Spinner>
                                    <span className="">Loading...</span>
                                </div>
                                :
                                <>
                                    <Button type={'submit'} onSubmit={() => sendEmail()}
                                            className={'d-flex align-items-center justify-content-center'}>
                                        <div className={'me-3'}>
                                            გამომიგზავნე
                                        </div>
                                        <SendIcon color={"white"} size={30}/>
                                    </Button>
                                </>
                        }
                    </div>
                </form>
                <div className={'contactModalFbContact'}>
                    ან მომწერე ფეისბუქზე -
                    <a href={'https://www.facebook.com/OtexRektovski'}
                       rel={'noreferrer'}
                       target={'_blank'}
                       className={'ms-2'}
                    >
                        <FbIcon size={40}/>
                    </a>
                </div>
            </Modal.Body>
        </Modal>
    )
}