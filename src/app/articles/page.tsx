"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Menu } from "lucide-react"
import { Sheet } from "@/components/ui/sheet"
import Head from "next/head"

export default function ArticlesPage() {
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

  const filteredArticles = articles

  return (
    <>
      <Head>
        <title>Articles - UniGuide Educational Resources</title>
        <meta
          name="description"
          content="Explore UniGuide's collection of articles on education, career guidance, technology, and more to help you navigate your academic journey."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": "https://www.uniguide.com/articles",
            },
            name: "UniGuide Articles",
            description: "Educational resources and insights to help students succeed",
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
        <a href="https://app.uniguide.lk/signup/">
        <Button className="w-full px-6 rounded-xl bg-black text-white hover:bg-blue-600">
          Get Started
        </Button>
          </a>
          </nav>
        </Sheet>
      </header>

        <main className="flex-1 mt-20">
          {/* Hero Section */}
          <section className="relative flex flex-col items-center justify-center overflow-hidden px-4 py-20 text-center lg:px-8">
            <div className="relative z-10 max-w-4xl">
              <div className="animate-on-scroll">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">UniGuide Articles</span>
                  <span className="mt-2 block text-blue-600">Insights for Your Educational Journey</span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl">
                  Explore our collection of expert articles, guides, and resources to help you navigate your academic
                  path and achieve your goals.
                </p>
              </div>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="px-4 py-12 lg:px-8">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 md:grid-cols-2">
                {filteredArticles.map((article, index) => (
                  <Card
                    key={index}
                    className="animate-on-scroll overflow-hidden border-2 border-dashed border-gray-600 p-6"
                  >
                    <div className="relative h-48 w-full rounded-lg overflow-hidden">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="pt-6">
                      <div className="flex items-center justify-between mt-4 mb-4">
                        <span className="inline-block px-3 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">
                        {article.category}
                        </span>
                        <p className="text-xs text-gray-600">{article.date}</p>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{article.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                      <a href={article.link}><Button className="w-full mt-4 rounded-xl bg-black hover:bg-blue-600">Read Article</Button></a>
                    </div>
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

// Extended articles data for the articles page
const articles = [
{
    title: "UniGuide: Revolutionizing Educational Pathways in Sri Lanka",
    excerpt:
      "Introduces UniGuide as an innovative platform transforming educational guidance in Sri Lanka.​",
    category: "Education",
    date: "March 19, 2025",
    image: "https://mayuranthanushan.sirv.com/Images/UniGuide/article1.jpg",
    link: "https://medium.com/@uniguidelk/uniguide-revolutionizing-educational-pathways-in-sri-lanka-cbbbb58da99f",
  },
  {
    title: "Why UniGuide Enhances Rather Than Replaces Traditional Career Counseling",
    excerpt:
      "Highlights how UniGuide complements, rather than substitutes, traditional career counseling methods.​",
    category: "Education",
    date: "March 20, 2025",
    image: "https://mayuranthanushan.sirv.com/Images/UniGuide/article2.webp",
    link: "https://medium.com/@uniguidelk/the-human-element-why-uniguide-enhances-rather-than-replaces-traditional-career-counseling-f3ec68fcd8c8",
  },
  {
    title: "The Crucial Balance Between AI and Human Guidance in UniGuide’s Services",
    excerpt:
      "Discusses the importance of integrating human insight with AI to enhance UniGuide's educational support.",
    category: "Technology",
    date: "March 21, 2025",
    image: "https://mayuranthanushan.sirv.com/Images/UniGuide/article33.webp",
    link: "https://medium.com/@uniguidelk/beyond-the-algorithm-the-crucial-balance-between-ai-and-human-guidance-in-uniguides-171bd2434567",
  },
  {
    title: "UniGuide’s Struggle to Reach All Sri Lankan Students",
    excerpt:
      "Explores the obstacles UniGuide faces in providing equitable digital educational guidance across Sri Lanka.",
    category: "Technology",
    date: "March 23, 2025",
    image: "https://mayuranthanushan.sirv.com/Images/UniGuide/article44.webp",
    link: "https://medium.com/@uniguidelk/the-digital-divide-challenge-uniguides-struggle-to-reach-all-sri-lankan-students-c0b1172ad0d1?",
  },
]
