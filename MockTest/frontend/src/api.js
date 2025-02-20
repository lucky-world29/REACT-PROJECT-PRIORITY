import axios from "axios";
import reportWebVitals from './reportWebVitals';
reportWebVitals(); // This line is usually at the end of the file

// Set the base URL of the backend
axios.defaults.baseURL = "http://localhost:9988";
