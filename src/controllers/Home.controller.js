const Home = (req,res) => {
    res.render('home',{title:'Home',user:req.session.user})
}
export default Home;