import '../App.css'
import { HiOutlineUserGroup } from 'react-icons/hi';

const About = () => {
  return (
    <div>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-12 col-lg-6'>
            <div className='left'>
              <div className='left-title'>About <span className="text-primary">Geek</span></div>
              
              <div className='left-content'>
                <p>At Geek, we understand the power of bringing teaching and learning together in one 
                cohesive platform. We know that education is not just about imparting knowledge but also 
                about fostering growth and inspiring minds. That's why we've built an all-in-one place 
                where educators and learners can thrive together.</p>
              </div>

              <div className='card-item'>
                <div className='card-left'><i class="bi bi-mortarboard bg-primary text-light my-icon"></i></div>
                <div className='card-right'>
                  <h6>Make Education Accessible</h6>
                  <p>Unlock the world of learning with Geek. Our platform breaks barriers, 
                  making education accessible to all, regardless of time, location, or background.</p>
                </div>
              </div>
              <i class="bi bi-"></i>
              <div className='card-item'>
                <div className='card-left'><i class="bi bi-person-bounding-box bg-primary text-light my-icon"></i></div>
                <div className='card-right'>
                  <h6>Help Educators Teach Better</h6>
                  <p>Elevate your teaching game with Geek. Our innovative tools and features empower 
                  educators to create captivating lessons, engage students, and deliver impactful 
                  learning experiences.</p>
                </div>
              </div>
              <div className='card-item'>
                <div className='card-left'>
                  <div className='my-icon bg-primary text-light'>
                    <HiOutlineUserGroup />
                  </div>
                </div>
                <div className='card-right'>
                  <h6>Grow a Learning Community</h6>
                  <p>Join a thriving learning community at Geek. Connect with like-minded individuals, share 
                  knowledge, and collaborate to foster growth, inspiration, and lifelong learning.</p>
                </div>
              </div>

            </div>
          </div>
          
          
          
          
          <div className='col-12 col-lg-6'>
            <div className='right'>
              <div className='left-pic'>
                <img src='images/top-img.png' alt='top-img' className='top-pic' />
                <img src='images/bottom-img.png' alt='bottom-img' className='bottom-pic' />
              </div>
              <div className='right-pic'>
                <img src='images/right-img.png' alt='right image' className='right-pic'/>
              </div>
            </div>
          </div>          
        </div>
      </div>
    </div>
  )
}

export default About
