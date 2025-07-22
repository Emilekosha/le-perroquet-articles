import ArticleDetail from "./ArticleDetail";

export default function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded-lg transition overflow-hidden ">
      <img src={article.image} alt={article.title} className="w-full h-96 object-cover" />
      <div className="">
        <h2 className="italic text-gray-600 mb-6">{article.title}</h2>
        <p className="text-gray-600 mt-2">{article.summary}</p>
      </div>
      <ArticleDetail/>
    </div>
  );
}
