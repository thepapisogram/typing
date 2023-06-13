import {useEffect} from 'react';

export default function Time({setWordsTyped, playing, setPlaying, seconds, setSeconds, setGameOver, onNewWord, setOnNewWord}){

    // const [seconds, setSeconds] = useState(5);
    useEffect(()=>{
        if(playing === true){
            console.log('you are playing')
            if(seconds > 0 && onNewWord === false){
                let countdown = setTimeout(() => {
                    setSeconds(count => count - 1);
                    clearTimeout(countdown);
                }, 1000);
            } else if(seconds >= 0 && onNewWord === true) {
                setOnNewWord(false);
            } else if(seconds === 0 && playing === true && onNewWord === false){
                setPlaying(false);
                setGameOver('Game Over');
            }
        }
    }, [seconds, setSeconds, playing]);

    return(
        <div className="col">
            <small>Time: <span id="time">{seconds}</span> s</small>
        </div>
    )
}