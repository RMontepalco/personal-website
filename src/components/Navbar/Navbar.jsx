import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>RMontepalco</h1>

      {/*
        TO DO: Create drop-down menu for mobile
        TO DO: Add scrolling animation to each page
      */}
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#portfolio">Portfolio</a>
      <a href="#contact">Contact</a>
      
    </nav>
  )
}
