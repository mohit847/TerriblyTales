import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ExportData from './ExportData';
import './Histogram.css';

const Histogram = ({ wordOccurrences }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    const sortedWords = Object.keys(wordOccurrences).sort(
      (a, b) => wordOccurrences[b] - wordOccurrences[a]
    );
    const labels = sortedWords.slice(0, 20);
    const data = labels.map((word) => wordOccurrences[word]);

    const ctx = chartRef.current.getContext('2d');

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'Occurrences',
            data,
            backgroundColor: 'rgb(66,101,214)',
          },
        ],
      },
      options: {
        responsive: false,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            maxBarThickness: 50, // Adjust the maximum height of the bars
          },
        },
      },
    });

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, [wordOccurrences]);

  const sortedWords = Object.keys(wordOccurrences).sort(
    (a, b) => wordOccurrences[b] - wordOccurrences[a]
  );
  const labels = sortedWords.slice(0, 20);
  const data = labels.map((word) => wordOccurrences[word]);

  return (
    <div className="histogram">
      <div className="histogram__download-button">
        <h2>Click This button to download a CSV file of the histogram data.</h2>
        <ExportData labels={labels} data={data} />
      </div>
      <h3 className="histogram__title">The histogram of the 20 most occurring words:</h3>
      <canvas ref={chartRef} className="histogram__chart" width="1000" height="600" />
    </div>
  );
};

export default Histogram;
