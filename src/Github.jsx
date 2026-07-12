import {useState} from 'react'

function Github()
{
    const[profile, setProfile] = useState(null);
    const[value, setValue] = useState('')
    const[loading, setLoading] = useState(false)
    const[invalid, setInvalid] = useState(false)
    function fetchProfile()
    {
        fetch(`https://api.github.com/users/${value}`)
        .then(res=>res.json())
        .then((data=>
            {
                setProfile(data)
                setLoading(false)
                if(data.message === "Not Found")
                    setInvalid(true)
                else
                    setInvalid(false)
            }))
    }
    return (
        <div className="page">
            <div id="search_bar">
                <input type="text" placeholder="Enter Github Username" 
                onChange={event=>{setValue(event.target.value)
                }}
                />
                <button onClick={()=>{fetchProfile() 
                    setLoading(true)
                }}>Search</button>
            </div>
            {invalid && (<p className="grp">User Not Found</p>)}
            {loading && (
                <p className="grp">Searching...</p>
            )}
            {!invalid && !loading && profile && (
                <div className="grp">
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