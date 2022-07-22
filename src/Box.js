import React, {useState} from 'react';
import './Box.css'
import ControlBar from './ControlBar';
import {zg2uni, uni2zg} from './Converter'
function Box() {
    const [unicode, setUnicode] = useState('')
    const [zawgyi, setZawgyi] = useState('')
    const uniChange = (e) => {
        setUnicode(e.target.value)
        setZawgyi(uni2zg(e.target.value))
    }
    const zgChange = (e) => {
        setZawgyi(zg2uni(e.target.value))
        setUnicode(e.target.value)
    }
    const  clearText = () => {
        setUnicode('')
        setZawgyi('')
    }
    return (
        <div>
            <div className='row box' >
                <div className='col-12 col-md-6'>
                    <p>Unicode</p>
                    <textarea className='unicode' onChange={uniChange} value={unicode}></textarea>
                </div>
                <div className='col-12 col-md-6'>
                    <p>Zawgyicode</p>
                    <textarea className='zawgyi' onChange={zgChange} value={zawgyi}></textarea>
                </div>

            </div>
            <ControlBar clear={clearText} unicode={unicode} zawgyi={zawgyi}></ControlBar>
        </div>
      );
}

export default Box;