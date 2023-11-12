import './index.css'

const LanguageFilterItem = props => {
  const {item, func} = props
  const {id, language} = item

  const change = () => func(id)

  return (
    <li>
      <button type="button" onClick={change} className="btn">
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
