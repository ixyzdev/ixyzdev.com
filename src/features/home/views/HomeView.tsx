import type { Project, SocialLink } from '@/types'
import { Globe, Leaf, Cpu, Server, GitMerge, Workflow } from 'lucide-react'
import { HeroSection } from '@/features/home/components/HeroSection'
import { AboutSection } from '@/features/home/components/AboutSection'
import { StackSection } from '@/features/home/components/StackSection'
import { ProjectsSection } from '@/features/home/components/ProjectsSection'
import { BlogSection } from '@/features/home/components/BlogSection'
import { ContactSection } from '@/features/home/components/ContactSection'
import { getAllPostsMeta } from '@/features/blog/lib/posts'
import { encodeEmail } from '@/lib/encode-email'
import type { TechStack } from '@/features/home/components/StackCard'

// --- Personal data ---

const socialLinks: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/IxyzDev', icon: 'github' },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/ixyzdev', icon: 'linkedin' },
]

const projects: Project[] = [
  {
    slug: 'framework-microservicios',
    title: 'Framework Modular de Microservicios',
    description:
      'Framework basado en arquitectura hexagonal, DDD, CQRS, gRPC y Kafka con CLI para generación de templates. Proyecto de tesis.',
    longDescription:
      'Diseñé e implementé un framework modular basado en arquitectura hexagonal, DDD, CQRS, gRPC y Kafka, optimizando la escalabilidad e interoperabilidad en entornos Docker. Automaticé la generación de un template para el desarrollo de microservicios, empleando un CLI con el propósito de facilitar la introducción inicial al desarrollo y una arquitectura estandarizada.',
    techStack: ['NestJS', 'gRPC', 'Kafka', 'Docker', 'Kubernetes', 'DDD', 'CQRS'],
    featured: true,
    year: 2025,
  },
  {
    slug: 'fablab-uv',
    title: 'Web FabLab UV',
    description:
      'Sitio web oficial del FabLab de la Universidad de Valparaíso. Lideré el equipo como Project Manager y desarrollador full stack.',
    longDescription:
      'Lideré el desarrollo de la página web oficial del FabLab UV como Project Manager y desarrollador full stack, utilizando Next.js con TypeScript y Docker. Implementé una base de datos MongoDB orquestada con Docker Compose y configuré pipelines de CI/CD para asegurar la calidad del código. Coordiné el equipo aplicando metodologías ágiles con GitHub Projects.',
    techStack: ['Next.js', 'TypeScript', 'MongoDB', 'Docker', 'GitHub Actions'],
    featured: true,
    year: 2024,
  },
  {
    slug: 'smart-sell',
    title: 'Smart Sell — Black Nexus',
    description:
      'Frontend de plataforma POS para comercios con integración de machine learning para optimización de ventas.',
    longDescription:
      'Lideré una célula ágil para el desarrollo de un frontend de plataforma POS para comercios, donde se integran funciones de machine learning para optimizar ventas. Coordiné tareas y entregas mediante metodologías ágiles, asegurando la organización y cumplimiento de objetivos del equipo.',
    techStack: ['React', 'TypeScript', 'Machine Learning'],
    featured: true,
    year: 2024,
  },
]

const techStacks: TechStack[] = [
  {
    name: 'Next.js + NestJS + MongoDB',
    description: 'Stack JavaScript full stack con SSR en el cliente y API REST/GraphQL en el servidor.',
    Icon: Globe,
    technologies: [
      { name: 'Next.js', role: 'Frontend + SSR' },
      { name: 'NestJS', role: 'Backend / API' },
      { name: 'Mongoose', role: 'ODM — conector' },
      { name: 'MongoDB', role: 'Base de datos' },
    ],
  },
  {
    name: 'Next.js + Django + PostgreSQL',
    description: 'Stack híbrido con frontend moderno React y backend Python orientado a datos.',
    Icon: Leaf,
    technologies: [
      { name: 'Next.js', role: 'Frontend + SSR' },
      { name: 'Django', role: 'Backend / API' },
      { name: 'psycopg2', role: 'Adaptador — conector' },
      { name: 'PostgreSQL', role: 'Base de datos' },
    ],
  },
  {
    name: 'GraphQL API',
    description: 'API type-safe con esquema unificado y resolvers tipados end-to-end.',
    Icon: Cpu,
    technologies: [
      { name: 'NestJS', role: 'Backend / API' },
      { name: 'GraphQL', role: 'Protocolo de consulta' },
      { name: 'Prisma', role: 'ORM — conector' },
      { name: 'PostgreSQL', role: 'Base de datos' },
    ],
  },
  {
    name: 'Despliegue de servicios',
    description: 'Contenerización y orquestación de servicios sobre infraestructura Linux.',
    Icon: Server,
    technologies: [
      { name: 'Docker', role: 'Contenerización' },
      { name: 'Kubernetes', role: 'Orquestación' },
      { name: 'Linux', role: 'Sistema operativo base' },
      { name: 'Nginx', role: 'Reverse proxy' },
    ],
  },
  {
    name: 'CI/CD',
    description: 'Automatización de pruebas, builds y despliegues con flujos reproducibles.',
    Icon: GitMerge,
    technologies: [
      { name: 'GitHub Actions', role: 'Pipeline de automatización' },
      { name: 'GitOps', role: 'Estrategia de despliegue' },
      { name: 'Docker Hub', role: 'Registro de imágenes' },
    ],
  },
  {
    name: 'Arquitectura Limpia',
    description: 'Diseño orientado al dominio con separación estricta de capas.',
    Icon: Workflow,
    technologies: [
      { name: 'DDD', role: 'Modelado del dominio' },
      { name: 'Arquitectura Hexagonal', role: 'Separación de capas' },
      { name: 'CQRS', role: 'Segregación de comandos' },
      { name: 'gRPC / Kafka', role: 'Comunicación entre servicios' },
    ],
  },
]

// --- End personal data ---

export async function HomeView() {
  const recentPosts = getAllPostsMeta().slice(0, 3)

  return (
    <>
      <HeroSection
        name="Kevin Díaz"
        headline="Ingeniero Civil Informático"
        subheadline="Diseño e integración de soluciones modernas con enfoque en arquitectura de software, CI/CD y despliegue de servicios sobre Linux con Docker y Kubernetes."
        socialLinks={socialLinks}
        // avatarUrl="/images/foto.jpg"   ← descomenta y agrega tu foto en /public/images/
      />
      <AboutSection
        bio="Egresado de Ingeniería Civil Informática en la Universidad de Valparaíso. Me especializo en arquitectura de software (DDD, hexagonal), automatización de flujos CI/CD y tecnologías web como Next.js, NestJS y GraphQL. He liderado proyectos educativos y clínicos en FabLab UV, combinando visión técnica, estrategia y ejecución integral. Inglés B2 · Español nativo."
      />
      <StackSection stacks={techStacks} />
      <ProjectsSection projects={projects} title="Experiencia destacada" showAll />
      <BlogSection posts={recentPosts} />
      <ContactSection
        encodedEmail={encodeEmail('ixzy.dev@gmail.com')}
        socialLinks={socialLinks}
      />
    </>
  )
}
