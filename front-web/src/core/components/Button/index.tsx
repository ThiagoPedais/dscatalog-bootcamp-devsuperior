import React from 'react';
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow.svg'
import './style.scss'


type Props = {
    text: String
}

export default function index( { text } : Props) {
    return (
        <div className="d-flex">
            <button className="btn btn-primary btn-icon">
                <h5>{text}</h5>
            </button>

            <div className="btn-icon-content">
                <ArrowIcon />
            </div>

        </div>
    )
}
