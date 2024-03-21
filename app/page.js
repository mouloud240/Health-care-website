import Articles from "@/Components/Articles/Articles"
import Download from "@/Components/Download/Download"
import Feedback from "@/Components/Feedback/feedback"
import Services from "@/Components/Services/services"
import Hero from "@/Components/hero/Hero"

const home = () => {
  return (
    <div>
   <Hero/>
   <Services/>
<Download/>
<Feedback/>
  <Articles/>
     </div>
  )
}

export default home