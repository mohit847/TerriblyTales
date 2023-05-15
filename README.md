
# Terribly Tiny Tales

A frontend Assignment project using React js to fetch the data from  https://www.terriblytinytales.com/test.txt and to check the occurences of each word present in that data and also to create a histogram of 20 most occuring words in the data. 


## Project Deployment

I have successfully deployed my project on OnRender, a powerful platform for hosting web applications. OnRender provides a seamless deployment experience, allowing me to effortlessly showcase and share my project with others. By leveraging the capabilities of OnRender, my project is now accessible to users from anywhere in the world. 
## Demo

https://terriblytales.onrender.com/


# Components

### Files sturcture 
```bash
  Components
        content
        WordOccurrences
        Histogram
        ExportData
```
## Content
The Content component is responsible for fetching data from the provided URL (https://www.terriblytinytales.com/test.txt) and displaying it on the webpage. It utilizes the useState and useEffect hooks from React to manage the data fetching and rendering process. The fetched data is then split into containers based on a specific pattern, and each container is displayed as a separate section on the webpage.

## WordOccurrences
The WordOccurrences component is a child component of Content. It receives the fetched data as a prop and calculates the occurrences of each word within the data. It utilizes the useState hook to manage the word occurrences state. Initially, it displays a button that, when clicked, triggers the calculation of word occurrences. Once calculated, it displays a list of words and their corresponding occurrences. Additionally, it provides an option to show a histogram of the 20 most occurring words.

## Histogram
The Histogram component is a child component of WordOccurrences. It receives the word occurrences as a prop and generates a bar chart using the Chart.js library to visualize the 20 most occurring words. The chart is rendered on a canvas element, and it includes options for responsiveness and adjusting the bar thickness. It also provides a download button to export the histogram data as a CSV file.

## ExportData
The ExportData component is a child component of Histogram. It receives the labels and data for the histogram as props. It creates a CSV file containing the label-word and count pairs, and provides a button to download the generated CSV file.





## Libraries Used
To run this project, you will need to have all these following Libraries.

* @testing-library/jest-dom: "^5.16.5"
* @testing-library/react: "^13.4.0"
* @testing-library/user-event: "^13.5.0"
* chart.js: "^4.3.0"
* file-saver: "^2.0.5"
* react: "^18.2.0"
* react-chartjs-2: "^5.2.0"
* react-dom: "^18.2.0"
* react-router-dom: "^6.11.1"
* react-scripts: "5.0.1"
* web-vitals: "^2.1.4"


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
