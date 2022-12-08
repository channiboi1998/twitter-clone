import React from 'react'
import Search from './search/search'
import Trends from './trends/trends'
import GreyBox from './utils/greyBox/greyBox'
import FollowSuggestions from './followSuggestions/followSuggestions'
import Footer from './footer/footer'

const Additional = () => {
    return (
        <React.Fragment>
            <Search />
            <GreyBox title="Trends For You" url="#">
                <Trends />
            </GreyBox>
            <GreyBox title="Who to follow" url="#">
                <FollowSuggestions />
            </GreyBox>
            <Footer />
        </React.Fragment>
    )
}

export default Additional