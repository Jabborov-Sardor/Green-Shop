import React, { useState } from 'react';

const OrderConfirmationModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        onClick={toggleModal}
        style={{
          padding: '10px 20px',
          backgroundColor: '#28a745',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Show Order Confirmation
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              maxWidth: '500px',
              width: '90%',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
              textAlign: 'center',
              position: 'relative',
            }}
          >
            {/* Close Button */}
            <button
              onClick={toggleModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                background: 'none',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
              }}
            >
              &times;
            </button>

            {/* Modal Content */}
            <div>
              <img src="/icons/thank-you.png" alt="Thank You" style={{ height: '80px', marginBottom: '20px' }} />
              <h2>Your order has been received</h2>
              <p>Order Number: <strong>19586887</strong></p>
              <p>Date: <strong>15 Sep, 2021</strong></p>
              <p>Total: <strong>$2,699.00</strong></p>
              <p>Payment Method: <strong>Cash on delivery</strong></p>

              {/* Order Details */}
              <table style={{ width: '100%', marginTop: '20px', textAlign: 'left', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Products</th>
                    <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Qty</th>
                    <th style={{ padding: '8px', borderBottom: '1px solid #ddd' }}>Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: '8px' }}>Barberton Daisy</td>
                    <td style={{ padding: '8px' }}>(x 2)</td>
                    <td style={{ padding: '8px', color: 'green' }}>$238.00</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px' }}>Blushing Bromeliad</td>
                    <td style={{ padding: '8px' }}>(x 6)</td>
                    <td style={{ padding: '8px', color: 'green' }}>$834.00</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px' }}>Aluminum Plant</td>
                    <td style={{ padding: '8px' }}>(x 9)</td>
                    <td style={{ padding: '8px', color: 'green' }}>$1,611.00</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px' }} colSpan={2}>Shipping</td>
                    <td style={{ padding: '8px' }}>$16.00</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '8px' }} colSpan={2}><strong>Total</strong></td>
                    <td style={{ padding: '8px', color: 'green' }}><strong>$2,699.00</strong></td>
                  </tr>
                </tbody>
              </table>

              <p style={{ marginTop: '20px', color: '#666' }}>
                Your order is currently being processed. You will receive an order confirmation email shortly with the expected delivery date.
              </p>

              <button
                style={{
                  marginTop: '20px',
                  padding: '10px 20px',
                  backgroundColor: '#28a745',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                }}
              >
                Track your order
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderConfirmationModal;
