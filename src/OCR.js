import React, { useState } from 'react';
import { VscDiffAdded } from "react-icons/vsc";
import Tesseract from 'tesseract.js';



function Home() {
    const [OCRImage, setOCRImage] = useState("");
    const [OCRProgress, setOCRProgress] = useState("");
    const [OCRButtonDisabled, setOCRButtonDisabled] = useState(false);
    const [OCRText, setOCRText] = useState("");
   

    const callOCR = () => {
        setOCRButtonDisabled(true);
        Tesseract.recognize(
            OCRImage,
            'eng',
            { logger: m => {
                console.log(m)
                if(m.status === 'recognizing text')
                    setOCRProgress(m.progress);
                }
            }
          ).then(({ data: { text } }) => {
            console.log(text);
            setOCRText(text);
            setOCRButtonDisabled(false);
            setOCRProgress("");
          })
          
    }

    return (
        <div className="container text-center mt-5">
            <h2>Optical Character Recognition App</h2>
            <p>Add a text image and convert it into actual text.</p>
            <label htmlFor="file-upload">
                <span className="text-info" style={{fontSize:'60px'}}><VscDiffAdded /></span>
            </label>
            <br />
            <input id="file-upload" type="file" accept="image/*" className="" onChange={e => setOCRImage(URL.createObjectURL(e.target.files[0]))}/>

            <img src={OCRImage} alt="" className="img-fluid rounded img-thumbnail shadow w-50"/>
            <br />
            {OCRImage !== ""  ? <button className="btn btn-primary mt-5 shadow" onClick={callOCR} disabled={OCRButtonDisabled}>Convert</button> : ""}

            {OCRProgress !== "" ? <><p className="mt-3">{Math.round(OCRProgress*100)}%</p>
            <h4 className="w-50 m-auto"><ProgressBar complete={OCRProgress}/></h4></> : ""}

            {OCRText !== "" ? <p className="mt-5 shadow p-3">{OCRText}</p> : ""}
            
            
            
        </div>
    )
}

export default Home


const ProgressBar = ({complete}) => {
    complete = complete*100;
    return(
        <div className="progressBarContainer">
            <span className="progressBar" style={{width : complete+'%' }}></span>
        </div>
    )
}