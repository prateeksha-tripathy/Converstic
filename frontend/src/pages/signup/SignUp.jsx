import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const signUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
      <div className='w-full p-6 bg-indigo-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100'>
        <h1 className='text-3xl font-semibold text-center text-gray-600'>
          Sign Up
          <span className='text-indigo-700'> Converstic</span>
        </h1>

        <form>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-black'>Full Name</span>
            </label>
            <input type="text" placeholder="John Doe" className="input input-bordered w-full max-w-xs" />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-black'>Username</span>
            </label>
            <input type="text" placeholder="johndoe" className="input input-bordered w-full max-w-xs" />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-black'>Password</span>
            </label>
            <input type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs" />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-black'>Confirm Password</span>
            </label>
            <input type="password" placeholder="Enter password again" className="input input-bordered w-full max-w-xs" />
          </div>

          {/* GENDER CHECKER GOES HERE */}
          <GenderCheckbox />

          <a href="#" className="link link-hover text-gray-700 hover:text-black mt-2 inline-block"> Already have an account?</a>

          <div>
          <button className="btn width:200 btn-sm mt-2">Sign Up</button>
          </div>

        </form>
      </div>
    </div>
  )
}
export default signUp




//STARTER CODE FOR SIGN UP COMPONENT :
// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// const signUp = () => {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
//       <div className='w-full p-6 bg-indigo-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100'>
//         <h1 className='text-3xl font-semibold text-center text-gray-600'>
//           Sign Up
//           <span className='text-indigo-700'> Converstic</span>
//         </h1>

//         <form>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text text-black'>Full Name</span>
//             </label>
//             <input type="text" placeholder="John Doe" className="input input-bordered w-full max-w-xs" />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text text-black'>Username</span>
//             </label>
//             <input type="text" placeholder="johndoe" className="input input-bordered w-full max-w-xs" />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text text-black'>Password</span>
//             </label>
//             <input type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs" />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text text-black'>Confirm Password</span>
//             </label>
//             <input type="password" placeholder="Enter password again" className="input input-bordered w-full max-w-xs" />
//           </div>

//           {/* GENDER CHECKER GOES HERE */}
//           <GenderCheckbox />

//           <a href="#" className="link link-hover text-gray-700 hover:text-black mt-2 inline-block"> Already have an account?</a>

//           <div>
//           <button className="btn width:200 btn-sm mt-2">Sign Up</button>
//           </div>

//         </form>
//       </div>
//     </div>
//   )
// }
// export default signUp