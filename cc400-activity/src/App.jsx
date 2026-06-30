import "./App.css"
import Navigation from './components/nav.jsx'
import Register from './components/reg_form.jsx'
import Footer from './components/footer.jsx'

function App() {
  return (
    <div className="Main">
        <Navigation />
      <div className="form">
          <h1>REGISTRATION FORM</h1>
          <hr></hr>
          <Register />
      </div>
      <Footer />
    </div>
  )
}

export default App
