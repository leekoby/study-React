import ReactDOM from 'react-dom/client'

const rootVirtualDOM = (
  <ul>
    <li>
      <a href="http://www.google.com" target="_blank">
        <p>go to google</p>
      </a>
    </li>
  </ul>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(rootVirtualDOM)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
