
import React from 'react'
import {FC,Suspense} from "react"
import TicketGrid from './ticket-grid'
import Loading from './loading'



const  Page:FC =async () => {


  return (
    <div className='mt-4'>
     <div className='mb-6'>
    <h1 className='text-2xl font-bold text-gray-800 mb-2'>Tickets</h1>
    <p className='text-gray-400'>Tüm ticket'larını kategori bazında görüntüleyin ve yönetin</p>
     </div>

    <Suspense fallback={<Loading/>}>
       <TicketGrid/>
    </Suspense>

    </div>
  )
}

export default Page
