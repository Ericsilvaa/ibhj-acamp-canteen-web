/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { auth } from '@/lib/firebase'
import { sendPasswordResetEmail } from 'firebase/auth'
import { useState } from 'react'

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleResetPassword = async () => {
    if (!email) {
      setError('Please enter your email')
      return
    }

    setLoading(true)
    setError('')
    setSuccess('')
    try {
      await sendPasswordResetEmail(auth, email)
      setSuccess('Password reset email sent successfully')
    } catch (err: any) {
      console.error('Error sending password reset email:', err.message)
      setError(
        err.code === 'auth/user-not-found'
          ? 'No account found with this email'
          : 'Something went wrong. Please try again later.'
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='p-6 max-w-md mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Forgot Password</h1>
      <Input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
        className='w-full border rounded px-3 py-2 mb-4'
        aria-label='Email address'
      />
      <Button
        onClick={handleResetPassword}
        disabled={loading}
        className={`w-full px-4 py-2 bg-blue-500 text-white rounded ${
          loading ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        {loading ? 'Sending...' : 'Reset Password'}
      </Button>
      {error && (
        <p className='text-red-500 mt-2' aria-live='polite'>
          {error}
        </p>
      )}
      {success && (
        <p className='text-green-500 mt-2' aria-live='polite'>
          {success}
        </p>
      )}
    </div>
  )
}

export default ForgotPasswordPage
