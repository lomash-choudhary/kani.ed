import Image from 'next/image'
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">About Me</h1>
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center mb-8">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Kaneika - Skincare Enthusiast"
              width={300}
              height={300}
              className="rounded-full shadow-lg mb-4 md:mb-0 md:mr-8 border-4 border-pink-200"
            />
            <div>
              <p className="mb-4 text-gray-600 leading-relaxed">
                Hi, I'm Kaneika! I'm a passionate skincare enthusiast and freelance beauty content creator. 
                My journey in the world of skincare began when I struggled with my own skin issues and 
                discovered the transformative power of a good skincare routine.
              </p>
              <p className="mb-4 text-gray-600 leading-relaxed">
                With years of experience and continuous learning, I've had the privilege of working with 
                over 40 brands, creating content that educates and inspires. My mission is to help you 
                navigate the complex world of skincare and find the perfect routine for your unique skin.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When I'm not testing new products or creating content, you can find me exploring local 
                cafes, practicing yoga, or curled up with a good book and a sheet mask.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

