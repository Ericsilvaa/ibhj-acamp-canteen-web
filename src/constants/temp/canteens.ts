// Mocked data for canteens (replace with real API or Firestore fetch)
const canteens = [
  {
    id: '1',
    name: 'Summer Camp Canteen',
    type: 'ACAMPAMENTO',
    responsible: 'John Doe',
    status: 'active',
    profit: 400.5 // Lucro obtido
  },
  {
    id: '2',
    name: 'Youth Ministry Canteen',
    type: 'MC',
    responsible: 'Alice Smith',
    status: 'inactive',
    profit: 120.0 // Lucro obtido
  }
]

const mockDebtors = [
  { name: 'João Silva', amount: 'R$ 50,00', dueDate: '01/12/2024' },
  { name: 'Maria Santos', amount: 'R$ 30,00', dueDate: '05/12/2024' },
  { name: 'Carlos Pereira', amount: 'R$ 75,00', dueDate: '10/12/2024' }
]

const mockSalesHistory = [
  {
    transactionId: 'TX12345',
    date: '01/12/2024',
    totalAmount: 'R$ 125,50',
    products: ['Hambúrguer', 'Refrigerante', 'Batata Frita']
  },
  {
    transactionId: 'TX12346',
    date: '02/12/2024',
    totalAmount: 'R$ 89,90',
    products: ['Coxinha', 'Suco Natural']
  },
  {
    transactionId: 'TX12347',
    date: '03/12/2024',
    totalAmount: 'R$ 200,00',
    products: ['Pizza', 'Refrigerante', 'Sorvete']
  }
]

export { canteens, mockDebtors, mockSalesHistory }
