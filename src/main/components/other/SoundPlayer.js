import "../../design/soundPlayer.css";
import Sound from 'react-sound';
import song1 from "../../music/song1.mp3";
import song2 from "../../music/song2.mp3";
import leftEye from "../../assets/soundPlayerImage/2.png";
import rightEye from "../../assets/soundPlayerImage/1.png";
import {useState} from "react";
import {FiPlayCircle as PlayIcon} from "react-icons/fi";
import {TbPlayerStop as StopIcon} from "react-icons/tb";
import {BsMusicNoteBeamed as MusicIcon} from "react-icons/bs";

const SoundPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hideMusic, setHideMusic] = useState(true);
    const [currentMusic, setCurrentMusic] = useState(0);
    const songs = [song1, song2];

    const choosePreviousSong = () => {
        if (currentMusic > 0) {
            setCurrentMusic(currentMusic - 1);
        } else if (!currentMusic) {
            setCurrentMusic(songs.length - 1);
        }
    }

    const chooseNextSong = () => {
        if (currentMusic === songs.length - 1) {
            setCurrentMusic(0);
        } else {
            setCurrentMusic(currentMusic + 1);
        }
    }

    return (
        <div className={'soundSpace'}>
            <div className={'musicPlayer'}>
                <div className={`soundPlayerAnimation ${hideMusic ? 'soundPlayerAnimationStart' : 'soundPlayerAnimationStop'}`}>
                    <img src={leftEye} alt={'eye'} className={'eyeRoller'} onClick={choosePreviousSong}/>
                    {
                        !isPlaying ?
                            <PlayIcon onClick={() => {
                                setIsPlaying(!isPlaying)
                            }} size={60} className={'musicPlayerIcons'}/>
                            :
                            <StopIcon onClick={() => {
                                setIsPlaying(!isPlaying)
                            }} className={'musicPlayerIcons'} size={60}/>
                    }
                    <img src={rightEye} alt={'eye'} className={'eyeRoller'} onClick={chooseNextSong}/>
                </div>
                <MusicIcon className={'musicPlayerIcons'} size={60}
                           onClick={() => setHideMusic(!hideMusic)}/>
            </div>
            <Sound
                url={songs[currentMusic]}
                playStatus={
                    isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED
                }
            />
        </div>
    )
}

export default SoundPlayer;