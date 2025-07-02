import Markdown from '@/app/components/Markdown/Markdown';

const markdownTest = `~~Hello!!~~ [Test Link1!](https://www.google.com)`;

export default function OldPortfolios() {
  return (
    <section className="container cont-cust">
      <div className="card-header">
        <h1 className="text-center border-top border-secondary text-white">Old Portfolios</h1>
      </div>
      <p className="p-2 mt-4 p-about">

      </p>
      <Markdown markdownData={markdownTest} />

    </section>
  )
}
