import React from 'react'
import { NFT__DATA } from '../../config/NFT-data'
import TrendingNFT from '../../component/trendingNFT'

function NftCollection(){
    const [nftData ,setNftData] = React.useState(NFT__DATA);

    const handleSort = (e)=>{
        const filterValue = e.target.value;
        console.log(filterValue);

        if(filterValue === 'high'){
         const filterData =   NFT__DATA.filter(item => item.currentBid >= 6)

         setNftData(filterData);
        }

        if(filterValue === 'mid'){
            const filterData =   NFT__DATA.filter(item => item.currentBid < 6 && item.currentBid >= 5 )
   
            setNftData(filterData);
           }

           if(filterValue === 'low'){
            const filterData =   NFT__DATA.filter(item => item.currentBid < 5 )
   
            setNftData(filterData);
           }
    }
   
    return (
        <>
            <div className='market-heading'>
                <h1>MarketPlace</h1>
            </div>

            <div className='nft-collection'>
                <div className='selectors'>
                    <select name="" id="categories" className='select'>
                        <option value="all-categories">All  Categories</option>
                        <option value="art">Art</option>
                        <option value="nature">Nature</option>
                        <option value="virtual-world">Virtual World</option>
                        <option value="trending">Trending Cards</option>
                    </select>
                    <select name="" id="sort-selector" className='select' onChange={handleSort}>
                        <option value="sort">Sort By</option>
                        <option value="high">High Rate</option>
                        <option value="low">Low Rate</option>
                        <option value="mid">Mid Rate</option>
                    </select>
                </div>
                <div className='nft-cards' >
                    {

                        nftData.map(item =>
                            <TrendingNFT key={item.id} item={item} />
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default NftCollection
