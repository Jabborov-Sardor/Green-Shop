import React from 'react';
import Logo from"@/public/Logo.svg"
import Image from 'next/image';
import Twitter from "@/public/images/Twitter.png"

const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#f8f8f8', padding: '40px 20px' }}>
      {/* Top Section with Logo and Contact */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          borderBottom: '1px solid #ddd',
          paddingBottom: '20px',
          marginBottom: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Image src={Logo} alt="GreenShop Logo" style={{ height: '40px' }} />
        </div>
        <div style={{ fontSize: '14px', color: '#666', display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <p style={{ margin: 0 }}>70 West Buckingham Ave. Farmingdale, NY 11735</p>
          <p style={{ margin: 0 }}>contact@greenshop.com</p>
          <p style={{ margin: 0 }}>+88 01911 717 490</p>
        </div>
      </div>

      {/* Bottom Section with Links and Social Media */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: '20px',
        }}
      >
        {/* My Account */}
        <div>
          <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>My Account</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '5px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#666' }}>My Account</a>
            </li>
            <li style={{ marginBottom: '5px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#666' }}>Our Stores</a>
            </li>
            <li style={{ marginBottom: '5px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#666' }}>Contact Us</a>
            </li>
            <li style={{ marginBottom: '5px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#666' }}>Career</a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: 'none', color: '#666' }}>Specials</a>
            </li>
          </ul>
        </div>

        {/* Help & Guide */}
        <div>
          <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Help & Guide</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '5px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#666' }}>Help Center</a>
            </li>
            <li style={{ marginBottom: '5px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#666' }}>How to Buy</a>
            </li>
            <li style={{ marginBottom: '5px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#666' }}>Shipping & Delivery</a>
            </li>
            <li style={{ marginBottom: '5px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#666' }}>Product Policy</a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: 'none', color: '#666' }}>How to Return</a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 style={{ fontSize: '16px', marginBottom: '10px' }}>Categories</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ marginBottom: '5px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#666' }}>House Plants</a>
            </li>
            <li style={{ marginBottom: '5px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#666' }}>Potter Plants</a>
            </li>
            <li style={{ marginBottom: '5px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#666' }}>Seeds</a>
            </li>
            <li style={{ marginBottom: '5px' }}>
              <a href="#" style={{ textDecoration: 'none', color: '#666' }}>Small Plants</a>
            </li>
            <li>
              <a href="#" style={{ textDecoration: 'none', color: '#666' }}>Accessories</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
