import React from 'react';
import Toast from 'react-bootstrap/Toast';
import { BsFillCartCheckFill } from "react-icons/bs";

function CartToast({ setShowToast }) {

    return (
        <div class="toast-container position-fixed bottom-0 end-0 p-3" style={{ width: '100%', marginBottom: '1rem' }}>
            <Toast
                onClose={() => setShowToast(false)} // Close the toast when the close button is clicked
                show={true} // Always show the toast when rendered
                delay={2000} // Autohide after 3 seconds
                autohide
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    zIndex: 9999 // Ensure toast appears above other content
                }}
            >
                <Toast.Body style={{ backgroundColor: 'rgb(0, 115, 121)', color: 'white' }}><BsFillCartCheckFill className='' /> Item added to cart!</Toast.Body>
            </Toast>
        </div>
    );
}

export default CartToast;
