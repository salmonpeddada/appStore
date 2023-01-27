// Write your code here
import './index.css'

const AppItem = props => {
  const {each} = props
  return (
    <li className="item">
      <img src={each.imageUrl} className="item-image" alt={each.appName} />
      <p>{each.appName}</p>
    </li>
  )
}

export default AppItem
