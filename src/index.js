import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';

const app = <App />
const tag = document.getElementById('app')

render(app, tag);
