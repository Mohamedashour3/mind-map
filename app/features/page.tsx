import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, BarChart, Brain, Globe, MessageSquare, Search, Shield, Sparkles, UserCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AppStoreButton } from "@/components/app-store-button"
import { PlayStoreButton } from "@/components/play-store-button"
import { MobileMenu } from "@/components/mobile-menu"

export default function FeaturesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
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
                <Link href="/features" className="text-sm font-medium text-primary px-3 py-2">
                  Features
                </Link>
                <Link href="/about" className="text-sm font-medium hover:text-primary px-3 py-2">
                  About
                </Link>
                <Button variant="ghost" size="icon" className="text-sm font-medium">
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Toggle Language</span>
                </Button>
              </nav>
            </div>
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

      {/* Features Content */}
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">Features</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Discover how Mind Map can help you understand and improve your mental health
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <UserCircle2 className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Personality Assessment</CardTitle>
                <CardDescription>Discover your unique personality type</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our comprehensive 40-question assessment helps you understand your personality traits, strengths, and
                  potential growth areas. Based on established psychological frameworks, this test provides insights
                  into how you perceive the world and make decisions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Brain className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Mental Health Screening</CardTitle>
                <CardDescription>Identify potential mental health conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our screening tools can help detect signs of common mental health conditions like anxiety, depression,
                  and ADHD. These assessments are designed to raise awareness and encourage seeking professional support
                  when needed.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <MessageSquare className="h-12 w-12 text-primary mb-2" />
                <CardTitle>AI-Powered Chat Support</CardTitle>
                <CardDescription>Get guidance and support anytime</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our AI assistant is available 24/7 to provide emotional support, answer questions about mental health,
                  and offer coping strategies. While not a replacement for professional care, it&apos;s a helpful resource
                  for daily mental health management.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BarChart className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>Monitor your mental health journey</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track your mood, symptoms, and triggers over time with our intuitive tracking tools. Visualize
                  patterns and progress through customizable charts and reports, helping you identify what improves or
                  challenges your mental well-being.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Search className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Educational Resources</CardTitle>
                <CardDescription>Learn about mental health conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access our extensive library of articles, videos, and resources about various mental health
                  conditions, treatment options, and self-care strategies. All content is reviewed by mental health
                  professionals to ensure accuracy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Sparkles className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Personalized Recommendations</CardTitle>
                <CardDescription>Get tailored mental health suggestions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Receive customized recommendations for coping strategies, activities, and resources based on your
                  personality type, mental health profile, and tracking data. Our AI analyzes your patterns to suggest
                  what might work best for you.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="h-12 w-12 text-primary mb-2" />
                <CardTitle>Privacy & Security</CardTitle>
                <CardDescription>Your data is protected</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We prioritize your privacy with end-to-end encryption, anonymous usage options, and strict data
                  protection policies. You control what information you share and how it&apos;s used, with the option to
                  delete your data at any time.
                </p>
              </CardContent>
            </Card>
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

