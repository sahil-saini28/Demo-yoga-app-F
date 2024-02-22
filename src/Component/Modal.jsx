function Modal() {
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn bg-sky-400 text-2xl "
        onClick={() => document.getElementById("my_modal_2").showModal()}
      >
        Explore
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Explore</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
          
        </div>







        
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default Modal;
