/** @format */

import { useState } from 'react';
import Header from './components/organisms/Header';
import BudgetForm from './components/molecules/BudgetForm';

function App() {
	return (
		<>
			<Header />
			<main>
        <BudgetForm />
      </main>
		</>
	);
}

export default App;
