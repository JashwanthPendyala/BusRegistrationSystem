import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
const ViewSeats = () => {
  const [seatCol1, setSeats] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ]);
  const [seatCol2, setSeatsCol2] = useState([,]);
  const seatPrice = 500;
  let secondColIndex = 11;
  // const arr = [1,2,3,4,5,6,7,8,9,10];
  // const sub = (e)=>{
  //     e.preventDefault();
  //     //
  //     setSeats(seats);

  // }
  //

  const [checkedState, setCheckedState] = useState(
    new Array(seatCol1.length).fill(false)
  );
  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    console.log(position);

    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce((sum, currentState) => {
      if (currentState === true) {
        return sum + seatPrice;
      }
      return sum;
    }, 0);

    setTotal(totalPrice);
  };

  const handleClick = (e) => {
    console.log("seat no :   " + e);  
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="card shadow bg-light border-dark seatsCard">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="col-lg-6 col-md-6 mt-4">
              {/* <table className="table table-striped">
                  <tbody>
                    {seatCol1.map((seat, i) => (
                      <tr key={i}>
                        <td onClick={(e) => handleClick(e, i)}>{seat}</td>
                      </tr>
                    ))}
                  </tbody>
                </table> */}
              {/* {seatCol1.map((seat, i) => (
                  <input
                    type="checkbox"
                    key={i}
                    className="p-5"
                    onClick={() => handleClick(seat)}
                  />
                ))} */}
              <ul className="toppings-list">
                {seatCol1.map((val) => {
                  return (
                    <li
                      key={secondColIndex}
                      className="list-style"
                      style={{ listStyleType: "none" }}
                    >
                      <div className="toppings-list-item">
                        <div className="left-section">
                          <input
                            type="checkbox"
                            id={`custom-checkbox-${secondColIndex}`}
                            name={val}
                            value={val}
                            checked={checkedState[secondColIndex]}
                            onChange={() => handleOnChange(secondColIndex)}
                          />
                          <label htmlFor={`custom-checkbox-${secondColIndex}`}>
                            {val}
                          </label>
                        </div>
                        {/* <div className="right-section">{getFormattedPrice(price)}</div> */}
                        {(secondColIndex = secondColIndex + 1)}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-lg-6 col-md-6">
              <ul className="toppings-list">
                {seatCol1.map((val, index) => {
                  return (
                    <li
                      key={index}
                      className="list-style"
                      style={{ listStyleType: "none" }}
                    >
                      <div className="toppings-list-item">
                        <div className="left-section">
                          <input
                            type="checkbox"
                            id={`custom-checkbox-${index}`}
                            name={val}
                            value={val}
                            checked={checkedState[index]}
                            onChange={() => handleOnChange(index)}
                          />
                          <label htmlFor={`custom-checkbox-${index}`}>
                            {val}
                          </label>
                        </div>
                        {/* <div className="right-section">{getFormattedPrice(price)}</div> */}
                      </div>
                    </li>
                  );
                })}
                <li style={{ listStyleType: "none" }}>
                  <div className="toppings-list-item">
                    <div className="left-section">Total:</div>
                    {/* <div className="right-section">{getFormattedPrice(total)}</div> */}
                    <div className="right-section">{total}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSeats;
