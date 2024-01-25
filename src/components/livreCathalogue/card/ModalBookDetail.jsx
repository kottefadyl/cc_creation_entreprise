import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {  toast } from 'react-toastify'
import Modal from 'react-bootstrap/Modal';

function ModalBookDetail(props) {
  const [show, setShow] = useState(false);
  let localStorageCart = JSON.parse(localStorage.getItem('commande')) || []

  const uniqid = uuidv4()
  const idlivre = props.id
  const titrelivre = props.title
  const prixlivre = props.prix
  const idauteur = props.nomauteur
  const nomauteur = props.nomauteur
  const image = props.img

  const handleSubmit = (event) => {
    event.preventDefault();
    let newObj = { uniqid, idlivre, titrelivre, prixlivre, idauteur, image, nomauteur }
    localStorageCart.push(newObj)
    localStorage.setItem('commande', JSON.stringify(localStorageCart));
    console.log('localstorage', localStorageCart);
    toast.success("the book was successfully added to the cart");
  };
  return (
    <>
      <span onClick={() => setShow(true)} class="inline-block bg-gray-200 rounded-full px-2 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">details</span>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="ModalBookDetail-custom-modal-styling-title"
        className='modal-xl modal-custom'
      >
        <Modal.Header closeButton>
          <Modal.Title id="ModalBookDetail-custom-modal-styling-title">
            {props.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='sm:block flex mx-auto '>
            <div className='m-4'><img src={props.img} alt="" srcset="" className='rounded' /></div>
            <div className='text-neutral-600 w-full'>
              <h4 className='p-2 '>About : {props.title}</h4>
              <h4 className='p-2 '>author : {props.nomauteur}</h4>
              <h4 className='p-2 '>Description</h4>
              <p className='p-2  text-lg'>{props.description}</p>
              <div className='sm:block flex justify-between text-center items-center mx-20 sm:mx-1'>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-3 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span >
                    Add to Cart
                  </span>

                </button>
                <button
                  type="submit"
                  className="sm:ml-0 ml-4 mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-3 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  to rent out
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <h4> Price: <span className='font-bold'>{props.prix} $</span> </h4>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalBookDetail;