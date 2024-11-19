/* eslint-disable @typescript-eslint/no-explicit-any */
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
  const [loading, setLoading] = useState(false)

  const handleSignIn = async () => {
    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    setLoading(true)
    setError('') // Limpa erros anteriores
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/')
    } catch (err: any) {
      console.error('Error during sign-in:', err.message)
      setError(
        err.code === 'auth/user-not-found'
          ? 'User not found'
          : err.code === 'auth/wrong-password'
          ? 'Invalid password'
          : 'Something went wrong. Please try again later.'
      )
    } finally {
      setLoading(false)
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
        aria-label='Email address'
      />
      <Input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        className='w-full border rounded px-3 py-2 mb-4'
        aria-label='Password'
      />
      <Button
        onClick={handleSignIn}
        disabled={loading}
        className={`w-full px-4 py-2 bg-blue-500 text-white rounded ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading ? 'Loading...' : 'Entrar'}
      </Button>
      {error && (
        <p className='text-red-500 mt-2' aria-live='polite'>
          {error}
        </p>
      )}
    </div>
  )
}

export default SignInPage
