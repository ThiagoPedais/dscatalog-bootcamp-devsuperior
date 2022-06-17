import React from 'react';
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow.svg'
import './style.scss'


type Props = {
    text: String
}

export default function index({ text }: Props) {
    return (        
        <div className="btn-container">
            <button className="btn btn-primary btn-icon">
                <h6>{text}</h6>
            </button>
            <div className="btn-icon-content">
                <ArrowIcon />
            </div>
        </div>
    )
}
