import './index.css'

const HistoryItem = ({history, deleteHistory}) => {
  const {id, timeAccessed, logoUrl, title, domainUrl} = history

  const deleteButton = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-item-container">
      <p className="time-accessed">{timeAccessed}</p>
      <div className="history-item">
        <div className="history-content">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="title-domain-container">
            <p className="title">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
        </div>
        <button
          data-testid="delete"
          type="button"
          className="button"
          onClick={deleteButton}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
