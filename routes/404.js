import errorPage from '../ui/pages/error';

export default async (req, res) => {
  res.send(errorPage('Whoops... can\'t find that page.'));
};
