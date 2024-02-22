import { useState } from 'react';


function Signin() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      
        <button  onClick={openModal}>Signin </button>

        {showModal && (
          <div  className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-4">Signin Form</h2>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="Email" className="input input-bordered" />
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="Password" className="input input-bordered" />
                </div>
                <div className="flex justify-end">
                  <button className="btn btn-secondary mr-2" onClick={closeModal}>Close</button>
                  <button className="btn btn-primary" onClick={closeModal}>Signin</button>
                </div>
              </div>
            </div>
          </div>
        )}
    
    </div>
  );
}

export default Signin;
