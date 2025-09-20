import React from 'react';

function MainContent() {
  return (
    <main style={{ padding: '20px', backgroundColor: '#eef2f7', minHeight: '300px' }}>
      <h2 style={{ textAlign: 'center', color: 'darkslategray' }}>Welcome to My Favorite Cities App</h2>
      <p style={{ fontSize: '16px', lineHeight: '1.6', marginTop: '15px' }}>
        This is where I share information about the cities I love. You’ll find details about their culture,
        history, and what makes them special.
      </p>
    </main>
  );
}

export default MainContent;
