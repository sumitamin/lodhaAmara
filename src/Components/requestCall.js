import React from 'react';
import Axios from 'axios';
import { useForm } from "react-hook-form";

const RequestCall = ({classN}) => {

   const { register, handleSubmit } = useForm();

    const submitForm = (data) => {
        const payload = {data, timestamp: new Date()}
       Axios.post('/api/getData.py', payload, {headers:{'content-type':'application/json'}})
     }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
         <div className={classN}>
            <h4>Request Call back</h4>
            <div>
               <div className="input-label">
                  Email
               </div>
               <div>
                  <input className="input-box" type='email' name='email' ref={register} placeholder="Email" required/>
               </div>
            </div>
            <div>
               <div className="input-label">
                  Mobile
               </div>
               <div>
                  <input className="input-box" type='number' name='number' min={10} maxLength={10} placeholder="Mobile Number" ref={register} required />
               </div>
            </div>
            <div className='button-wrapper'>
               <button>
                  Get Call Now!
               </button>
            </div>
         </div>
      </form>
    )
}
export default RequestCall;