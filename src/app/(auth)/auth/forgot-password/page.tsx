/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { auth } from '@/lib/firebase'
import { sendPasswordResetEmail } from 'firebase/auth'
import { Mail } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function ForgotPasswordPage() {
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
    <div className='min-h-screen flex items-center justify-center bg-gray-50'>
      <Card className='w-full max-w-2xl shadow-lg'>
        <CardHeader className='space-y-1'>
          <CardTitle className='text-3xl font-bold text-center'>
            Esqueceu a senha
          </CardTitle>
          <CardDescription className='text-center text-gray-600'>
            Digite seu e-mail para redefinir sua senha
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='relative'>
            <div className='space-y-2'>
              <Label htmlFor='email' className='text-sm font-medium'>
                Email
              </Label>
              <div className='relative'>
                <Mail
                  className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                  size={20}
                />
                <Input
                  id='email'
                  type='email'
                  placeholder='Digite seu email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className='w-full pl-10 pr-3 py-2 border rounded-md'
                />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className='flex flex-col space-y-4'>
          <Button
            onClick={handleResetPassword}
            disabled={loading}
            className={`w-full bg-yellow-600 text-white font-semibold py-2 rounded-md hover:bg-yellow-700 transition duration-300${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }}`}
          >
            {loading ? 'Enviando...' : ' Redefinir senhad'}
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
          <Link
            href='/auth/signin'
            className='text-sm text-blue-600 hover:underline text-center'
          >
            Voltar para Login
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
