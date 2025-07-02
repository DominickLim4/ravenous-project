import React from 'react'
import styles from './Business.module.css'

// Dados hardcoded temporários
const sampleBusiness = {
  imageSrc: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300',
  name: 'Dominicos Italian Bistro',
  address: 'Rua Altair 77',
  city: 'São Luís',
  state: 'Maranhão',
  zipCode: '65070-000',
  category: 'Italian',
  rating: 4.9,
  reviewCount: 923
};

const Business = ({ business = sampleBusiness }) => {
  return (
    <div className={styles.business}>
      {/* Container da Imagem */}
      <div className={styles.imageContainer}>
        <img 
          src={business.imageSrc} 
          alt={business.name} 
          className={styles.image}
        />
      </div>
      
      {/* Informações do Restaurante */}
      <div className={styles.information}>
        {/* Nome */}
        <h2 className={styles.name}>{business.name}</h2>
        
        {/* Endereço */}
        <div className={styles.address}>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{`${business.state} ${business.zipCode}`}</p>
        </div>
        
        {/* Categoria e Avaliações */}
        <div className={styles.reviews}>
          <h3 className={styles.category}>{business.category}</h3>
          
          <div className={styles.rating}>
            <p className={styles.stars}>
              {'★'.repeat(Math.floor(business.rating))}
              {business.rating % 1 !== 0 ? '☆' : ''}
            </p>
            <p className={styles.reviewCount}>{business.reviewCount} reviews</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Business