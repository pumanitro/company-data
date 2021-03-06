import CONSTS from './consts';
import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 80;

app.use(cors());

app.get('/', (req, res) => res.send('We keep here all our up to date company data'));

app.get('/redirection-data', (req, res) => res.json({
    companyName: CONSTS.URL_DATA.COMPANY_NAME,
    href: CONSTS.URL_DATA.HREF,
}));

app.listen(port, () => console.log(`Company-data app listening on port ${port}!`));
