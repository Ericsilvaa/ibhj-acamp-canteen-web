import { CanteenDebtorType, CanteenRootType } from '@/types/Canteens'
import { SalesHistoryType } from '@/types/Sales'

const canteens: CanteenRootType[] = [
  {
    id: '1',
    name: 'Summer Camp Canteen',
    type: 'ACAMPAMENTO',
    team: {
      cashier: [
        {
          name: 'Alice Smith',
          phone: '(99) 99999-9999'
        }
      ],
      cooks: [
        {
          name: 'Bob Brown',
          phone: '(99) 99999-9999'
        }
      ],
      volunteers: [
        {
          name: 'Charlie Green',
          phone: '(99) 99999-9999'
        }
      ]
    },
    responsible: {
      name: 'John Doe',
      phone: '(99) 99999-9999'
    },
    products: [
      {
        productId: '1',
        name: 'Hamburger',
        price: 10.0,
        sold: 100
      }
    ],
    operatingHours: {
      start: '20:30',
      end: '21:00'
    },
    status: 'active',
    sales: {
      profit: 1000.0,
      totalRevenue: 2000.0
    },
    createdAt: '2024-12-01T00:00:00Z',
    updatedAt: '2024-12-01T00:00:00Z'
  }
]

const mockDebtors: CanteenDebtorType[] = [
  { name: 'João Silva', amount: 'R$ 50,00', dueDate: '01/12/2024' },
  { name: 'Maria Santos', amount: 'R$ 30,00', dueDate: '05/12/2024' },
  { name: 'Carlos Pereira', amount: 'R$ 75,00', dueDate: '10/12/2024' }
]

const mockSalesHistory: SalesHistoryType[] = [
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
