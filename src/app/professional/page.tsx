import React from 'react';
import Image from 'next/image';

const Page = () => {
  const professionalData = [
    {
      id: 1,
      name: "watch no1",
      price: 300,
      description: "feel better",
      image: "/pro1.jpg", 
    },
    {
      id: 2,
      name: "watch no1",
      price: 500,
      description: "Stylish and looks",
      image: "/pro2.jpeg",
    },
    {
      id: 3,
      name: "jacket no1",
      price: 200,
      description: "Light and shines",
      image: "/jacket2.jpeg",
    },
    {
      id: 1,
      name: "Jeans",
      price: 300,
      description: "feel better",
      image: "/jacket3.jpeg", 
    },
    {
      id: 2,
      name: "Shoes no1",
      price: 500,
      description: "Stylish and looks",
      image: "/shoes1.jpeg",
    },
    {
      id: 3,
      name: "Shoes no1",
      price: 200,
      description: "Light and shines",
      image: "/shoes2.jpeg",
    },
  ];


  return (
    <div>
      <h1 className='fade-in'>Nice to Meet you! with <span>Imtiaz Ali.</span></h1>
      <div className="watches">
        {professionalData.map((item) => (
          <div key={item.id} className="watch-card">
            <Image src={item.image} alt={item.name} width={250} height={170} className="watch-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className='price'>${item.price}</div>
            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
