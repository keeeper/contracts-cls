'use client';

import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormElement from '@/components/FormElement';
import Button from '@/components/Button';
import InternalLink from '@/components/InternalLink';
import { apiUrl, endpoints } from '@/constants/api';
import getRegularFromCamelCase from '@/utils/getRegularFromCamelCase';

const CreateCategory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formName, setFormName] = useState('');
  const [selectedFields, setSelectedFields] = useState({
    firstName: false,
    lastName: false,
    category: false,
    status: false,
    email: false,
    startDate: false,
    cancellationDate: false
  });

  const onCheckboxChangeHandler = (e) => {
    const { name } = e.target;
    setSelectedFields({
      ...selectedFields,
      [name]: !selectedFields[name]
    })
  }

  const onInputChangeHandler = (e) => {
    const { value } = e.target;
    setFormName(value);
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const formData = {
      name: formName,
      visibleFields: Object.keys(selectedFields).filter((key) => selectedFields[key])
    }
    if (formData.visibleFields.length === 0) {
        toast.warning('Please select at least one checkbox');
      return;
    }
    setIsLoading(true);
    try {
      const response = await fetch(`${apiUrl}/${endpoints.categories}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        toast.success('Category is saved');
      } else {
        toast.error('Failed to save category');
      }
    } catch (error) {
        toast.error('Error occurred');
        console.error('Error occurred:', error);
    } finally {
        setIsLoading(false);
    }
  }

  return (
    <section className='container'>
      <div className='container-header'>
        <InternalLink url='/' iconName='home' classNames='px-2 py-2 border border-primary rounded-full hover:bg-primary-light transition'/>
        <div className='flex-1 ml-3'>
          <h1 className='heading'>Create category</h1>
          <p className='sub-heading'>that will define fields accesible to contract</p>
        </div>
      </div>
      <form onSubmit={onSubmitHandler}>
        <FormElement label='Category name' isDisabled={isLoading} type='text' isRequired onChangeHandler={onInputChangeHandler} />
        {Object.entries(selectedFields).map(([key, value])=> (
          <FormElement key={key} name={key} checked={value} isDisabled={isLoading} type='checkbox' label={getRegularFromCamelCase(key)} onChangeHandler={onCheckboxChangeHandler}/>
        ))}
        <Button isDisabled={isLoading} type='submit' name='Save' />
      </form>
      <ToastContainer autoClose={3000} hideProgressBar={true} />
    </section>
  )
}

export default CreateCategory;