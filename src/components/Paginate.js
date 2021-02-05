import React from 'react'
import Pagination from "react-js-pagination";

const Paginate = (props) => {
    return (
        <div className="float-right">
            <Pagination
                activePage={props.activePage}
                itemsCountPerPage={props.size}
                totalItemsCount={props.total}
                pageRangeDisplayed={3}
                onChange={props.handlePageChange.bind(this)}
                itemClass="page-item"
                linkClass="page-link"
                link
            />
        </div>
    )
}

export default Paginate
