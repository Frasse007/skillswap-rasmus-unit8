import React, { useState } from 'react';
import './App.css';

// Body content created in collaboration with AI chatbots
function App() {
  const [skills, setSkills] = useState([
    { id: 1, title: 'React & Frontend Development', description: 'Master component-driven development, hooks, and modern state management.', price: '$25/hr', provider: 'Alex Johnson', expanded: false },
    { id: 2, title: 'Python & Data Analysis', description: 'Learn pandas, numpy, and basic machine learning concepts from scratch.', price: '$30/hr', provider: 'Samantha Smith', expanded: false },
    { id: 3, title: 'Advanced Spanish Conversation', description: 'Improve fluency through real-world dialogues and grammar practice.', price: '$20/hr', provider: 'Carlos Mendez', expanded: false },
    { id: 4, title: 'Calculus & Linear Algebra', description: 'Break down complex math proofs, derivatives, and matrix operations.', price: '$35/hr', provider: 'Dr. Emily Chen', expanded: false }
  ]);

  // Function to toggle card expansion on click
  const toggleCard = (id) => {
    setSkills(skills.map(skill => 
      skill.id === id ? { ...skill, expanded: !skill.expanded } : skill
    ));
  };

  return (
    <div className="app-container">
      {/* Header containing site name and navigation placeholder */}
      <header className="site-header">
        <div className="site-name">Skill Swap</div>
        <nav className="site-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#browse">Browse Skills</a></li>
            <li><a href="#offer">Offer Skills</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </header>

      {/* Main content container */}
      <main className="site-main">
        {/* Hero Section */}
        <section className="hero-section">
          <h1>Learn, Teach, and Exchange Skills</h1>
          <p>Connect with peer tutors to master new subjects or share your own expertise.</p>
          <a href="#browse" className="btn-primary">Find a Tutor</a>
        </section>

        {/* Skill Offerings Section with Interactive Cards */}
        <section id="browse-skills" className="skill-offerings">
          <h2>Featured Skill Offerings</h2>
          <p className="section-subtitle">Click any card to view more details or book a session.</p>
          
          <div className="cards-grid">
            {skills.map(skill => (
              <div 
                key={skill.id} 
                className={`skill-card ${skill.expanded ? 'expanded' : ''}`}
                onClick={() => toggleCard(skill.id)}
              >
                <div className="card-header">
                  <h3>{skill.title}</h3>
                  <span className="card-price">{skill.price}</span>
                </div>
                <p className="card-provider">Tutor: <strong>{skill.provider}</strong></p>
                <p className="card-desc">{skill.description}</p>
                
                {skill.expanded && (
                  <div className="card-extra-details">
                    <hr />
                    <p><strong>Availability:</strong> Mon, Wed, Fri (4 PM - 7 PM)</p>
                    <button 
                      className="btn-book" 
                      onClick={(e) => { 
                        e.stopPropagation(); // Prevents collapse when clicking button
                        alert(`Booking session for ${skill.title} with ${skill.provider}!`); 
                      }}
                    >
                      Book Session
                    </button>
                  </div>
                )}
                <span className="click-hint">{skill.expanded ? 'Click to collapse' : 'Click for details'}</span>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer containing placeholder footer content */}
      <footer className="site-footer">
        <p>&copy; 2026 Skill Swap Platform. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;