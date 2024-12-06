import React from 'react';
import Image from 'next/image';
import Image1 from "@/public/images/Group 22.png"
import FooterLayout from '@/components/FotterLayout';

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#f8f8f8', padding: '40px 20px' }} className='container'>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
        <div>
          <Image src={Image1} alt="Logo" width={200} height={200} />
        </div>
        <div>
            <Image src={Image1} alt="Logo" width={200} height={200} />
        </div>
        <div>
            <Image src={Image1} alt="Logo" width={200} height={200} />
        </div>
        <div>
          <h3>Newsletter</h3>
          <p>Would you like to join newsletters?</p>
          <input
            type="email"
            placeholder="Enter your email..."
            style={{ padding: '10px', border: '1px solid #ccc', borderRadius: '5px', width: '100%' }}
          />
          <button
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              backgroundColor: '#28a745',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Join
          </button>
        </div>
      </div>
      <div style={{ marginTop: '20px', textAlign: 'center', color: '#666' }}>
        <p>© GreenShop. All rights reserved.</p>
      </div>
      <FooterLayout />
    </footer>
  );
};

export default Footer;
