import Head from 'next/head';
import { DateTime, Duration, Interval } from 'luxon';

import Container from '../components/container';
import ExternalLink from '../components/external-link';

import readings, { Reading } from '../data/reading-list';

function getDateIntervals() {
  const startDate = DateTime.local(2020, 11);
  const dateInterval = Interval.fromDateTimes(startDate, DateTime.local());
  return dateInterval.splitBy(Duration.fromObject({ months: 1 })).reverse();
}

function dateFilter(reading: Reading, year: number, month: number) {
  const date = DateTime.fromISO(reading.date);
  return date.year === year && date.month === month;
}

const Page = () => (
  <Container>
    <Head>
      <title>Readling List · Christopher Newton</title>
    </Head>
    <h1 className="subhead">Reading List</h1>
    <p>An approximate chronology of things I've been reading.</p>

    {getDateIntervals().map(interval => {
      const date = interval.start;
      return (
        <div className="reading-group" key={`${date.year}-${date.month}`}>
          <h2 className="subhead">
            {date.monthLong} {date.year}
          </h2>
          <ul className="linklist">
            {readings
              .filter(reading => dateFilter(reading, date.year, date.month))
              .map(reading => (
                <li key={reading.href}>
                  <ExternalLink href={reading.href} title={reading.title}>
                    <em>{reading.title}</em>
                  </ExternalLink>
                  , {reading.author}
                </li>
              ))}
          </ul>
        </div>
      );
    })}
  </Container>
);

export default Page;
