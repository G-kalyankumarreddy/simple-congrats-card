const element = (<div className="bg-container">
    <h1 className="title"> Congratulations </h1>
    <div className="card-container">
        <img 
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image-styling"/>
        <h1 class="profile-name"> Kiran V</h1>
        <p class="description">Vishnu Institute of Computer and Technology, Bhimavaram</p>
        <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png" className="image-styling" />
    </div>
</div>;)

ReactDOM.render(element, document.getElementById("root"));
