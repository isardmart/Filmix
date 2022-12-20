const axios = require('axios');

const search= async (req,res) => {
    const {imdbid} =req.body;
      let url = `https://api.themoviedb.org/3/find/${imdbid}?api_key=${process.env.apikey2}&language=en-US&external_source=imdb_id`;
      try {
        const fetch = await axios.get(url);
        return res.json({ ok:true, media:fetch.data});
      } catch (error) {
        return res.json(error);
      }
    };
const trending=async(req,res)=>{
  const{media_type,time_window}=req.body;
  let url =`https://api.themoviedb.org/3/trending/${media_type}/${time_window}?api_key=${process.env.apikey2}`;
  try {
    const fetch =await axios.get(url);
    return res.json({ ok:true, media:fetch.data});
  } catch (error) {
    return res.json(error)
  }
}

  
module.exports = { search,trending};