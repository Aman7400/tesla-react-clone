import React from "react";
import styled from "styled-components";
import Stats from "./Stats";

const StatContainer = styled.div`
  display: flex;
  position: absolute;
  top: 80%;

  flex-direction: row;
  @media (max-width: 780px) {
    flex-wrap: wrap;
    width: 100%;
  }
`;

const StatsContainer = ({ stats }) => {
  return (
    <>
      <StatContainer>
        <Stats detail={stats.range} title={`Range (est.)`} />
        <Stats detail={stats.time} title={`0-60 mph*`} />
        <Stats detail={stats.topSpeed} title={`Top Speed (mph)`} />
        <div className="center">
          <button className="btn btn-xl btn-outline-light border border-light m-1 border-5">
            Order Now
          </button>
        </div>
      </StatContainer>
    </>
  );
};

export default StatsContainer;
