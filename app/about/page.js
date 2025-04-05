

export default function About() {
  return (
    <main className="max-h-screen px-4 py-16 flex flex-col items-center">
      <section className="max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent animate-pulse ">
          About Me
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
          Hey! I'm <span className="font-semibold text-blue-600 dark:text-blue-400">Pranav</span>, an aspiring full-stack developer who loves turning ideas into real-world web apps.
        </p>
        <p className="text-md text-gray-600 dark:text-gray-400 mb-6">
          I started coding not more than a year ago, and since then I've been building projects with technologies like React, Next.js. I enjoy solving real problems and continuously learning better ways to do things.
        </p>
        <p className="text-md text-gray-600 dark:text-gray-400">
          Outside of coding, I love photography, travelling, music, cooking. I believe in meaningful work, and having fun while doing it.
        </p>
      </section>

      <section className="mt-12 max-w-3xl w-full">
        <h2 className="text-2xl font-semibold mb-4 text-center text-gray-800 dark:text-gray-200">
          Technologies I Use
        </h2>
        <ul className="flex flex-wrap justify-center gap-4 text-sm text-gray-700 dark:text-gray-300">
          {[
            'Next.js',
            'React',
            'Tailwind CSS',
            'Git & GitHub',
            'Vercel',
          ].map((tech) => (
            <li
              key={tech}
              className="bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full shadow-sm"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}


