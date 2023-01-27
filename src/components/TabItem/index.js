// Write your code here
import './index.css'

const TabItem = props => {
  const {each, onUpdated, isSelect} = props
  const {tabId} = each

  const styles = tabId === isSelect ? 'style-name' : ''
  const onUpdateAppList = () => {
    onUpdated(tabId)
  }

  return (
    <li className="tabs-name" onClick={onUpdateAppList}>
      <button type="button" className={styles}>
        {each.displayText}
      </button>
    </li>
  )
}

export default TabItem
