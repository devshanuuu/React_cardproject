import React from 'react'
import Cards from './components/Cards'


const App = () => {
  const jobs = [
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png.com",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn-icons-png.flaticon.com/512/0/747.png",
    companyName: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://static.vecteezy.com/system/resources/thumbnails/004/201/564/small/meta-social-network-emblem-blue-stylish-letter-m-or-mobius-band-vector.jpg/meta.com",
    companyName: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$70/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WU0Emt19dyXiCPIuhVtxIFbqx13mkj54hA&s.com",
    companyName: "Amazon",
    datePosted: "3 days ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png?quality=90&strip=all&crop=1.2535702951444%2C0%2C97.492859409711%2C100&w=2400.com",
    companyName: "Netflix",
    datePosted: "10 days ago",
    post: "UI Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hr",
    location: "Remote"
  },
  {
    brandLogo: "https://freepngimg.com/download/microsoft/28350-5-microsoft-logo-photos.png",
    companyName: "Microsoft",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hr",
    location: "Noida, India"
  }]
  
  return (
    
    <div className='Parent'>
      
      {jobs.map(function(elem){
        return <Cards company = {elem.companyName} logo = {elem.brandLogo} date = {elem.datePosted} post = {elem.post} tag1 = {elem.tag1}
        tag2 = {elem.tag2} pay = {elem.pay} location = {elem.location}/>
      })}

    </div>
  )
}

export default App