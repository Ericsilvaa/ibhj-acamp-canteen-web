interface ItemCardProps {
  title: string
  details: { label: string; value: string | number }[]
}

export const ItemCard = ({ title, details }: ItemCardProps) => {
  return (
    <div className='border rounded-lg p-4 shadow-sm'>
      <h2 className='text-lg font-bold'>{title}</h2>
      <div className='mt-2 space-y-1'>
        {details.map((detail, index) => (
          <p key={index} className='text-sm text-gray-500'>
            <span className='font-medium'>{detail.label}:</span> {detail.value}
          </p>
        ))}
      </div>
    </div>
  )
}
