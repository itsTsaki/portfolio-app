import Link from 'next/link';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio built with Next.js and Tailwind CSS.',
    tech: ['Next.js', 'Tailwind CSS', 'JavaScript'],
    link: '',
  },
  {
    title: 'Weather App',
    description: 'Real-time weather app using OpenWeatherMap API.',
    tech: ['Next.js', 'Tailwind CSS', 'JavaScript'],
    link: 'https://weather-app-two-eta-79.vercel.app',
  },
  {
    title: 'Movie App',
    description: 'A movie browsing app using TMDB API',
    tech: ['Next.js', 'Tailwind CSS', 'JavaScript'],
    link: 'https://movie-app-liart-six.vercel.app',
  },
];

export default function Projects() {
  return (
    <main className="max-h-screen px-4 py-16 flex flex-col items-center">
      <section className="max-w-5xl w-full text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent animate-pulse mb-4 p-2">
          My Projects
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          A collection of things I&#39;ve built – some just for fun, others for real-world use.
        </p>
      </section>

      <section className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow hover:shadow-lg transition mb-2"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {project.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link
              href={project.link}
              target="_blank"
              className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
            >
              View Project →
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
