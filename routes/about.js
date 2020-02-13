import about from '../ui/pages/about';

export default async (req, res) => {
  res.send(about());
};
