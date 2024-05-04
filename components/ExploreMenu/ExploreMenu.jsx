import React, { useContext } from 'react'
import './ExploreMenu.css'
import { StoreContext } from '../../Context/StoreContext'

const ExploreMenu = ({category,setCategory}) => {

  const {menu_list} = useContext(StoreContext);
  
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Our Products</h1>
      <p className='explore-menu-text'>Choose from a diverse Products list featuring a array of different steel products. Our mission is to satisfy your user experience in buying steel online without any broker involvement and at low cost.</p>
      <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
