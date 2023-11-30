import Layout from '@/components/Layout'
import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import ProductForm from '@/components/ProductForm'

export default function NewProduct() {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')

  const [goToProducts, setGoToProducts] = useState(false)

  async function createProduct(event) {
    event.preventDefault()
    const data = { title, description, price }
    await axios.post('/api/products', data)
    setGoToProducts(true)
  }

  if (goToProducts) {
    router.push('/products')
  }

  return (
    <Layout>
      <h1>New product</h1>
      <ProductForm />
    </Layout>
  )
}
