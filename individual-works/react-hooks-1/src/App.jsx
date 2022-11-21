import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { useState, useEffect } from 'react';

const styles = {

  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.75)'
  },

  content: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(240, 240, 240, 0.75)'
  }
}

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function App() {

  const [modalOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='w-[80%] m-auto flex flex-col items-center gap-12 py-12 text-center'>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto quae libero amet beatae eligendi blanditiis corporis quos cupiditate, tempore ea culpa molestiae, enim eaque voluptatibus non, excepturi ipsam dicta temporibus incidunt officiis. Optio non nesciunt quam cumque quasi error facilis dolores deleniti rerum! Numquam error sint fuga nulla animi porro at ab laboriosam, dolores tempore magnam, consequuntur asperiores aliquam libero!</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque ad perspiciatis possimus libero molestias laudantium consequatur vel sequi fugiat quibusdam corrupti, nobis nisi rerum consectetur doloribus soluta accusamus veniam temporibus fugit unde debitis optio a eaque in? Dolore inventore illum necessitatibus quo excepturi cupiditate sed aperiam, eos ducimus magni praesentium.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, eum suscipit. Repudiandae porro neque, rerum dolore fugiat, sit, magnam ad hic culpa fugit iusto libero eveniet laborum eius at qui. Nihil neque est voluptatibus quaerat! Eum, repellat totam amet corporis mollitia temporibus eveniet officiis similique nulla ratione esse, porro expedita quas facilis molestias tempora, enim odit? Recusandae dolorum voluptas ab optio saepe perspiciatis quisquam dignissimos id adipisci architecto soluta, reiciendis numquam quam, totam laudantium laboriosam quia animi ipsa? Fuga earum aliquid tempore consequuntur doloremque beatae cumque error sit ullam labore.</p>
      <button className='btn' onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={styles}
        contentLabel="Example Modal"
      >
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti mollitia accusamus fugiat libero earum voluptates, excepturi iste repellendus nam iusto, harum voluptatum maxime? Reiciendis aliquam debitis eveniet, velit eos quisquam.</div>
      </Modal>
    </div>
  );
}

export default App;
