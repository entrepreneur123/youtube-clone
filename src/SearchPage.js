import React from "react";
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./ChannelRow";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>filter</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://cdn.mos.cms.futurecdn.net/RXdH62EwruknbHWZBbkHpB.jpg"
        channel="IrushaBasukala"
        verified
        subs="667k"
        noOfVideos={382}
        description="you can find awesome videos over here"
      />

      <hr />

      <VideoRow
        views="1.4M"
        subs="672k"
        description="fo you have anything to say"
        timestamp="77 second ago"
        channel="IrushaBasukala"
        title="let do it"
        image="https://cdn.mos.cms.futurecdn.net/RXdH62EwruknbHWZBbkHpB.jpg"
      />
    </div>
  );
}

export default SearchPage;
