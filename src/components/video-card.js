
const VideoCard = ({width,id,title,creator,views}) => {
    return(
        <div className={`card-container flex flex-column gap-m ${width}`}>
            <div class="img-container badge">
            <img src="https://images.unsplash.com/photo-1643313947128-849e4da4fd5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2142&q=80"/>
            <span class="badge-icon">New</span>
            </div>

            <div class="card-header">
                <h4>{title}</h4>
                <p class="card-subtitle m1">{creator}</p>
            </div>
            
            <div class="card-body">
                <p class="card-subtext">{views} Views | 6 Hours Ago</p>
            </div>

            <div class="card-footer">
                <button class="btn btn-error full-width">Watch Now</button>
            </div>
        </div>
    )
}

export default VideoCard