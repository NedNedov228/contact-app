import React from 'react'

const AuthModal = (modalRef, handleNewContact, values, onChange,toggleModal,fileRef,setFile) => {
  return (
       <dialog ref={modalRef} className="modal" id="modal">
       <div className="modal__header">
         <h3>New Contact</h3>
         <i onClick={() => toggleModal(false)} className="bi bi-x-lg"></i>
       </div>
       <div className="divider"></div>
       <div className="modal__body">
         <form onSubmit={handleNewContact}>
           <div className="user-details">
             <div className="input-box">
               <span className="details">Name</span>
               <input type="text" value={values.name} onChange={onChange} required />
             </div>
             <div className="input-box">
               <span className="details">Email</span>
               <input type="text" value={values.email} onChange={onChange}  required />
             </div>
             <div className="input-box">
               <span className="details">Title</span>
               <input type="text" value={values.title} onChange={onChange}  required />
             </div>
             <div className="input-box">
               <span className="details">Phone Number</span>
               <input type="text" value={values.phone} onChange={onChange}  required />
             </div>
             <div className="input-box">
               <span className="details">Address</span>
               <input type="text" value={values.address} onChange={onChange}  required />
             </div>
             <div className="input-box">
               <span className="details">Account Status</span>
               <input type="text" value={values.status} onChange={onChange} required />
             </div>
             <div className="file-input">
               <span className="details">Profile Photo</span>
               <input type="file" onChange={(event) => setFile(event.target.files[0])} ref={fileRef} name='photo' required />
             </div>
           </div>
           <div className="form_footer">
             <button onClick={() => toggleModal(false)} type='button' className="btn btn-danger">Cancel</button>
             <button type='submit' className="btn">Save</button>
           </div>
         </form>
       </div>
     </dialog>
  )
}

export default AuthModal