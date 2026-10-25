import React, { useState } from 'react';
const { filterSkillsByCategory } = require('../skillswap-functions');
import './App.css';

// Body content created in collaboration with AI chatbots
function App() {
  const [skills, setSkills] = useState([
    { id: 1, title: 'React & Frontend Development', category: 'Programming', description: 'Master component-driven development, hooks, and modern state management.', price: 25, provider: 'Alex Johnson', expanded: false },
    { id: 2, title: 'Python & Data Analysis', category: 'Programming', description: 'Learn pandas, numpy, and basic machine learning concepts from scratch.', price: 30, provider: 'Samantha Smith', expanded: false },
    { id: 3, title: 'Advanced Spanish Conversation', category: 'Language', description: 'Improve fluency through real-world dialogues and grammar practice.', price: 20, provider: 'Carlos Mendez', expanded: false },
    { id: 4, title: 'Calculus & Linear Algebra', category: 'Math', description: 'Break down complex math proofs, derivatives, and matrix operations.', price: 35, provider: 'Dr. Emily Chen', expanded: false },
    { id: 5, title: 'Guitar Lessons', category: 'Music', description: 'Learn chords, strumming, and your favorite songs.', price: 15, provider: 'Mark Taylor', expanded: false },
    { id: 6, title: 'Resume Review', category: 'Career', description: 'Get professional feedback on your resume and cover letter.', price: 0, provider: 'Sarah Jenkins', expanded: false }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const filteredSkills = filterSkillsByCategory(skills, selectedCategory);

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
            <li><a href="#calculator">Calculator</a></li>
            <li><a href="matcher">Matcher</a></li>
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
          
          {/* Filter Buttons */}
          <div className="filter-buttons-group">
            {['All', 'Programming', 'Music', 'Career', 'Language', 'Math'].map(cat => (
              <button key={cat} className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`} onClick={() => setSelectedCategory(cat)}>{cat}</button>
            ))}
          </div>

          <div className="cards-grid">
            {filteredSkills.length === 0 ? (
              <p>No skills found in this category.</p>
            ) : (
              filteredSkills.map(skill => (
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
                    <p><strong>Category:</strong> {skill.category}</p>
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
              ))
            )}
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