'use client'
import { CustomButton } from '@/components/common/CustomButton'
import { CustomInput } from '@/components/common/CustomInput'
import { CustomSelect } from '@/components/common/CustomSelect'
import { HeaderHero } from '@/components/common/headers/HeaderHero'
import { ContainerBase } from '@/components/containers/ContainerBase'
import { CanteenOptions, CanteenStatusOptions } from '@/constants/Canteens'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const CreateCanteenPage: React.FC = () => {
  const router = useRouter()
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

  // Atualiza campos do formulário principal
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  // Submissão do formulário
  const handleSubmit = async () => {
    setLoading(true)
    try {
      console.log('Dados do Formulário:', formData)
      router.push('/sales/canteens')
    } catch (error) {
      console.error('Erro ao criar a cantina:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <ContainerBase maxWidth='max-w-lg'>
      <HeaderHero title='Nova Cantina' />
      <CustomInput
        label='Nome da Cantina'
        value={formData.name}
        placeholder='Digite o nome da cantina'
        onChange={(event) => handleInputChange('type', event.target.value)}
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
        onChange={(event) => handleInputChange('type', event.target.value)}
      />
      <CustomInput
        label='Telefone do Responsável'
        value={formData.responsible.phone}
        placeholder='Digite o telefone do responsável'
        type='tel'
        onChange={(event) => handleInputChange('type', event.target.value)}
      />
      <CustomInput
        label='Função do Responsável'
        value={formData.responsible.role}
        placeholder='Digite a função do responsável'
        onChange={(event) => handleInputChange('type', event.target.value)}
      />
      <CustomInput
        label='Departamento do Responsável'
        value={formData.responsible.department}
        placeholder='Digite o departamento ou ministério'
        onChange={(event) => handleInputChange('type', event.target.value)}
      />
      <CustomSelect
        label='Status'
        value={formData.status}
        options={CanteenStatusOptions}
        onChange={(event) => handleInputChange('status', event.target.value)}
      />
      <CustomButton
        onClick={handleSubmit}
        disabled={isDisabled}
        loading={loading}
        title='Criar Cantina'
      />
    </ContainerBase>
  )
}

export default CreateCanteenPage
