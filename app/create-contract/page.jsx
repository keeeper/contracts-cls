'use client';

import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormElement from '@/components/FormElement';
import InternalLink from '@/components/InternalLink';
import Button from '@/components/Button';
import getInputType from '@/utils/getInputType';
import getRegularFromCamelCase from '@/utils/getRegularFromCamelCase';
import { apiUrl, endpoints } from '@/constants/api';

const CreateContract = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(()=>{
    getCatgories();
  }, []);

  const restForm = () => {
    setFormData({});
  }

  const getCatgories = async () => {
    try {
      const response = await fetch(`${apiUrl}/${endpoints.categories}`);
      const data = await response.json();
      if (response.ok) {
        setCategories(data);
      } else {
        toast.error('Failed to load categories');
      }
    } catch (error) {
        toast.error('Error occurred');
        console.error('Error occurred:', error);
    } finally {
        setIsLoading(false);
    }
  }

  const onSelectChangeHandler = (e) => {
    const currentCategory = categories.find(item => item.id === Number(e.target.value));
    setCurrentCategory(currentCategory);
    restForm();
  }

  const onInputChangeHandler = (e) => {
    const { value, name } = e.target;
    
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const preparedFormData = {
      ...formData,
    }
    
    if (formData.startDate) preparedFormData.startDate = new Date(formData.startDate).toISOString();
    if (formData.cancellationDate) preparedFormData.cancelationDate = new Date(formData.cancellationDate).toISOString();
    preparedFormData.category = currentCategory.id;
    setIsLoading(true);
    try {
      const response = await fetch(`${apiUrl}/${endpoints.contracts}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(preparedFormData),
      });
      if (response.ok) {
          toast.success('Contract is saved');
          restForm();
      } else {
          toast.error('Failed to save contract');
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
            <h1 className='heading'>Create contract</h1>
            <p className='sub-heading'>using predifined templates (categories)</p>
          </div>
        </div>
        {categories && (
          <FormElement isDisabled={isLoading} type='select' name='category' onChangeHandler={onSelectChangeHandler} options={categories} />
        )}
        <form onSubmit={onSubmitHandler}>
          <div className='grid grid-cols-2 gap-x-4 gap-y-2 mb-2'>
            {currentCategory && currentCategory.visibleFields.map((field) => {
                if (field === 'category') {
                  return (
                    <FormElement 
                      key={field} 
                      isDisabled={isLoading}
                      value={currentCategory.name || ''} 
                      type={getInputType(field)} 
                      isRequired 
                      label={getRegularFromCamelCase(field)} 
                      name={field}
                    />
                  )
                } else {
                  return (
                    <FormElement 
                      key={field} 
                      isDisabled={isLoading} 
                      value={formData[field] || ''} 
                      type={getInputType(field)} 
                      isRequired 
                      label={getRegularFromCamelCase(field)} 
                      name={field} 
                      onChangeHandler={onInputChangeHandler} 
                    />
                  )
                }
            })}
            </div>
          <Button isDisabled={!currentCategory || isLoading} type='submit' name='Save' />
        </form>
        <ToastContainer autoClose={3000} hideProgressBar={true} />
      </section>
  )
}

export default CreateContract;