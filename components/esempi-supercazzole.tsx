import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export function EsempiSupercazzole() {
  const esempi = [
    {
      testo: "Come se fosse antani, la supercazzola prematurata con scappellamento a destra, come fosse Brambilla!",
      film: "Amici Miei (1975)",
    },
    {
      testo:
        "Tarapia tapioco! Prematurata la supercazzola o scherziamo? Prego, mi porga l'indice; ecco lo alzi così... guardi, guardi, guardi. Lo vede il dito? Lo vede che stuzzica, che prematura anche?",
      film: "Amici Miei (1975)",
    },
    {
      testo:
        "No, mi permetta. No, io... scusi, noi siamo in quattro. Come se fosse antani anche per lei soltanto in due, oppure in quattro anche scribai con cofandina. Come antifurto, per esempio.",
      film: "Amici Miei - Atto II (1982)",
    },
  ]

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold text-amber-800 mb-6 text-center">Supercazzole Celebri</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {esempi.map((esempio, index) => (
          <Card key={index} className="bg-white border-amber-200 shadow-md">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg text-amber-700">Esempio {index + 1}</CardTitle>
              <CardDescription>{esempio.film}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-amber-900 italic">{esempio.testo}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
