import React from 'react'
import { signIn } from 'next-auth/react' 

function SignIn() {
  return (<>
    <h2>로그인</h2>
    <section>
      <form 
        action={async () => {
          "use server"
          await signIn("google", {
            redirect: true,
            callbackUrl: "/",
          })
        }} method="post">
        <input type="text" />
          <button type="submit">Signin with Google</button>
      </form>
    </section>
  </>)
}

export default SignIn