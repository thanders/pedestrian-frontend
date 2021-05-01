import Img from 'react-optimized-image';

function getLargeImage(path) {
  return <Img src={require(path)}/>
}

export default getLargeImage