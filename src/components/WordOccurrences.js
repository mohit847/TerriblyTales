import React, { useState } from 'react';
import Histogram from './Histogram';

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
    <div>
      {Object.keys(wordOccurrences).length === 0 ? (
        <div>
          <h2>Click This button to check the occurrences of each and every word</h2>
          <button onClick={countWordOccurrences}>Occurrence</button>
        </div>
      ) : (
        <div>
          {showHistogramButton ? (
            <div>
              <h2>Click here to see the histogram of the 20 most occurring words.</h2>
              <button onClick={handleShowHistogram}>Show Histogram</button>
            </div>
          ) : (
            <>
              {showHistogram && <Histogram wordOccurrences={wordOccurrences} />}
            </>
          )}
          <h3>Word Occurrences:</h3>
          <ul>
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
