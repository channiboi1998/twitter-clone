import React from 'react'
import Search from './search'
import Trends from './trends'
import GreyBox from './greyBox'
const Additional = () => {
    return (
        <>
            <Search />
            <GreyBox title="Trends For You" url="#">
                <Trends />
            </GreyBox>
            <GreyBox title="Who to follow" url="#">
                
            </GreyBox>
        </>
    )
}

export default Additional