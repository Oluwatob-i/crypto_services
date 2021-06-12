import {useRouter} from 'next/router';

import {FaTwitter, FaTelegram, FaEmail, FaFacebook, FaInstagram, FaDiscord} from 'react-icons/fa';
import {AiFillMail} from 'react-icons/ai';
import Particles from 'react-tsparticles';



export default function Home() {
  const router = useRouter();

  if (typeof window !== 'undefined') {
    ['theme-color', 'msapplication-navbutton-color', 'apple-mobile-web-app-status-bar-style'].map(_=> {
      let header = document.createElement('meta');
      header.setAttribute('name',_);
      header.setAttribute('content','hsl(247, 100%, 7%)');
      document.head.append(header);
      });

  }
  return (
    <div className='home'>
    
      <div className='header'>
       { <Particles
          options={{
           
            fpsLimit: 60,
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.4,
                  size: 40,
                },
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#000",
              },
              links: {
                color: "hsl(247, 100%, 9%)",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "square",
              },
              size: {
                random: true,
                value: 5,
              },
            },
            detectRetina: true,
          }}style={{zIndex: 1,position: 'absolute'}}
       />}
        <h1 className='text'> Create Your Own Crypto</h1>
        <img className='logo' src='/logo.png'/>
        <div className='info-holder'>
              <div className='info-card'>
                  <img src='/eth.jpeg'/>
                  <p className='price'>$1000</p>
                  <h3>Basic plan</h3>
                  <li>Smart contract development</li>
                  <li>Smart contract deployment
                    <li style={{textIndent: 20}}>Ethereum Blockchain</li>
                    <li  style={{textIndent: 20}}>Polygon</li>
                    <li  style={{textIndent: 20}}>Binance Smart Chain</li>
                  
                  </li>
                  
              </div>
              <div className='info-card'>
                  <img src='/eth.jpeg'/>
                  <p className='price'>$2500</p>
                  <h3>Intermediate plan</h3>
                  <li>Basic plan</li>
                  <li>Telegram Bot</li>
                  <li>Listing on one Decentralized exchange</li>
              </div>
              <div className='info-card'>
                  <img src='/eth.jpeg'/>
                  <p className='price'>$7500</p>
                  <h3>Premium plan</h3>
                  <li>Intermediate plan</li>
                  <li style={{textWrap: 'wrap'}}>Two custom smart contract features</li>
                  <li>Listing on three Decentralized exchanges</li>
              </div>
              <div className='info-card'>
                  <img src='/eth.jpeg'/>
                  <p className='price'>$20000</p>
                  <h3>Diamond plan</h3>
                  <li>Premium plan</li>
                  <li>Decentralized app powered by the token / coin</li>
                  <li>Expert insights</li>
              </div>
        </div>
       
        
      
      </div>
      <div className='footer'>
        <AiFillMail
          onClick={()=> {
            router.push('mailto:hi@dotlabs.tech')
          }}
        />
       
        <FaTwitter
            onClick={()=> {
              window.open('https://twitter.com', 'blank_')
            }}
        />
        <FaDiscord
            target='_blank'
            onClick={()=> {
              window.open('https://discord.gg/nfDeyPYXW3', 'blank_')
            }}
        />
        <FaTelegram
            onClick={()=> {
              window.open('https://t.me/hi_dotlabs', 'blank_')
            }}
        />

        <p>powered by dotlabs</p>
      </div>
      <div className='payment-overlay' style={{display: 'none',height: document.documentElement.scrollHeight}}></div>
      <div className=''>
      </div> 
    </div>
  )
}