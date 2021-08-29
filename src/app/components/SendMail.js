import React from 'react'
import './SendMail.css';
import CloseIcon from '@material-ui/icons/Close';
import {Button} from '@material-ui/core';
import {useForm} from 'react-hook-form';
import {useDispatch } from 'react-redux';
import { closeSendMessage } from '../../features/counter/mailSlice';
function SendMail() {
    const dispatch=useDispatch();
    const {register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit=(data)=>{
        console.log(data);
    }
    const onError=()=>{}
   
 
    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon onClick={()=>dispatch(closeSendMessage())} className="sendMail__close" />
            </div>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <input placeholder="To" type="text" {...register('to',{required:true})} />
                {errors.to && <p className="sendMail__error">To is Required</p>}
                <input type="text" placeholder="Subject" {...register('subject',{required:true})}/>
                {errors.subject && <p className="sendMail__error">Subject is Required</p>}
                <input name="message" type="text" placeholder="Message..." {...register('message',{required:true})} className="sendMail__message"/>
                {errors.message && <p className="sendMail__error">Message is Required</p>}
                <div className="sendMail__options"> 
                    <Button className="sendMail__send" type="submit">Send</Button>
                </div>
            </form>
        </div>
    )
} 
export default SendMail;
