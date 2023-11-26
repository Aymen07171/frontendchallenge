import React from 'react';

export default function Bodier() {
  return (
    <div>
      <section style={{
        backgroundColor: '#dadbf1',
        backgroundImage: `
          radial-gradient(at 40% 20%, #4C5FD5 0px, transparent 50%),
          radial-gradient(at 80% 0%, hsla(189, 100%, 50%, 1) 0px, transparent 50%
        )`,
        padding: '100px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '4em', margin: '0',color:'white' }}>How can we help?</h1>
     

      <section style={{ padding: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80%', margin: 'auto' }}>
        <input type="text" placeholder="Search..." style={{ marginRight: '8px', padding: '12px', width: '70%' }} />
        <button style={{ padding: '12px' }}>
          <span role="img" aria-label="Search">
            🔍
          </span>
        </button>
      </section>
      </section>
    </div>
  );
}
