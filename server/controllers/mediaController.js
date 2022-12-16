const axios = require('axios');

const search= async (req,res) => {
    const {title} =req.body;
      let url = `https://omdbapi.com?t=${title}&apikey=${process.env.apikey}`;
      try {
        const fetch = await axios.get(url);
        return res.json({ ok:true, media:fetch.data});
      } catch (error) {
        return res.json(error);
      }
    };
  
module.exports = { search};