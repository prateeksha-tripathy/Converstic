import React from 'react'
import { IoIosSearch } from "react-icons/io";

const SearchInput = () => {
  return (
    <form>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
        <button type='submit' className='btn btn-circle bg-sky-500 text-black'>
            < IoIosSearch className='w-6 h-4 outline-none' />
        </button>
    </form>
  )
}

export default SearchInput

//STARTER CODE FOR SEARCH INPUT
// import React from 'react'
// import { IoIosSearch } from "react-icons/io";

// const SearchInput = () => {
//   return (
//     <form>
//         <input type="text" placeholder='Search...' className='input input-bordered rounded-full' />
//         <button type='submit' className='btn btn-circle bg-sky-500 text-black'>
//             < IoIosSearch className='w-6 h-4 outline-none' />
//         </button>
//     </form>
//   )
// }

// export default SearchInput