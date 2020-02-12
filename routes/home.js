import homePage from '../ui/pages/home';

export default (req, res) => {
  res.send(homePage());
};
