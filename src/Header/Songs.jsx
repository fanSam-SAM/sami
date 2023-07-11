import React from 'react'

function Songs() {
  return (
    <div className="userparts">
    <div className="uated text-xl opacity-[.8] p-2">
        Songs
    </div> <hr className=' opacity-[.2]' />
    <div className="infouserp">
        <div className="user1 hover:scale-[.80] cursor-pointer transition-all flex items-center justify-start gap-2 p-2">
            <div className="usimg">
                <img className=' h-10 w-10 object-cover rounded-md' src="https://wallpapercave.com/wp/wp3709137.jpg" alt="" />
            </div>
            <div className="onpack">
            <div className="uname line-clamp-1 max-w-[200px]">
                Song Title
            </div>
            <div className="about line-clamp-1 max-w-[200px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam provident incidunt porro rerum voluptatibus magni possimus cum ipsum officia dolorem commodi velit minus placeat accusantium, reiciendis enim, cupiditate asperiores id.
            </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Songs
