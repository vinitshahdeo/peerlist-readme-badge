import React from 'react'
import "../InputUsername/InputUsername.css"

const InputUsername = ({value, setFormState}) => {
  return (
    //  your css class InputUsernameContainer
    <div className=" border-solid rounded-lg border-4  border-indigo-500/100 my-5">
      {/* CSS class InputUsernameContainer__Label */}
      <label htmlFor="#inputUsername" className=" font-extralight text-slate-400 px-2">
        Peerlist Username
      </label>
      <input
        id="inputUsername"
        placeholder=""
        value={value}
        onChange={(e) =>
          setFormState((prev) => ({ ...prev, peerlistUsername: e.target.value }))
        }
        className="InputUsernameContainer_Input"
        required
      />
    </div>
  )
}

export default InputUsername