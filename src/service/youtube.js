class Youtube {
    constructor(httpClient){
        this.Youtube = httpClient;
    }
    
    async playList(){
        const response = await this.Youtube.get('playlistItems',{
            params:{
                part: 'snippet',
                playlistId: 'PLr8w4FCviQu09tg2mHjTP0FYEobSXF7X9',
                maxResults: 15,
            }
        });

        return response.data.items;
    }
    
    async search(query){
        const response = await this.Youtube.get('videos',{
            params:{
                part: 'snippet',
                maxResults: 25,
                type:'video',
                q: query,
            }
        });
        return response.data.items.map(item=>({...item, id: item.id.videoId}));
    }
}

export default Youtube; 