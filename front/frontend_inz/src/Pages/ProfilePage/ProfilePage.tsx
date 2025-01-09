import { useAuth } from "../../Context/useAuth"

function ProfilePage()
{
    const {user} = useAuth()
    return <p>Profil użytkownika {user?.userName}</p>
}
export default ProfilePage