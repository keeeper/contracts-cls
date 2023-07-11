'use client';

import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import InternalLink from '@/components/InternalLink';
import getTransformedDate from '@/utils/getTransformedDate';
import getRegularFromCamelCase from '@/utils/getRegularFromCamelCase';
import DATE_TYPE_FIELDS from '@/constants/dateTypeFields';
import { apiUrl, endpoints } from '@/constants/api';

const Contract = ({params}) => {
  const [contractData, setContractData] = useState();
  const { id } = params;

  useEffect(() => {
    fetchContractById(id);
  }, [id]);
  
  const fetchContractById = async (id) => {
    try {
        const response = await fetch(`${apiUrl}/${endpoints.contracts}/${id}`);
        const data = await response.json();
        if (response.ok && data) {
          setContractData(data);
        } else {
          toast.error('No such contract found');
        }
    } catch (error) {
        toast.error('Error occurred');
        console.error('Error occurred:', error);
    } finally {
    }
  }

  return (
    <section className='container'>
      <div className='container-header'>
        <InternalLink url='/' iconName='home' classNames='px-2 py-2 border border-primary rounded-full hover:bg-primary-light transition'/>
        <div className='flex-1 ml-3'>
          <h1 className='heading'>Contract</h1>
          <p className='sub-heading'>full contract's information</p>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-6'>
        {contractData && Object.entries(contractData).map(([key, value])=> {
            if (!value || key === 'id') {
              return null;
            } else {
              const isDateField = DATE_TYPE_FIELDS.includes(key);
              return (
                <div key={key}>
                  <p className='text-text-light mb-2'>{getRegularFromCamelCase(key)}</p>
                  <p className='text-gray-dark'>{isDateField ? getTransformedDate(value) : value}</p>
                </div>
              )
            }
          }
        )}
      </div>
      <ToastContainer autoClose={3000} hideProgressBar={true} />
    </section>
  )
}

export default Contract;