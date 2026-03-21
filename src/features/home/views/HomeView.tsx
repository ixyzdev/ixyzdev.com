import type { Project, SocialLink } from '@/types'
import { HeroSection } from '@/features/home/components/HeroSection'
import { AboutSection } from '@/features/home/components/AboutSection'
import { ProjectsSection } from '@/features/home/components/ProjectsSection'
import { BlogSection } from '@/features/home/components/BlogSection'
import { ContactSection } from '@/features/home/components/ContactSection'
import { getAllPostsMeta } from '@/features/blog/lib/posts'
import { encodeEmail } from '@/components/ui/ObfuscatedEmail'

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
      />
      <AboutSection
        bio="Egresado de Ingeniería Civil Informática en la Universidad de Valparaíso. Me especializo en arquitectura de software (DDD, hexagonal), automatización de flujos CI/CD y tecnologías web como Next.js, NestJS y GraphQL. He liderado proyectos educativos y clínicos en FabLab UV, combinando visión técnica, estrategia y ejecución integral. Inglés B2 · Español nativo."
        skills={[
          'Next.js',
          'Astro',
          'SvelteKit',
          'NestJS',
          'Node.js',
          'Spring Boot',
          'Django',
          'GraphQL',
          'TypeScript',
          'PostgreSQL',
          'MongoDB',
          'Docker',
          'Kubernetes',
          'GitHub Actions',
          'DDD',
          'Linux',
        ]}
      />
      <ProjectsSection projects={projects} title="Experiencia destacada" showAll />
      <BlogSection posts={recentPosts} />
      <ContactSection
        encodedEmail={encodeEmail('ixzy.dev@gmail.com')}
        socialLinks={socialLinks}
      />
    </>
  )
}
