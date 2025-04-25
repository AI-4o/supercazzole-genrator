export function Footer() {
  return (
    <footer className="bg-amber-800 text-white py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Supercazzole Generator</h3>
            <p className="text-amber-200 mb-4">
              Un omaggio al grande Ugo Tognazzi e al suo indimenticabile Conte Mascetti.
            </p>
            <p className="text-amber-200 text-sm">
              Questo sito utilizza l'intelligenza artificiale per generare supercazzole nello stile di Amici Miei.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Citazioni Celebri</h3>
            <blockquote className="border-l-2 border-amber-400 pl-4 italic text-amber-100">
              "Come se fosse antani, la supercazzola prematurata con scappellamento a destra, come fosse Brambilla!"
              <footer className="text-amber-300 mt-2 not-italic">— Conte Lello Mascetti</footer>
            </blockquote>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-amber-700 text-center text-amber-300 text-sm">
          © {new Date().getFullYear()} Supercazzole Generator. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  )
}
