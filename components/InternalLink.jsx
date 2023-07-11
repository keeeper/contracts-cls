import Link from 'next/link';
import Image from 'next/image';

const InternalLink = ({url, name, iconName, classNames}) => {
  return (
    <Link className={classNames} href={url}>
      {iconName && <Image src={`../${iconName}.svg`} width={24} height={24} alt={`${iconName} icon`} />}
      {name && name}
    </Link>
  )
}

export default InternalLink;