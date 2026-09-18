import { useParams } from 'react-router'
import appwriteService from '../appwrite/config'
import { Container, PostForm } from '../components/index'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-dom'

function EditPost(props) {
    const [post, setPost] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug)
        {
            appwriteService.getPost(slug).then((post) => {
                if(post) {
                    setPost(post);
                }
            })
        }
    },[]);
    return  post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post}></PostForm>
            </Container>
        </div>
    ) : null
    
}

export default EditPost