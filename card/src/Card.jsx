import profilePic from './assets/Tamer.jpg'

function Card()
{
    
    return(
        <div className = "card">

            <img className="card-image" src={profilePic}  alt="Image didnt load"></img>
            <h2 className="card-title">This is Practise for me</h2>
            <p className="card-text">I have a job interview at Rafael on Tuseday at 14:00 I'm really excited and this site is for practise because i really really want this job!</p>
            
        </div>
    );
}

export default Card