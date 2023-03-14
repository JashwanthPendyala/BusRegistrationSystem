import React from "react";
import { useState } from "react";
const ViewSeats = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
const data = {
  
}
  const handleClick = (seatNumber) => {
    if (selectedSeats.includes(seatNumber)) {
      setSelectedSeats(selectedSeats.filter((seat) => seat !== seatNumber));
    } else {
      setSelectedSeats([...selectedSeats, seatNumber]);
    }
    console.log(selectedSeats)
  };
  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="card shadow bg-light border-dark seatsCard">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">

                <div className="btn-grp">
                  <button className="btn" style={
                    {
                      backgroundColor: selectedSeats.includes(1)
                        ? "green"
                        : "gray"
                    }
                  } id="1" value="1" onClick={() => handleClick(1)}>1</button>
                  <button className="btn btn-info" style={{
                    backgroundColor: selectedSeats.includes(2)
                      ? "green"
                      : "gray"
                  }} value="2" onClick={() => handleClick(2)}>2</button>
                </div>
                <div className="btn-grp">
                  <button className="btn btn-info" style={{
                    backgroundColor: selectedSeats.includes(3)
                      ? "green"
                      : "gray"
                  }} value="3" onClick={() => handleClick(3)}>3</button>
                  <button className="btn btn-info" style={{
                    backgroundColor: selectedSeats.includes(4)
                      ? "green"
                      : "gray"
                  }} value="4" onClick={() => handleClick(4)}>4</button>
                </div>
                <div className="btn-grp">
                  <button className="btn btn-info" style={{
                    backgroundColor: selectedSeats.includes(5)
                      ? "green"
                      : "gray"
                  }} value="5" onClick={() => handleClick(5)}>5</button>
                  <button className="btn btn-info" style={{
                    backgroundColor: selectedSeats.includes(6)
                      ? "green"
                      : "gray"
                  }} value="6" onClick={() => handleClick(6)}>6</button>
                </div>
                <div className="btn-grp">
                  <button className="btn btn-info" style={{
                    backgroundColor: selectedSeats.includes(7)
                      ? "green"
                      : "gray"
                  }} value="7" onClick={() => handleClick(7)}>7</button>

                  <button className="btn btn-info" style={{
                    backgroundColor: selectedSeats.includes(8)
                      ? "green"
                      : "gray"
                  }} value="8" onClick={() => handleClick(8)}>8</button>
                </div>

                <div className="btn-grp">
                  <button className="btn btn-info" style={{
                    backgroundColor: selectedSeats.includes(9)
                      ? "green"
                      : "gray"
                  }} value="9" onClick={() => handleClick(9)}>9</button>

                  <button className="btn btn-info"  style={{
                    backgroundColor: selectedSeats.includes(10)
                      ? "green"
                      : "gray"
                  }}value="10" onClick={() => handleClick(10)}>10</button>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="btn-grp">
                  <button className="btn btn-info"  style={{
                    backgroundColor: selectedSeats.includes(11)
                      ? "green"
                      : "gray"
                  }}value="11" onClick={() => handleClick(11)}>11</button>
                  <button className="btn btn-info"  style={{
                    backgroundColor: selectedSeats.includes(12)
                      ? "green"
                      : "gray"
                  }}value="12" onClick={() => handleClick(12)}>12</button>
                </div>
                <div className="btn-grp">
                  <button className="btn btn-info"  style={{
                    backgroundColor: selectedSeats.includes(13)
                      ? "green"
                      : "gray"
                  }}value="13" onClick={() => handleClick(13)}>13</button>
                  <button className="btn btn-info"  style={{
                    backgroundColor: selectedSeats.includes(14)
                      ? "green"
                      : "gray"
                  }}value="14" onClick={() => handleClick(14)}>14</button>
                </div>
                <div className="btn-grp">
                  <button className="btn btn-info"  style={{
                    backgroundColor: selectedSeats.includes(15)
                      ? "green"
                      : "gray"
                  }}value="15" onClick={() => handleClick(15)}>15</button>
                  <button className="btn btn-info"  style={{
                    backgroundColor: selectedSeats.includes(16)
                      ? "green"
                      : "gray"
                  }}value="16" onClick={() => handleClick(16)}>16</button>
                </div>
                <div className="btn-grp">
                  <button className="btn btn-info"  style={{
                    backgroundColor: selectedSeats.includes(17)
                      ? "green"
                      : "gray"
                  }}value="17" onClick={() => handleClick(17)}>17</button>

                  <button className="btn btn-info"  style={{
                    backgroundColor: selectedSeats.includes(18)
                      ? "green"
                      : "gray"
                  }}value="18" onClick={() => handleClick(18)}>18</button>
                </div>
                <div className="btn-grp">

                  <button className="btn btn-info"  style={{
                    backgroundColor: selectedSeats.includes(19)
                      ? "green"
                      : "gray"
                  }}value="19" onClick={() => handleClick(19)}>19</button>

                  <button className="btn btn-info"  style={{
                    backgroundColor: selectedSeats.includes(20)
                      ? "green"
                      : "gray"
                  }}value="20" onClick={() => handleClick(20)}>20</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewSeats;
