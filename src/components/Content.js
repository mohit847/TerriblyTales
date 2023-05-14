import { useEffect, useState } from 'react';
import './content.css';
import WordOccurrences from './WordOccurrences';

function Content() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://www.terriblytinytales.com/test.txt')
      .then(response => response.text())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  const breakData = (data) => {
    const containers = data.split(/\n(?=\d+\.\s+)/);
    return containers.map((container) => container.trim());
  };

  return (
    <div className='main'>
      <WordOccurrences data={data} />
      <h2>contents From terriblytinytales</h2>
      {data && breakData(data).map((container, index) => (
        <div className='container' key={index}>
          {container.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Content;
