"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Head from "next/head"
import { Card } from "@/components/ui/card"
import { Menu } from "lucide-react"
import { Sheet } from "@/components/ui/sheet"

export default function AboutPage() {
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
        <title>About UniGuide - AI-Powered Educational Guidance Platform</title>
        <meta
          name="description"
          content="Learn about UniGuide's mission to revolutionize educational planning with AI-driven personalized guidance and support for students worldwide."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.uniguide.lk/about",
            },
            name: "About UniGuide",
            description:
              "UniGuide is an AI-powered educational guidance platform that provides personalized support for students in their academic journey.",
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
          <Link href="/#features" className="text-base font-medium text-black hover:text-blue-600">
            Features
          </Link>
          <Link href="/#how-it-works" className="text-base font-medium text-black hover:text-blue-600">
            How It Works
          </Link>
          <Link href="/about" className="text-base font-medium text-black hover:text-blue-600">
            About
          </Link>
          <Link href="/articles" className="text-base font-medium text-black hover:text-blue-600">
            Articles
          </Link>
        </nav>
        <div className="hidden lg:block">
        </div>
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsSheetOpen(true)}>
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
        <Sheet isOpen={isSheetOpen} onClose={() => setIsSheetOpen(false)} side="right">
          <nav className="flex flex-col space-y-4 mt-6">
            <Link href="/#features" className="text-lg font-medium text-black hover:text-blue-600">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-lg font-medium text-black hover:text-blue-600">
              How It Works
            </Link>
            <Link href="/about" className="text-lg font-medium text-black hover:text-blue-600">
              About
            </Link>
            <Link href="/articles" className="text-lg font-medium text-black hover:text-blue-600">
              Articles
            </Link>
          </nav>
        </Sheet>
      </header>

      <main className="flex-1 mt-20">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-20 text-center lg:px-8">
          <div className="relative z-10 max-w-4xl">
            <div className="animate-on-scroll">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">About UniGuide</span>
                <span className="mt-2 block text-blue-600">Empowering Educational Journeys</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
                UniGuide is revolutionizing the way students navigate their educational paths with cutting-edge AI
                technology and personalized guidance.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="px-4 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center lg:text-left">Mission</h2>
            <div className="animate-on-scroll flex flex-col items-center lg:flex-row lg:gap-12">
              <div className="lg:w-1/2">
                <p className="mt-4 text-lg text-gray-600">
                  At UniGuide, we aim to democratize access to quality education by providing AI-driven guidance to students worldwide. We believe every student deserves the opportunity to unlock their potential and pursue their dreams, and our platform offers tailored resources and advice to support them at every stage of their academic journey.
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  Using artificial intelligence and machine learning, we simplify the process of educational decision-making. Our platform provides personalized recommendations based on each student’s unique aspirations, strengths, and circumstances, making it easier for them to choose the right courses, universities, and career paths.
                </p>
                <p className="mt-4 text-lg text-gray-600">
                  UniGuide strives to make educational guidance more accessible and efficient. By offering relevant insights and support, we empower students with the tools they need to succeed and shape a brighter future for education globally.
                </p>
              </div>
                <div className="mt-12 lg:mt-0 w-72 sm:w-1/2">
                <div className="relative h-auto w-full">
                <Image
                    src="https://mayuranthanushan.sirv.com/Images/UniGuide/three.png"
                    alt="Image 3"
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


        {/* Our Team Section */}
        <section className="px-4 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="animate-on-scroll text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Meet Our Team</h2>
              <p className="mt-4 text-lg text-gray-600">
                The passionate individuals behind UniGuide&apos;s mission to transform education
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member, index) => (
                <Card key={index} className="animate-on-scroll overflow-hidden bg-white border-2 border-dashed border-gray-600 p-6 transition-all">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover rounded-lg mb-4"
                  />
                  <div className="flex gap-2">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name} </h3>
                  <Link href={member.linkedin} className="text-gray-400 hover:text-blue-500">
                    <Link href={member.linkedin} className="hover:opacity-80">
                    <Image src="linkedin-brands-solid.svg" alt="Instagram" width={48} height={48} className="w-5 h-5" />
                    </Link>
                  </Link>
                  </div>
                  <p className="text-gray-600">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-500">{member.bio}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

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

const teamMembers = [
{
    "name": "Harinejan Panchalingam",
    "role": "Co-Founder",
    "bio": "Harinejan leads UniGuide’s marketing efforts while specializing in authentication systems and CI/CD pipelines to ensure seamless and secure platform deployment.",
    "image": "https://mayuranthanushan.sirv.com/Images/UniGuide/nejan3.jpg?height=300&width=300",
    "linkedin": "https://www.linkedin.com/in/hari-nejan-panchalingam/"
},
{
    "name": "Lakith Garusingarachi",
    "role": "Co-Founder",
    "bio": "Lakith is a backend and machine learning expert, dedicated to developing scalable architectures and AI-driven features for UniGuide.",
    "image": "https://mayuranthanushan.sirv.com/Images/UniGuide/lakith2.jpg?height=300&width=300",
    "linkedin": "https://www.linkedin.com/in/lakith-garusingarachchi-316b571b1/"
},
{
    "name": "Mayuran Thanushan",
    "role": "Co-Founder",
    "bio": "Thanushan specializes in frontend, UI/UX and marketing, ensuring UniGuide delivers a seamless and visually engaging experience while expanding its reach.",
    "image": "https://mayuranthanushan.sirv.com/Images/UniGuide/thanushan2.jpg?height=300&width=300",
    "linkedin": "https://www.linkedin.com/in/mayuran-thanushan-a74b87292"
},
{
    "name": "Nisal Nethmika",
    "role": "Co-Founder",
    "bio": "Nisal focuses on frontend development and data collection, building interactive user interfaces and ensuring high-quality data insights for UniGuide.",
    "image": "https://mayuranthanushan.sirv.com/Images/UniGuide/nisal1.jpg?height=300&width=300",
    "linkedin": "https://www.linkedin.com/in/nisal-nethmika-519233294/"
},
{
    "name": "Sahan Senaviratne",
    "role": "Co-Founder",
    "bio": "Sahan is a backend and machine learning specialist, developing robust APIs and AI-driven solutions to enhance UniGuide’s performance and intelligence.",
    "image": "https://mayuranthanushan.sirv.com/Images/UniGuide/sahan2.jpg?height=300&width=300",
    "linkedin": "https://www.linkedin.com/in/sahan-dakshitha45/"
},
{
    "name": "Thanugi Weerasinghe",
    "role": "Co-Founder",
    "bio": "Thanugi focuses on frontend development and research, refining UniGuide’s user experience while driving innovation through in-depth studies and analysis.",
    "image": "https://mayuranthanushan.sirv.com/Images/UniGuide/thanugi.jpg?height=300&width=300",
    "linkedin": "https://www.linkedin.com/in/thanugi-weerasinghe-6799772b5/"
}
]

