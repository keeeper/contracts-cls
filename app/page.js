'use client';

import { useEffect, useState } from 'react';
import { apiUrl, endpoints } from '@/constants/api';
import InternalLink from '@/components/InternalLink';
import Contract from '@/components/Contract';

export default function Home() {
  const [contracts, setContracts] = useState();
  useEffect(() => {
    fetchContracts()
  }, []);

  const fetchContracts = async () => {
    try {
        const response = await fetch(`${apiUrl}/${endpoints.contracts}/`);
        const data = await response.json();
        if (response.ok && data) {
          setContracts(data);
        } else {
          console.error('No such contract found');
        }
    } catch (error) {
        console.error('Error occurred:', error);
    }
  }

  const onClickHandler = (id) => {
    router.push(`/contracts/${id}`)
  }

  return (
    <section className='container'>
      <div>
        <div className='container-header'>
          <div className='flex-1'>
            <h1 className='heading'>Contracts</h1>
            <p className='sub-heading'>that have been already added</p>
          </div>
          <InternalLink name='Create category' url='/create-category' classNames='button-ouline mr-2' />
          <InternalLink name='Create contract' url='/create-contract' classNames='button' />
        </div>
        <table className='w-full'>
          <tbody>
            <tr>
              <th>Author</th>
              <th>Status</th>
              <th>Expires</th>
            </tr>
            {contracts && contracts.map((contract) => (
              <Contract key={contract.id} data={contract} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
