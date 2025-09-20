import React from 'react';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#eef2f7', minHeight: '300px' }}>
      <h2 style={{ textAlign: 'center', color: 'darkslategray' }}>Welcome to My Favorite Cities App</h2>
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginTop: '15px' }}>
        I love to visit New York, Paris, and Tokyo.
      </p>
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginTop: '10px' }}>
        These cities are full of culture, history, and unforgettable experiences.
      </p>
    </main>
  );
}

export default MainContent;
