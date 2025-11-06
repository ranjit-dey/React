export default function About() {
  return (
    <section className="min-h-[calc(100vh-56px)] flex flex-col justify-center items-center bg-gray-50 px-4 py-12">
      <div className="max-w-3xl bg-white border border-gray-200 rounded-2xl shadow-sm p-8 text-center">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4">About This Blog</h1>
        <p className="text-gray-600 text-base leading-relaxed mb-8">
          Welcome to <span className="font-medium text-blue-600">Ranjit’s Blog</span> —
          a space where I share my thoughts, projects, and tutorials related to web
          development, React, and the evolving world of technology.
          My goal is to make complex topics easier to understand through practical,
          real-world examples.
        </p>

        {/* Divider */}
        <div className="border-t border-gray-200 my-8"></div>

        {/* Author Section */}
        <div className="text-left">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            👨‍💻 About Me
          </h2>
          <p className="text-gray-600 leading-relaxed">
            I’m <span className="font-medium text-gray-800">Ranjit Dey</span>,
            a passionate Computer Science student who loves exploring new web technologies,
            building intuitive UIs, and helping others learn through my work.
            <br />
            <br />
            When I’m not coding, you’ll probably find me experimenting with new ideas,
            reading about emerging tech trends, or refining my personal projects.
          </p>
        </div>

        {/* Contact */}
        <div className="border-t border-gray-200 my-8"></div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Let’s Connect</h3>
          <p className="text-gray-600">
            Feel free to reach out via email or explore my projects on GitHub.
          </p>

          <div className="mt-4 flex justify-center gap-4">
            <a
              href="mailto:ranjit@example.com"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
            >
              ✉️ Email
            </a>
            <a
              href="https://github.com/ranjit-dey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
            >
              💻 GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
