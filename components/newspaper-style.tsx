"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MapPin, Gift, CalendarIcon, Send } from "lucide-react"
// import Image from "next/image"

export default function NewspaperStyle() {
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  // Set wedding date - example: June 15, 2025
  const weddingDate = new Date("2025-04-05T18:00:00")

  const event = {
    title: "Boda de Mehyli & Miguel",
    description: "¡Nos casamos! Unete a este día tan especial.",
    location: "Palapa Villa Fakeli, callejon toco, Medellín y Madero, 1ra. Secc.",
    startTime: weddingDate.toISOString(),
    endTime: new Date(weddingDate.getTime() + 6 * 60 * 60 * 1000).toISOString(), // 6 hours event
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date()
      const difference = weddingDate.getTime() - now.getTime()

      const d = Math.floor(difference / (1000 * 60 * 60 * 24))
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((difference % (1000 * 60)) / 1000)

      setDays(d)
      setHours(h)
      setMinutes(m)
      setSeconds(s)
    }, 1000)

    return () => clearInterval(interval)
  }, [weddingDate])

  const handleAddToCalendar = () => {
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.startTime.replace(/[-:]/g, "").replace(".000", "")}/${event.endTime.replace(/[-:]/g, "").replace(".000", "")}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}&sf=true&output=xml`
    window.open(googleCalendarUrl, "_blank")
  }

  const handleWhatsAppConfirmation = (assit: boolean) => {
    const message = assit ? encodeURIComponent("Hola! Me gustaría confirmar mi asistencia a la boda.") : encodeURIComponent("Hola! Lamentablemente no podré asistir a la boda.")
    window.open(`https://wa.me/9931727567?text=${message}`, "_blank")
  }

  return (
    <div className="font-serif max-w-4xl mx-auto bg-white">
      <div className="border-b-4 border-black py-6">
        <h1 className="text-center text-6xl font-bold tracking-tighter">THE WEDDING TIMES</h1>
        <p className="text-center text-xl mt-2">SPECIAL EDITION - JUNE 15, 2025</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="md:col-span-2">
          <Card className="border-2 border-black">
            <CardHeader className="border-b border-black">
              <CardTitle className="text-4xl font-bold text-center">Mehyli & Miguel</CardTitle>
              <CardDescription className="text-center text-lg">ARE GETTING MARRIED</CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              {/* <div className="aspect-video relative mb-6">
                <Image src="/placeholder.svg?height=400&width=600" alt="Mehyli and Miguel" fill className="object-cover" />
              </div> */}
              <p className="text-lg leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum
                vestibulum. Cras porttitor metus in nibh finibus, a volutpat felis placerat. Aenean eu enim justo.
                Vestibulum aliquam hendrerit molestie.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border-2 border-black mb-6">
            <CardHeader className="border-b border-black">
              <CardTitle className="text-2xl font-bold">COUNTDOWN</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-4 gap-2 text-center">
                <div>
                  <div className="text-3xl font-bold">{days}</div>
                  <div className="text-xs">DAYS</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{hours}</div>
                  <div className="text-xs">HOURS</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{minutes}</div>
                  <div className="text-xs">MINS</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{seconds}</div>
                  <div className="text-xs">SECS</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-black">
            <CardHeader className="border-b border-black">
              <CardTitle className="text-2xl font-bold">SAVE THE DATE</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
            <div className="text-3xl font-bold">05-Abril-2025</div>
              <Button onClick={handleAddToCalendar} className="w-full mt-4 bg-black text-white hover:bg-gray-800">
                <CalendarIcon className="mr-2 h-4 w-4" /> Add to Calendar
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card className="border-2 border-black">
          <CardHeader className="border-b border-black">
            <CardTitle className="text-2xl font-bold">EVENT DETAILS</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <div>
                  <h3 className="font-bold">Location</h3>
                  <p>{event.location}</p>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3792.048759848387!2d-92.8555268251544!3d18.115539381421705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ee7540f2801ebd%3A0x3d071d9fc48600eb!2sVilla%20FAKELI!5e0!3m2!1ses-419!2smx!4v1741153793332!5m2!1ses-419!2smx" width="300" height="150" loading="lazy"></iframe>
                </div>
              </div>

              <div className="flex items-start">
                <Gift className="h-5 w-5 mr-2 mt-0.5" />
                <div>
                  <h3 className="font-bold">Gift Registry</h3>
                  <p>Event ID: WED2025JJ</p>
                  <p className="text-sm">Use this ID when sending gifts</p>
                </div>
              </div>

              <div className="flex items-start">
                <Send className="h-5 w-5 mr-2 mt-0.5" />
                <div>
                  <h3 className="font-bold">Confirmación</h3>
                  <p>Por favor, confirma tu asistencia</p>
                  <div className="flex flex-row justify-between">
                    <Button onClick={() => handleWhatsAppConfirmation(true)} className="mt-2 bg-black text-white hover:bg-gray-800">
                      Confirmo
                    </Button>
                    <Button onClick={() => handleWhatsAppConfirmation(false)} className="mt-2 bg-white text-black hover:bg-gray-100">
                      No podré asistir
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-black">
          <CardHeader className="border-b border-black">
            <CardTitle className="text-2xl font-bold">SCHEDULE</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex">
                <div className="w-24 font-bold">4:00 PM</div>
                <div>
                  <h3 className="font-bold">Ceremony</h3>
                  <p className="text-sm">Main Hall</p>
                </div>
              </div>
              <Separator className="bg-black" />

              <div className="flex">
                <div className="w-24 font-bold">5:30 PM</div>
                <div>
                  <h3 className="font-bold">Cocktail Hour</h3>
                  <p className="text-sm">Garden Terrace</p>
                </div>
              </div>
              <Separator className="bg-black" />

              <div className="flex">
                <div className="w-24 font-bold">6:30 PM</div>
                <div>
                  <h3 className="font-bold">Dinner</h3>
                  <p className="text-sm">Grand Ballroom</p>
                </div>
              </div>
              <Separator className="bg-black" />

              <div className="flex">
                <div className="w-24 font-bold">8:00 PM</div>
                <div>
                  <h3 className="font-bold">Dancing</h3>
                  <p className="text-sm">Grand Ballroom</p>
                </div>
              </div>
              <Separator className="bg-black" />

              <div className="flex">
                <div className="w-24 font-bold">10:00 PM</div>
                <div>
                  <h3 className="font-bold">Cake Cutting</h3>
                  <p className="text-sm">Grand Ballroom</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <p className="italic">{'"Two souls with but a single thought, two hearts that beat as one."'}</p>
        <p className="mt-4">We look forward to celebrating with you!</p>
      </div>
    </div>
  )
}

