import React from 'react'
import Card from './Card'
import Styles from './Content.module.css'
import DataTable from './Table'
const Content = () => {
  return (
    <div className={Styles.content}>
    <div className={Styles.contentLeft}>
        <div>
            <span></span>
            <span>Dashboard</span>
        </div>
        <div>
            <span></span>
            <span>Inventory</span>
        </div>
        <div>
            <span></span>
            <span>Orders</span>
        </div>
        <div>
            <span></span>
            <span>Customers</span>
        </div>
        <div>
            <span></span>
            <span>Reports</span>
        </div>
        <div>
            <span></span>
            <span>Settings</span>
        </div>
    </div>
    <div className={Styles.contentRight}>
        <div className={Styles.headerRight}>
           <div>Overview</div>
           <div style={{backgroundColor:"brown",color:"white"}}>
            <span>+</span>
            <span>ADD NEW WINE</span>
           </div>
        </div>
        <div style={{display:"flex",justifyContent:"space-evenly"}}>
            <Card number={"239"} text={"open order"} cart={"home"}/>
            <Card number={"239"} text={"open order"} cart={"home"}/>
            <Card number={"239"} text={"open order"} cart={"home"}/>
            <Card number={"239"} text={"open order"} cart={"home"}/>
        </div>
        <DataTable/>
    </div>

    </div>
  )
}

export default Content