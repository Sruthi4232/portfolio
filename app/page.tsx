"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Phone, ChevronDown, User, Code, GraduationCap, Award } from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setActiveSection(sectionId)
    }
  }

  const skills = [
    "C",
    "Java",
    "C++",
    "Python",
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "React.js",
    "MongoDB",
    "SQL",
    "Machine Learning",
    "AWS",
    "Git",
    "Cisco Packet Tracer",
  ]

  const projects = [
    {
      title: "Software Defect Prediction System",
      description:
        "Developed a machine learning-based tool to predict software defects using historical data with various ML algorithms.",
      technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Machine Learning"],
      highlights: ["Autoencoder for feature selection", "Boosting techniques", "Decision Trees", "Random Forest"],
    },
    {
      title: "Digital Notice Board",
      description:
        "Real-time digital notice board system for Vignan University using MERN Stack with secure authentication.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
      highlights: ["Real-time updates", "Role-based access control", "Responsive UI", "Centralized communication"],
    },
    {
      title: "Vignan Library Website",
      description:
        "Interactive library portal built during hackathon allowing students to search books and manage borrowing.",
      technologies: ["Web Development", "Database Management", "UI/UX Design"],
      highlights: ["Book search & availability", "Admin dashboard", "Borrowing history", "Responsive design"],
    },
  ]

  const certifications = [
    { name: "Google Generative AI Course", date: "July 2024", issuer: "Google" },
    { name: "Artificial Intelligence Course", date: "August 2024", issuer: "Great Learning" },
    { name: "Cisco Packet Tracer Course", date: "August 2024", issuer: "Cisco" },
    { name: "Cisco Networking Essentials", date: "November 2024", issuer: "Cisco" },
    { name: "CCNA Certification Track", date: "2024", issuer: "Cisco" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-purple-100">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Sai Sruthi
            </h1>
            <div className="hidden md:flex space-x-6">
              {["home", "about", "projects", "skills", "education", "certifications", "contact"].map((section) => (
                <Button
                  key={section}
                  variant="ghost"
                  onClick={() => scrollToSection(section)}
                  className="text-purple-700 hover:text-purple-900 hover:bg-purple-100 capitalize"
                >
                  {section}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mx-auto mb-8 flex items-center justify-center">
              <User className="w-16 h-16 text-purple-600" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Sai Sruthi Ankisetty
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              B.Tech Computer Science Student | AI & ML Enthusiast | Full Stack Developer
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button
                onClick={() => window.open("mailto:saisruthi188@gmail.com")}
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </Button>
              <Button
                onClick={() => window.open("tel:7989606094")}
                variant="outline"
                className="border-purple-300 text-purple-700 hover:bg-purple-50"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Me
              </Button>
              <Button
                onClick={() => window.open("#")}
                variant="outline"
                className="border-blue-300 text-blue-700 hover:bg-blue-50"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                onClick={() => window.open("#")}
                variant="outline"
                className="border-pink-300 text-pink-700 hover:bg-pink-50"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Button>
            </div>
            <Button
              onClick={() => scrollToSection("about")}
              variant="ghost"
              className="text-purple-600 hover:text-purple-800 animate-bounce"
            >
              <ChevronDown className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">About Me</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-800">Career Objective</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Ambitious B.Tech final year Computer Science student with a strong foundation in programming, web
                  development, Artificial Intelligence and machine learning. Seeking opportunities to apply my technical
                  skills in real-world projects, contribute to software development initiatives, and gain hands-on
                  experience in a dynamic and growth-oriented environment.
                </p>
              </CardContent>
            </Card>

            <Card className="mt-8 border-blue-200 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800">Work Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  Demonstrated practical skills in machine learning through projects like Software Defect Prediction,
                  improving software quality, utilizing deep learning for real-time disease identification. Engaged in
                  competitive programming on CodeChef, GeeksforGeeks and LeetCode. Completed Artificial Intelligence
                  courses from Google Generative AI and Great Learning, gaining expertise in AI techniques and AWS Cloud
                  Computing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="border-pink-200 bg-gradient-to-br from-pink-50 to-purple-50 hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-xl text-pink-800">{project.title}</CardTitle>
                  <CardDescription className="text-gray-600">{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="font-semibold text-purple-700 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-purple-100 text-purple-700">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-pink-700 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start">
                          <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">Skills</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-green-50">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-800 flex items-center">
                  <Code className="w-6 h-6 mr-2" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="justify-center py-2 border-blue-300 text-blue-700 hover:bg-blue-100 cursor-pointer transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">Education</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-xl text-green-800 flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  B.Tech in Computer Science Engineering
                </CardTitle>
                <CardDescription>Vignan's Foundation for Science, Technology and Research, Vadlamudi</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">Expected Graduation: 2026</p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <CardTitle className="text-xl text-purple-800">Intermediate</CardTitle>
                <CardDescription>Sri Chaitanya Junior College, Repalle (2020 – 2022)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-semibold">Percentage: 96.6%</p>
              </CardContent>
            </Card>

            <Card className="border-pink-200 bg-gradient-to-br from-pink-50 to-purple-50">
              <CardHeader>
                <CardTitle className="text-xl text-pink-800">High School</CardTitle>
                <CardDescription>Vivekananda Vidya Vihar, Repalle (2007 – 2020)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 font-semibold">GPA: 10.0</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-6 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">Certifications & Achievements</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="border-yellow-200 bg-gradient-to-br from-yellow-50 to-orange-50">
                <CardHeader>
                  <CardTitle className="text-lg text-yellow-800 flex items-center">
                    <Award className="w-5 h-5 mr-2" />
                    {cert.name}
                  </CardTitle>
                  <CardDescription>
                    {cert.issuer} • {cert.date}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-800">Get In Touch</h2>
          <div className="max-w-2xl mx-auto text-center">
            <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardContent className="pt-6">
                <p className="text-lg text-gray-700 mb-8">
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about
                  technology!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    onClick={() => window.open("mailto:saisruthi188@gmail.com")}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    saisruthi188@gmail.com
                  </Button>
                  <Button
                    onClick={() => window.open("tel:7989606094")}
                    variant="outline"
                    className="border-purple-300 text-purple-700 hover:bg-purple-50"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    +91 7989606094
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-100 to-pink-100 py-8 px-6">
        <div className="container mx-auto text-center">
          <p className="text-purple-700">© 2024 Sai Sruthi Ankisetty. Built with passion and code.</p>
        </div>
      </footer>
    </div>
  )
}
