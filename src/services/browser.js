const getVideo = (searchTerm) =>{
    return fetch (` https://www.googleapis.com/youtube/v3/search`).
    then(response =>response.json()).
    then(products  =>products);
}

export default {getVideo}