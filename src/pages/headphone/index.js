import MyBestDealsproductx from '@/components/bestmydealsproduct'
import Goproiphonebanner from '@/components/goproiphonebanner'
import Headphoneitems from '@/components/headphoneitems'
import NavbarTypenameproducts from '@/components/NavbartypeName'
import MyProductBanners from '@/components/productsbanner'
import Topbrands from '@/components/topbrands'
import React, { useContext } from 'react'
import { CartData } from '../../../context/cart'

const Headphone = () => {
    const {Addproduct} = useContext(CartData)
  
  return (
  <>
  <MyProductBanners />
  <NavbarTypenameproducts/>
  <div className='mt-10'></div>
  <Headphoneitems/>
  <Goproiphonebanner/>
  <MyBestDealsproductx Addproduct={Addproduct}/>
  <Topbrands/>
  </>
  )
}

export default Headphone
