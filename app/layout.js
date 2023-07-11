import './globals.css'

export const metadata = {
  title: 'Contracts CLS',
  description: 'Create - List - Show your contratcs',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className='bg-bg'>
        <div className='md:mx-auto max-w-2xl p-4'>
          {children}
        </div>
      </body>
    </html>
  )
}
