import React from 'react';
import ReactDOM from 'react-dom';

import One from './One';

function Layout() {
  return <One nameFromProps={'Saranraj'} />;
}

ReactDOM.render(<Layout />, document.getElementById('root'));
