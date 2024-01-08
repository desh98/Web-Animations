import React from 'react'
import './Animation.css'
import sun from '../assets/sun.png'
import mercury from '../assets/mercury.png'
import venus from '../assets/venus.png'
import earth from '../assets/earth.png'
import mars from '../assets/mars.png'
import jupiter from '../assets/jupiter.png'
import saturn from '../assets/saturn.png'
import uranus from '../assets/uranus.png'
import neptune from '../assets/neptune.png'

const Animation = () => {
  return (

    <div className='flex flex-col justify-center items-center'>

        <div>
            <h1 className='text-8xl pt-[200px] px-[200px] font-extrabold font-serif text-white'>THE  SOLAR  SYSTEM</h1>
        </div>
    <div 
    style={{
        display: 'flex', 
        justifyContent: 'center', 
        alignItems:'center', 
        position:'relative',
        top:'100px',
        }}>
            
            {/* mercury */}
            <div class='maindiv1' 
                style={{
                    width:'150px', 
                    height:'150px', 
                    border:'2px solid lightblue', 
                    borderRadius:'150px', 
                    position:'absolute', 
                    marginTop:'300px'}}>
                        
                        <div className='centerdiv'>
                            <img src={mercury} />
                        </div>

            </div>

            {/* venus */}
            <div class='maindiv2' 
                style={{
                    width:'200px', 
                    height:'200px', 
                    border:'2px solid lightblue', 
                    borderRadius:'200px', 
                    position:'absolute', 
                    marginTop:'300px'}}>

                        <div className='centerdiv'>
                            <img src={venus} />
                        </div>

            </div>

            {/* earth */}
            <div class='maindiv3' 
                style={{
                    width:'300px', 
                    height:'300px', 
                    border:'2px solid lightblue', 
                    borderRadius:'300px', 
                    position:'absolute', 
                    marginTop:'300px'}}>

                        <div className='centerdiv'>
                            <img src={earth} />
                        </div>

            </div>

            {/* mars */}
            <div class='maindiv4' 
                style={{
                    width:'350px', 
                    height:'350px', 
                    border:'2px solid lightblue', 
                    borderRadius:'350px', 
                    position:'absolute', 
                    marginTop:'300px'}}>

                        <div className='centerdiv'>
                            <img src={mars} />
                        </div>
            </div>

            {/* jupiter */}
            <div class='maindiv5' 
                style={{
                    width:'400px', 
                    height:'400px', 
                    border:'2px solid lightblue', 
                    borderRadius:'400px', 
                    position:'absolute', 
                    marginTop:'300px'}}>

                        <div className='centerdiv'>
                            <img src={jupiter} />
                        </div>

            </div>

            {/* saturn */}
            <div class='maindiv6' 
                style={{
                    width:'450px', 
                    height:'450px', 
                    border:'2px solid lightblue', 
                    borderRadius:'450px', 
                    position:'absolute', 
                    marginTop:'300px'}}>

                        <div className='centerdiv w-[50px]'>
                            <img src={saturn} />
                        </div>

            </div>

            {/* uranus */}
            <div class='maindiv7' 
                style={{
                    width:'500px', 
                    height:'500px', 
                    border:'2px solid lightblue', 
                    borderRadius:'500px', 
                    position:'absolute', 
                    marginTop:'300px'}}>

                        <div className='centerdiv'>
                            <img src={uranus} />
                        </div>

            </div>

            {/* neptune */}
            <div class='maindiv8' 
                style={{
                    width:'540px', 
                    height:'540px', 
                    border:'2px solid lightblue', 
                    borderRadius:'540px', 
                    position:'absolute', 
                    marginTop:'300px'}}>

                        <div className='centerdiv'>
                            <img src={neptune} />
                        </div>

            </div>

            {/* sun */}
            <div className='sun mt-[300px]'>
                <img src={sun} style={{width: '100px'}} />
            </div>
    </div>
    </div>
  )
}

export default Animation