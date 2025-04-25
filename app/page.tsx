"use client"

import { useState } from "react"
import { Loader2, Send, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Header } from "@/components/header"
// Aggiungi l'import per il componente Footer
import { Footer } from "@/components/footer"
// Aggiungi l'import per il componente EsempiSupercazzole
import { EsempiSupercazzole } from "@/components/esempi-supercazzole"

export default function Home() {
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [supercazzola, setSupercazzola] = useState("")

  const generateSupercazzola = async () => {
    if (!input.trim()) return

    setIsLoading(true)
    setSupercazzola("")

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      })

      if (!response.ok) {
        throw new Error("Errore nella risposta del server")
      }

      const data = await response.json()
      setSupercazzola(data.supercazzola)
    } catch (error) {
      console.error("Errore durante la generazione:", error)
      setSupercazzola("Errore durante la generazione della supercazzola. Riprova più tardi.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-amber-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-amber-800 mb-4">Supercazzole Generator</h1>
            <p className="text-xl text-amber-700 max-w-2xl mx-auto">
              Genera supercazzole nello stile inconfondibile del Conte Lello Mascetti di Amici Miei
            </p>
          </div>

          <Card className="bg-white border-amber-200 shadow-lg">
            <CardHeader className="border-b border-amber-100">
              <CardTitle className="text-2xl text-amber-800">Generatore di Supercazzole</CardTitle>
              <CardDescription>
                Inserisci un argomento o una frase e il Conte Mascetti la trasformerà in una supercazzola
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="input" className="block text-sm font-medium text-amber-700 mb-1">
                    Il tuo argomento
                  </label>
                  <Input
                    id="input"
                    placeholder="Es. politica, calcio, tecnologia..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border-amber-200 focus:border-amber-400 focus:ring-amber-400"
                  />
                </div>

                {supercazzola && (
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-amber-700 mb-1">
                      La Supercazzola del Conte Mascetti
                    </label>
                    <div className="relative">
                      <Textarea
                        value={supercazzola}
                        readOnly
                        className="min-h-[120px] bg-amber-50 border-amber-200 text-amber-900 font-medium italic"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        className="absolute top-2 right-2 h-8 w-8 bg-white"
                        onClick={() => {
                          navigator.clipboard.writeText(supercazzola)
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-amber-700"
                        >
                          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                        </svg>
                        <span className="sr-only">Copia</span>
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between border-t border-amber-100 pt-4">
              <Button
                variant="outline"
                onClick={() => setInput("")}
                disabled={!input || isLoading}
                className="border-amber-200 text-amber-700 hover:bg-amber-50"
              >
                <RefreshCw className="mr-2 h-4 w-4" />
                Cancella
              </Button>
              <Button
                onClick={generateSupercazzola}
                disabled={!input || isLoading}
                className="bg-amber-600 hover:bg-amber-700 text-white"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Generando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Genera Supercazzola
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          <EsempiSupercazzole />
          <div className="mt-12 bg-white p-6 rounded-lg border border-amber-200 shadow-md">
            <h2 className="text-2xl font-bold text-amber-800 mb-4">Cos'è una Supercazzola?</h2>
            <p className="text-amber-700 mb-4">
              La supercazzola è un termine coniato nel film "Amici miei" del 1975, diretto da Mario Monicelli. Si tratta
              di un discorso senza senso, composto da parole inventate o usate in modo improprio, con lo scopo di
              confondere l'interlocutore.
            </p>
            <p className="text-amber-700">
              Il Conte Lello Mascetti, interpretato da Ugo Tognazzi, è il maestro indiscusso della supercazzola, capace
              di improvvisare frasi assurde ma pronunciate con tale sicurezza da sembrare quasi sensate.
            </p>
          </div>
        </div>
      </main>
      {/* Aggiungi il Footer dopo la chiusura del tag main */}
      <Footer />
    </>
  )
}
