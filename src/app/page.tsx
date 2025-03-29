"use client"

import Head from "next/head"
import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../components/ui/button"
import { Card } from "../components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion"
import { GraduationCap, Globe, Award, Search, MessageCircle, Check, Menu, Library, BarChart3, Briefcase, Users } from "lucide-react"
import { Sheet } from "@/components/ui/sheet"

export default function LandingPage() {
  const [isSheetOpen, setIsSheetOpen] = useState(false)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
     <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: "UniGuide",
            description: "AI-Powered Educational Guidance Platform",
            url: "https://www.uniguide.lk",
            sameAs: [
              "https://www.facebook.com/people/UniGuide/61570932562269/",
              "https://www.instagram.com/uni.guide_lk/",
              "https://www.linkedin.com/company/uniguidelk/",
            ],
          })}
        </script>
      </Head>
    <div className="flex min-h-screen flex-col bg-[#fff]">
      
      {/* Header */}
      <header className="fixed top-0 z-50 flex h-20 w-full items-center justify-between bg-white/30 px-4 backdrop-blur-md lg:px-8">
        <Link href="/" className="flex items-center gap-2 text-3xl font-bold text-blue-600">
          UniGuide
        </Link>
        <nav className="hidden ml-auto space-x-8 lg:flex">
          <Link href="#features" className="text-base font-medium text-black hover:text-blue-600">
            Features
          </Link>
          <Link href="#how-it-works" className="text-base font-medium text-black hover:text-blue-600">
            How It Works
          </Link>
          <Link href="/about" className="text-base font-medium text-black hover:text-blue-600">
            About
          </Link>
          <Link href="/articles" className="text-base font-medium text-black hover:text-blue-600">
            Articles
          </Link>
        </nav>
        <div className="hidden lg:flex ml-auto space-x-4">
          <a href="https://app.uniguide.lk/signup/">
        <Button className="h-10 px-6 rounded-xl bg-black text-white hover:bg-blue-600">
          Get Started
        </Button>
          </a>
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSheetOpen(true)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        <Sheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} side="right">
          <nav className="flex flex-col space-y-4 mt-6">
        <Link href="#features" className="text-lg font-medium text-black hover:text-blue-600">
          Features
        </Link>
        <Link href="#how-it-works" className="text-lg font-medium text-black hover:text-blue-600">
          How It Works
        </Link>
        <Link href="/about" className="text-lg font-medium text-black hover:text-blue-600">
          About
        </Link>
        <Link href="/articles" className="text-lg font-medium text-black hover:text-blue-600">
          Articles
        </Link>
        <a href="https://app.uniguide.lk/signup/">
        <Button className="w-full px-6 rounded-xl bg-black text-white hover:bg-blue-600">
          Get Started
        </Button>
          </a>
          </nav>
        </Sheet>
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
              <a href="https://app.uniguide.lk/signup/">
                <Button className="h-12 w-48 rounded-xl bg-black px-8 hover:bg-blue-600">
                <span>Get Started</span>
              </Button>
              </a>
              <p className="text-sm text-gray-500">
                Already have an account?{" "}
                <Link href="https://app.uniguide.lk/login/" className="text-blue-600 hover:underline">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        <div className="animate-on-scroll mt-16 flex w-full max-w-5xl justify-center">
          <div className="relative w-full aspect-[7/5] sm:aspect-[2/1]">
            {/* Mobile Image */}
            <Image
              src="https://mayuranthanushan.sirv.com/Images/UniGuide/MarketingPage3.png?height=1000&width=1800"
              alt="UniGuide App Interface - Mobile"
              fill
              style={{ objectFit: "contain" }}
              className="rounded-2xl shadow-2xl border-2 border-dashed border-gray-600 sm:hidden"
            />

            {/* Desktop Image */}
            <Image
              src="https://mayuranthanushan.sirv.com/Images/UniGuide/MarketingPage3.png?height=1000&width=1800"
              alt="UniGuide App Interface - Desktop"
              fill
              style={{ objectFit: "contain" }}
              className="rounded-2xl shadow-2xl border-2 border-dashed border-gray-600 hidden sm:block"
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
            <Card key={feature.title} className="animate-on-scroll overflow-hidden border-2 border-dashed border-gray-600 bg-white p-8 transition-all">
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
                Personalized Recommendations for Your Academic Journey
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Discover the best courses, certifications, and study resources tailored just for you. Our powerful recommendation engine analyzes your interests, goals, and progress to suggest the most relevant learning opportunities.
              </p>
              <ul className="mt-8 space-y-4">
                {appFeatures1.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-3 h-6 w-6 flex-shrink-0 text-blue-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 lg:mt-0 w-72 sm:w-1/2">
              <div className="relative h-auto w-full">
                <Image
                  src="https://mayuranthanushan.sirv.com/Images/UniGuide/one.png"
                  alt="Image 1"
                  layout="responsive"
                  width={700}
                  height={400} 
                  objectFit="co-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Preview Section 2 */}
      <section className="overflow-hidden px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="animate-on-scroll flex flex-col items-center lg:flex-row lg:gap-12">
            {/* Content first */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Your AI-Powered Study Assistant
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Meet your 24/7 AI chatbot, designed to guide you through your educational journey. Whether you need career advice, course suggestions, or help with assignments, our AI is here to assist.
              </p>
              <ul className="mt-8 space-y-4">
                {appFeatures2.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-3 h-6 w-6 flex-shrink-0 text-blue-500" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image - will be moved after content on small screens */}
            <div className="mt-12 lg:mt-0 w-72 sm:w-1/2 order-last lg:order-first">
              <div className="relative h-auto w-full">
                <Image
                  src="https://mayuranthanushan.sirv.com/Images/UniGuide/two.png"
                  alt="UniGuide App Interface"
                  layout="responsive"
                  width={700} 
                  height={400}
                  objectFit="contain"
                  className="rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us*/}
      <section id="why-choose-us" className="px-4 pb-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {uniqueSellingPoints.map((point, index) => (
              <div key={index} className="animate-on-scroll flex flex-col items-center text-center">
                <div className="rounded-full bg-blue-100 p-4">
                  <point.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{point.title}</h3>
                <p className="mt-2 text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-4 py-20 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="animate-on-scroll text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Free for Everyone</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              We believe education guidance should be accessible to all
            </p>
          </div>

          <div className="mt-16 mx-auto max-w-3xl">
            <div className="animate-on-scroll rounded-xl overflow-hidden border-2 border-blue-500 bg-white p-8 transition-all shadow-lg">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900">UniGuide Platform</h3>
                <div className="mt-4 flex items-baseline justify-center">
                  <span className="text-4xl font-extrabold text-gray-900">$0</span>
                  <span className="ml-1 text-xl font-medium text-gray-500">/forever</span>
                </div>
                <p className="mt-4 text-gray-600">
                  Our mission is to make quality educational guidance accessible to everyone.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">All Features Included:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 flex-shrink-0 text-blue-500" />
                      <span className="text-gray-600">Smart Course Finder</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 flex-shrink-0 text-blue-500" />
                      <span className="text-gray-600">24/7 AI Study Assistant</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 flex-shrink-0 text-blue-500" />
                      <span className="text-gray-600">Career Compass</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Additional Benefits:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 flex-shrink-0 text-blue-500" />
                      <span className="text-gray-600">Scholarship Tracker</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 flex-shrink-0 text-blue-500" />
                      <span className="text-gray-600">Progress Monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-2 h-5 w-5 flex-shrink-0 text-blue-500" />
                      <span className="text-gray-600">Regular Updates</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 text-center">
              <a href="https://app.uniguide.lk/signup/">
              <Button
                className="h-12 whitespace-nowrap rounded-xl bg-black px-8 text-white hover:bg-blue-600"
                size="lg"
              >
                Get Started Now
              </Button>
              </a>
                <p className="mt-4 text-sm text-gray-500">No credit card required. No hidden fees. Ever.</p>
              </div>
            </div>
          </div>

          <div className="animate-on-scroll mt-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-6 py-3">
              <Users className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">Join 500+ students already using UniGuide</span>
            </div>
            <p className="mt-6 mx-auto max-w-2xl text-gray-600">
              &quot;Education is the most powerful weapon which you can use to change the world.&quot; <br />
              <span className="italic">— Nelson Mandela</span>
            </p>
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
          <div className="animate-on-scroll mx-auto max-w-4xl border-2 border-dashed border-gray-600 p-8 text-center text-white sm:p-16">
            <h2 className="text-3xl font-bold sm:text-4xl text-blue-500">
              Ready to Transform Your Educational Journey?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-black">
              UniGuide is now live! Start exploring personalized educational guidance today.
            </p>
            <div className="mt-8 flex justify-center">
              <a href="https://app.uniguide.lk/signup/">
              <Button
                className="h-12 whitespace-nowrap rounded-xl bg-black px-8 text-white hover:bg-blue-600"
                size="lg"
              >
                Get Started Now
              </Button>
              </a>
            </div>
          </div>
        </section>

      {/* Footer */}
      <footer className="border-t border-gray-600 bg-white px-4 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 space-between gap-4">
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <Link href="/" className="items-center text-4xl font-bold text-blue-600">
                UniGuide
              </Link>
              <p className="mt-4 text-sm text-gray-600">
                Empowering students to make informed decisions about their education and future careers.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end text-right">
              <div className="flex gap-6 justify-end">
                <Link href="https://www.instagram.com/uni.guide_lk/" className="hover:opacity-80">
                  <Image src="square-instagram-brands-solid.svg" alt="Twitter" width={48} height={48} className="w-10 h-10" />
                </Link>
                <Link href="https://www.facebook.com/people/UniGuide/61570932562269/" className="hover:opacity-80">
                  <Image src="square-facebook-brands-solid.svg" alt="LinkedIn" width={48} height={48} className="w-10 h-10" />
                </Link>
                <Link href="https://www.linkedin.com/company/uniguidelk/" className="hover:opacity-80">
                  <Image src="linkedin-brands-solid.svg" alt="Instagram" width={48} height={48} className="w-10 h-10" />
                </Link>
              </div>
              <Link href="mailto:uniguidelk@gmail.com" className="mt-4 text-sm text-gray-600">
                  uniguidelk@gmail.com
                </Link>
            </div>

          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center">
            <p className="text-sm text-gray-600">&copy; 2025 UniGuide. CS-118.</p>
          </div>
        </div>
      </footer>

    </div>
    </>
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
    points: ["360-degree virtual campus tours", "Live information sessions", "Interactive facility maps"],
  },
  {
    title: "Scholarship Tracker",
    description: "Never miss a funding opportunity with our real-time database",
    icon: Award,
    points: ["Personalized scholarship matches", "Application deadline reminders", "Direct application links"],
  },
  {
    title: "Progress Tracker",
    description: "Monitor and optimize your educational journey",
    icon: Chart,
    points: ["Visual progress dashboard", "Goal setting and milestone tracking", "Performance analytics"],
  },
]

const howItWorks = [
  {
    title: "Create Your Profile",
    description: "Tell us about your interests, achievements, and aspirations. Our AI personalizes your experience.",
  },
  {
    title: "Get Matched",
    description:
      "Receive tailored recommendations for courses, universities, and scholarships that align with your goals.",
  },
  {
    title: "Explore Options",
    description: "Use our interactive tools to explore and compare different educational paths and opportunities.",
  },
  {
    title: "Take Action",
    description: "Apply to programs, track your applications, and prepare for your academic journey with our guidance.",
  },
]

const appFeatures1 = [
  "AI-driven course and certification recommendations",
  "Personalized study plans based on your strengths",
  "Adaptive learning paths to maximize success",
  "Smart insights to help you stay ahead",
]

const appFeatures2 = [
  "Instant answers to academic and career-related queries",
  "Personalized guidance based on your learning preferences",
  "Real-time support for planning and decision-making",
  "Engaging conversations to enhance your learning experience", 
]

const faqs = [
  {
    question: "Is UniGuide available now?",
    answer:
      "Yes! UniGuide is now fully launched and available for all users. You can create an account and start using our platform immediately to explore educational opportunities and receive personalized guidance.",
  },
  {
    question: "How does UniGuide's AI technology work?",
    answer:
      "UniGuide uses advanced machine learning algorithms to analyze your unique profile, aspirations, and academic goals. The AI adapts over time to offer personalized guidance that is increasingly tailored to your needs, helping you make informed educational decisions.",
  },
  {
    question: "Is UniGuide free to use?",
    answer:
      "Yes, UniGuide is completely free for all students! We believe in making educational guidance accessible to everyone without any premium plans or fees.",
  },
  {
    question: "How can UniGuide help Sri Lankan students?",
    answer:
      "UniGuide is tailored specifically for Sri Lankan students, offering personalized guidance on local educational options, career paths, and university choices. The platform aims to simplify decision-making and ensure that every student has the support they need to succeed in their academic journey.",
  },
  {
    question: "What types of educational resources does UniGuide provide?",
    answer:
      "UniGuide offers a wide range of resources to help students, including information on university programs, course details, scholarships, career advice, and tips for academic success. Our goal is to provide comprehensive support for students at every stage of their educational journey.",
  },
]

import { BarChartIcon as Chart } from "lucide-react"

const uniqueSellingPoints = [
  {
    title: "Comprehensive Database",
    description:
      "Access detailed information on local universities, including entry requirements, course structures, and career prospects.",
    icon: Library,
  },
  {
    title: "Up-to-Date Insights",
    description:
      "Stay informed with the latest university programs, career trends, and emerging fields to make well-informed decisions.",
    icon: BarChart3,
  },
  {
    title: "Career-Aligned Paths",
    description:
      "Navigate your academic journey with structured learning paths that align with industry demands and career aspirations.",
    icon: Briefcase,
  },
]
