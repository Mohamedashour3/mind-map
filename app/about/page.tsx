import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { AppStoreButton } from "@/components/app-store-button"
import { PlayStoreButton } from "@/components/play-store-button"
import { MobileMenu } from "@/components/mobile-menu"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 transition-all duration-300">
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2024-12-17_143250-removebg-preview%201-1PnN9EJk5Dqwe16JomiVOijih1cdJq.png"
                  alt="Mind Map Logo"
                  width={40}
                  height={40}
                  className="transition-transform duration-500 hover:rotate-180"
                />
              </div>
              <span className="text-xl font-bold text-primary">Mind Map</span>
            </Link>
            <nav className="hidden md:flex items-center ml-6">
              <Link href="/features" className="text-sm font-medium hover:text-primary px-3 py-2">
                Features
              </Link>
              <Link href="/about" className="text-sm font-medium text-primary px-3 py-2">
                About
              </Link>
              <Button variant="ghost" size="icon" className="text-sm font-medium">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Toggle Language</span>
              </Button>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-4">
              <AppStoreButton />
              <PlayStoreButton />
            </div>
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* About Content */}
      <main className="flex-1">
        <section className="container py-12 md:py-24 lg:py-32">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <Link href="/" className="inline-flex items-center gap-2 text-primary hover:underline mb-4">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <div className="flex flex-col items-center space-y-4 mb-4">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/5 rounded-full blur-lg"></div>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2024-12-17_143250-removebg-preview%201-1PnN9EJk5Dqwe16JomiVOijih1cdJq.png"
                  alt="Mind Map Logo"
                  width={80}
                  height={80}
                />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">About Mind Map</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Our story, mission, and vision for mental health support
            </p>
          </div>

          <div className="grid gap-12 md:gap-16">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mind Map was founded in 2023 by a team of mental health professionals, technologists, and individuals
                with lived experience of mental health challenges. We recognized the need for accessible, personalized
                mental health support that could reach people wherever they are.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our journey began with a simple question: How can we use technology to make mental health support more
                accessible and effective? The answer was to create a comprehensive platform that combines scientific
                assessments, AI-powered insights, and daily tracking to help people understand and improve their mental
                well-being.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Mind Map, our mission is to democratize access to mental health support and empower individuals to
                take control of their mental well-being. We believe that everyone deserves to understand their mind
                better and have the tools to improve their mental health.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We&apos;re committed to breaking down barriers to mental health support by providing a platform that is
                accessible, affordable, and effective. Our app combines the latest research in psychology with
                cutting-edge technology to deliver personalized insights and support.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Approach</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mind Map takes a holistic approach to mental health, recognizing that each person&apos;s experience is
                unique. Our platform offers:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground leading-relaxed">
                <li>
                  <span className="font-medium text-foreground">Comprehensive Assessments:</span> Scientifically
                  validated tests to identify personality types and potential mental health conditions
                </li>
                <li>
                  <span className="font-medium text-foreground">Daily Tracking:</span> Tools to monitor mood, symptoms,
                  and triggers over time
                </li>
                <li>
                  <span className="font-medium text-foreground">AI-Powered Insights:</span> Personalized recommendations
                  based on your unique profile and patterns
                </li>
                <li>
                  <span className="font-medium text-foreground">Educational Resources:</span> Information about mental
                  health conditions, coping strategies, and treatment options
                </li>
                <li>
                  <span className="font-medium text-foreground">Supportive Community:</span> Connection with others who
                  share similar experiences
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Team</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mind Map is built by a diverse team of experts in psychology, psychiatry, software development, data
                science, and user experience design. We&apos;re united by our passion for mental health and our belief in the
                power of technology to transform lives.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our clinical advisors ensure that all content and features are grounded in evidence-based practices,
                while our lived experience advisors help us create a platform that truly meets the needs of those
                navigating mental health challenges.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 md:py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 transition-transform hover:scale-105">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2024-12-17_143250-removebg-preview%201-1PnN9EJk5Dqwe16JomiVOijih1cdJq.png"
                alt="Mind Map Logo"
                width={40}
                height={40}
              />
              <span className="text-xl font-bold text-primary">Mind Map</span>
            </Link>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground">
              Contact Us
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">© 2025 Mind Map. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

