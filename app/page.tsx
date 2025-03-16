import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart,
  Brain,
  Download,
  Globe,
  MessageSquare,
  Shield,
  Sparkles,
  UserCircle2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AppStoreButton } from "@/components/app-store-button";
import { PlayStoreButton } from "@/components/play-store-button";
import { MobileMenu } from "@/components/mobile-menu";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center gap-2 transition-all duration-300"
            >
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
              <Link
                href="/features"
                className="text-sm font-medium hover:text-primary px-3 py-2"
              >
                Features
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-primary px-3 py-2"
              >
                About
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="text-sm font-medium"
              >
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

      {/* Hero Section */}
      <section className="container py-12 md:py-24 lg:py-32 space-y-8">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Large Logo Display with Animation */}
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="absolute -inset-8 bg-primary/5 rounded-full blur-xl"></div>
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_2024-12-17_143250-removebg-preview%201-1PnN9EJk5Dqwe16JomiVOijih1cdJq.png"
                  alt="Mind Map Logo"
                  width={120}
                  height={120}
                  className="animate-logo-spin"
                />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-primary animate-fade-in">
              Mind Map
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary mb-4">
              Mental Health Tracking & Support
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tighter">
              <span className="text-primary">Track</span> and{" "}
              <span className="text-primary">Improve</span> Your Mental Health
            </h1>
            <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl mt-4">
              Identify your personality type, detect potential disorders, and
              track your daily mental health with our AI-powered application.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Button size="lg" className="gap-2">
                <Download className="h-5 w-5" />
                <span>Download Now</span>
              </Button>
              <Button size="lg" variant="outline" className="gap-2" asChild>
                <Link href="/about">
                  <ArrowRight className="h-5 w-5" />
                  <span>Learn More</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="relative mt-16 hidden md:block">
          <div className="absolute -top-8 left-0 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
          <div className="absolute -top-12 right-0 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
        </div>

        {/* App Steps Section - Redesigned with stacked layout and alternating sides */}
        <div className="mt-16 relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden -z-10">
            <div className="absolute -top-40 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 -right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
          </div>

          <div className="relative mb-16">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-primary/20"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-background px-6 py-2 rounded-full border border-primary/20 shadow-sm">
                <h2 className="text-2xl md:text-3xl font-bold text-center">
                  How <span className="text-primary">Mind Map</span> Works
                </h2>
              </div>
            </div>
          </div>

          <div className="grid gap-20">
            {/* Step 1 - Text on right */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="relative w-[220px] h-[440px] flex-shrink-0 transition-transform duration-500 hover:scale-105 md:translate-x-4">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/5 rounded-[40px] border-4 border-primary/20 overflow-hidden">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-primary/20 rounded-b-xl"></div>
                  <div className="absolute inset-2 rounded-[35px] overflow-hidden border border-primary/10 bg-background">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Android%20Compact%20-%2039-niOly986IpaTQ0pV6TychUWkE4Qeq1.png"
                      alt="Login Screen"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="md:max-w-sm space-y-3">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  1
                </div>
                <h3 className="text-xl font-bold">Sign In</h3>
                <p className="text-muted-foreground">
                  Start your journey by signing in with Google, Apple, or
                  continue as a guest. Your data is securely stored and your
                  privacy is our priority.
                </p>
              </div>
            </div>

            {/* Step 2 - Text on left */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8">
              <div className="relative w-[220px] h-[440px] flex-shrink-0 transition-transform duration-500 hover:scale-105 md:translate-x-4">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/5 rounded-[40px] border-4 border-primary/20 overflow-hidden">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-primary/20 rounded-b-xl"></div>
                  <div className="absolute inset-2 rounded-[35px] overflow-hidden border border-primary/10 bg-background">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/home-UWV3IRuDWwHePNP1H5U7js3d9oWw6E.png"
                      alt="Home Screen"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="md:max-w-sm space-y-3">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  2
                </div>
                <h3 className="text-xl font-bold">Take Assessments</h3>
                <p className="text-muted-foreground">
                  Complete personality and mental health assessments through our
                  scientifically validated 40-question tests designed by mental
                  health professionals.
                </p>
              </div>
            </div>

            {/* Step 3 - Text on right */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="relative w-[220px] h-[440px] flex-shrink-0 transition-transform duration-500 hover:scale-105 md:translate-x-4">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/5 rounded-[40px] border-4 border-primary/20 overflow-hidden">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-primary/20 rounded-b-xl"></div>
                  <div className="absolute inset-2 rounded-[35px] overflow-hidden border border-primary/10 bg-background">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%D9%86%D8%AA%D9%8A%D8%AC%D8%A9%20%D8%A7%D9%84%D8%AA%D9%8A%D8%B3%D8%AA-5TyvmxZEagd1a8H45FEuKQK1G4bSYh.png"
                      alt="Personality Result"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="md:max-w-sm space-y-3">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  3
                </div>
                <h3 className="text-xl font-bold">Discover Your Personality</h3>
                <p className="text-muted-foreground">
                  Get detailed insights about your personality type and traits.
                  Understand your strengths, challenges, and how you interact
                  with the world around you.
                </p>
              </div>
            </div>

            {/* Step 4 - Text on left */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8">
              <div className="relative w-[220px] h-[440px] flex-shrink-0 transition-transform duration-500 hover:scale-105 md:translate-x-4">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/5 rounded-[40px] border-4 border-primary/20 overflow-hidden">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-primary/20 rounded-b-xl"></div>
                  <div className="absolute inset-2 rounded-[35px] overflow-hidden border border-primary/10 bg-background">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Android%20Compact%20-%2083-a4nnMVH8gIP4qZIgEo6lekRwLAyZ9g.png"
                      alt="Disorders List"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="md:max-w-sm space-y-3">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  4
                </div>
                <h3 className="text-xl font-bold">Explore Mental Health</h3>
                <p className="text-muted-foreground">
                  Learn about different mental health conditions and their
                  characteristics. Knowledge is the first step toward
                  understanding and managing your mental health.
                </p>
              </div>
            </div>

            {/* Step 5 - Text on right */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="relative w-[220px] h-[440px] flex-shrink-0 transition-transform duration-500 hover:scale-105 md:translate-x-4">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/5 rounded-[40px] border-4 border-primary/20 overflow-hidden">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-primary/20 rounded-b-xl"></div>
                  <div className="absolute inset-2 rounded-[35px] overflow-hidden border border-primary/10 bg-background">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Android%20Compact%20-%2084-sPkNnSnHhHfBt6lpdzhknI7xnSpzcS.png"
                      alt="Disorder Detail"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="md:max-w-sm space-y-3">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  5
                </div>
                <h3 className="text-xl font-bold">Understand Conditions</h3>
                <p className="text-muted-foreground">
                  Get detailed information about specific mental health
                  conditions and their symptoms. Our app provides comprehensive
                  resources to help you understand what you might be
                  experiencing.
                </p>
              </div>
            </div>

            {/* Step 6 - Text on left */}
            <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8">
              <div className="relative w-[220px] h-[440px] flex-shrink-0 transition-transform duration-500 hover:scale-105 md:translate-x-4">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/5 rounded-[40px] border-4 border-primary/20 overflow-hidden">
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-primary/20 rounded-b-xl"></div>
                  <div className="absolute inset-2 rounded-[35px] overflow-hidden border border-primary/10 bg-background">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Android%20Compact%20-%2055-WO6KT4ehitJJYrm41FnbwkQYLm5I6Y.png"
                      alt="Chat Interface"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="md:max-w-sm space-y-3">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm">
                  6
                </div>
                <h3 className="text-xl font-bold">AI Support</h3>
                <p className="text-muted-foreground">
                  Chat with our AI assistant for guidance and support with your
                  mental health journey. Get personalized recommendations and
                  coping strategies based on your unique profile.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Benefits Section - Replacing Project Goals */}
      <section className="container py-12 md:py-24 lg:py-32">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Why Choose <span className="text-primary">Mind Map</span>?
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Our app is designed to support your mental health journey with these
            key benefits
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="border-t-4 border-t-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="pb-2">
              <UserCircle2 className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Personalized Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Mind Map adapts to your unique personality and mental health
                needs, providing tailored insights and recommendations that work
                specifically for you.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="pb-2">
              <Shield className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Privacy & Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Your mental health data is sensitive. We use end-to-end
                encryption and strict privacy controls to ensure your
                information remains confidential and secure.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="pb-2">
              <Sparkles className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Science-Based Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                All our assessments and recommendations are based on established
                psychological frameworks and reviewed by mental health
                professionals.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="pb-2">
              <MessageSquare className="h-12 w-12 text-primary mb-2" />
              <CardTitle>24/7 AI Support</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our AI assistant is always available to provide guidance, answer
                questions, and offer coping strategies whenever you need
                support.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="pb-2">
              <BarChart className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Progress Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Visualize your mental health journey with intuitive charts and
                reports that help you identify patterns and track improvements
                over time.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="pb-2">
              <Brain className="h-12 w-12 text-primary mb-2" />
              <CardTitle>Educational Resources</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Access a comprehensive library of information about mental
                health conditions, coping strategies, and treatment options.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-24">
        <div className="container flex flex-col items-center text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Improve Your Mental Health?
          </h2>
          <p className="max-w-[700px] md:text-xl">
            Download our app today and start your journey toward better mental
            well-being.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <AppStoreButton variant="white" />
            <PlayStoreButton variant="white" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 md:py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="flex items-center gap-2 transition-transform hover:scale-105"
            >
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
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Contact Us
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2025 Mind Map. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
