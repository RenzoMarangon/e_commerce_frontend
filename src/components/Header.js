import React from 'react'

export const Header = () => {
  return (
    <div className='header bg-slate-800 text-white flex flex-col items-center'>
        
        <div className='flex items-center h-3/5 w-full space-between '>

            <p className='mx-4'>...</p>

            <div className='flex w-3/5 justify-evenly '>
                <img src="elrecomercio" alt="AltoCom" />

                <h1>comercio</h1>
            </div>

            <div className='flex justify-around w-2/5 '>
                <img src='carrito' alt='carrito' />
                <img src='perfil' alt='perfil' />
            </div>
        </div>

        <div className='flex items-center justify-between my-auto bg-gray-100/50 rounded  w-5/6 '>
            <input className='bg-transparent ml-4 outline-none' placeholder='Buscar' required />
            <img className='bg-black rounded bg-orange-500 py-1' src="search"  alt="search"/>
        </div>


        <div className='links flex items-center justify-evenly w-full  h-2/5 mt-2 overflow-x-auto overflow-y-hidden'>
            <div className='link  '>
                <p className=''>Ofertas</p>
            </div>   

            <div className='link  text-center'>
                <p className=' '>Más vendido</p>
            </div>            

            <div className='link  text-center'>
                <p className=' '>Categorías</p>
            </div> 

             <div className='link  text-center'>
                <p className=' '>Vender</p>
            </div>   
          
        </div>
    </div>
  )
}
