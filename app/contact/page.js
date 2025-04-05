
export default function Contact() {
  return (
    <main className="max-h-screen px-4 py-16 flex flex-col items-center">
      <section className="max-w-2xl w-full text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 bg-clip-text text-transparent animate-pulse mb-4">
          Contact Me
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Got a question, idea, or opportunity? Drop me a message below — I’ll get back to you ASAP.
        </p>
      </section>

      <form
        className="w-full max-w-2xl bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md border border-gray-200 dark:border-gray-700 space-y-6"
        action="https://formsubmit.co/itspranav.pk@gmail.com"
        method="POST"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-900 text-white py-2 px-6 rounded-md hover:bg-gray-600 transition"
        >
          Send Message
        </button>
      </form>
    </main>
  );
}
