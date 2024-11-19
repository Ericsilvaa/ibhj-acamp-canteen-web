'use client'
import { CategorySalesChart } from '@/components/charts/CategorySalesChart'
import { StatCard } from '@/components/common/cards/StatCard'
import { HeaderHero } from '@/components/common/headers/HeaderHero'
import { ContainerBase } from '@/components/containers/ContainerBase'
import { stats } from '@/constants/temp/stats'

export default function CanteenDashboard() {
  return (
    <ContainerBase>
      <HeaderHero title='Dashboard' />

      {/* Statistics */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            description={stat.description}
          />
        ))}
      </div>

      {/* Chart */}
      <CategorySalesChart />
    </ContainerBase>
  )
}
