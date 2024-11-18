'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { auth } from '@/lib/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const SignInPage: React.FC = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/dashboard')
    } catch (err) {
      console.log('error', err)
      setError('Invalid email or password')
    }
  }

  return (
    <div className='p-6 max-w-md mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Sign In</h1>
      <Input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        className='w-full border rounded px-3 py-2 mb-4'
      />
      <Input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        className='w-full border rounded px-3 py-2 mb-4'
      />
      <Button
        onClick={handleSignIn}
        className='w-full px-4 py-2 bg-blue-500 text-white rounded'
      >
        Entrar
      </Button>
      {error && <p className='text-red-500 mt-2'>{error}</p>}
    </div>
  )
}

export default SignInPage
