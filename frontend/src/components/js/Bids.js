import React from 'react'
import 'components/css/Bids.css'
import Table from 'react-bootstrap/Table'
import moment from 'moment'


function Bids({bids}) {
  return (
      <div className="bTable">
        <Table className="bTable">
            <thead className="tableHeader">
                <tr>
                    <th>Bidder</th>
                    <th>Date</th>
                    <th>Bid</th>
                </tr>
            </thead>
            <tbody className="tableBody">
            {bids.map(bid=> (
                <tr key={bid.id} className="tableFill">
                    <th><img className="dummyP" alt="Profile" src={bid.image}/>{bid.name}</th>
                    <th>{moment(bid.date).format('D MMMM YYYY')}</th>
                    <th style={ bid === bids[0] ? {color: "green"} : {color: "black"}} >${bid.price}</th>
                </tr>
            ))}
            </tbody>
        </Table>
    </div>
  )
}

export default Bids