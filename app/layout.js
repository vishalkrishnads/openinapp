import './styles/globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Internship Task',
  description: 'Internship task submission by Vishal (https://github.com/vishalkrishnads) for Listed Inc.',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={montserrat.className}>{children}</body>
      </html>
  )
}
