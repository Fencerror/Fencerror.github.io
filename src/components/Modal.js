import React from 'react';

const Modal = ({ user, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{user.firstName} {user.lastName}</h2>
        <p>Возраст: {user.age}</p>
        <p>Адрес: {user.address.city}, {user.address.street}</p>
        <p>Рост: {user.height} см</p>
        <p>Вес: {user.weight} кг</p>
        <p>Номер телефона: {user.phone}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
};

export default Modal;
