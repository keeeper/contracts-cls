'use client';

import CONTRACT_STATUSES from '@/constants/statuses';

const FormElement = ({label, type, name, value, onChangeHandler, isDisabled, isRequired, options}) => {
    const classNames = `flex w-full mb-3 ${type === 'checkbox' ? 'flex-row mb-4' : 'flex-col mb-3'}`;
    return (
        <div className={classNames}>
            {label && (<label>{label} {isRequired && '*'}</label>)}
            {type === 'select' && options ? (
                <select className='mt-2' name={name} value={value} onChange={onChangeHandler} disabled={isDisabled} required={isRequired}>
                    <option value=''>Select {name}</option>
                    {options.map((option) => (
                      <option key={option.id} value={option.id}>{option.name}</option>
                    ))}
                </select>
            ) : type === 'select' && name === 'status' ? (
                <select className='mt-2' name={name} value={value} onChange={onChangeHandler} disabled={isDisabled} required={isRequired}>
                    <option value=''>Select status</option>
                    <option value={CONTRACT_STATUSES.DRAFT}>{CONTRACT_STATUSES.DRAFT}</option>
                    <option value={CONTRACT_STATUSES.ACTIVE}>{CONTRACT_STATUSES.ACTIVE}</option>
                </select>
            ) : type === 'checkbox' ? (
                <input className='order-first flex-1 mr-2 scale-125' type={type} disabled={isDisabled} required={isRequired} name={name} value={value} onChange={onChangeHandler} />
            ) : (
                <input className='mt-2' type={type} disabled={isDisabled} required={isRequired} name={name} value={value} onChange={onChangeHandler} />
            )}
        </div>
    )
}

export default FormElement;