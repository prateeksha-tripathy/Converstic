import React from 'react'

const GenderCheckbox = () => {
  return (
    <div className='flex'>
        <div className='form-control' style={{ display: 'flex', alignItems: 'center' }}>
            <label className="label gap-2 cursor-pointer" style={{ marginBottom: '3px' }}>
                <span className="label-text text-black">Male</span> 
                <input type="checkbox" defaultChecked className="checkbox" style={{borderColor: 'black'}} />
            </label>
        </div>

        <div className='form-control' style={{ display: 'flex', alignItems: 'center' }}>
            <label className="label gap-2 cursor-pointer" style={{ marginBottom: '3px' }}>
                <span className="label-text text-black">Female</span> 
                <input type="checkbox" defaultChecked className="checkbox" style={{borderColor: 'black'}} />
            </label>
        </div>
        
    </div>
  )
}

export default GenderCheckbox