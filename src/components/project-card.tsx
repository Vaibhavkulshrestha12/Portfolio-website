import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Star, GitFork, Eye } from 'lucide-react'

interface Project {
  name: string;
  description?: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-white bg-opacity-10 hover:bg-opacity-20 transition-all overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-500 p-4">
        <CardTitle className="text-white">{project.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <p className="text-sm text-gray-300 mb-4">
          {project.description || 'No description available'}
        </p>
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          <span className="flex items-center">
            <Star className="w-4 h-4 mr-1" aria-hidden="true" />
            <span aria-label={`${project.stargazers_count} stars`}>
              {project.stargazers_count || 0}
            </span>
          </span>
          <span className="flex items-center">
            <GitFork className="w-4 h-4 mr-1" aria-hidden="true" />
            <span aria-label={`${project.forks_count} forks`}>
              {project.forks_count || 0}
            </span>
          </span>
          <span className="flex items-center">
            <Eye className="w-4 h-4 mr-1" aria-hidden="true" />
            <span aria-label={`${project.watchers_count} watchers`}>
              {project.watchers_count || 0}
            </span>
          </span>
        </div>
      </CardContent>
      <CardFooter className="bg-black bg-opacity-30 p-4">
        <Button variant="outline" className="w-full" asChild>
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
            aria-label={`View ${project.name} on GitHub`}
          >
            View on GitHub
            <ExternalLink className="w-4 h-4 ml-2" aria-hidden="true" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  )
}
