import React from 'react'

const SearchForm = () => {
  return (
    <div className="card bg-dark shadow home_search_card">
    <div className="m-3 card p-3 shadow border-dark">
      <div className="card-header">
        <h2 className="card-title">Search</h2>
      </div>
      <form>
        <div className="mt-2">
          <label htmlFor="from_input" className="form-label">
            From
          </label>
          <input
            type="text"
            name="from"
            id="from_input"
            className="form-control"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="to" className="form-label">
            To
          </label>
          <input
            type="text"
            name="to"
            id="to"
            className="form-control"
          />
        </div>
        <div className="mt-2">
          <label htmlFor="date_input" className="form-label">
            From
          </label>
          <input type="date" name="date" id="date_input" className="form-control"/>
        </div>
        <div className="mt-2 text-center">
          <button type="submit" className="btn btn-dark">Submit</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default SearchForm