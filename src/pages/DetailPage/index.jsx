import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchProduct } from '../../store/products/product.slice';

const DetailPage = () => {

  const { id } = useParams();
  const productId = Number(id);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchProduct(productId))
  }, [])

  return (
    <div>DetailPage</div>
  )
}

export default DetailPage