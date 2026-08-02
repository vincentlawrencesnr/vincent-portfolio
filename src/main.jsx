import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';

import AOS from "aos";
import "aos/dist/aos.css";

import './styles/variables.css';
import './styles/typography.css';
import './styles/global.css';
import './styles/animations.css';

import './index.css'
import App from './App.jsx'

AOS.init({

    duration:1000,

    once:true,

    easing:"ease-in-out"

});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


/*

once
once:true

Means

Scroll down

↓

Animation plays

↓

Scroll back up

↓

Scroll down again

↓

No animation

Only once.

This is perfect for portfolios.
*/