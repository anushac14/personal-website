import React from 'react';
import { ReactTyped } from 'react-typed';
import './App.css';

function App() {
  return (
    <div className="min-h-screen scroll-smooth snap-y snap-mandatory overflow-y-scroll dark:bg-slate-800">
      <header className="flex flex-col items-center justify-center h-screen text-center py-10 snap-start">
        <nav className="absolute top-0 left-0 right-0 bg-gray-900 text-white py-4 shadow-lg">
          <div className="container mx-auto flex justify-center space-x-8">
            <a href="#about-me" className="hover:text-gray-400">about me</a>
            <a href="#experiences" className="hover:text-gray-400">experiences</a>
            <a href="#projects" className="hover:text-gray-400">projects</a>
          </div>
        </nav>

        <ReactTyped
          strings={["hey, i'm anusha!"]}
          typeSpeed={60}
          backSpeed={50}
          showCursor={false}
          className="text-6xl font-extrabold text-white drop-shadow-lg mb-4"
        />

        <div className="flex space-x-7 mt-6">
          <a href="https://github.com/anushac14" target="_blank" rel="noopener noreferrer">
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="white"
            >
              <title>GitHub</title>
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/anushachinthamaduka" target="_blank" rel="noopener noreferrer">
            <svg
              className="h-10 w-10 text-white"
              viewBox="0 0 48 48"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
            >
              <path
                d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
              ></path>
            </svg>
          </a>
        </div>
      </header>
      <main className="px-4">
        <section id="about-me" className="h-screen snap-start flex flex-col items-center pt-24 text-white">
          <h2 className="text-6xl font-bold text-center mb-4">About Me</h2>
          <p className="text-lg text-center">I'm a third year computer science student at the University Of Michigan.</p>
        </section>
        <section id="experiences" className="h-screen snap-start flex flex-col items-center pt-24  text-white">
          <h2 className="text-6xl font-bold text-center mb-4">Experiences</h2>
          <p className="text-lg text-center">Detail your experiences here.</p>
        </section>
        <section id="projects" className="h-screen snap-start flex flex-col items-center pt-24  text-white">
          <h2 className="text-6xl font-bold text-center mb-4">Projects</h2>
          <p className="text-lg text-center">Showcase your projects here.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
