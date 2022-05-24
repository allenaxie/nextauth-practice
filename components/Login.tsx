import { useSession, signIn, signOut } from "next-auth/react"


const Login = () => {
    const { data: session } = useSession()
    if (session) {
        console.log(session)
      return (
        <>
          Signed in as {session?.user?.email} <br />
          <img src={session?.user?.image}/> 
          <h2>{session?.user?.name}</h2>
          <button onClick={() => signOut({
              callbackUrl: `${window.location.origin}/auth/signin`
          })}>Sign out</button>
        </>
      )
    }
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    )
}

export default Login;
