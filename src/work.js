import ragtag from 'ragtag';

import {works} from './data';
import layout from './layout';

const content = ({title, year, images = []}) => ragtag`
<section>
	<dl>
		<dt>${title}</dt>
		<dd>${year}</dd>
	</dl>
</section>
<section>
	${images.map(image => ragtag`
		<figure>
			<div class="img-frame">
				<img src="/images/${image.src}" alt=${image.alt} />
			</div>
		</figure>
	`)}
</section>
`;

export default (req, res) => {
	const work = works.find(w => w.slug === req.query.slug);
	res.statusCode = work ? 200 : 404;
	res.send(layout({content: work ? content(work) : '<h2>404: Not found</h2>'}));
};
