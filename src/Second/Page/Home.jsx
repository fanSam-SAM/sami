import React, { useLayoutEffect, useState } from 'react'

function Home() {
  const [bg, setbg] = useState(null)
  const [rl, setrl] = useState(0)
  useLayoutEffect(() => { 
    let arr = [
      'https://fansam-sam-urban-space-goldfish-9797ggjxq97v2xq44-3000.preview.app.github.dev/start.jpg',
      'https://fansam-sam-urban-space-goldfish-9797ggjxq97v2xq44-3000.preview.app.github.dev/sm.jpg',
      'https://fansam-sam-urban-space-goldfish-9797ggjxq97v2xq44-3000.preview.app.github.dev/pic.jpg'
    ]
    let random = Math.floor(Math.random() * arr.length)
    setbg(arr[random])
  }, [rl])
  
  return (
    <>
        <div className="hero h-screen bg-top bg-cover" style={{backgroundImage: `url(${bg})`}}>
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Welcome to StellarSite
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
    </>
  );
}

export default Home
