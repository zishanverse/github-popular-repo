import './index.css'

const RepositoryItem = props => {
  const {item} = props
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = item

  return (
    <div className="card">
      <img src={avatarUrl} alt={name} className="img" />
      <h1 className="name">{name}</h1>
      <div>
        <div className="details">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
            alt="stars"
            className="logo"
          />
          <p className="star">{starsCount} stars</p>
        </div>

        <div className="details">
          <img
            src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
            alt="forks"
            className="logo"
          />
          <p className="fork">{forksCount}</p>
        </div>
        <div className="details">
          <img
            src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
            alt="open issues"
            className="logo"
          />
          <p className="issue">{issuesCount}</p>
        </div>
      </div>
    </div>
  )
}

export default RepositoryItem
