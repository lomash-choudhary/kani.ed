import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-12">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Kaneika</h1>
        <p className="text-xl text-pink-600 mb-4">Your guide to healthy, glowing skin 🩷✨</p>
        <p className="mb-6 text-gray-600 leading-relaxed">
          Welcome to my world of skincare and beauty. I'm passionate about helping you achieve 
          your best skin ever through expert advice, product recommendations, and personalized tips.
        </p>
        <Button asChild>
          <Link href="/about">Learn More About Me</Link>
        </Button>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/kani.jpg"
          alt="Kaneika - Skincare Enthusiast"
          width={400}
          height={400}
          className="rounded-full shadow-lg border-4 border-pink-200"
        />
      </div>
    </div>
  )
}

