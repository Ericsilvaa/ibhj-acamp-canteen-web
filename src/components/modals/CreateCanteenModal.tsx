'use client'

import { CustomButton } from '@/components/common/CustomButton'
import { CustomInput } from '@/components/common/CustomInput'
import { CustomSelect } from '@/components/common/CustomSelect'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { CanteenOptions, CanteenStatusOptions } from '@/constants/Canteens'
import { PlusCircle } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../ui/button'

export const CreateCanteenModal: React.FC = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    type: 'ACAMPAMENTO',
    responsible: {
      name: '',
      phone: '',
      role: '',
      department: ''
    },
    status: 'active'
  })

  const isDisabled =
    loading ||
    !formData.name ||
    !formData.responsible.name ||
    !formData.responsible.phone ||
    !formData.responsible.role ||
    !formData.responsible.department

  const handleInputChange = (
    field: keyof typeof formData,
    value: string | Partial<typeof formData.responsible>
  ) => {
    if (typeof value === 'object') {
      setFormData((prev) => ({
        ...prev,
        [field]: {
          ...(prev[field] as object),
          ...value
        }
      }))
    } else {
      setFormData((prev) => ({ ...prev, [field]: value }))
    }
  }

  const handleSubmit = async () => {
    setLoading(true)
    try {
      console.log('Dados do Formulário:', formData)
      alert('Cantina criada com sucesso!')
    } catch (error) {
      console.error('Erro ao criar a cantina:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className='w-5 h-5 mr-2' />
          Criar nova Cantina
        </Button>
      </DialogTrigger>
      <DialogContent className='w-[700px] h-[70%]'>
        <DialogHeader>
          <DialogTitle>Criar Nova Cantina</DialogTitle>
        </DialogHeader>
        <form className='space-y-4'>
          <CustomInput
            label='Nome da Cantina'
            value={formData.name}
            placeholder='Digite o nome da cantina'
            onChange={(event) => handleInputChange('name', event.target.value)}
          />
          <CustomSelect
            label='Tipo'
            value={formData.type}
            options={CanteenOptions}
            onChange={(event) => handleInputChange('type', event.target.value)}
          />
          <CustomInput
            label='Nome do Responsável'
            value={formData.responsible.name}
            placeholder='Digite o nome do responsável'
            onChange={(event) =>
              handleInputChange('responsible', {
                ...formData.responsible,
                name: event.target.value
              })
            }
          />
          <CustomInput
            label='Telefone do Responsável'
            value={formData.responsible.phone}
            placeholder='Digite o telefone do responsável'
            type='tel'
            onChange={(event) =>
              handleInputChange('responsible', {
                ...formData.responsible,
                phone: event.target.value
              })
            }
          />
          <CustomInput
            label='Função do Responsável'
            value={formData.responsible.role}
            placeholder='Digite a função do responsável'
            onChange={(event) =>
              handleInputChange('responsible', {
                department: event.target.value
              })
            }
          />
          <CustomInput
            label='Departamento do Responsável'
            value={formData.responsible.department}
            placeholder='Digite o departamento ou ministério'
            onChange={(event) =>
              handleInputChange('responsible', {
                ...formData.responsible,
                department: event.target.value
              })
            }
          />
          <CustomSelect
            label='Status'
            value={formData.status}
            options={CanteenStatusOptions}
            onChange={(event) =>
              handleInputChange('status', event.target.value)
            }
          />
          <CustomButton
            onClick={handleSubmit}
            disabled={isDisabled}
            loading={loading}
            title='Criar Cantina'
          />
        </form>
      </DialogContent>
    </Dialog>
  )
}
