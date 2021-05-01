import Image from 'next/image'

function getImage(path) {
  return <Image src={path} alt="me" width="64" height="64" />
}

export default getImage