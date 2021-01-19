import React, {useState, useEffect} from 'react'
import * as FaIcons from "react-icons/fa";

// Google Chrome speech API allows 15sec of TTS, so to overcome it used a setInterval Function that pauses and resumes to refresh the 15 sec counter

function TTS() {

    const [textData, setTextData] = useState("");
    const [voiceList, setVoiceList] = useState(""); //Store the different voices in voiceList array

    const [playStatus, setPlayStatus] = useState(false);
    const [pauseStatus, setPauseStatus] = useState(null);

    useEffect(() => {
        
        console.log('mount it!');
        let s = setSpeech();
        s.then((voices) => {
            console.log(voices);
            setVoiceList(voices);
        });
    }, []);
    
    const playText = () => {
        if(textData.length === 0) {
            console.log("No text to be played");
            return false;
        }
        window.speechSynthesis.cancel();
        let speech = new SpeechSynthesisUtterance();
        speech.onstart = ()=>{
            console.log("started");
            setPlayStatus(true);
            setPauseStatus(false);
            setInterval(myTimer, 10000);
        }
        
        speech.onend = () => {
            clearInterval(myTimer);
            console.log("ENDED");
            cancelText();
        }
        // speech.lang = 'en-US';
        speech.voice = voiceList[4];
        speech.text = textData;
        speech.volume = 1;
        speech.rate = 1;
        speech.pitch = 1;                
    
        console.log(speech)
        window.speechSynthesis.speak(speech);
      
        
        
    }

    const pauseText = () => {
        setPauseStatus(true);
        window.speechSynthesis.pause();
    }

    const resumeText = () => {
        setPauseStatus(false);
        window.speechSynthesis.resume();
    }

    const cancelText = () => {
        window.speechSynthesis.cancel();
        setPlayStatus(false);
    }


    return (
        <div className="container text-center mt-5">
            <h2>Text to Speech in English</h2>
            <p>Enter your text and hit the Play button.</p>
            <div className="form-group mt-5">
                <textarea className="form-control w-75 m-auto" rows="7" onChange={e=>setTextData(e.target.value)}></textarea>

            {/* when playStatus is true then only show the respective pause and resume button */}
            {playStatus === true ? 
                    pauseStatus === false ? <button className="btn btn-info mt-4" onClick={pauseText}> <FaIcons.FaPause /></button> : <button className="btn btn-info mt-4" onClick={resumeText}> <FaIcons.FaPlay /></button>
                 : 
                 " "}

    {/* If playStatus is true then show the cancel button or else show the play button */}
                {playStatus === true ? 
                    <button className="btn btn-info mt-4 ml-2" onClick={cancelText}> <FaIcons.FaStop /></button> 
                    : <button className="btn btn-info mt-4 ml-2" onClick={playText}><FaIcons.FaPlay /></button>}
            
            </div>
         
        </div>
    )
}

export default TTS

// Returns a promise when the getVoices() array is loaded. 
function setSpeech() {
    return new Promise(
        function (resolve, reject) {
            let synth = window.speechSynthesis;
            let id;

            id = setInterval(() => {
                if (synth.getVoices().length !== 0) {
                    resolve(synth.getVoices());
                    clearInterval(id);
                }
                
            }, 10);
        }
    )
}

function myTimer() {
    window.speechSynthesis.pause();
    window.speechSynthesis.resume();
    // myTimeout = setTimeout(myTimer, 10000);
}