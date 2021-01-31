import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import dynamic from 'next/dynamic';

const Modal = dynamic(
  () => import ('../../../components/Modal'),
  {loading: () => <p>Loading...</p>}
)



export default function Product(){
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddToCart = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  return (
    <div>
    <h1>{router.query.slug}</h1>

    <button onClick={handleAddToCart}>Add to cart</button>

    {isModalVisible && <Modal />}
    </div>
  );
}