export default function Footer() {
  return (
    <footer className='bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800'>
      <div className='container mx-auto px-4 py-4'>
        <p className='text-center text-sm text-gray-600 dark:text-gray-400'>
          © {new Date().getFullYear()} Canteen Hub. All rights reserved - ESO.
        </p>
      </div>
    </footer>
  )
}
