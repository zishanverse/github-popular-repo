import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {tabId: languageFiltersData[0].id, list: [], loader: true}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {tabId} = this.state
    this.setState({loader: true})
    const response = await fetch(
      `https://apis.ccbp.in/popular-repos?language=${tabId}`,
    )
    const data = await response.json()
    const update = data.popular_repos.map(each => this.changeCase(each))
    this.setState({list: update, loader: false})
    console.log(update)
  }

  changeId = id => this.setState({tabId: id}, this.getData)

  changeCase = item => ({
    name: item.name,
    id: item.id,
    issuesCount: item.issues_count,
    forksCount: item.forks_count,
    starsCount: item.stars_count,
    avatarUrl: item.avatar_url,
  })

  render() {
    const {tabId, loader, list} = this.state
    console.log(tabId)

    return (
      <div className="container">
        <h1 className="heading">Popular</h1>
        <ul className="tab-list">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              key={each.id}
              item={each}
              func={this.changeId}
            />
          ))}
        </ul>

        {loader ? (
          <div data-testid="loader">
            <Loader
              type="ThreeDots"
              testid="loader"
              color="#0284c7"
              height={80}
              width={80}
            />
          </div>
        ) : (
          <div className="cards-container">
            {list.map(each => (
              <RepositoryItem key={each.id} item={each} />
            ))}
          </div>
        )}
      </div>
    )
  }
}

export default GithubPopularRepos
