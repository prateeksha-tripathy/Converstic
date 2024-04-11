import React from 'react'

const GenderCheckbox = ({onCheckBoxChange,selectedGender}) => {
  return (
    <div className='flex'>
        <div className='form-control' style={{ display: 'flex', alignItems: 'center' }}>
            <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "selected": ""}`} style={{ marginBottom: '3px' }}>
                <span className="label-text text-black">Male</span> 
                <input type="checkbox" className="checkbox" style={{borderColor: 'black'}} 
                checked={selectedGender === "male"}
                onChange={()=> onCheckBoxChange("male")}
                />
            </label>
        </div>

        <div className='form-control' style={{ display: 'flex', alignItems: 'center' }}>
            <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "selected": ""}`} style={{ marginBottom: '3px' }}>
                <span className="label-text text-black">Female</span> 
                <input type="checkbox" className="checkbox" style={{borderColor: 'black'}} 
                checked={selectedGender === "female"}
                onChange = {()=> onCheckBoxChange("female")}
                />
            </label>
        </div>
        
    </div>
  )
}

export default GenderCheckbox