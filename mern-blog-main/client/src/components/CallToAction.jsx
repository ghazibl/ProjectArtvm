import { useEffect, useState } from 'react';
import { Button } from 'flowbite-react';

export default function CallToAction() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/api/products/')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products.map(product => (
        <div key={product._id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img className="rounded-t-lg" src={product.image} alt={product.nom} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.nom}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
            <Button href="#" gradientDuoTone='blueToBlue' rounded outline>Read more</Button>
          </div>
        </div>
      ))}
    </div>
  );
}
