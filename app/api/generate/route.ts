import { type NextRequest, NextResponse } from "next/server"
import { PromptTemplate } from "@langchain/core/prompts"
import { StringOutputParser } from "@langchain/core/output_parsers"
import { ChatOpenAI } from "@langchain/openai"

export async function POST(req: NextRequest) {
  try {
    const { input } = await req.json()

    if (!input || typeof input !== "string") {
      return NextResponse.json({ error: "Input mancante o non valido" }, { status: 400 })
    }

    // Inizializzazione del modello OpenAI
    const model = new ChatOpenAI({
      openAIApiKey: process.env.OPENAI_API_KEY,
      modelName: "gpt-4o",
      temperature: 0.8,
    })

    // Creazione del template di prompt
    const promptTemplate = PromptTemplate.fromTemplate(`
      Sei il Conte Lello Mascetti del film "Amici Miei". 
      Sei famoso per le tue "supercazzole", frasi senza senso che sembrano importanti.
      
      Una supercazzola contiene parole inventate come "antani", "prematurata", "scappellamento", 
      "tarapia tapioco", ecc. mescolate con parole reali in una sintassi apparentemente corretta.
      
      Crea una supercazzola sul seguente argomento: {input}
      
      La supercazzola deve:
      1. Contenere almeno 2-3 parole inventate
      2. Avere una struttura sintattica che sembri corretta
      3. Includere riferimenti a luoghi come "Vigevano" o persone come "Brambilla"
      4. Essere pronunciata con la sicurezza di chi sa cosa sta dicendo
      
      Rispondi SOLO con la supercazzola, senza spiegazioni o introduzioni.
    `)

    // Creazione della catena di prompt
    const chain = promptTemplate.pipe(model).pipe(new StringOutputParser())

    // Esecuzione della catena con l'input dell'utente
    const supercazzola = await chain.invoke({ input })

    return NextResponse.json({ supercazzola })
  } catch (error) {
    console.error("Errore durante la generazione:", error)
    return NextResponse.json({ error: "Errore durante la generazione della supercazzola" }, { status: 500 })
  }
}
