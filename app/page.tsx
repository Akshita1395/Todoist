'use client';

// Import useState from React to handle simple interactive state
import { useState } from 'react';

/**
 * Main Todoist Landing Page Component
 * Built for beginner clarity - all sections contained in one simple file.
 */
export default function Home() {
  
  // =========================================================================
  // REACT STATE: Task Checkbox Micro-Interaction
  // =========================================================================
  // These boolean states store whether each sample task is completed or not.
  // Clicking a task flips its true/false value using setTaskCompleted(!taskCompleted).
  const [task1Completed, setTask1Completed] = useState(true);  // "Finish assignment" (Starts checked)
  const [task2Completed, setTask2Completed] = useState(false); // "Review interview notes"
  const [task3Completed, setTask3Completed] = useState(false); // "Practice DSA"
  const [task4Completed, setTask4Completed] = useState(false); // "Call home"

  // Calculate the number of remaining incomplete tasks
  const remainingCount = [task1Completed, task2Completed, task3Completed, task4Completed].filter(
    (isCompleted) => !isCompleted
  ).length;

  return (
    <div>

      {/* =====================================================================
          1. NAVBAR SECTION
         ===================================================================== */}
      <header className="navbar">
        <div className="container nav-container">
          
          {/* Logo */}
          <a href="#" className="logo">
            <span style={{ color: '#E44232' }}>✓</span> todoist
            <span className="logo-badge">Redesign Concept</span>
          </a>

          {/* Navigation Links */}
          <ul className="nav-links">
            <li><a href="#how-it-works" className="nav-link">Product</a></li>
            <li><a href="#capture" className="nav-link">How it works</a></li>
            <li><a href="#features" className="nav-link">Features</a></li>
          </ul>

          {/* Action Buttons */}
          <div className="nav-actions">
            <a href="#login" className="nav-link">Log in</a>
            <a href="#hero" className="btn-primary">Try Todoist</a>
          </div>

        </div>
      </header>

      {/* =====================================================================
          2. HERO SECTION & TODAY'S TASK CARD
         ===================================================================== */}
      <section id="hero" className="hero-section">
        <div className="container hero-grid">
          
          {/* Hero Main Text */}
          <div className="hero-text">
            <span className="hero-tag">Productivity Concept</span>
            <h1 className="hero-title">Get your head clear.</h1>
            <p className="hero-subtitle">
              Turn everything on your mind into a simple plan for today.
            </p>
            <div className="hero-buttons">
              <a href="#start" className="btn-primary">Start for free</a>
              <a href="#how-it-works" className="btn-secondary">See how it works</a>
            </div>
          </div>

          {/* Interactive Todoist Task Card */}
          <div className="task-card">
            
            {/* Card Header */}
            <div className="task-card-header">
              <span className="task-card-title" style={{ color: '#E44232' }}>● TODAY</span>
              <span style={{ fontSize: '12px', color: '#9CA3AF' }}>Wed, Aug 19</span>
            </div>

            {/* Interactive Tasks List */}
            <ul className="task-list">
              
              {/* Task 1 */}
              <li className="task-item" onClick={() => setTask1Completed(!task1Completed)}>
                <button className={`checkbox-btn ${task1Completed ? 'checked' : ''}`}>
                  {task1Completed ? '✓' : ''}
                </button>
                <span className={`task-text ${task1Completed ? 'completed' : ''}`}>
                  Finish assignment
                </span>
              </li>

              {/* Task 2 */}
              <li className="task-item" onClick={() => setTask2Completed(!task2Completed)}>
                <button className={`checkbox-btn ${task2Completed ? 'checked' : ''}`}>
                  {task2Completed ? '✓' : ''}
                </button>
                <span className={`task-text ${task2Completed ? 'completed' : ''}`}>
                  Review interview notes
                </span>
              </li>

              {/* Task 3 */}
              <li className="task-item" onClick={() => setTask3Completed(!task3Completed)}>
                <button className={`checkbox-btn ${task3Completed ? 'checked' : ''}`}>
                  {task3Completed ? '✓' : ''}
                </button>
                <span className={`task-text ${task3Completed ? 'completed' : ''}`}>
                  Practice DSA
                </span>
              </li>

              {/* Task 4 */}
              <li className="task-item" onClick={() => setTask4Completed(!task4Completed)}>
                <button className={`checkbox-btn ${task4Completed ? 'checked' : ''}`}>
                  {task4Completed ? '✓' : ''}
                </button>
                <span className={`task-text ${task4Completed ? 'completed' : ''}`}>
                  Call home
                </span>
              </li>

            </ul>

            {/* Card Footer Counter */}
            <div className="task-card-footer">
              <span>{remainingCount} {remainingCount === 1 ? 'task' : 'tasks'} left</span>
              <span style={{ color: '#E44232', fontWeight: 600 }}>Click to toggle tasks</span>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          3. CAPTURE EVERYTHING SECTION
         ===================================================================== */}
      <section id="capture" className="section bg-white">
        <div className="container">
          
          <div className="section-header">
            <h2 className="section-title">Everything you need to remember, in one place.</h2>
            <p className="section-subtitle">
              Add tasks, ideas, and reminders before they get lost.
            </p>
          </div>

          {/* 3 Input Categories */}
          <div className="grid-3">
            <div className="card">
              <div className="card-title">Tasks</div>
              <p className="card-desc">Add immediate to-dos and project action items.</p>
            </div>
            <div className="card">
              <div className="card-title">Ideas</div>
              <p className="card-desc">Capture quick thoughts before you forget them.</p>
            </div>
            <div className="card">
              <div className="card-title">Reminders</div>
              <p className="card-desc">Set time-sensitive follow-ups for later today.</p>
            </div>
          </div>

          {/* Output Preview Box */}
          <div className="preview-box">
            <div style={{ fontWeight: 700, fontSize: '13px', marginBottom: '10px', color: '#1F2937' }}>
              ✓ Organized Inbox
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px' }}>
              <li style={{ padding: '8px', background: 'white', borderRadius: '6px', border: '1px solid #E8E3DB' }}>
                ● Finish frontend assignment
              </li>
              <li style={{ padding: '8px', background: 'white', borderRadius: '6px', border: '1px solid #E8E3DB' }}>
                ● New project layout concept
              </li>
              <li style={{ padding: '8px', background: 'white', borderRadius: '6px', border: '1px solid #E8E3DB' }}>
                ● Team catch-up at 4:00 PM
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* =====================================================================
          4. FOCUS ON TODAY SECTION
         ===================================================================== */}
      <section id="how-it-works" className="section">
        <div className="container">
          
          <div className="section-header">
            <h2 className="section-title">Know what matters today.</h2>
            <p className="section-subtitle">
              Organize your day into clear time blocks to stay focused.
            </p>
          </div>

          {/* 3 Timeline Cards */}
          <div className="grid-3">
            
            {/* Morning */}
            <div className="timeline-card">
              <div className="timeline-header">
                <span>Morning</span>
                <span style={{ color: '#E44232' }}>✓ Done</span>
              </div>
              <p style={{ fontSize: '14px', color: '#4B5563' }}>Check emails</p>
            </div>

            {/* Afternoon */}
            <div className="timeline-card">
              <div className="timeline-header">
                <span>Afternoon</span>
                <span style={{ color: '#6B7280' }}>○ In Progress</span>
              </div>
              <p style={{ fontSize: '14px', color: '#4B5563' }}>Finish assignment</p>
            </div>

            {/* Evening */}
            <div className="timeline-card">
              <div className="timeline-header">
                <span>Evening</span>
                <span style={{ color: '#6B7280' }}>○ Upcoming</span>
              </div>
              <p style={{ fontSize: '14px', color: '#4B5563' }}>Plan tomorrow</p>
            </div>

          </div>

        </div>
      </section>

      {/* =====================================================================
          5. MAKE PROGRESS SECTION
         ===================================================================== */}
      <section id="features" className="section bg-white">
        <div className="container">
          
          <div className="section-header">
            <h2 className="section-title">Small steps add up.</h2>
            <p className="section-subtitle">
              Build steady momentum by finishing a few important tasks every single day.
            </p>
          </div>

          {/* Weekly Progress Box */}
          <div style={{ maxWidth: '700px', margin: '0 auto', background: '#FAF8F5', border: '1px solid #E8E3DB', borderRadius: '20px', padding: '24px' }}>
            <div style={{ fontWeight: 700, fontSize: '15px', marginBottom: '4px' }}>Weekly Progress</div>
            <p style={{ fontSize: '13px', color: '#6B7280' }}>Mon – Sun Overview</p>

            {/* Week Days */}
            <div className="week-grid">
              <div className="day-box">
                <span className="day-name">Mon</span>
                <div className="day-status done">✓</div>
              </div>
              <div className="day-box">
                <span className="day-name">Tue</span>
                <div className="day-status done">✓</div>
              </div>
              <div className="day-box">
                <span className="day-name">Wed</span>
                <div className="day-status done">✓</div>
              </div>
              <div className="day-box">
                <span className="day-name">Thu</span>
                <div className="day-status done">✓</div>
              </div>
              <div className="day-box">
                <span className="day-name">Fri</span>
                <div className="day-status done">✓</div>
              </div>
              <div className="day-box">
                <span className="day-name">Sat</span>
                <div className="day-status" style={{ border: '1px solid #D1D5DB' }}>○</div>
              </div>
              <div className="day-box">
                <span className="day-name">Sun</span>
                <div className="day-status" style={{ border: '1px solid #D1D5DB' }}>○</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =====================================================================
          6. FINAL CTA SECTION
         ===================================================================== */}
      <section className="section">
        <div className="container">
          <div className="cta-box">
            <h2 className="section-title">Ready to clear your mind?</h2>
            <p className="section-subtitle" style={{ marginBottom: '24px' }}>
              Start with one task. We'll help you organize the rest.
            </p>
            <a href="#hero" className="btn-primary" style={{ padding: '12px 28px', fontSize: '16px' }}>
              Start for free
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          7. FOOTER SECTION
         ===================================================================== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="logo">
              <span style={{ color: '#E44232' }}>✓</span> todoist
            </div>
            <ul className="nav-links">
              <li><a href="#how-it-works" className="nav-link">Product</a></li>
              <li><a href="#features" className="nav-link">Features</a></li>
              <li><a href="#capture" className="nav-link">How it works</a></li>
            </ul>
          </div>

          <p className="disclaimer">
            Conceptual redesign created for a frontend assignment. Not affiliated with Todoist.
          </p>
        </div>
      </footer>

    </div>
  );
}
