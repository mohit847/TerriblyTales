import React, { useState } from 'react';
import Histogram from './Histogram';
import './WordOccurrences.css';

const WordOccurrences = ({ data }) => {
  const [wordOccurrences, setWordOccurrences] = useState({});
  const [showHistogram, setShowHistogram] = useState(false);
  const [showHistogramButton, setShowHistogramButton] = useState(true);

  const countWordOccurrences = () => {
    const words = data.split(/\s+/);
    const occurrences = {};

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      occurrences[word] = (occurrences[word] || 0) + 1;
    }

    setWordOccurrences(occurrences);
  };

  const handleShowHistogram = () => {
    setShowHistogram(true);
    setShowHistogramButton(false);
  };

  return (
    <div className="word-occurrences">
      {Object.keys(wordOccurrences).length === 0 ? (
        <div className="word-occurrences__button">
          <h2>Click this button to check the occurrences of each and every word</h2>
          <button onClick={countWordOccurrences}>Occurrence</button>
        </div>
      ) : (
        <div className="word-occurrences__result">
          {showHistogramButton ? (
            <div className="word-occurrences__histogram-button">
              <h2>Click here to see the histogram of the 20 most occurring words.</h2>
              <button onClick={handleShowHistogram}>Show Histogram</button>
            </div>
          ) : (
            <>
              {showHistogram && <Histogram wordOccurrences={wordOccurrences} />}
            </>
          )}
          <h3>Word Occurrences:</h3>
          <ul className="word-occurrences__list">
            {Object.entries(wordOccurrences).map(([word, count]) => (
              <li key={word}>
                {word}: {count}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WordOccurrences;
