import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { newPost } from '../services/Queries'

const Create = ({ show, onClose, user, setShow }) => {
  const initialState = { image: '', body: '' }
  const [formValues, setFormValues] = useState(initialState)
  let navigate = useNavigate()

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const id = user.id
    await newPost(id, {
      image: formValues.image,
      body: formValues.body
    })
    setFormValues(initialState)
    setShow(false)
    navigate(`/home/profile/${user.id}`)
  }

  if (!show) {
    return null
  }

  return (
    <div className="modal" onClick={() => onClose()}>
      <h1 onClick={() => onClose()} className="modalX">
        X
      </h1>
      <div className="modal-div" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h1>Create Post</h1>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="modal-body">
            <div className="create-form-div">
              <input
                onChange={handleChange}
                value={formValues.image}
                name="image"
                type="text"
                placeholder="Image URL"
                required
              />
            </div>
            <div className="create-form-div">
              <input
                onChange={handleChange}
                value={formValues.body}
                name="body"
                type="text"
                placeholder="Caption"
                required
              />
            </div>
            <div className="create-form-div">
              <button type="submit">Create Post</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create
