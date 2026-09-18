import blogpostLogo from '../assets/blogpost-logo.png'
function Logo({width = '100px'}) {
    
    return (
        <div>
            <img src={blogpostLogo} alt="Blog-Post" width={width} />
        </div>
    );
}

export default Logo;