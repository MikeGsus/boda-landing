"use client"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { MapPin, Gift, CalendarIcon, Send, Clipboard, SquareArrowOutUpRight } from "lucide-react"


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
    location: "Gran Salon Versalles, Carretera Villahermosa La Isla km 3.5.",
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
    const message = assit ? encodeURIComponent("Hola! Confirmo mi asistencia a la Boda de Mehyli y Miguel, mi nombre es [   ].") : encodeURIComponent("Hola! Soy [   ], lamentablemente no podré asistir a la boda.")
    window.open(`https://wa.me/9933117715?text=${message}`, "_blank")
  }

  const handleCopyToClipboard = (txt: string) => {
    navigator.clipboard.writeText(txt).then(() => {
      alert("Copiado")
    }).catch(err => {
      console.error("Falló al copiar: ", err)
    })
  }

  return (
    <div className="font-serif max-w-4xl mx-auto">
      <h1 className="text-center text-6xl font-bold tracking-tighter">THE WEDDING TIMES</h1>
      <div className="border-y-2 border-black mt-5">
        <p className="text-center text-xl my-1 flex justify-evenly">
          <span>Villahermosa, Tabasco</span>
          <span>Edición Especial</span>
          <span>05 de Abril de 2025</span>
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="md:col-span-2">
          <Card className="border-2 border-black">
            <CardHeader className="border-b border-black">
              <CardTitle className="text-4xl font-bold text-center">Mehyli & Miguel</CardTitle>
              <CardDescription className="text-center text-lg text-black">¡NOS CASAMOS!</CardDescription>
            </CardHeader>
            <CardContent className="pt-6 md:pb-16 text-justify">
              <div className="aspect-video relative mb-6">
                <img src="/img/_MG_6385.jpg?height=400&width=600" alt="Mehyli & Miguel" className="object-cover" />
              </div>
              <div className="text-lg italic text-center my-10">
                <q>Ahora, Señor, no he buscado placer al casarme con esta mujer, lo hago con un corazón sincero. Ten piedad de ella y de mí y llévamos juntos a la vejez</q>
                <p className="text-right mt-1">- cfr. Tobias 8,7</p>
              </div>
              <p className="text-lg leading-relaxed">
                Hace siete años comenzamos a escribir nuestra historia juntos. Ha sido un tiempo lleno de aventuras y grandes emociones. Hoy queremos compartir con ustedes el siguiente capítulo de nuestra vida.
              </p>
              <p className="text-lg leading-relaxed mt-4">
                Nos gustaría invitarlos a celebrar con nosotros este día tan especial, en el que uniremos nuestras vidas en matrimonio.
              </p>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border-2 border-black mb-6">
            <CardHeader className="border-b border-black">
              <CardTitle className="text-2xl font-bold">Cuenta Regresiva</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid grid-cols-4 gap-2 text-center">
                <div>
                  <div className="text-3xl font-bold">{days}</div>
                  <div className="text-xs">DIAS</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{hours}</div>
                  <div className="text-xs">HORAS</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{minutes}</div>
                  <div className="text-xs">MINS</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">{seconds}</div>
                  <div className="text-xs">SEGS</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 border-black mb-6">
            <CardHeader className="border-b border-black">
              <CardTitle className="text-2xl font-bold">SAVE THE DATE</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
            <div className="text-3xl font-bold text-center md:hidden lg:block">05/Abril/2025</div>
            <div className="text-3xl font-bold text-center hidden md:flex md:flex-col lg:hidden">
              <span className="border-b-[1px] border-black mb-2 pb-2">05</span>
              <span className="border-b-[1px] border-black mb-2 pb-2">Abril</span>
              <span>2025</span>
            </div>
              <Button onClick={handleAddToCalendar} className="w-full mt-4 bg-black text-white hover:bg-gray-800">
                <CalendarIcon className="mr-2 h-4 w-4" /> Añadir al Calendario
              </Button>
            </CardContent>
          </Card>
          
          <Card className="border-2 border-black">
            <CardHeader className="border-b border-black">
              <CardTitle className="text-2xl font-bold">MESA DE REGALOS</CardTitle>
              <CardDescription className="text-center text-sm text-black">Su presencia es el mejor presente. Sin embargo, hemos elegido estás opciones de regalo que nos gustaría recibir.</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
            <p className="text-xl font-bold">Liverpool</p>
            <p>Número de Evento: 
              <Button onClick={() => window.open('https://mesaderegalos.liverpool.com.mx/milistaderegalos/51625111')} className="bg-[#e1e1dd] ml-1 text-black border-black rounded-sm hover:bg-[#d5d5cf]">
                51625111 <SquareArrowOutUpRight className="h-4" />
              </Button>
              <Button onClick={() => handleCopyToClipboard('51625111')} className="bg-[#e1e1dd] text-black border-black rounded-sm hover:bg-[#d5d5cf]">
                Copiar <Clipboard className="h-4" />
              </Button>
            </p>
            <p className="text-xl font-bold mt-2">Amazon</p>
            <p>Enlace:
              <Button onClick={() => window.open('https://www.amazon.com.mx/wedding/registry/36O9G85OIP5FN')} className="bg-[#e1e1dd] ml-1 text-black border-black rounded-sm hover:bg-[#d5d5cf]">
                Presione aquí <SquareArrowOutUpRight className="h-4" />
              </Button>
            </p>
            <p className="text-xl font-bold mt-2">Cuenta para depositos</p>
            <p>
              BBVA <br />
              <Button onClick={() => handleCopyToClipboard('4152313871712480')} className="bg-[#e1e1dd] text-black border-black rounded-sm hover:bg-[#d5d5cf]">
                4152 3138 7171 2480 <Clipboard className="h-4" />
              </Button>
              Cinthia Mehyli Ortiz Morales
            </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <Card className="border-2 border-black">
          <CardHeader className="border-b border-black">
            <CardTitle className="text-2xl font-bold">DETALLES DEL EVENTO</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5" />
                <div>
                  <h3 className="font-bold">Ubicación</h3>
                  <p>{event.location}</p>
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.33443513798!2d-93.00485662515764!3d17.96317098596361!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85edd6922930cf45%3A0x4da022f29b9211ef!2sGran%20Salon%20Versalles!5e0!3m2!1ses-419!2smx!4v1741240469833!5m2!1ses-419!2smx"
                    width="300"
                    height="150"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex items-start">
                <Gift className="h-5 w-5 mr-2 mt-0.5" />
                <div>
                  <h3 className="font-bold">Mesa de regalo</h3>
                  <p className="text-sm">Liverpool</p>
                  <p>Número de Evento: 
                    <Button onClick={handleCopyToClipboard} className="shadow-none bg-white text-black hover:bg-white">
                      51625111 <Clipboard className="h-4" />
                    </Button>
                  </p>
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
            <CardTitle className="text-2xl font-bold">PROGRAMA</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-10 mt-[10%] h-full">
              <div className="flex">
                <div className="w-24 font-bold">6:00 PM</div>
                <div>
                  <h3 className="font-bold">Misa</h3>
                  <p className="text-sm">
                    <a
                      href="https://maps.app.goo.gl/MzTWGVXWowrKb8jTA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Capilla de San Rafael <MapPin className="h-5 w-5 ml-1 mt-0.5" />
                    </a>
                  </p>
                </div>
              </div>
              <Separator className="bg-black" />

              <div className="flex">
                <div className="w-24 font-bold">7:30 PM</div>
                <div>
                  <h3 className="font-bold">Recepción</h3>
                  <p className="text-sm">Gran Salón Versalles</p>
                </div>
              </div>
              <Separator className="bg-black" />

              <div className="flex">
                <div className="w-24 font-bold">8:00 PM</div>
                <div>
                  <h3 className="font-bold">Cena</h3>
                  <p className="text-sm">Gran Salón Versalles</p>
                </div>
              </div>
              {/* <Separator className="bg-black" />

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
              </div> */}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <p className="italic">{'"Dos almas con un solo pensamiento, dos corazones que laten como uno."'}</p>
        <p className="mt-4">¡Esperamos celebrar contigo!</p>
      </div>
    </div>
  )
}

