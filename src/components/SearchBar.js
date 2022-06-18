import { useState } from "react"
import { FaSearch } from "react-icons/fa"
import { Link } from "react-router-dom"

const SearchBar = ({ suggestions }) => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([])
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [input, setInput] = useState("")

  const onChange = (e) => {
    const userInput = e.target.value

    const unLinked = suggestions.filter(
      (suggestion) => suggestion?.name.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    )

    setInput(e.target.value)
    setFilteredSuggestions(unLinked)
    setActiveSuggestionIndex(0)
    setShowSuggestions(true)
  }

  const onClick = (e) => {
    setFilteredSuggestions([])
    setInput(e.target.innerText)
    setActiveSuggestionIndex(0)
    setShowSuggestions(false)
  }

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      setInput(filteredSuggestions[activeSuggestionIndex])
      setActiveSuggestionIndex(0)
      setShowSuggestions(false)
    } else if (e.keyCode === 38) {
      if (activeSuggestionIndex === 0) {
        return
      }

      setActiveSuggestionIndex(activeSuggestionIndex - 1)
    } else if (e.keyCode === 40) {
      if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
        return
      }

      setActiveSuggestionIndex(activeSuggestionIndex + 1)
    }
  }

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul class='suggestions'>
        {filteredSuggestions.map((suggestion, index) => {
          let className

          // Flag the active suggestion with a class
          if (index === activeSuggestionIndex) {
            className = "suggestion-active"
          }

          return (
            <li className={className} key={suggestion} onClick={onClick}>
              <Link to={`/products/${suggestion.id}`}>
                {suggestion.name} - ৳{suggestion.price}
              </Link>
            </li>
          )
        })}
      </ul>
    ) : (
      <div class='no-suggestions'>
        <span role='img' aria-label='tear emoji'>
          😪
        </span>{" "}
        <em>Sorry, No Product Found</em>
      </div>
    )
  }

  return (
    <>
      <div className='search-bar'>
        <form action=''>
          <input
            type='text'
            className='form-control'
            name='product_name'
            placeholder='What are you looking for?'
            onChange={onChange}
            onKeyDown={onKeyDown}
            value={input}
          />
          <span>
            <FaSearch />
          </span>
        </form>
        {showSuggestions && input && <SuggestionsListComponent />}
      </div>
    </>
  )
}

export default SearchBar
