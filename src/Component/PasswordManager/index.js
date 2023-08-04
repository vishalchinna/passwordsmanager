import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'
import PasswordList from '../PasswordList'

class PasswordManager extends Component {
  state = {
    passwordList: [],
    website: '',
    username: '',
    password: '',
    isChecked: true,
    searchInput: '',
  }

  onchangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onchangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onchangePassword = event => {
    this.setState({password: event.target.value})
  }

  addToList = event => {
    event.preventDefault()
    const {website, username, password} = this.state

    if (website !== '' && username !== '' && password !== '') {
      const newList = {
        id: uuidv4(),
        website,
        username,
        password,
      }
      this.setState(prev => ({
        passwordList: [...prev.passwordList, newList],
        website: '',
        username: '',
        password: '',
      }))
    }
  }

  onChangeFilterPasswords = event => {
    this.setState({searchInput: event.target.value})
  }

  checkToggle = () => {
    this.setState(prev => ({
      isChecked: !prev.isChecked,
    }))
  }

  deleteList = id => {
    const {passwordList} = this.state
    this.setState({passwordList: passwordList.filter(each => each.id !== id)})
  }

  render() {
    const {
      passwordList,
      isChecked,
      website,
      username,
      password,
      searchInput,
    } = this.state

    console.log(passwordList)

    const finalPasswordsList = passwordList.filter(each =>
      each.website.includes(searchInput),
    )
    const lnt = finalPasswordsList.length

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
          alt="app logo"
          className="logo"
        />
        <div className="input-container">
          <form className="input-box">
            <h1 className="add-password">Add New Password</h1>
            <div className="website-input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="website-logo"
              />
              <input
                type="text"
                className="website"
                onChange={this.onchangeWebsite}
                placeholder="Enter Website"
                value={website}
              />
            </div>
            <div className="website-input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="website-logo"
              />
              <input
                type="text"
                className="website"
                placeholder="Enter Username"
                onChange={this.onchangeUsername}
                value={username}
              />
            </div>

            <div className="website-input">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="website-logo"
              />
              <input
                type="password"
                className="website"
                placeholder="Enter Password"
                onChange={this.onchangePassword}
                value={password}
              />
            </div>

            <button type="submit" className="btn" onClick={this.addToList}>
              Add
            </button>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-logo"
          />
        </div>
        <div className="password-container">
          <div className="password-top">
            <div className="password">
              <h1>Your passwords</h1>
              <p className="count">{lnt}</p>
            </div>
            <div className="website-input sea">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="website-logo"
              />
              <input
                type="search"
                className="website-search"
                placeholder="search"
                onChange={this.onChangeFilterPasswords}
              />
            </div>
          </div>
          <hr />
          <div className="checkBox">
            <input type="checkbox" id="check" onClick={this.checkToggle} />
            <label htmlFor="check">Show Passwords</label>
          </div>

          {lnt === 0 ? (
            <div className="no-pwd">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
                alt="no passwords"
                className="no-ps"
              />
              <p className="">No Passwords</p>
            </div>
          ) : (
            <ul className="ul-list">
              {finalPasswordsList.map(each => (
                <PasswordList
                  key={each.id}
                  deleteList={this.deleteList}
                  passwordInfo={each}
                  isChecked={isChecked}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
