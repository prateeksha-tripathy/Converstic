import React from 'react'

const Login = () => {
  return (
    <div className = 'flex flex-col items-center justify-center min-w-96 mx-auto '>
      <div className='w-full p-6 bg-indigo-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100 '>
        <h1 className='text-3xl font-semibold text-center text-gray-600'>
          Login
          <span className='text-indigo-700'> Converstic</span>
        </h1>

        <form>
          
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-black'>Username</span>
            </label>
            <input type="text" placeholder="Enter username" className="input input-bordered w-full max-w-xs" />
          </div>
            
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-black'>Password</span>
            </label>
            <input type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs" />
          </div>

          <a href="#" className="link link-hover text-gray-700 hover:text-black mt-2 inline-block"> Don't have an account?</a>

          <div>
          <button className="btn width:200 btn-sm mt-2">Login</button>
          </div>

        </form>
      </div>

    </div>
  )
}
export default Login



// STARTER CODE FOR LOGIN COMPONENT :
// const Login = () => {
//   return (
//     <div className = 'flex flex-col items-center justify-center min-w-96 mx-auto '>
//       <div className='w-full p-6 bg-indigo-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100 '>
//         <h1 className='text-3xl font-semibold text-center text-gray-600'>
//           Login
//           <span className='text-indigo-700'> Converstic</span>
//         </h1>

//         <form>
          
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text text-black'>Username</span>
//             </label>
//             <input type="text" placeholder="Enter username" className="input input-bordered w-full max-w-xs" />
//           </div>
            
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text text-black'>Password</span>
//             </label>
//             <input type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs" />
//           </div>

//           <a href="#" className="link link-hover text-gray-700 hover:text-black mt-2 inline-block"> Don't have an account?</a>

//           <div>
//           <button className="btn width:200 btn-sm mt-2">Login</button>
//           </div>

//         </form>
//       </div>

//     </div>
//   )
// }
// export default Login