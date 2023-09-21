
const NewsData = () => {

    const newsUrl = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a27b9b10f35d4cdb9d6bd1d55bb69d9c`

    const fetchData = async () => {
        let response = await fetch(newsUrl)
        const data = await response.json()
        console.log(data.articles[0]);
    }
    fetchData()


    return (
        <>NewsData</>
    )
}

export default NewsData