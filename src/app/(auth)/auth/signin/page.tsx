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
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Loader2, Lock, Mail } from 'lucide-react'
import Link from 'next/link'
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
      setError('Por favor, preencha todos os campos.')
      return
    }

    setLoading(true)
    setError('')
    try {
      await signInWithEmailAndPassword(auth, email, password)
      router.push('/')
    } catch (err: any) {
      console.error('Error during sign-in:', err.message)
      setError(
        err.code === 'auth/user-not-found'
          ? 'Usuário não encontrado.'
          : err.code === 'auth/wrong-password'
          ? 'Senha inválida.'
          : 'Algo deu errado. Por favor, tente novamente mais tarde.'
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
            Bem-vindo de volta
          </CardTitle>
          <CardDescription className='text-center text-gray-600'>
            Faça login com sua conta para continuar.
          </CardDescription>
        </CardHeader>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSignIn()
          }}
        >
          <CardContent className='space-y-6'>
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
            <div className='space-y-2'>
              <Label htmlFor='password' className='text-sm font-medium'>
                Password
              </Label>
              <div className='relative'>
                <Lock
                  className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400'
                  size={20}
                />
                <Input
                  id='password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder='Digite sua senha'
                  className='w-full pl-10 pr-3 py-2 border rounded-md'
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className='flex flex-col space-y-4'>
            <Button className='w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition duration-300'>
              {loading ? (
                <>
                  <Loader2 className='mr-2 h-5 w-5 animate-spin' />
                  Entrando...
                </>
              ) : (
                'Entrar'
              )}
            </Button>
            {error && (
              <p
                className='mt-3 text-sm text-red-500 text-center'
                aria-live='polite'
              >
                {error}
              </p>
            )}
            <div className='text-sm text-center space-x-1'>
              <span className='text-gray-600'> Não tem uma conta?</span>
              <Link
                href='/auth/signup'
                className='text-blue-600 hover:underline font-medium'
              >
                Cadastre-se
              </Link>
            </div>
            <Link
              href='/auth/forgot-password'
              className='text-sm text-blue-600 hover:underline text-center'
            >
              Esqueceu sua senha?
            </Link>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default SignInPage
