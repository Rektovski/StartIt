import cppImage from "../../../assets/ISO_C++_Logo.svg.png";
import "../../../design/headerStyle.css"
import {useEffect} from "react";

export default function Header() {
    useEffect(() => {
        const parallaxImage = document.querySelector('.cppImageSpace');

        const handleMouseMove = (e) => {
            const mouseX = e.clientX / window.innerWidth - 0.5;
            const mouseY = e.clientY / window.innerHeight - 0.5;

            const translateX = -mouseX * 50;
            const translateY = -mouseY * 50;

            parallaxImage.style.transform = `translate(${translateX}px, ${translateY}px)`;
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div className={'container'}>
                <div className="center">
                    <h1>
                        <span>Cpp_Mentor</span>
                        <span>Cpp_Mentor</span>
                        <span>Cpp_Mentor</span>
                    </h1>
                </div>
            </div>
            <div className={'cppPageCardTitle'}>
                <div className={'cppImageText'}>
                    {`cout<<"`}
                    <div className={'cppImageTextMother'}>Mother of Languages</div>
                    {` ";`}
                </div>
                <div className={'cppImageSpace'}>
                    <img className={'cppImage'} src={cppImage} alt={'cpp logo'}/>
                </div>
            </div>
        </>
    )
}