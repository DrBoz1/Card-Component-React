import profilePic from './assets/Hesam.png';
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Hesam Zov</h2>
            <p className="card-text">I am a student at UTM. I like working out.</p>
        </div>
    );
}

export default Card