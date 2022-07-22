import React from 'react';
function ControlBar({clear, unicode, zawgyi}) {
    const copyToClipboard = ref => {
        console.log(ref)
        navigator.clipboard.writeText(ref)
    }
    return ( 
        <div>
            <div className='text-center'>
            <button className='btn btn-secondary m-2' onClick={clear}>Clear</button>
            <button className='btn btn-primary m-2' onClick={() => copyToClipboard(unicode)}>Copy Unicode</button>
            <button className='btn btn-primary m-2' onClick={() => copyToClipboard(zawgyi)}>Copy Zawgyi</button>
            </div>
        </div>
     );
}

export default ControlBar;