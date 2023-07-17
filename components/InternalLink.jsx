import Link from 'next/link';
import Image from 'next/image';

const InternalLink = ({url, name, iconName, classNames, testId}) => {
  return (
    <Link className={classNames} href={url} data-testid={testId}>
      {iconName && <Image src={`../${iconName}.svg`} width={24} height={24} alt={`${iconName} icon`} />}
      {name && name}
    </Link>
  )
}

export default InternalLink;