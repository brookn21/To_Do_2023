import Link from 'next/link'
import Home from './components/home/home'
import SignUp from './signup/page'

export default function HomePage(){
  return (
    // <div className="bg-blue-900 h-5">
    <div>
    <>
    {/* <Link href="/" className="flex-1 pt-36 padding-x">To-Do Tracker</Link> */}
    {true ? <Home/> : <SignUp/>}
  </>
  </div>
  )
}
