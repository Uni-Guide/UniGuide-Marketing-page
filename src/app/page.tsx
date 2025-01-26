"use client";

import { useEffect } from 'react'
import Image from "next/image"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Card } from "../components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"
import { GraduationCap, Globe, Award, Search, MessageCircle, ArrowRight, Check } from 'lucide-react'

export default function LandingPage() {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-[#fff]">
      {/* Header */}
      <header className="fixed top-0 z-50 flex h-20 w-full items-center justify-between bg-white/30 px-4 backdrop-blur-md lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
          UniGuide
        </Link>
        <nav className="hidden space-x-8 md:flex">
          <Link href="#features" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            How It Works
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-600 hover:text-gray-900">
            About
          </Link>
        </nav>
              <Button className="h-12 rounded-xl bg-black px-8 hover:bg-blue-600">
                <span>Sign Up</span>
              </Button>
      </header>

      {/* Hero Section */}
      <section className="relative mt-20 flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 py-20 text-center lg:px-8">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-4xl">
          <div className="animate-on-scroll">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">AI-Powered Educational</span>
              <span className="mt-2 block text-blue-600">
                Guidance Platform
              </span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
              UniGuide provides personalized support, interactive guidance, and real-time feedback, 
              making educational planning more accessible and engaging for all students.
            </p>
          </div>
          <div className="animate-on-scroll mt-8 flex flex-col items-center space-y-4">
                <Button className="h-12 rounded-xl bg-black px-8 hover:bg-blue-600">
                <span>Sign Up</span>
              </Button>
            <p className="text-sm text-gray-500">
              Already have an account?{' '}
              <Link href="#" className="text-blue-600 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
        <div className="animate-on-scroll mt-16 flex w-full max-w-5xl justify-center">
          <div className="relative h-[500px] w-full">
            <Image
              src="https://mayuranthanushan.sirv.com/Images/UniGuide/Marketing%20Page.png?height=1000&width=1800"
              alt="UniGuide App Interface"
              layout="fill"
              objectFit="contain"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-20 lg:px-8">
        <div className="animate-on-scroll text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything You Need to Succeed
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Discover how UniGuide empowers your educational journey with cutting-edge AI technology
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="animate-on-scroll overflow-hidden rounded-2xl border-0 bg-white p-8 shadow-lg transition-all hover:shadow-xl">
              <div className="rounded-xl bg-blue-50 p-3 w-fit">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
              <ul className="mt-4 space-y-3">
                {feature.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start text-sm text-gray-600">
                    <Check className="mr-2 h-5 w-5 flex-shrink-0 text-blue-500" />
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="px-4 py-20 lg:px-8">
        <div className="animate-on-scroll text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            How UniGuide Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Your journey to academic success made simple
          </p>
        </div>
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((step, index) => (
            <div key={index} className="animate-on-scroll flex flex-col items-center text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-2xl font-bold text-blue-600">
                {index + 1}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* App Preview Section */}
      <section className="overflow-hidden px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="animate-on-scroll flex flex-col items-center lg:flex-row lg:gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Experience the Future of Education
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our intuitive interface and powerful AI make educational planning seamless and enjoyable.
              </p>
              <ul className="mt-8 space-y-4">
                {appFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-3 h-6 w-6 flex-shrink-0 text-blue-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 lg:mt-0 lg:w-1/2">
              <div className="relative h-[600px] w-full">
                <Image
                  src="https://mayuranthanushan.sirv.com/Images/UniGuide/one.png"
                  alt="Image 1"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="animate-on-scroll flex flex-col items-center lg:flex-row lg:gap-12">
            <div className="mt-12 lg:mt-0 lg:w-1/2">
              <div className="relative h-[600px] w-full">
                <Image
                  src="https://mayuranthanushan.sirv.com/Images/UniGuide/two.png"
                  alt="UniGuide App Interface"
                  layout="fill"
                  objectFit="contain"
                  className="rounded-2xl"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Experience the Future of Education
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our intuitive interface and powerful AI make educational planning seamless and enjoyable.
              </p>
              <ul className="mt-8 space-y-4">
                {appFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-3 h-6 w-6 flex-shrink-0 text-blue-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="animate-on-scroll text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Get answers to common questions about UniGuide
            </p>
          </div>
            <Accordion type="single" collapsible className="mt-12">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  title={faq.question}
                  className="animate-on-scroll"
                >
                  <AccordionTrigger className="text-left text-lg font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 lg:px-8">
        <div className="animate-on-scroll mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-blue-500 to-blue-500 p-8 text-center text-white sm:p-16">
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to Transform Your Educational Journey?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-50">
            Join our waitlist today and be among the first to experience the future of educational guidance.
          </p>
          <form className="mx-auto mt-8 flex max-w-md flex-col items-center gap-4 sm:flex-row">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="h-12 w-full rounded-xl border-white/20 bg-white/10 text-white placeholder:text-white/60"
            />
            <Button className="h-12 whitespace-nowrap rounded-xl bg-white px-8 text-blue-600 hover:bg-white/90">
              Join Waitlist
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white px-4 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <Link href="/" className="flex items-center gap-2 text-xl font-bold text-blue-600">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="UniGuide Logo"
                  width={40}
                  height={40}
                  className="rounded-xl"
                />
                UniGuide
              </Link>
              <p className="mt-4 text-sm text-gray-600">
                Empowering students to make informed decisions about their education and future careers.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#features" className="text-gray-600 hover:text-gray-900">Features</Link></li>
                <li><Link href="#how-it-works" className="text-gray-600 hover:text-gray-900">How It Works</Link></li>
                <li><Link href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Connect With Us</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Twitter</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">LinkedIn</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Instagram</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-gray-600">&copy; 2023 UniGuide. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const features = [
  {
    title: "Smart Course Finder",
    description: "Discover your perfect academic path with our intelligent recommendation system",
    icon: Search,
    points: [
      "Personalized course recommendations based on your interests and goals",
      "Comprehensive database of programs worldwide",
      "Advanced filters for tuition, location, and duration",
    ],
  },
  {
    title: "AI Study Assistant",
    description: "24/7 intelligent support for all your academic needs",
    icon: MessageCircle,
    points: [
      "Instant answers to your questions on any subject",
      "Personalized study plans and progress tracking",
      "Interactive quizzes and practice tests",
    ],
  },
  {
    title: "Career Compass",
    description: "Navigate your future career path with confidence",
    icon: GraduationCap,
    points: [
      "In-depth career path visualizations",
      "Real-time job market insights",
      "Skill gap analysis and recommendations",
    ],
  },
  {
    title: "Virtual Campus Explorer",
    description: "Experience university life from anywhere in the world",
    icon: Globe,
    points: [
      "360-degree virtual campus tours",
      "Live information sessions",
      "Interactive facility maps",
    ],
  },
  {
    title: "Scholarship Tracker",
    description: "Never miss a funding opportunity with our real-time database",
    icon: Award,
    points: [
      "Personalized scholarship matches",
      "Application deadline reminders",
      "Direct application links",
    ],
  },
  {
    title: "Progress Tracker",
    description: "Monitor and optimize your educational journey",
    icon: Chart,
    points: [
      "Visual progress dashboard",
      "Goal setting and milestone tracking",
      "Performance analytics",
    ],
  },
]

const howItWorks = [
  {
    title: "Create Your Profile",
    description: "Tell us about your interests, achievements, and aspirations. Our AI personalizes your experience."
  },
  {
    title: "Get Matched",
    description: "Receive tailored recommendations for courses, universities, and scholarships that align with your goals."
  },
  {
    title: "Explore Options",
    description: "Use our interactive tools to explore and compare different educational paths and opportunities."
  },
  {
    title: "Take Action",
    description: "Apply to programs, track your applications, and prepare for your academic journey with our guidance."
  }
]

const appFeatures = [
  "Intuitive dashboard for tracking all your applications",
  "Real-time notifications for deadlines and updates",
  "Interactive AI chatbot for instant support",
  "Personalized study plans and resources",
  "Progress tracking and achievement badges",
  "Collaboration tools for group projects",
]

const faqs = [
  {
    question: "When will UniGuide be available?",
    answer: "We're currently in the final stages of development and plan to launch in the coming months. Join our waitlist to be among the first to access UniGuide and receive exclusive early-bird benefits."
  },
  {
    question: "How does the AI technology work?",
    answer: "Our AI system uses advanced machine learning algorithms to analyze your profile, preferences, and goals. It provides personalized recommendations and adapts to your learning style over time, ensuring increasingly accurate and helpful guidance."
  },
  {
    question: "Is UniGuide free to use?",
    answer: "We plan to offer both free and premium features. Our basic features will be available to all users, while advanced features and personalized guidance will be part of our premium offerings. Pricing details will be announced closer to launch."
  },
  {
    question: "Can international students use UniGuide?",
    answer: "Yes! UniGuide is designed to support students worldwide. Our platform includes information about international programs, language support, and resources specific to studying abroad."
  },
  {
    question: "How accurate is the course matching?",
    answer: "Our course matching algorithm considers multiple factors including your interests, academic history, career goals, and admission requirements. It continuously learns and improves from user feedback to provide highly accurate recommendations."
  }
]

import { BarChartIcon as Chart } from 'lucide-react'

