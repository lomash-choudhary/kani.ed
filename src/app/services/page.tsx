import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Services() {
  const services = [
    {
      title: "Content Creation",
      description: "Engaging and informative skincare content for your brand's social media and blog."
    },
    {
      title: "Brand Collaborations",
      description: "Authentic partnerships to showcase your products to my engaged audience."
    },
    {
      title: "Product Reviews",
      description: "Honest, in-depth reviews of skincare products based on thorough testing."
    },
    {
      title: "Skincare Consultations",
      description: "Personalized skincare advice and routine building for individuals."
    }
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">My Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-pink-600">{service.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

