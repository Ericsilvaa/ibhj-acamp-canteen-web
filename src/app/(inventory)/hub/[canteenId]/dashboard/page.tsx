import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { DollarSign, ShoppingCart, TrendingUp, Utensils } from 'lucide-react'

async function getCanteenData(canteenId: string) {
  // This is a placeholder function. Replace it with an API call in a real application.
  return {
    name: `Hub ${canteenId}`,
    totalSales: 15000,
    totalOrders: 500,
    averageOrderValue: 30,
    topSellingItem: 'Chicken Sandwich'
  }
}

export default async function CanteenDashboard({
  params
}: {
  params: { canteenId: string }
}) {
  const canteenData = await getCanteenData(params.canteenId)

  return (
    <div className='min-h-screen p-6'>
      <h1 className='text-4xl font-extrabold text-gray-900 mb-6'>
        {canteenData.name} Dashboard
      </h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <Card className='rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>Total Sales</CardTitle>
            <DollarSign className='h-5 w-5 text-green-500' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold text-gray-800'>
              ${canteenData.totalSales.toLocaleString()}
            </div>
            <p className='text-xs text-gray-500'>+20.1% from last month</p>
          </CardContent>
        </Card>

        <Card className='rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>Total Orders</CardTitle>
            <ShoppingCart className='h-5 w-5 text-blue-500' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold text-gray-800'>
              {canteenData.totalOrders}
            </div>
            <p className='text-xs text-gray-500'>+15% from last month</p>
          </CardContent>
        </Card>

        <Card className='rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>
              Average Order Value
            </CardTitle>
            <TrendingUp className='h-5 w-5 text-yellow-500' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold text-gray-800'>
              ${canteenData.averageOrderValue}
            </div>
            <p className='text-xs text-gray-500'>+5% from last month</p>
          </CardContent>
        </Card>

        <Card className='rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
          <CardHeader className='flex flex-row items-center justify-between pb-2'>
            <CardTitle className='text-sm font-medium'>
              Top Selling Item
            </CardTitle>
            <Utensils className='h-5 w-5 text-red-500' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold text-gray-800'>
              {canteenData.topSellingItem}
            </div>
            <p className='text-xs text-gray-500'>250 units sold this month</p>
          </CardContent>
        </Card>
      </div>

      <Card className='rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 mt-8'>
        <CardHeader>
          <CardTitle className='text-lg font-semibold text-gray-800'>
            Recent Activity
          </CardTitle>
          <CardDescription className='text-gray-600'>
            You have 3 new orders in the last 24 hours.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className='space-y-3'>
            <li className='flex items-center justify-between'>
              <span>Order #12345</span>
              <span className='text-sm text-gray-500'>2 hours ago</span>
            </li>
            <li className='flex items-center justify-between'>
              <span>Order #12346</span>
              <span className='text-sm text-gray-500'>5 hours ago</span>
            </li>
            <li className='flex items-center justify-between'>
              <span>Order #12347</span>
              <span className='text-sm text-gray-500'>8 hours ago</span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
