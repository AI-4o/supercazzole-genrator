import { MoveRight } from "lucide-react"

export function Header() {
  return (
    <header className="w-full bg-amber-800 text-white py-4 px-6 shadow-md">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-amber-100 rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-amber-800"
            >
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="m15.5 9-4.5 4.5L7.5 11" />
            </svg>
          </div>
          <h2 className="text-xl font-bold">Supercazzole Generator</h2>
        </div>
        <nav>
          <ul className="flex gap-6">
            <li>
              <a href="#" className="hover:text-amber-200 transition-colors flex items-center gap-1">
                Info
              </a>
            </li>
            <li>
              <a
                href="https://it.wikipedia.org/wiki/Amici_miei"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-amber-200 transition-colors flex items-center gap-1"
              >
                Amici Miei
                <MoveRight size={14} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
