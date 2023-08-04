import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styles from './CardList.module.scss'
import { fetchProducts } from '../../../store/products/products.slice';
import { useAppSelector } from '../../../hooks/redux';
import CardItem from './card-item/CardItem';
import CardSkeleton from '../card-skeleton/CardSkeleton';

const CardList = () => {

  const dispatch = useDispatch();
  const {products, isLoading} = useAppSelector(state => state.productsSlice)
  const category = useAppSelector(state => state.categoriesSlice)

  useEffect(() => {
    dispatch(fetchProducts(category?.toLowerCase()));
  }, [category])

  if(isLoading) return <CardSkeleton />

  return (
    <ul className={styles.card_list}>
      {products.map(product => <CardItem key={product.id} item={product} />)}
    </ul>
  )
}

export default CardList