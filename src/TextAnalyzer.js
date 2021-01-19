import React, { useState } from 'react';
import Sentiment from 'sentiment';
const sentiment = new Sentiment();


function TextAnalyzer() {
    

    const [sentimentScore, setSentimentScore] = useState(null);
    const [sentimentType, setSentimentType] = useState(null);
    const [sentimentPostive, setSentimentPositive] = useState([]);
    const [sentimentNegative, setSentimentNegative] = useState([]);

    const getSentiment = (text) => {
        let sentimentObj = sentiment.analyze(text);
        let score = sentimentObj.score;
        let positive = sentimentObj.positive;
        let negative = sentimentObj.negative;
        setSentimentPositive(positive);
        setSentimentNegative(negative);

        if (score > 0)   setSentimentType("Positive");
        else if (score < 0) setSentimentType("Negative");
        else    setSentimentType("Neutral");

        setSentimentScore(score);

    }

    return (
        <div className="container text-center mt-5">
            <h2>Sentiment Analysis</h2>
            <p>Enter your text and check its sentiment.</p>

            <textarea className="form-control w-75 m-auto" rows="7" onChange={e=>getSentiment(e.target.value)}></textarea>
            <br />
            <h5>Setiment Score : {sentimentScore}</h5>
            <h5>Setiment Type : {sentimentType}</h5>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 offset-md-2">
                    <h5>Positives : </h5> {sentimentPostive.map(element => {
                    return(<h5><span className="badge badge-info p-2 shadow">{element}</span></h5>)
                    })}
                </div>
                <div className="col-12 col-sm-12 col-md-4">
                    <h5>Negatives : </h5> {sentimentNegative.map(element => {
                    return(<h5><span className="badge badge-warning p-2 shadow">{element}</span></h5>)
                    })}
                </div>
            </div>
          
          
        </div>
    )
}

export default TextAnalyzer
