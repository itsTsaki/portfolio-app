import Link from "next/link";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center text-center px-4 py-20 max-h-screen">
          <section className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent animate-pulse">
                Hi, I’m Pranav
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8">
                An aspiring full-stack web developer who loves building beautiful, high-performance web apps.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/projects"
                  className="px-6 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-500 transition font-bold"
                >
                  View Projects
                </Link>
                <Link
                  href="/"
                  className="px-6 py-2 rounded-full bg-gray-700 text-white hover:bg-gray-500 transition font-bold"
                >
                  My Resume
                </Link>
              </div>
          </section>

          <section className="mt-16 text-sm text-gray-500 dark:text-gray-400">
              <p>Tech I use: Next.js, React, Tailwind CSS, Git & GitHub, Vercel</p>
          </section>
    </main>
  );
}