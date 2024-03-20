import React, { useEffect } from 'react';
import Inspect from './components/Inspect';

function App() {
  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        // Prevent the default behavior for Ctrl+Shift+I
        e.preventDefault();
        // Display an alert when Ctrl+Shift+I is pressed
        alert('Inspect mode is disabled. Please use the browser shortcut to open Developer Tools.');
      } else if (e.shiftKey && e.key === 'G') {
        // Display a message about the shortcut to open Developer Tools
        alert('To open Developer Tools, use the keyboard shortcut (Ctrl+Shift+I or Cmd+Opt+I on Mac) and navigate to the "Elements" tab.');
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <>
      <Inspect />
      {/* Your other components */}
    </>
  );
}

export default App;
