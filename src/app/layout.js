import './globals.css'



export const metadata = {
  title: 'NicDev Portfolio',
  description: 'Nicolas Guimont\'s portfolio website',
  icons : {
    icon: 'favicon.png',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
