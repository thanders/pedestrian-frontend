import Image from 'next/image'

function getLargeImage(path) {
  return <Image src={path} alt="me" width="600" height="280" />
}

export default getLargeImage