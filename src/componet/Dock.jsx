import React from "react";
import { Dock } from "react-dock";
import { Link } from "react-router-dom";

function Docks(props) {
  const GetFullScreen = (e) => {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = e.target.src;
  };

  const CloseModel = () => {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  };

  const { selectedItem, isVisible, setisVisible } = props;
  return (
    <>
      <Dock position="right" isVisible={isVisible} className="Dock">
        <div className="dock-content">
          <div className="image">
            <img src={selectedItem?.img} onClick={(e) => GetFullScreen(e)} />
            {selectedItem?.gallery?.map((img) => (
              <img src={img} onClick={(e) => GetFullScreen(e)} />
            ))}
          </div>
          <div className="Data">
            <h3 className="title">{selectedItem?.title}</h3>
            <p className="Discription">{selectedItem?.Discription}</p>
          </div>

          <div className="row">
            {/* <div className='dock-items padd-15'>
                        <h3 className='title'>Client</h3>
                        <p className='subtitle'> {selectedItem?.clientname}</p>
                    </div> */}
            <div className="dock-items  padd-15">
              <h3 className="title">Categrous</h3>
              <p className="subtitle"> {selectedItem?.categerous}</p>
            </div>
            {/* <div className='dock-items  padd-15'>
                        <h3 className='title'>Date</h3>
                        <p className='subtitle'> {selectedItem?.Date}</p>
                    </div> */}
          </div>

          <div className="go_live">
            <div className="row">
              <div className="goliveitem padd-15">
                {selectedItem?.GoLive === true ? (
                  <a target="_blank" href={selectedItem?.GoLiveLink}>
                    Check Live <i className="fa fa-arrow-right"></i>
                  </a>
                ) : (
                  ""
                )}
              </div>
              <div
                className="goliveitem  padd-15"
                onClick={() => setisVisible(false)}
              >
                <span>Close</span>
              </div>
            </div>
          </div>
        </div>
      </Dock>

      <div id="myModal" class="modal">
        <span className="close" onClick={() => CloseModel()}>
          &times;
        </span>
        <img className="modal-content" id="img01" />
      </div>
    </>
  );
}

export default Docks;
