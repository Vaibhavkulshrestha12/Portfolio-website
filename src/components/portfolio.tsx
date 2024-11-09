'use client'

import { useState, useEffect } from 'react'
import { FaHtml5, FaCss3Alt, FaJs, FaPython, FaGitAlt, FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'
import { SiTailwindcss, SiCplusplus, SiMongodb, SiFirebase, SiThreedotjs } from 'react-icons/si'
import { TbBrandCpp } from 'react-icons/tb'
import { DiMysql } from 'react-icons/di'
import { Github, Linkedin, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import ProjectCard from './project-card'

interface Skill {
  name: string;
  icon: JSX.Element;
}

interface Achievement {
  title: string;
  description: string;
}

interface Project {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
}

const skillsData: Skill[] = [
  { name: 'HTML', icon: <FaHtml5 className="w-8 h-8 text-[#E34F26]" /> },
  { name: 'CSS', icon: <FaCss3Alt className="w-8 h-8 text-[#1572B6]" /> },
  { name: 'JavaScript', icon: <FaJs className="w-8 h-8 text-[#F7DF1E]" /> },
  { name: 'Tailwind', icon: <SiTailwindcss className="w-8 h-8 text-[#06B6D4]" /> },
  { name: 'Python', icon: <FaPython className="w-8 h-8 text-[#3776AB]" /> },
  { name: 'Git', icon: <FaGitAlt className="w-8 h-8 text-[#F05032]" /> },
  { name: 'C', icon: <TbBrandCpp className="w-8 h-8 text-[#00599C]" /> },
  { name: 'C++', icon: <SiCplusplus className="w-8 h-8 text-[#00599C]" /> },
  { name: 'React', icon: <FaReact className="w-8 h-8 text-[#61DAFB]" /> },
  { name: 'Node.js', icon: <FaNodeJs className="w-8 h-8 text-[#339933]" /> },
  { name: 'MongoDB', icon: <SiMongodb className="w-8 h-8 text-[#47A248]" /> },
  { name: 'MySQL', icon: <DiMysql className="w-8 h-8 text-[#4479A1]" /> },
  { name: 'Firebase', icon: <SiFirebase className="w-8 h-8 text-[#FFCA28]" /> },
  { name: 'Three.js', icon: <SiThreedotjs className="w-8 h-8 text-[#000000]" /> },
]

const achievementsData: Achievement[] = [
  { 
    title: 'Smart India Hackathon Winner', 
    description: 'Won the Smart India Hackathon in 2023, developing an innovative solution for [specific problem].' 
  },
  { 
    title: 'Open Source Contributor', 
    description: 'Contributed to various open-source projects, including [Project Name] and [Project Name].' 
  },
  { 
    title: 'Coding Competition Finalist', 
    description: 'Reached the finals of [Competition Name], competing against top developers from across the country.' 
  },
  { 
    title: 'Tech Talk Speaker', 
    description: 'Delivered a tech talk on [Topic] at [Event Name], sharing insights with over 200 attendees.' 
  },
]

const featuredRepos = [
  'FlapPyBird',
  'superman-pygame',
  // Add more repository names here
]

export function PortfolioComponent() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        console.log('Fetching projects...')
        const projectPromises = featuredRepos.map(async repo => {
          const response = await fetch(`https://api.github.com/repos/Vaibhavkulshrestha12/${repo}`)
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          return response.json()
        })
        const projectData = await Promise.all(projectPromises)
        console.log('Fetched project data:', projectData)
        setProjects(projectData as Project[])
      } catch (e) {
        console.error('Error fetching projects:', e)
        setError(e instanceof Error ? e.message : 'An unknown error occurred')
      } finally {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong</h1>
          <p className="text-xl mb-4">Error: {error}</p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600 text-white">
      <header className="p-6 bg-black bg-opacity-30">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">Vaibhav Kulshrestha</h1>
          <nav>
            <Button variant="ghost" className="mr-2 text-white hover:text-purple-300">About</Button>
            <Button variant="ghost" className="mr-2 text-white hover:text-purple-300">Skills</Button>
            <Button variant="ghost" className="mr-2 text-white hover:text-purple-300">Projects</Button>
            <Button variant="ghost" className="mr-2 text-white hover:text-purple-300">Achievements</Button>
            <Button variant="ghost" className="text-white hover:text-purple-300">Contact</Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto mt-8 px-4">
        <section id="about" className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-center">About Me</h2>
          <p className="text-lg text-center max-w-2xl mx-auto">
            I'm a full-stack developer with a passion for creating innovative solutions. 
            With expertise in both web development and Python programming, I love tackling 
            complex problems and building user-friendly applications.
          </p>
        </section>

        <section id="skills" className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {skillsData.map((skill) => (
              <Card key={skill.name} className="bg-white bg-opacity-10 hover:bg-opacity-20 transition-all">
                <CardContent className="flex flex-col items-center justify-center p-4">
                  {skill.icon}
                  <span className="mt-2 text-sm">{skill.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Projects</h2>
          {isLoading ? (
            <div className="flex justify-center items-center h-32">
              <p className="text-lg">Loading projects...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          )}
        </section>

        <section id="achievements" className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-center">Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsData.map((achievement, index) => (
              <Card key={index} className="bg-white bg-opacity-10 hover:bg-opacity-20 transition-all">
                <CardHeader>
                  <CardTitle>{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-center">Contact Me</h2>
          <Card className="bg-white bg-opacity-10">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                  <Input id="name" placeholder="Your Name" className="bg-white bg-opacity-20 text-white placeholder-gray-400" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <Input id="email" type="email" placeholder="your@email.com" className="bg-white bg-opacity-20 text-white placeholder-gray-400" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                  <Textarea id="message" placeholder="Your message" className="bg-white bg-opacity-20 text-white placeholder-gray-400" />
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="mt-12 p-6 bg-black bg-opacity-30">
        <div className="container mx-auto flex justify-center space-x-4">
          <a href="https://github.com/Vaibhavkulshrestha12" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com/in/vaibhav-kulshrestha-053924283" target="_blank" rel="noopener noreferrer" className="hover:text-purple-300">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:vaibhavkulshrestha55@gmail.com" className="hover:text-purple-300">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </footer>
    </div>
  )
}