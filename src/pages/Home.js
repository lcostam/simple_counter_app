function Home(){
    return(
        <div className="w3-container w3-content w3-center w3-padding-64" style={{maxWidth:800}} id="band">
        <h2 className="w3-wide">HOME</h2>
        <p className="w3-opacity"><i>We love React (againa)</i></p>
        <p className="w3-justify">I have a deep love for React. It's an incredible JavaScript library that makes building user interfaces a breeze. .</p>
        <div className="w3-row w3-padding-32">
          <div className="w3-third">
            <p>1</p>
            <img src="/w3images/bandmember.jpg" className="w3-round w3-margin-bottom" alt="Random Name" style={{width:60}}/>
          </div>
          <div className="w3-third">
            <p>2</p>
            <img src="/w3images/bandmember.jpg" className="w3-round w3-margin-bottom" alt="Random Name" style={{width:60}}/>
          </div>
          <div className="w3-third">
            <p>3</p>
            <img src="/w3images/bandmember.jpg" className="w3-round" alt="Random Name" style={{width:60}}/>
          </div>
        </div>
      </div>
    );
}

export default Home;