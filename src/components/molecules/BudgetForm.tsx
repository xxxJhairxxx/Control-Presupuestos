/** @format */

import React, { useMemo, useState } from 'react';

const BudgetForm = () => {
	const [budget, setBudget] = useState<number>(0);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setBudget(parseInt(e.target.value));
	};

	const isValid : boolean = useMemo(() => {
		return isNaN(budget) || budget <= 0;
	}, [budget]);
	return (
		<form className='BudgetForm'>
			<div className='BudgetForm__input'>
				<label htmlFor='budget'>Definir Presupuesto</label>
				<input
					id='budget'
					type='number'
					placeholder='define tu presupuesto'
					name='budget'
					value={budget}
					onChange={handleChange}
				/>
			</div>
			<input type='submit' disabled={isValid} value='definir presupuesto' />
		</form>
	);
};

export default BudgetForm;
