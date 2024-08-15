import React from 'react';
import "./Modal.css"

const Modal = ({ title, img, year, onClose, plot, released, genre, direc, rating }) => {
  return (
    <div className='main-box'>
      {/* <div className="modal-overlay"></div> */}
      <div className="left-box">
        <img src={img} alt={title} className='modal-img' />
      </div>
      <div className="right-box">
        <h2 className='title'>{title}</h2>
        <p className='genre'>Genre-{genre}</p>
        <p>Directed By- {direc}</p>
        <p className='released'>{released}</p>
        <p className='plot'>{plot}</p>
        <p>IMDB Rating-{rating}</p>
        <button onClick={onClose} className='modal-btn'>Close</button>
      </div>

    </div>
  );
};

export default Modal;