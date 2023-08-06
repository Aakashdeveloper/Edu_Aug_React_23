import React from 'react';
import { useParams, useSearchParams} from 'react-router-dom';

const PostDetails = () => {
    let params = useParams();
    let [searchParams] = useSearchParams();
    return(
        <div className="panel panel-danger">
            <div className="panel-heading">
                <h3>{params.topic} Details Page</h3>
            </div>
            <div className="panel-body">
                {params.topic} Page is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                <h3>You are on page number {searchParams.getAll('page')}</h3>
            </div>

        </div>
    )
}

export default PostDetails