import { useState } from 'react'
import { newPost } from '../services/Queries'

const Create = ({ show, onClose, user, setShow }) => {
  const initialState = { image: '', body: '' }
  const [formValues, setFormValues] = useState(initialState)

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
          <h1>Create</h1>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              value={formValues.image}
              name="image"
              type="text"
              placeholder="Image URL"
              required
            />
            <input
              onChange={handleChange}
              value={formValues.body}
              name="body"
              type="text"
              placeholder="Caption"
              required
            />
            <button type="submit">Create Post</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create
