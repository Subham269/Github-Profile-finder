import {useState} from 'react'

function Github()
{
    const[profile, setProfile] = useState(null);
    const[value, setValue] = useState('')

    function fetchProfile()
    {
        fetch(`https://api.github.com/users/${value}`)
        .then(res=>res.json())
        .then(data=>setProfile(data))
    }
    return (
        <div>
            <input type="text" placeholder="Enter Github Username" 
            onChange={event=>{setValue(event.target.value)
            }}
            />
            <button onClick={()=>fetchProfile()}>Search</button>
        
            {profile && (
                <div>
                    <img src={profile.avatar_url} width="100vh"/>
                    <p>{profile.name}</p>
                    <p>{profile.bio}</p>
                    <p>Repos : {profile.public_repos}</p>
                    <p>Followers : {profile.followers}</p>
                </div>
            )}
        </div>
    )
    
}

export default Github