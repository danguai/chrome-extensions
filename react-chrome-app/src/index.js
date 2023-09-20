import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.createElement('div');
rootElement.id = 'react-chrome-app';
document.body.appendChild(rootElement);

const globalStyles = document.createElement('style');
globalStyles.innerHTML = `
#${rootElement.id} {
  position: fixed;
  left: 0;
  top: 0;
  width: 300px;
  height: 100vh;
  background: #ffffff;
  border-right: 1px solid #c2c2c2;
  z-index: 999
}`;
rootElement.appendChild(globalStyles);
document.body.appendChild(rootElement);

const Button = styled.a < { $primary?: boolean } > `
  --accent-color: white;

  background: transparent;
  border-radius: 3px;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  display: inline-block;
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  transition: all 200ms ease-in-out;
  width: 11rem;

  &:hover {
    filter: brightness(0.85);
  }

  &:active {
    filter: brightness(1);
  }

  ${props => props.$primary && css`
    background: var(--accent-color);
    color: black;
  `}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
