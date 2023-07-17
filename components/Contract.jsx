import InternalLink from './InternalLink';
import getTransformedDate from '@/utils/getTransformedDate';

const Contract = ({data}) => {
  const {id, firstName, lastName, status, cancelationDate} = data;
  const classNames = status === 'active' ? 'label' : 'label-warning'
  return (
    <tr data-testid='contract-short'>
      <td>{firstName} {lastName}</td>
      <td><span className={status && classNames}>{status || '---'}</span></td>
      <td>{cancelationDate && getTransformedDate(cancelationDate) || '---'}</td>
      <td className='text-right'>
        <InternalLink name='Details' url={`/contracts/${id}`} testId='contract-details-button' classNames='px-3 py-2 rounded-full text-primary bg-primary-light text-xs hover:bg-opacity-60 transition' />
      </td>
    </tr>
  )
}

export default Contract;