/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { auth } from '@/lib/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Loader2 } from 'lucide-react'
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
    setError('') // Limpa erros anteriores
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
    <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-white to-blue-50'>
      <div className='w-full max-w-md p-6 bg-white shadow-md rounded-lg'>
        <h1 className='text-3xl font-bold text-center text-gray-800 mb-6'>
          Entrar
        </h1>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            handleSignIn()
          }}
          className='space-y-4'
        >
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700'
            >
              Email
            </label>
            <Input
              id='email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Digite seu email'
              className='w-full mt-1'
              aria-label='Endereço de email'
            />
          </div>

          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700'
            >
              Senha
            </label>
            <Input
              id='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Digite sua senha'
              className='w-full mt-1'
              aria-label='Senha'
            />
          </div>

          <Button
            type='submit'
            disabled={loading}
            className='w-full bg-blue-500 text-white rounded-md py-2 flex justify-center items-center hover:bg-blue-600 transition-colors'
          >
            {loading ? (
              <>
                <Loader2 className='mr-2 h-5 w-5 animate-spin' />
                Entrando...
              </>
            ) : (
              'Entrar'
            )}
          </Button>
        </form>

        {error && (
          <p
            className='mt-4 text-sm text-red-500 text-center'
            aria-live='polite'
          >
            {error}
          </p>
        )}

        <p className='mt-6 text-center text-sm text-gray-500'>
          Não tem uma conta?{' '}
          <a href='/signup' className='text-blue-600 hover:underline'>
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  )
}

export default SignInPage
