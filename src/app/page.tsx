import Header from '@/components/Header';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export default function Home() {
  console.log('test');
  const projects: Project[] = [
    {
      title: 'Notes App',
      description:
        'Description of your first project. Highlight the key features and technologies used.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Supabase', 'SQL', 'Next.js', 'TailwindCSS'],
      imageUrl: '/portfolio/notes-app.png',
      liveUrl: 'https://project1.com',
      githubUrl: 'https://github.com/jadiscke/notes-app',
    },
    {
      title: 'Project 2',
      description: 'Description of your second project. Showcase your best work and achievements.',
      technologies: ['Next.js', 'TailwindCSS', 'MongoDB'],
      githubUrl: 'https://github.com/yourusername/project2',
    },
  ];

  return (
    <div className="min-h-screen bg-primary-100 text-white">
      <Header />
      <main className="container mx-auto px-6 pt-32 pb-16">
        <section className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Hi, I&apos;m
              <br />
              <br />
              <span className="text-primary-500">Vinicius Jadiscke</span>
            </h1>
            <p className="text-lg text-gray-300">
              A passionate full-stack developer crafting beautiful and functional web experiences.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary-500 hover:bg-primary-400 transition-colors rounded-md font-semibold"
              >
                Get in Touch
              </a>
              <a
                href="#about"
                className="px-6 py-3 border border-primary-500 hover:bg-primary-400/10 transition-colors rounded-md font-semibold"
              >
                About Me
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-primary-500 hover:bg-primary-400/10 transition-colors rounded-md font-semibold"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-72 h-72 rounded-full bg-gradient-to-br from-primary-300 to-primary-500 flex items-center justify-center">
              <Image
                className="rounded-full"
                src="https://media.licdn.com/dms/image/v2/D4D03AQHSR4EBKxS3cw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1667231546038?e=1744848000&v=beta&t=m6nW5nS3Flc66X2aKolioUi9wEFpVqVkWsymLv0wyX8"
                width={300}
                height={300}
                alt="Vinicius Jadiscke"
              />
            </div>
          </div>
        </section>

        <section id="about" className="mt-32">
          <h2 className="text-4xl md:text-6xl font-bold mb-12">About Me</h2>
          <div className="space-y-6 text-lg text-gray-300">
            <p>
              I am a unique blend of Industrial Engineer and Software Engineer, bringing a
              systematic approach to problem-solving in the tech industry. With over 3 years of
              experience, I combine my engineering background with cutting-edge software development
              skills.
            </p>
            <p>
              As a Software Engineer, I specialize in building modern web applications using a
              powerful tech stack including:
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-primary-200 rounded-lg">React</span>
              <span className="px-4 py-2 bg-primary-200 rounded-lg">Next.js</span>
              <span className="px-4 py-2 bg-primary-200 rounded-lg">Node.js</span>
              <span className="px-4 py-2 bg-primary-200 rounded-lg">SQL</span>
              <span className="px-4 py-2 bg-primary-200 rounded-lg">PostgreSQL</span>
              <span className="px-4 py-2 bg-primary-200 rounded-lg">TailwindCSS</span>
            </div>
            <p>
              My industrial engineering background gives me a unique perspective on process
              optimization and system design, which I apply to create efficient and scalable
              software solutions.
            </p>
          </div>
        </section>

        <section id="projects" className="mt-32">
          <h2 className="text-4xl md:text-6xl font-bold mb-12">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-primary-200 rounded-lg p-6 flex flex-col gap-4 h-full">
                <div className="aspect-video bg-primary-300 rounded-lg overflow-hidden">
                  {project?.imageUrl && (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      width={1000}
                      height={1000}
                      objectFit="contain"
                    />
                  )}
                  {/* Add Image component here once you have images */}
                </div>
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-3 py-1 bg-primary-400 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-primary-500 hover:bg-primary-400 transition-colors rounded-md font-semibold"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-primary-500 hover:bg-primary-400/10 transition-colors rounded-md font-semibold"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="contact" className="mt-32">
          <h2 className="text-4xl md:text-6xl font-bold mb-12">Get in Touch</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-4 bg-primary-200 hover:bg-primary-300 transition-colors rounded-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-4 bg-primary-200 hover:bg-primary-300 transition-colors rounded-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
            <a
              href="https://instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-4 bg-primary-200 hover:bg-primary-300 transition-colors rounded-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-3.96-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
              Instagram
            </a>
            <a
              href="mailto:your.email@example.com"
              className="flex items-center gap-2 px-6 py-4 bg-primary-200 hover:bg-primary-300 transition-colors rounded-lg"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
