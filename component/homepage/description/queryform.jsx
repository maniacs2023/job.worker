import { useState } from "react"
const Queryform = () => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    
    function handleSubmit(event) {
      event.preventDefault()
      const formData = { name, message }
      console.log(formData);
    }
    
    return (
        <>
        <style jsx>{`
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    margin: 0 auto;
  }

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 100%;
  }

  input,
  textarea {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 100%;
  }

  button {
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: #0070f3;
    color: #fff;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    label {
      margin-bottom: 10px;
    }

    input,
    textarea {
      padding: 5px;
      font-size: 14px;
    }

    button {
      padding: 5px;
      font-size: 14px;
    }
  }
`}</style>
        <div className="col-12 col-md-6 col-xl-6">
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={event => setName(event.target.value)} />
        </label>
        <label>
          Message:
          <textarea value={message} onChange={event => setMessage(event.target.value)} />
        </label>
        <button type="submit">Submit</button>
      </form>
      </div>
        </>
      
    )
}
export default Queryform;