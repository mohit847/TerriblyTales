import React from 'react';

const ExportData = ({ labels, data }) => {
  const handleExportCSV = () => {
    const csvContent = "data:text/csv;charset=utf-8,"
      + labels.map((label, index) => `${label},${data[index]}`).join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'histogram.csv');
    document.body.appendChild(link);
    link.click();
  };

  return (
    <button onClick={handleExportCSV}>Export</button>
  );
};

export default ExportData;
