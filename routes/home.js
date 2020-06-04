import home from '../ui/pages/home';

export default async (req, res) => {
  res.send(home());
};
