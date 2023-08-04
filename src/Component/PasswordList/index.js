import './index.css'

const PasswordList = prop => {
  const {passwordInfo, deleteList, isChecked} = prop
  const {website, username, password, id} = passwordInfo

  const deleteBar = () => {
    deleteList(id)
  }

  return (
    <li className="list-box">
      <p className="one">{website[0]}</p>
      <div className="details">
        <p className="det">{website}</p>
        <p className="det">{username}</p>
        {isChecked ? (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
            alt="starts"
            className="star"
          />
        ) : (
          <p className="det">{password}</p>
        )}
      </div>
      <button type="button" data-testid="button" className="dlt-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="dlt-icon"
          onClick={deleteBar}
        />
      </button>
    </li>
  )
}

export default PasswordList
