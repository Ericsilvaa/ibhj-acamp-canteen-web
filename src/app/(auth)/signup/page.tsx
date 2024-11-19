/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { auth } from '@/lib/firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const SignUpPage: React.FC = () => {
  const router = useRouter()
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    setLoading(true)
    setError('') // Limpa erros anteriores
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      router.push('/')
    } catch (err: any) {
      console.error('Error during sign-up:', err.message)
      setError(
        err.code === 'auth/email-already-in-use'
          ? 'Email is already in use'
          : 'Something went wrong. Please try again later.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='p-6 max-w-md mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Sign Up</h1>
      <Input
        type='Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Name'
        className='w-full border rounded px-3 py-2 mb-4'
        aria-label='Name address'
      />
      <Input
        type='lastName'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder='Last Name'
        className='w-full border rounded px-3 py-2 mb-4'
        aria-label='Last Name'
      />
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
      <Input
        type='password'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder='Confirm Password'
        className='w-full border rounded px-3 py-2 mb-4'
        aria-label='Confirm password'
      />
      <Button
        onClick={handleSignUp}
        disabled={loading}
        className={`w-full px-4 py-2 bg-green-500 text-white rounded ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading ? 'Creating Account...' : 'Sign Up'}
      </Button>
      {error && (
        <p className='text-red-500 mt-2' aria-live='polite'>
          {error}
        </p>
      )}
    </div>
  )
}

export default SignUpPage
