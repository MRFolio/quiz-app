import { useQuizContext } from '../context/QuizContext';

const Modal = () => {
  const { showModal, setShowModal } = useQuizContext();
  return (
    <section
      className="modal" /* className={`${showModal ? 'modal isOpen' : 'modal'}`} */
    >
      <button onClick={() => setShowModal(false)}>Close</button>
      <div className="modal-content">
        <span className="close">Hello!;</span>
        <p>Some text in the Modal..</p>
      </div>
    </section>
  );
};

export default Modal;
