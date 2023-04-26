import './index.css'

const TabItem = props => {
  const {tabDetails, updateProjectList, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabItem = () => {
    updateProjectList(tabId)
  }

  const activeTabClassBtn = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabClassBtn}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
