import React, { Component } from 'react';
import axios from 'axios'
import { render } from '@testing-library/react';

class StoreInfos extends Component{
    constructor(props){
        super(props);
        this.state = {
            stores: []
        }
    }

    componentDidMount = () => {
        this.getStore();
    }

    getStore = () => {
        axios.get("https://www.cheapshark.com/api/1.0/stores")
            .then(res => res.data)
            .then(data => {
                const stores = data;
                this.setState({stores})
            })
    }
    render(){
        const { stores } = this.state
        const { storeID } = this.props
        const currentStore = stores.filter(store => store.storeID === storeID)
        const storeName = currentStore.map(store => store.storeName)
        const storeIcon = currentStore.map(store => store.images.icon)
    return(
        <p className='available-store'>
            Available on 
            <img src={`https://www.cheapshark.com${storeIcon}`}/>
            {storeName} 
        </p>
    )
    }
}

export default StoreInfos