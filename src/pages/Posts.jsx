import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Layout from '../components/Layout'

const Posts = () => {

  const location = useLocation()

  return (
    <div>      
      <Header/>
      <Layout/>
    </div>
  )
}


export default Posts