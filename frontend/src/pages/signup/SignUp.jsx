import React, { useState } from 'react'
import GenderCheckbox from './GenderCheckbox'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const signUp = () => {

  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    gender: ''
  })

  const {loading, signup } = useSignup()

  const handleCheckBoxChange = (gender) => {
    setInputs({...inputs, gender})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();                                                 //doesnt returns to the default state
    // console.log(inputs)
    // Signup functionality in hooks folder
    await signup(inputs);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto '>
      <div className='w-full p-6 bg-indigo-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60 border border-gray-100'>
        <h1 className='text-3xl font-semibold text-center text-gray-600'>
          Sign Up
          <span className='text-indigo-700'> Converstic</span>
        </h1>

        <form onSubmit={handleSubmit}>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-black'>Full Name</span>
            </label>
            <input type="text" placeholder="John Doe" className="input input-bordered w-full max-w-xs" 
            value={inputs.fullName}
            onChange={(e) => setInputs({...inputs, fullName: e.target.value})}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-black'>Username</span>
            </label>
            <input type="text" placeholder="johndoe" className="input input-bordered w-full max-w-xs" 
            value={inputs.username}
            onChange={(e) => setInputs({...inputs, username: e.target.value})}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-black'>Password</span>
            </label>
            <input type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs"
            value={inputs.password}
            onChange={(e) => setInputs({...inputs,password: e.target.value})}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-black'>Confirm Password</span>
            </label>
            <input type="password" placeholder="Enter password again" className="input input-bordered w-full max-w-xs" 
            value={inputs.confirmPassword}
            onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
            />
          </div>

          {/* GENDER CHECKER GOES HERE */}
          <GenderCheckbox onCheckBoxChange = {handleCheckBoxChange} selectedGender={inputs.gender} />

          <Link to ='/login' className="link link-hover text-gray-700 hover:text-blue-600 mt-2 inline-block"> Already have an account?</Link>

          <div>
          <button className="btn width:200 btn-sm mt-2" disabled={loading}> 
            {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
          </button>
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