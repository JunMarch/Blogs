export const getNews = async(keyword)=>{
  try{
    const url = `https://newsapi.org/v2/everything?q=${keyword}&apiKey=5753ef097e944840adc097c2a7e89ce2`
  const data = await fetch(url);
  const res = await data.json();
  console.log(res)
   return res.articles;
  }catch(err){
    console.error(err.message)
  }
}